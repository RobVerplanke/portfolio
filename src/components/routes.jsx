import App from './App.jsx';
import Home from './pages/HomePage.jsx';
import Projects from './pages/ProjectsPage.jsx';
import About from './pages/AboutPage.jsx';
import Contact from './pages/ContactPage.jsx';
import Errorpage from './pages/ErrorPage.jsx';
import ThankYouMessage from './content/ThankYouMessage.jsx';

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
