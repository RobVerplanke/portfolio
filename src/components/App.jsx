import { Outlet } from 'react-router-dom';
import Header from './Header';
import { DataProvider } from '../context/DataContext';

function App() {
  return (
    <div className="page-container">
      <Header />
      <DataProvider>
        <Outlet />
      </DataProvider>
    </div>
  );
}

export default App;
