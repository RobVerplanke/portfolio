import App from './App';
import Home from './pages/HomePage';
import Projects from './pages/ProjectsPage';
import About from './pages/AboutPage';
import Contact from './pages/ContectPage';
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
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
];

export default routes;
