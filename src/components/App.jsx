import { MainSidebar } from './MainSidebar.jsx';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { DataProvider } from '../context/DataContext';

function App() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        <MainSidebar />
        <DataProvider>
          <Outlet />
        </DataProvider>
        <MainSidebar />
      </div>
    </div>
  );
}

export default App;
