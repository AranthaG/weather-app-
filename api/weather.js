export default async function handler(req, res) {
    const city = req.query.city || 'Lucknow';
    const apiKey = process.env.WEATHER_API_KEY;

    const apiKey = process.env.WEATHER_API_KEY;

  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Unable to fetch weather data" });
    }
  }
  
