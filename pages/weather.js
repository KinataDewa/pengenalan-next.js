import { useState, useEffect } from 'react';

const WeatherPage = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Jakarta');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`/api/weather?city=${city}`);
        const data = await response.json();

        if (data.cod !== 200) {
          // Jika respons dari API menunjukkan error
          setError(data.message || 'Kota tidak ditemukan');
          setWeather(null);
        } else {
          setWeather(data);
          setError(null);
        }
      } catch (err) {
        setError('Gagal mengambil data cuaca');
        setWeather(null);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div>
      <h1>Cuaca di {city}</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Masukkan nama kota"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && weather.main && weather.weather && (
        <div>
          <p>Suhu: {weather.main.temp}°C</p>
          <p>Kondisi: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;