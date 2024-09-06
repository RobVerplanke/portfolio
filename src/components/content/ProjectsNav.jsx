import { useData } from '../../context/DataContext.jsx';
import { ProjectCardLarge } from '../content/ProjectCardLarge.jsx';
import { useState } from 'react';
import '../../styles/ProjectsNav.css';

export default function ProjectsNav() {
  const { allProjects } = useData();
  const [openProjectId, setOpenProjectId] = useState([]);

  function toggleProject(id) {
    setOpenProjectId((prevVal) => {
      if (prevVal.includes(id)) {
        return prevVal.filter((projectId) => projectId !== id);
      } else {
        return [...prevVal, id];
      }
    });
  }

  return (
    <main>
      <div className="projects-card-holder">
        {allProjects.map((project) => (
          <div key={project.id} className="project-item">
            <h2 onClick={() => toggleProject(project.id)}>{project.title}</h2>
            {openProjectId.includes(project.id) && (
              <div className="project-big-card">
                <ProjectCardLarge key={project.id} value={project} />
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
