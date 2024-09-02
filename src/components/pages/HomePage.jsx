import { ProjectSelection } from '../ProjectSelection.jsx';

function Home() {
  return (
    <main>
      {/* Display title and introduction text */}
      <h2>An aspiring Front-End Developer</h2>
      <p>
        <i>
          With a passion for learning and building intuitive web experiences.
        </i>
        <br />
        <br />
        This portfolio showcases my journey so far, featuring projects that
        highlight my growing skills in HTML,
        <br /> CSS, JavaScript, and React. This portfolio showcases my journey
        so far,
        <br />
        <br /> featuring projects that highlight my growing skills in HTML, CSS,
        JavaScript, and React.
      </p>

      {/* Display 'Project selection' content */}
      <ProjectSelection />
    </main>
  );
}

export default Home;
