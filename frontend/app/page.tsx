"use client";

import { useState } from "react";

import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import Forecast from "@/components/Forecast";
import Footer from "@/components/Footer";

export default function Home() {
  const [city, setCity] = useState("");

  function handleSearch() {
    console.log(city);
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

        <WeatherCard />

        <Forecast />

        <Footer />

      </div>

    </main>
  );
}