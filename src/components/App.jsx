import { EmptySidebar } from './pages/EmptySidebar.jsx';
import { Outlet } from 'react-router-dom';
import Header from './header/Header.jsx';
import { DataProvider } from '../context/DataContext';

function App() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        <EmptySidebar />
        <DataProvider>
          <Outlet />
        </DataProvider>
        <EmptySidebar />
      </div>
    </div>
  );
}

export default App;
