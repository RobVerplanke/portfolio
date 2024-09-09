import { vi, describe, it, expect, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactPage from '../components/pages/ContactPage.jsx';
import { MemoryRouter } from 'react-router-dom';

describe('Contact', () => {
  afterEach(() => vi.clearAllMocks());

  it('Renders the title', () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );

    // The title is in the document
    const title = screen.getByText('Contact information');
    expect(title).toBeInTheDocument();
  });

  it('Renders contact adresses', () => {
    vi.fn(() => {});
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );

    // The text is in the document
    const emailAdress = screen.getByText('rverplanke@gmail.com');
    const linkedInAdress = screen.getByText('linkedin.com/in/rob-verplanke-jr');
    const gitHubAdress = screen.getByText('github.com/RobVerplanke');

    expect(emailAdress, linkedInAdress, gitHubAdress).toBeInTheDocument();
  });

  it('Renders icon links', () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );

    // The text is in the document
    const iconEmail = screen.getByLabelText('Link to e-mail adres');
    const iconLinkedIn = screen.getByLabelText('Link to LinkedIn page');
    const icongitHub = screen.getByLabelText('Link to Github');

    expect(iconEmail, iconLinkedIn, icongitHub).toBeInTheDocument();
  });

  it('Sends direct message', async () => {
    const user = userEvent.setup();

    // Mock fetch
    window.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
      })
    );

    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );

    // Mock a filled form
    const subjectField = screen.getByLabelText('subject');
    const messageField = screen.getByLabelText('message');
    await user.type(subjectField, 'Test subject');
    await user.type(messageField, 'Test message');

    // Mock click on submit button
    const submitBtn = screen.getByLabelText('Send message');
    await user.click(submitBtn);

    expect(fetch).toBeCalledTimes(1);
  });

  screen.debug();
});
