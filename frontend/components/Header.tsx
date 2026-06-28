import { CloudSun } from "lucide-react";

export default function Header() {
  return (
    <header className="text-center mb-10">

      <div className="flex justify-center items-center gap-3">

        <CloudSun
          size={60}
          className="text-yellow-500"
        />

        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Weather Intelligence Platform
        </h1>

      </div>

      <p className="mt-4 text-xl text-slate-600">
        Real-time Weather • Forecast • Maps • AI Insights
      </p>

    </header>
  );
}