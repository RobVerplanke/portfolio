import { vi, describe, it, expect, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import routes from '../components/routes.jsx';
import Header from '../components/header/Header.jsx';
import { MemoryRouter, useRoutes } from 'react-router-dom';
import * as DataContext from '../context/DataContext';

// Mock provided data
vi.mock('../components/context/DataContext.jsx');

vi.spyOn(DataContext, 'useData').mockReturnValue({
  activePage: 'home',
  setActivePage: vi.fn(() => 'home'),
  selectedProjects: [
    {
      id: 1,
      title: 'Mock Project',
      subTitle: '',
      description: 'Lorem ipsum dolor sit amet',
      imageSmall: '',
      imageMed: '',
      altText: '',
      liveLink: '',
      codeLink: '',
    },
  ],
  allProjects: [
    {
      id: 1,
      title: 'Mock Project',
      subTitle: '',
      description: 'Lorem ipsum dolor sit amet',
      imageSmall: '',
      imageMed: '',
      altText: '',
      liveLink: '',
      codeLink: '',
    },
  ],
});

// Make sure to use routes when navigating to components
function AppWithRoutes() {
  return useRoutes(routes);
}

describe('Header', () => {
  afterEach(() => vi.clearAllMocks());

  it('Renders the logo', () => {
    render(
      <MemoryRouter>
        <Header />;
      </MemoryRouter>
    );

    // The logo rendered as text, is in the document
    const logo = screen.getByText('Rob Verplanke jr.');
    expect(logo).toBeInTheDocument();
  });

  it('Check if the navigation buttons are rendered in the document', () => {
    render(
      <MemoryRouter>
        <Header />;
      </MemoryRouter>
    );

    // Select all buttons
    const buttonHome = screen.getByLabelText('Go to Homepage');
    const buttonAbout = screen.getByLabelText('Go to About-me page');
    const buttonProjects = screen.getByLabelText('Go to Projectspage');
    const buttonContact = screen.getByLabelText('Go to Contactpage');

    // All buttons are renderd in the navigation bar
    expect(
      buttonHome,
      buttonAbout,
      buttonProjects,
      buttonContact
    ).toBeInTheDocument();
  });

  it('Loads Homepage after a click on a navigation button', async () => {
    const user = userEvent.setup();

    render(
      // Start Aboutpage as active page
      <MemoryRouter>
        <AppWithRoutes />;
      </MemoryRouter>
    );

    // Simulate a click on the Home button
    await user.click(screen.getByLabelText('Go to Homepage'));

    // Title of Home component is rendered
    await waitFor(() =>
      expect(
        screen.getByText('An aspiring Front-End Developer')
      ).toBeInTheDocument()
    );
  });

  it('Loads About page after a click on a navigation button', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <AppWithRoutes />;
      </MemoryRouter>
    );

    // Simulate a click on the About button
    await user.click(screen.getByLabelText('Go to About-me page'));

    // Title of About component is rendered
    await waitFor(() =>
      expect(screen.getByText('Who am i')).toBeInTheDocument()
    );
  });

  it('Loads Projects page after a click on a navigation button', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <AppWithRoutes />;
      </MemoryRouter>
    );

    // Simulate a click on the Projects button
    await user.click(screen.getByLabelText('Go to Projectspage'));

    // Title of Projects component is rendered
    await waitFor(() =>
      expect(screen.getByText('Recent projects')).toBeInTheDocument()
    );
  });

  it('Loads Contact page after a click on a navigation button', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <AppWithRoutes />;
      </MemoryRouter>
    );

    // Simulate a click on the Contact button
    await user.click(screen.getByLabelText('Go to Contactpage'));

    // Title of Contact component is rendered
    await waitFor(() =>
      expect(screen.getByText('Contact information')).toBeInTheDocument()
    );
  });

  screen.debug();
});
