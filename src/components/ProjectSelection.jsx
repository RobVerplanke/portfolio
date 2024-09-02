import { CreateSmallCard } from './CreateSmallCard';
import { projects } from '../data/projects.js';

const SELECTED_PROJECT_ID = 1;

export function ProjectSelection() {
  return (
    <>
      <h3>Project selection</h3>
      <CreateSmallCard
        value={projects.find((project) => project.id === SELECTED_PROJECT_ID)}
      />
      <CreateSmallCard
        value={projects.find((project) => project.id === SELECTED_PROJECT_ID)}
      />
      <CreateSmallCard
        value={projects.find((project) => project.id === SELECTED_PROJECT_ID)}
      />
    </>
  );
}
