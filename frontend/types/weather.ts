export interface Weather {
  id: number;

  city: string;
  country: string;

  latitude: number;
  longitude: number;

  temperature: number;
  humidity: number;
  wind_speed: number;

  weather_code: number;

  searched_at: string;
}

export interface ForecastItem {
  date: string;
  temperature: number;
  humidity: number;
  weather: string;
  icon: string;
}