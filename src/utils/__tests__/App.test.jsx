import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import axios from 'axios';

jest.mock('axios');

test('affiche les données météo après une recherche', async () => {
  // On définit la réponse mockée de l'API
  axios.get.mockResolvedValue({
    data: {
      name: 'Paris',
      main: { temp: 21.4 },
      weather: [{ description: 'ciel dégagé' }],
    },
  });

  render(<App />);

  // Simule la saisie de l'utilisateur
  fireEvent.change(screen.getByPlaceholderText(/entrez une ville/i), {
    target: { value: 'Paris' },
  });

  // Clique sur le bouton
  fireEvent.click(screen.getByText(/rechercher/i));

  // On attend l'affichage des données météo
  await waitFor(() => {
    expect(screen.getByText(/Paris/)).toBeInTheDocument();
    expect(screen.getByText(/21.4 °C/)).toBeInTheDocument();
    expect(screen.getByText(/ciel dégagé/)).toBeInTheDocument();
  });
});
