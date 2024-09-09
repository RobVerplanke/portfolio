import { vi, describe, it, expect, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutPage from '../components/pages/AboutPage.jsx';

describe('About Page', () => {
  afterEach(() => vi.clearAllMocks());

  it('Renders the title correctly', () => {
    render(<AboutPage />);

    // The title is in the document
    const title = screen.getByText('Who am i');
    expect(title).toBeInTheDocument();
  });
});
