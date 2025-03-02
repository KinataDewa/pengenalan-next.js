export default async function handler(req, res) {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Ganti dengan API key Anda
    const city = req.query.city || 'Jakarta'; // Default city adalah Jakarta
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod !== 200) {
        // Jika respons dari API menunjukkan error
        res.status(400).json({ message: data.message || 'Kota tidak ditemukan' });
      } else {
        res.status(200).json(data);
      }
    } catch (error) {
      res.status(500).json({ message: 'Gagal mengambil data cuaca' });
    }
  }