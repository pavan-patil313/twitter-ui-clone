import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders the app with TWITTER UI CLONE', () => {
  render(<App />);
  const linkElement = screen.getByText(/twitter ui/i);
  expect(linkElement).toBeInTheDocument();
});
