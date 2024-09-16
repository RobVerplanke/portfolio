import { Profiler } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header.jsx';
import { EmptySidebar } from './pages/EmptySidebar.jsx';
import { DataProvider } from '../context/DataContext.jsx';

// Measure rendering performance
function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  console.log(
    'Profiler data: ',
    'id: ',
    id,
    'phase: ',
    phase,
    'actualDuration: ',
    actualDuration,
    'baseDuration: ',
    baseDuration,
    'startTime: ',
    startTime,
    'commitTime: ',
    commitTime
  );
}

function App() {
  return (
    <div className="page-container">
      <DataProvider>
        <Header />
        <div className="content-wrapper">
          <EmptySidebar />
          <Profiler id="Outlet" onRender={onRender}>
            <Outlet />
          </Profiler>
          <EmptySidebar />
        </div>
      </DataProvider>
    </div>
  );
}

export default App;
