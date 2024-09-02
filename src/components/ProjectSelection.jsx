import { CreateSmallCard } from './CreateSmallCard.jsx';
import { useData } from '../context/DataContext.jsx';

// Get all projects and create a card for each of them
export function ProjectSelection() {
  const { selectedProjects } = useData();

  return (
    <>
      <h3>Project selection</h3>
      {selectedProjects.map((project) => (
        <CreateSmallCard key={project.id} value={project} />
      ))}
    </>
  );
}
