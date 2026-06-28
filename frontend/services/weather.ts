const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

export async function getWeather(city: string) {
  // Step 1: Get coordinates
  const geoRes = await fetch(
    `${GEO_URL}?name=${encodeURIComponent(city)}&count=1`
  );

  const geoData = await geoRes.json();

  if (!geoData.results || geoData.results.length === 0) {
    throw new Error("City not found");
  }

  const location = geoData.results[0];

  // Step 2: Get weather
  const weatherRes = await fetch(
    `${WEATHER_URL}?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
  );

  const weatherData = await weatherRes.json();

  return {
    city: location.name,
    country: location.country,
    ...weatherData.current,
  };
}