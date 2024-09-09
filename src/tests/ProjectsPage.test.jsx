import { vi, describe, it, expect, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import ProjectsPage from '../components/pages/ProjectsPage.jsx';
import * as DataContext from '../context/DataContext.jsx';
import { MemoryRouter } from 'react-router-dom';

// Mock provided data
vi.mock('../components/context/DataContext.jsx');
vi.spyOn(DataContext, 'useData').mockReturnValue({
  activePage: 'home',
  setActivePage: vi.fn(() => 'home'),
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

describe('ProjectsPage Page', () => {
  afterEach(() => vi.clearAllMocks());

  it('Renders the title correctly', () => {
    render(
      <MemoryRouter>
        <ProjectsPage />
      </MemoryRouter>
    );

    // The title is in the document
    const title = screen.getByText('Recent projects');
    expect(title).toBeInTheDocument();
  });

  it('Renders the mocked project in accordion navigation', async () => {
    render(<ProjectsPage />);

    await waitFor(() => {
      const itemTitle = screen.getByText(/Mock Project/i);
      expect(itemTitle).toBeInTheDocument();
    });
  });
});
