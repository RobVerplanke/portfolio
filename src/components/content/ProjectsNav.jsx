import { useData } from '../../context/DataContext.jsx';
import { ProjectCardLarge } from '../content/ProjectCardLarge.jsx';
import { useCallback, useState } from 'react';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';

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

  // Keep track of open/close cards (without useState) to decide which butttons (open all/close all) to render
  const allProjectsOpen = openProjectId.length >= allProjects.length;

  return (
    <main>
      <div className="toggle-all-projects-button">
        {/* Display a button that opens or closes al cards */}
        <div
          className="collapse-nav"
          aria-label="Close all cards"
          role="button"
          tabIndex="0"
          onClick={selectAllProjects}
          onKeyDown={(e) => {
            if (e.key === 'Enter') selectAllProjects();
          }}
        >
          {allProjectsOpen ? ( // All cards are open, display arrow up
            <>
              <span>Close all&nbsp;</span>
              <ArrowDropUpOutlinedIcon className="icon-nav-item" />
            </>
          ) : (
            // All cards are closed, display arrow down
            <>
              <span>Open all&nbsp;</span>
              <ArrowDropDownOutlinedIcon className="icon-nav-item" />
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
          >
            {/* For each project, display the title and the corresponding card beneath it */}
            <div
              onClick={() => toggleProject(project.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  toggleProject(project.id);
                }
              }}
              className="title-container"
            >
              <div
                className={`title-large-card ${
                  openProjectId.includes(project.id) ? 'open' : ''
                }`}
              >
                <h3>{project.title}</h3>
              </div>
              {/* Display arrow up if cards is opened, Display arrow down if card is closed */}
              <div
                className={`arrow-large-card ${
                  openProjectId.includes(project.id) ? 'open' : ''
                }`}
              >
                {openProjectId.includes(project.id) ? (
                  <ArrowDropUpOutlinedIcon />
                ) : (
                  <ArrowDropDownOutlinedIcon />
                )}
              </div>
            </div>
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
      {/* Extra 'close all' button at the bottom when all cards are open */}
      {allProjectsOpen && (
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
              <ArrowDropUpOutlinedIcon className="icon-nav-item" />
            </>
          </div>
        </div>
      )}
    </main>
  );
}
