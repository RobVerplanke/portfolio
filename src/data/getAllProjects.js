import smallImage from '../assets/screenshots/shopping-cart-s.png';
import medImage from '../assets/screenshots/shopping-cart-m.png';

export default function getAllProjects() {
  return [
    // description: 'This is a project.\n\n###%20Introduction\nThis%20is%20the%20introduction.\n####%20Features\n-%20Feature%201\n-%20Feature%202',
    {
      id: 1,
      title: 'Multi Shopee',
      subTitle: 'Mock webshop',
      description:
        'This project is part of The Odin Project curriculum. It is a mock shopping cart application built using React, implementing various techniques and methods covered throughout the course. \n## Introduction \n This project showcases routing, state management, data fetching from an API, and styling with CSS Modules to ensure scoped and maintainable styles. \n## Features \n The application includes a fully functional shop page with product listings, shopping cart functionality, and the ability to manage product quantities. \n## Technologies Used \n- React \n- React Router \n- React Testing Library for component testing \n- Data context for state management \n- Vite for build en development \n- Vitest for unit testing \n## Lessons Learned \n Through this project, I enhanced my understanding of how to manage and share data effectively in a React application. I also realized the importance of having a well-thought-out structure before coding. Going forward, I plan to spend more time organizing the project architecture to avoid time-consuming refactoring later.',
      imageSmall: smallImage,
      imageMed: medImage,
      altText: 'Screenshot of Multi Shoppee',
      liveLink: 'https://lovely-vacherin-d4496c.netlify.app/',
      codeLink: 'https://github.com/RobVerplanke/project-shopping-cart',
      skills: ['html', 'css', 'javascript', 'react'],
      selected: true,
    },
    {
      id: 2,
      title: 'CD Manager',
      subTitle: "App to manage CD's",
      description:
        'This project demonstrates the use of React for building a mock shopping cart application. It includes features such as routing, state management, data fetching from an API and component testing with React Testing Library.',
      imageSmall: smallImage,
      imageMed: medImage,
      altText: 'Screenshot of Multi Shoppee',
      liveLink: 'https://lovely-vacherin-d4496c.netlify.app/',
      codeLink: 'https://github.com/RobVerplanke/project-shopping-cart',
      skills: ['html', 'css', 'javascript', 'react'],
      selected: true,
    },
    {
      id: 3,
      title: 'Example project',
      subTitle: 'Placeholder subtitle',
      description:
        'This project demonstrates the use of React for building a mock shopping cart application. It includes features such as routing, state management, data fetching from an API and component testing with React Testing Library.',
      imageSmall: smallImage,
      imageMed: medImage,
      altText: 'Screenshot of Multi Shoppee',
      liveLink: 'https://lovely-vacherin-d4496c.netlify.app/',
      codeLink: 'https://github.com/RobVerplanke/project-shopping-cart',
      skills: ['html', 'css', 'javascript', 'react'],
      selected: true,
    },
    {
      id: 4,
      title: 'Weather App',
      subTitle: 'Change the weather',
      description:
        'This project demonstrates the use of React for building a mock shopping cart application. It includes features such as routing, state management, data fetching from an API and component testing with React Testing Library.',
      imageSmall: smallImage,
      imageMed: medImage,
      altText: 'Screenshot of Multi Shoppee',
      liveLink: 'https://lovely-vacherin-d4496c.netlify.app/',
      codeLink: 'https://github.com/RobVerplanke/project-shopping-cart',
      skills: ['html', 'css', 'javascript'],
      selected: false,
    },
    {
      id: 5,
      title: "Shoe's and tomatos",
      subTitle: 'Random item shop',
      description:
        'This project demonstrates the use of React for building a mock shopping cart application. It includes features such as routing, state management, data fetching from an API and component testing with React Testing Library.',
      imageSmall: smallImage,
      imageMed: medImage,
      altText: 'Screenshot of Multi Shoppee',
      liveLink: 'https://lovely-vacherin-d4496c.netlify.app/',
      codeLink: 'https://github.com/RobVerplanke/project-shopping-cart',
      skills: ['html', 'css', 'react'],
      selected: false,
    },
  ];
}
