/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [projects, setProjects] = useState([]);

  // Fetch data
  useEffect(() => {
    setProjects({
      id: 1,
      title: 'Shopping cart project',
      image: 'thumbnail.jpg',
      description: 'A mock webshop',
      livePreviewLink: 'www.live-link.nl',
      ViewCodeLink: 'www.code-link',
    });
  }, []);

  return (
    <DataContext.Provider value={{ projects }}>{children}</DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
