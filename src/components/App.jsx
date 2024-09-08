import { Outlet } from 'react-router-dom';
import Header from './header/Header.jsx';
import { EmptySidebar } from './pages/EmptySidebar.jsx';
import { DataProvider } from '../context/DataContext.jsx';

function App() {
  return (
    <div className="page-container">
      <DataProvider>
        <Header />
        <div className="content-wrapper">
          <EmptySidebar />
          <Outlet />
          <EmptySidebar />
        </div>
      </DataProvider>
    </div>
  );
}

export default App;
