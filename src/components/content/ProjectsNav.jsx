import { useData } from '../../context/DataContext.jsx';
import { ProjectCardLarge } from '../content/ProjectCardLarge.jsx';
import { useCallback, useState } from 'react';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

import '../../styles/ProjectsNav.css';

export default function ProjectsNav() {
  const { allProjects } = useData();
  const [openProjectId, setOpenProjectId] = useState([]);

  // Keep track of open/close cards (without useState) to decide which butttons (open all/close all) to render
  const allProjectsOpen = openProjectId.length >= allProjects.length;

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

  // Close all cards when there are open cards
  const closeAllProjects = useCallback(() => {
    if (openProjectId.length) {
      setOpenProjectId([]); // Close all cards
      return;
    }
  }, [openProjectId]);

  return (
    <main>
      {/* Display buttons that opens or closes all cards at once */}
      <div className="top-options">
        <div
          className="top-options__buttons"
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

      {/* Accordion navigation menu */}
      <div className="menu-container">
        {allProjects.map((project) => (
          <div
            className={`menu-container__item ${
              openProjectId.includes(project.id) ? 'open' : ''
            }`}
            aria-label={`Open project: ${project.title}`}
            key={project.id}
          >
            {/* For each project, display the title and the corresponding card beneath it */}
            <div
              className="menu-container__item__title-container"
              role="button"
              tabIndex="0"
              onClick={() => toggleProject(project.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  toggleProject(project.id);
                }
              }}
            >
              <div
                className={`menu-container__item__title-container__title ${
                  openProjectId.includes(project.id) ? 'open' : ''
                }`}
              >
                <h3>{project.title}</h3>
              </div>
              {/* Display arrow up if cards is opened, Display arrow down if card is closed */}
              <div
                className={`menu-container__item__title-container__arrow ${
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
            <div className="menu-container__item__card">
              <ProjectCardLarge
                key={project.id}
                isOpen={openProjectId.includes(project.id)}
                value={project}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Add a Back-to-top link at the bottom */}
      <div className="bottom-options">
        {openProjectId.length ? (
          <>
            <div className="bottom-options__buttons">
              <ArrowRightOutlinedIcon />
              <a href="#">Back to top</a>
            </div>
            <div
              // Add a Close-all link at the bottom aswell when at least one card is open
              className="top-options__buttons"
              aria-label="Close all cards"
              role="button"
              tabIndex="0"
              onClick={closeAllProjects}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  closeAllProjects();
                }
              }}
            >
              <>
                <span>Close all&nbsp;</span>
                <ArrowDropUpOutlinedIcon className="icon-nav-item" />
              </>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </main>
  );
}
