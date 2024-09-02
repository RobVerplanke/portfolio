import { MainSidebar } from '../MainSidebar';

function Projects() {
  return (
    <>
      <main>
        <MainSidebar />
        <div className="main-content-container">
          <div className="content-title">
            <h2>Projects</h2>
          </div>
          <div className="content-text">
            <p>
              <i>
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </i>
            </p>
          </div>
        </div>
        <MainSidebar />
      </main>
    </>
  );
}

export default Projects;
