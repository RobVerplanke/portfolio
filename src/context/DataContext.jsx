/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from 'react';
import getAllProjectsData from '../data/getAllProjects.js';

const DataContext = createContext();
const projectsList = getAllProjectsData();
const projectSelection = projectsList.filter(
  (project) => project.selected === true
);

console.log('projectsList: ', projectsList);
console.log('projectSelection: ', projectSelection);

// Provide project data to components that need to display data
export function DataProvider({ children }) {
  const [activePage, setActivePage] = useState({ title: 'home' });
  const [allProjects, setAllProjects] = useState(projectsList);
  const [selectedProjects, setSelectedProjects] = useState(projectSelection);

  return (
    <DataContext.Provider
      value={{ activePage, setActivePage, selectedProjects, allProjects }}
    >
      {children}
    </DataContext.Provider>
  );
}

// Used for easy acces to the data
export function useData() {
  return useContext(DataContext);
}
