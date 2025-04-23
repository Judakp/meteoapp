// src/App.jsx (rappel)
import { useState } from 'react';
import axios from 'axios';

const API_KEY = 'TA_CLE_API'; // À remplacer par ta clé

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    const res = await axios.get(
      'https://api.open-meteo.com/v1/forecast?latitude=48.8566&longitude=2.3522&current=temperature_2m'

    );
    setWeather(res.data);
  };

  return (
    <div>
      <h1>Météo</h1>
      <input
        placeholder="Entrez une ville"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Rechercher</button>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.main.temp} °C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}


const fetchWeather = async () => {
  try {
    const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude: 48.8566,
        longitude: 2.3522,
        current: 'temperature_2m',
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error('Erreur lors de la récupération des données météo:', error);
  }
};


export default App;
