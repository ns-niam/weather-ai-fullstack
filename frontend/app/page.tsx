"use client";

import { useState } from "react";

import api from "@/services/api";
import { Weather } from "@/types/weather";

import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import Forecast from "@/components/Forecast";
import Footer from "@/components/Footer";

export default function Home() {
  const [city, setCity] = useState("");

  const [weather, setWeather] = useState<Weather | null>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleSearch() {
    if (!city.trim()) {
      setError("Please enter a city.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await api.post("/weather/", {
        city: city.trim(),
      });

      console.log("Weather:", response.data);

      setWeather(response.data);

    } catch (err: any) {
      console.log("========== ERROR ==========");
      console.log(err);
      console.log("Message:", err.message);
      console.log("Response:", err.response);
      console.log("Data:", err.response?.data);
      console.log("Status:", err.response?.status);
      console.log("===========================");

      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <Header />

        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={handleSearch}
        />

        {loading && (
          <div className="mt-8 text-center text-lg font-semibold text-blue-600">
            Loading weather...
          </div>
        )}

        {error && (
          <div className="mt-8 rounded-xl border border-red-300 bg-red-100 p-4 text-center text-red-700">
            {error}
          </div>
        )}

        {weather && (
          <>
            <WeatherCard weather={weather} />

            <Forecast city={weather.city} />
          </>
        )}

        <Footer />

      </div>

    </main>
  );
}