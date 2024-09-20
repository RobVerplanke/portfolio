import { ProjectCardSmall } from './ProjectCardSmall.jsx';
import { useData } from '../../context/DataContext.jsx';

import '../../styles/ProjectSelection.css';

// Get selection of projects and create a card for each of them
export function ProjectSelection() {
  const { selectedProjects } = useData();

  return (
    <>
      <h2>Project selection</h2>
      <section className="project-selection-holder">
        {selectedProjects.map((project) => (
          <ProjectCardSmall key={project.id} value={project} />
        ))}
      </section>
    </>
  );
}
