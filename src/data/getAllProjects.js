import cdManagerSmallImage from '../assets/screenshots/cd-manager-s.jpg';
import cdManagerMedImage from '../assets/screenshots/cd-manager-m.jpg';
import shoppingCartSmallImage from '../assets/screenshots/shopping-cart-s.jpg';
import shoppingCartMedImage from '../assets/screenshots/shopping-cart-m.jpg';
// import smallSkeleton from '../assets/screenshots/skeleton-s.png'; // Website skeleton images
// import medSkeleton from '../assets/screenshots/skeleton-m.png';
import copyPrintSmall from '../assets/screenshots/copy-print-s.jpg';
import copyPrintMed from '../assets/screenshots/copy-print-m.jpg';

export default function getAllProjects() {
  return [
    {
      id: 1,
      title: `Copy & Print shop 't Hartje`,
      subTitle: 'Company website',
      description:
        'This project is a complete redesign of a local print shop’s website, created as a self-initiated learning project. The goal was to modernize the interface, improve usability, and enhance maintainability with a structured and scalable codebase. \n## Introduction \n This project showcases dynamic content rendering, state management and responsive design while focusing on user experience and accessibility. \n## Features \n Fully responsive layout with a clean, modern UI \n Dynamic pricing tables \n Dynamic content cards \n Multilingual support with instant content translation \n Light and dark theme options \n Accessibility enhancements following WCAG guidelines \n## Technologies Used \n- TypeScript \n- React \n- React Router \n- Tailwind CSS \n- Data context for state management \n- Vite for build and development \n- i18next for translations \n- Netlify for deployment',
      imageSmall: copyPrintSmall,
      imageMed: copyPrintMed,
      altText: 'Screenshot of website',
      liveLink: 'https://gilded-nasturtium-19b3f2.netlify.app/',
      codeLink: 'https://github.com/RobVerplanke/copy-and-print-shop',
      skills: ['typescript', 'react', 'tailwind'],
      isWebApp: true, // Local App or Live website
      selected: true, // Selected to be displayed on homepage
    },

    {
      id: 2,
      title: 'CD-manager',
      subTitle: 'Manage your CD-collection',
      description:
        'This app allows users to manage their personal CD collection locally. Users can add, edit, and remove albums, CDs, and tracks from their collection, rate each item, and organize their library with tags and categories. \n## Introduction \n This project showcases routing, state management, data fetching from an API and styling with Tailwind. \n## Features \n Users can add new albums, CDs, and tracks to their collection, edit existing items, or remove items from the library. \n## Technologies Used \n- Typescript \n- Tailwind \n- React \n- React Router \n- React Testing Library for component testing \n- Data context for state management \n- Accessibility Guidelines \n- Vite for build en development \n- Vitest for unit testing',
      imageSmall: cdManagerSmallImage,
      imageMed: cdManagerMedImage,
      altText: 'Screenshot of CD-manager app',
      liveLink: '',
      codeLink: 'https://github.com/RobVerplanke/cd-manager-react',
      skills: ['typescript', 'react', 'tailwind'],
      isWebApp: false, // Local App or Live website
      selected: true, // Selected to be displayed on homepage
    },

    {
      id: 3,
      title: 'Multi Shopee',
      subTitle: 'Mock webshop',
      description:
        'This project is part of The Odin Project curriculum. It is a mock shopping cart application built using React, implementing various techniques and methods covered throughout the course. \n## Introduction \n This project showcases routing, state management, data fetching from an API, and styling with CSS Modules to ensure scoped and maintainable styles. \n## Features \n The application includes a fron-end shopping app with product listings, shopping cart functionality, and the ability to manage product quantities. \n## Technologies Used \n- Javascript \n- React \n- React Router \n- React Testing Library for component testing \n- Data context for state management \n- Accessibility Guidelines \n- Vite for build en development \n- Vitest for unit testing',
      imageSmall: shoppingCartSmallImage,
      imageMed: shoppingCartMedImage,
      altText: 'Screenshot of Multi Shoppee webste',
      liveLink: 'https://lovely-vacherin-d4496c.netlify.app/',
      codeLink: 'https://github.com/RobVerplanke/project-shopping-cart',
      skills: ['html', 'css', 'javascript', 'react'],
      isWebApp: true, // Local App or Live website
      selected: true, // Selected to be displayd on homepage
    },
  ];
}
