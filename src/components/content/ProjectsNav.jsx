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
      <div className="toggle-all-projects-button">
        <div
          aria-label="Close all cards"
          role="button"
          tabIndex="0"
          onClick={selectAllProjects}
          onKeyDown={(e) => {
            if (e.key === 'Enter') selectAllProjects();
          }}
          className="collapse-nav"
        >
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
      </div>
      <div className="projects-card-holder">
        {allProjects.map((project) => (
          <div
            aria-label={`Open project: ${project.title}`}
            role="button"
            tabIndex="0"
            key={project.id}
            className={`project-item ${
              openProjectId.includes(project.id) ? 'open' : ''
            }`}
            onClick={() => toggleProject(project.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                toggleProject(project.id);
              }
            }}
          >
            <h2>{project.title}</h2>
            <div className="project-big-card">
              <ProjectCardLarge
                key={project.id}
                isOpen={openProjectId.includes(project.id)}
                value={project}
              />
            </div>
          </div>
        ))}
      </div>
      {allProjectsOpen && ( // Extra 'close all' button at the bottom, only if all cards are open
        <div className="toggle-all-projects-button">
          <div
            aria-label="Close all cards"
            role="button"
            tabIndex="0"
            onClick={selectAllProjects}
            className="collapse-nav"
          >
            <>
              <span>Close all&nbsp;</span>
              <span>
                <ArrowCircleUpIcon />
              </span>
            </>
          </div>
        </div>
      )}
    </main>
  );
}
