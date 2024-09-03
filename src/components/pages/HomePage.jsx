import { HomePageTextContent } from '../content/HomePageTextContent.jsx';
import { ProjectSelection } from '../content/ProjectSelection.jsx';

import '../../styles/HomePage.css';

function Home() {
  return (
    <main>
      {/* Display title and introduction text */}
      <div className="text-content-holder">
        <HomePageTextContent />
      </div>

      {/* Display 'Project selection' content */}
      <div className="projects-selection-holder">
        <ProjectSelection />
      </div>
    </main>
  );
}

export default Home;
