import {
  MapPin,
  Thermometer,
  Droplets,
  Wind,
  CloudSun,
} from "lucide-react";

export default function WeatherCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mt-8">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* Left */}

        <div>

          <h2 className="text-4xl font-bold text-gray-900">
            Dhaka
          </h2>

          <div className="flex items-center gap-2 mt-3 text-gray-600">
            <MapPin size={18} />
            Bangladesh
          </div>

          <p className="mt-5 text-gray-500">
            Tuesday, May 27 • 11:45 AM
          </p>

          <button className="mt-6 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold">
            Current Weather
          </button>

        </div>

        {/* Center */}

        <div className="text-center">

          <CloudSun
            size={90}
            className="mx-auto text-yellow-500"
          />

          <h1 className="text-7xl font-extrabold text-gray-900 mt-4">
            32°
          </h1>

          <p className="text-gray-500 text-xl">
            Feels like 37°
          </p>

        </div>

        {/* Right */}

        <div className="space-y-5">

          <div className="flex justify-between">

            <div className="flex gap-3 items-center text-gray-700">

              <Thermometer className="text-blue-500" />

              Temperature

            </div>

            <span className="font-bold text-xl text-gray-900">
              32°C
            </span>

          </div>

          <div className="flex justify-between">

            <div className="flex gap-3 items-center text-gray-700">

              <Droplets className="text-blue-500" />

              Humidity

            </div>

            <span className="font-bold text-xl text-gray-900">
              68%
            </span>

          </div>

          <div className="flex justify-between">

            <div className="flex gap-3 items-center text-gray-700">

              <Wind className="text-blue-500" />

              Wind

            </div>

            <span className="font-bold text-xl text-gray-900">
              12 km/h
            </span>

          </div>

          <div className="flex justify-between">

            <div className="flex gap-3 items-center text-gray-700">

              <CloudSun className="text-blue-500" />

              Condition

            </div>

            <span className="font-bold text-xl text-gray-900">
              Partly Cloudy
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}