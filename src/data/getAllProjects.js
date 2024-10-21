import cdManagerSmallImage from '../assets/screenshots/cd-manager-s.jpg';
import cdManagerMedImage from '../assets/screenshots/cd-manager-m.jpg';
import shoppingCartSmallImage from '../assets/screenshots/shopping-cart-s.jpg';
import shoppingCartMedImage from '../assets/screenshots/shopping-cart-m.jpg';
import smallSkeleton from '../assets/screenshots/skeleton-s.png';
import medSkeleton from '../assets/screenshots/skeleton-m.png';

export default function getAllProjects() {
  return [
    {
      id: 1,
      title: 'Multi Shopee',
      subTitle: 'Mock webshop',
      description:
        'This project is part of The Odin Project curriculum. It is a mock shopping cart application built using React, implementing various techniques and methods covered throughout the course. \n## Introduction \n This project showcases routing, state management, data fetching from an API, and styling with CSS Modules to ensure scoped and maintainable styles. \n## Features \n The application includes a fully functional shop page with product listings, shopping cart functionality, and the ability to manage product quantities. \n## Technologies Used \n- React \n- React Router \n- React Testing Library for component testing \n- Data context for state management \n- Accessibility Guidelines \n- Vite for build en development \n- Vitest for unit testing',
      imageSmall: shoppingCartSmallImage,
      imageMed: shoppingCartMedImage,
      altText: 'Screenshot of Multi Shoppee',
      liveLink: 'https://lovely-vacherin-d4496c.netlify.app/',
      codeLink: 'https://github.com/RobVerplanke/project-shopping-cart',
      skills: ['html', 'css', 'javascript', 'react'],
      isWebApp: true,
      selected: true,
    },
    {
      id: 2,
      title: 'CD-manager',
      subTitle: 'Manage your CD-collection',
      description:
        'This app allows users to manage their personal CD collection locally. Users can add, edit, and remove albums, CDs, and tracks from their collection, rate each item, and organize their library with tags and categories. \n## Introduction \n This project showcases routing, state management, data fetching from an API, and styling with Tailwind. \n## Features \n Users can add new albums, CDs, and tracks to their collection, edit existing items, or remove items from the library. \n## Technologies Used \n- Typescript \n- React \n- React Router \n- React Testing Library for component testing \n- Data context for state management \n- Tailwind \n- Accessibility Guidelines \n- Vitest for unit testing',
      imageSmall: cdManagerSmallImage,
      imageMed: cdManagerMedImage,
      altText: '',
      liveLink: '',
      codeLink: 'https://github.com/RobVerplanke/cd-manager-react',
      skills: ['typescript', 'react', 'tailwind'],
      isWebApp: false,
      selected: true,
    },
    {
      id: 3,
      title: 'Message board',
      subTitle: 'COMING SOON',
      description:
        'The next project will be a learning project, where i learn and apply NodeJs with Express to create a basic message board.',
      imageSmall: smallSkeleton,
      imageMed: medSkeleton,
      altText: '',
      liveLink: '',
      codeLink: 'https://github.com/RobVerplanke',
      skills: [],
      isWebApp: true,
      selected: false,
    },
  ];
}
