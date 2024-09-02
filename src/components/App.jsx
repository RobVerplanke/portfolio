import { MainSidebar } from './pages/EmptySidebar.jsx';
import { Outlet } from 'react-router-dom';
import Header from './header/Header.jsx';
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
