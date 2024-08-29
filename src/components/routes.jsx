import App from './App';
import Home from './pages/HomePage';
import Projects from './pages/ProjectsPage';
import About from './pages/AboutPage';
import Errorpage from './pages/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
    ],
  },
];

export default routes;
