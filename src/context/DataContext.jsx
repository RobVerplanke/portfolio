/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from 'react';
import getAllProjectsData from '../data/getAllProjects.js';
import getSelectedProjectsData from '../data/getSelectedProjects.js';

const DataContext = createContext();

// Provide project data to components that need to display project cards
export function DataProvider({ children }) {
  const [activePage, setActivePage] = useState({ title: 'home' });
  const [allProjects, setAllProjects] = useState(getAllProjectsData());
  const [selectedProjects, setSelectedProjects] = useState(
    getSelectedProjectsData()
  );

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
