import { CreateSmallCard } from './CreateSmallCard';
import { projects } from '../data/projects.js';

const FIRST_PROJECT_ID = 1;
const SECOND_PROJECT_ID = 2;

export function ProjectSelection() {
  return (
    <>
      <h3>Project selection</h3>
      <CreateSmallCard
        value={projects.find((project) => project.id === FIRST_PROJECT_ID)}
      />
      <CreateSmallCard
        value={projects.find((project) => project.id === SECOND_PROJECT_ID)}
      />
      <CreateSmallCard
        value={projects.find((project) => project.id === FIRST_PROJECT_ID)}
      />
    </>
  );
}
