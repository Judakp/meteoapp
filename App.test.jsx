import { render, screen } from '@testing-library/react';
import App from '../App';

test('le titre "Météo" est affiché', () => {
  render(<App />);
  expect(screen.getByText(/météo/i)).toBeInTheDocument();
});
