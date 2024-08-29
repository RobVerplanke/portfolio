import { ProductCardSmall } from '../ProjectCardSmall';
import '../../styles/HomePage.css';

function Home() {
  return (
    <>
      <main>
        <div className="main-sidebar"></div>
        <div className="main-content-container">
          <div className="content-title">
            <h2>I&apos;m an aspiring Front-End Developer</h2>
          </div>
          <div className="content-text">
            <p>
              <i>
                With a passion for learning and building intuitive web
                experiences.
              </i>
              <br />
              <br />
              This portfolio showcases my journey so far, featuring projects
              that highlight my growing skills in HTML, CSS, JavaScript, and
              React.
            </p>
          </div>
          <div className="content-projects-preview">
            {ProductCardSmall('Project 1')}
            {ProductCardSmall('Project 2')}
            {ProductCardSmall('Project 3')}
          </div>
        </div>
        <div className="main-sidebar"></div>
      </main>
    </>
  );
}

export default Home;
