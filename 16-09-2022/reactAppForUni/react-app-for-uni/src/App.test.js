import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/I am here/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders app and checks for logo', () => {
  render(<App />);
  const linkElement = screen.findByAltText(/logo/i);
  expect(linkElement).toBeEnabled();
});

