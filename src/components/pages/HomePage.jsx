import { HomePageTextContent } from '../content/HomePageTextContent.jsx';
import { ProjectSelection } from '../content/ProjectSelection.jsx';

import '../../styles/HomePage.css';

function Home() {
  return (
    <main>
      {/* Display title and introduction text */}
      <div>
        <HomePageTextContent />
        <br />
        <br />
        <br />
      </div>
      {/* Display 'Project selection' content */}
      <div>
        <ProjectSelection />
      </div>
    </main>
  );
}

export default Home;
