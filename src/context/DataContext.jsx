/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from 'react';
import getAllProjects from '../data/projects.js';

const DataContext = createContext();

export function DataProvider({ children }) {
  // Provide projects to components that need to render 'Project selection' content
  const [selectedProjects, selsectedPprojects] = useState(getAllProjects());

  return (
    <DataContext.Provider value={{ selectedProjects }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
