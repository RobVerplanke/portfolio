import App from './App';
import Home from './pages/HomePage';
import Projects from './pages/ProjectsPage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import Errorpage from './pages/ErrorPage';
import ThankYouMessage from './content/ThankYouMessage';

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
      {
        path: 'thank-you',
        element: <ThankYouMessage />,
      },
    ],
  },
];

export default routes;
