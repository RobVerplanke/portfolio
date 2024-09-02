import { HomePageTextContent } from '../content/HomePageTextContent.jsx';
import { ProjectSelection } from '../content/ProjectSelection.jsx';

function Home() {
  return (
    <main>
      {/* Display title and introduction text */}
      <HomePageTextContent />

      {/* Display 'Project selection' content */}
      <ProjectSelection />
    </main>
  );
}

export default Home;
