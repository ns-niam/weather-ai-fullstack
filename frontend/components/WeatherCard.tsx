import {
  MapPin,
  Thermometer,
  Droplets,
  Wind,
  Calendar,
} from "lucide-react";

import { Weather } from "@/types/weather";

type Props = {
  weather: Weather;
};

export default function WeatherCard({ weather }: Props) {
  return (
    <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">

      <div className="grid gap-8 md:grid-cols-3">

        {/* Left */}

        <div>

          <h2 className="text-4xl font-bold text-gray-900">
            {weather.city}
          </h2>

          <div className="mt-3 flex items-center gap-2 text-gray-600">
            <MapPin size={18} />
            {weather.country}
          </div>

          <div className="mt-5 flex items-center gap-2 text-gray-500">
            <Calendar size={18} />
            {new Date(weather.searched_at).toLocaleString()}
          </div>

        </div>

        {/* Center */}

        <div className="flex flex-col items-center justify-center">

          <div className="text-7xl font-extrabold text-blue-600">
            {Math.round(weather.temperature)}°
          </div>

          <p className="mt-2 text-lg text-gray-500">
            Current Temperature
          </p>

        </div>

        {/* Right */}

        <div className="space-y-5">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-gray-700">
              <Thermometer className="text-blue-500" />
              Temperature
            </div>

            <span className="font-bold">
              {weather.temperature} °C
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-gray-700">
              <Droplets className="text-blue-500" />
              Humidity
            </div>

            <span className="font-bold">
              {weather.humidity} %
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-gray-700">
              <Wind className="text-blue-500" />
              Wind Speed
            </div>

            <span className="font-bold">
              {weather.wind_speed} m/s
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700">
              Weather Code
            </span>

            <span className="rounded-lg bg-blue-100 px-3 py-1 font-semibold text-blue-700">
              {weather.weather_code}
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}