import cdManagerSmallImage from '../assets/screenshots/cdmanager-s.png';
import cdManagerMedImage from '../assets/screenshots/cdmanager-m.png';
import shoppingCartSmallImage from '../assets/screenshots/shopping-cart-s.jpg';
import shoppingCartMedImage from '../assets/screenshots/shopping-cart-m.jpg';
// import smallSkeleton from '../assets/screenshots/skeleton-s.png'; // Website skeleton images
// import medSkeleton from '../assets/screenshots/skeleton-m.png';
import copyPrintSmall from '../assets/screenshots/thartje-s.png';
import copyPrintMed from '../assets/screenshots/thartje-m.png';
import bikeShopSmall from '../assets/screenshots/bicycle-shop-s.png';
import bikeShopMed from '../assets/screenshots/cycles-m.png';

export default function getAllProjects() {
  return [
    {
      id: 1,
      title: 'Bicycle shop',
      subTitle: 'Mock webshop',
      description:
        'This project is a full-stack webshop application built as a learning project to deepen my knowledge in modern web development. \n## Introduction \n This project highlights the integration of frontend and backend technologies, focusing on efficient state management and robust data handling. \n## Features \n A responsive webshop interface with product filtering and sorting. \n Rate and review products \n Dynamic product data fetching from a custom Express backend. \n Product storage using a database. \n State management with Redux Toolkit. \n Styling with SCSS. \n## Technologies Used \n- TypeScript \n- React \n- React Router \n- Redux Toolkit \n- SCSS \n- Express \n- Supabase \n- Accessibility Guidelines \n- Vite and Netlify for build and development',
      imageSmall: bikeShopSmall,
      imageMed: bikeShopMed,
      altText: 'Screenshot of Bicycle shop website',
      liveLink: 'https://bicycle-mock-webshop.netlify.app/',
      codeLink: 'https://github.com/RobVerplanke/cycle-shop-mock',
      skills: ['react', 'typescript', 'scss'],
      isWebApp: true, // Local App or Live website
      selected: true, // Selected to be displayd on homepage
    },
    {
      id: 3,
      title: `Copy & Print shop`,
      subTitle: 'Company website',
      description:
        'This project is a complete redesign of a local print shop’s website, created as a self-initiated learning project. The goal was to modernize the interface, improve usability, and enhance maintainability with a structured and scalable codebase. \n## Introduction \n This project showcases dynamic content rendering, state management and responsive design while focusing on user experience and accessibility. \n## Features \n Fully responsive layout with a clean, modern UI. \n Dynamic pricing tables. \n Dynamic content cards. \n Multilingual support with instant content translation. \n Light and dark theme options. \n Accessibility enhancements following WCAG guidelines. \n## Technologies Used \n- TypeScript \n- React \n- React Router \n- Tailwind CSS \n- i18next for translations \n- Data context for state management \n- Vite and Netlify for build and development',
      imageSmall: copyPrintSmall,
      imageMed: copyPrintMed,
      altText: 'Screenshot of website',
      liveLink: 'https://gilded-nasturtium-19b3f2.netlify.app/',
      codeLink: 'https://github.com/RobVerplanke/copy-and-print-shop',
      skills: ['react', 'typescript', 'tailwind'],
      isWebApp: true, // Local App or Live website
      selected: true, // Selected to be displayed on homepage
    },

    {
      id: 2,
      title: 'CD-manager',
      subTitle: 'Manage your CD-collection',
      description:
        'This app allows users to manage their personal CD collection locally. Users can add, edit, and remove albums, CDs, and tracks from their collection, rate each item, and organize their library with tags and categories. \n## Introduction \n This project showcases routing, state management, data fetching from an API and styling with Tailwind. \n## Features \n Users can add new albums, CDs, and tracks to their collection, edit existing items, or remove items from the library. \n## Technologies Used \n- Typescript \n- Tailwind CSS \n- React \n- React Router \n- React Testing Library for component testing \n- Data context for state management \n- Accessibility Guidelines \n- Vitest for unit testing \n- Vite for build en development',
      imageSmall: cdManagerSmallImage,
      imageMed: cdManagerMedImage,
      altText: 'Screenshot of CD-manager app',
      liveLink: '',
      codeLink: 'https://github.com/RobVerplanke/cd-manager-react',
      skills: ['react', 'typescript', 'tailwind'],
      isWebApp: false, // Local App or Live website
      selected: true, // Selected to be displayed on homepage
    },
    {
      id: 4,
      title: 'Multi Shopee',
      subTitle: 'Mock webshop',
      description:
        'This project is part of The Odin Project curriculum. It is a mock shopping cart application built using React, implementing various techniques and methods covered throughout the course. \n## Introduction \n This project showcases routing, state management, data fetching from an API, and styling with CSS Modules to ensure scoped and maintainable styles. \n## Features \n The application includes a fron-end shopping app with product listings, shopping cart functionality, and the ability to manage product quantities. \n## Technologies Used \n- Javascript \n- React \n- React Router \n- React Testing Library for component testing \n- Data context for state management \n- Accessibility Guidelines \n- Vitest for unit testing \n- Vite and Netlify for build en development',
      imageSmall: shoppingCartSmallImage,
      imageMed: shoppingCartMedImage,
      altText: 'Screenshot of Multi Shoppee website',
      liveLink: 'https://lovely-vacherin-d4496c.netlify.app/',
      codeLink: 'https://github.com/RobVerplanke/project-shopping-cart',
      skills: ['react', 'javascript', 'css'],
      isWebApp: true, // Local App or Live website
      selected: false, // Selected to be displayd on homepage
    },
  ];
}
