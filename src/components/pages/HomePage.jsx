import { HomePageTextContent } from '../HomePageTextContent.jsx';
import { ProjectSelection } from '../ProjectSelection.jsx';

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
