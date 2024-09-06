import { useData } from '../../context/DataContext.jsx';
import { ProjectCardLarge } from '../content/ProjectCardLarge.jsx';
import { useCallback, useState } from 'react';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import '../../styles/ProjectsNav.css';

export default function ProjectsNav() {
  const { allProjects } = useData();
  const [openProjectId, setOpenProjectId] = useState([]);

  // Toggle between open or closing the item card
  const toggleProject = useCallback((id) => {
    setOpenProjectId((prevVal) => {
      if (prevVal.includes(id)) {
        return prevVal.filter((projectId) => projectId !== id); // Close card
      } else {
        return [...prevVal, id]; // Open Card
      }
    });
  }, []);

  // Open all cards when there are still closed cards, or close all cards when all cards are open
  const selectAllProjects = useCallback(() => {
    if (openProjectId.length >= allProjects.length) {
      setOpenProjectId([]); // Close all cards
      return;
    } else {
      const allIds = allProjects.map((project) => project.id);
      setOpenProjectId(allIds); // Open all cards
    }
  }, [allProjects, openProjectId]);

  // Keep track of open/close state (without useState) of all cards to decide which nav butttons (open/close all) to render
  const allProjectsOpen = openProjectId.length >= allProjects.length;

  return (
    <main>
      <div onClick={selectAllProjects} className="collapse-nav">
        {allProjectsOpen ? ( // All cards are open
          <>
            <span>Close all&nbsp;</span>
            <span>
              <ArrowCircleUpIcon />
            </span>
          </>
        ) : (
          // All cards are closed
          <>
            <span>Open all&nbsp;</span>
            <span>
              <ArrowCircleDownIcon />
            </span>
          </>
        )}
      </div>
      <div className="projects-card-holder">
        {allProjects.map((project) => (
          <div
            key={project.id}
            className={`project-item ${
              openProjectId.includes(project.id) ? 'open' : ''
            }`}
            onClick={() => toggleProject(project.id)}
          >
            <h2>{project.title}</h2>
            <div className="project-big-card">
              <ProjectCardLarge key={project.id} value={project} />
            </div>
          </div>
        ))}
      </div>
      <div onClick={selectAllProjects} className="collapse-nav">
        {allProjectsOpen && ( // Extra 'close all' button at the bottom, only if all cards are open
          <>
            <span>Close all&nbsp;</span>
            <span>
              <ArrowCircleUpIcon />
            </span>
          </>
        )}
      </div>
    </main>
  );
}
