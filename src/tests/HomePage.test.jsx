import { vi, describe, it, expect, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '../components/pages/HomePage.jsx';
import * as DataContext from '../context/DataContext.jsx';

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
});

describe('Homepage', () => {
  afterEach(() => vi.clearAllMocks());

  it('Renders the title correctly', () => {
    render(<HomePage />);

    // The title is in the document
    const title = screen.getByText('An aspiring Front-End Developer');
    expect(title).toBeInTheDocument();
  });

  it('Renders the mocked project on a item card in the "Project selection" section', async () => {
    render(<HomePage />);

    await waitFor(() => {
      const itemTitle = screen.getByText(/Mock Project/i);
      expect(itemTitle).toBeInTheDocument();
    });
  });
});
