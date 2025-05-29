import { useState } from "react";
import Layout from "../components/Layout";

const CORRECT_PASSWORD = "0815";

const musicData = {
  Frühschoppen: {
    2024: [
      { title: "Marsch 1", src: "/audio/fruehschoppen-2024/marsch1.mp3" },
      { title: "Polka 1", src: "/audio/fruehschoppen-2024/polka1.mp3" },
    ],
  },
  Herbstkonzert: {
    2025: [
      {
        title: "Piste frei fuer Karo Ass",
        src: "/audio/herbstkonzert/2025/H02 Piste frei fuer Karo Ass - Marsch von Hans Gansch -1985_0123 Rundfunkaufnahme.mp3",
      },
      {
        title: "Star Wars Saga",
        src: "/audio/herbstkonzert/2025/H10 Star Wars Saga-John Williams (arr. Johan de Meij)-Gyor Symphonic Band.mp3",
      },
      {
        title: "Apollo 13",
        src: "/audio/herbstkonzert/2025/H09 Apollo 13 - James Horner arr Ton van Grevenbroek.mp3",
      },
      {
        title: "The Last Flight",
        src: "/audio/herbstkonzert/2025/H06 The Last Flight - Werkskapelle voestalpine Donawitz.mp3",
      },
      {
        title: "Top Gun Medley",
        src: "/audio/herbstkonzert/2025/H07 Top Gun Medley arrRobertWSmith-Live.mp3",
      },
      {
        title: "Astronauten Marsch",
        src: "/audio/herbstkonzert/2025/H08 Astronauten Marsch.mp3",
      },
      {
        title: "Fliegermarsch",
        src: "/audio/herbstkonzert/2025/H01 Fliegermarsch.wav",
      },
      {
        title: "Stratosphere",
        src: "/audio/herbstkonzert/2025/H05 Stratosphere.mp3",
      },
      {
        title: "Raketenflug",
        src: "/audio/herbstkonzert/2025/H03 Raketenflug.mp3",
      },
      {
        title: "Ueber den Wolken",
        src: "/audio/herbstkonzert/2025/H04 Ueber den Wolken - Helm.mp3",
      },
    ],
  },
};

export default function Internal() {
  const [accessGranted, setAccessGranted] = useState(false);
  const [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === CORRECT_PASSWORD) {
      setAccessGranted(true);
    } else {
      alert("Falsches Passwort!");
    }
  };

  if (!accessGranted) {
    return (
      <Layout>
        <div className="max-w-md mx-auto bg-white p-8 rounded shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Mitgliederbereich</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="Passwort eingeben"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <button
              type="submit"
              className="w-full bg-gold text-black px-4 py-2 rounded hover:bg-yellow-400 transition font-semibold"
            >
              Einloggen
            </button>
          </form>
        </div>
      </Layout>
    );
  }

  const categories = Object.keys(musicData);
  const years = selectedCategory
    ? Object.keys(musicData[selectedCategory])
    : [];

  return (
    <Layout>
      <main className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-lg text-black">
        <h1 className="text-3xl font-bold text-gold mb-6">
          Intern: Musikstücke & Noten
        </h1>

        {/* Kategorie */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Kategorie wählen:</h2>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedYear(null);
                }}
                className={`px-4 py-2 rounded font-medium transition ${
                  selectedCategory === cat
                    ? "bg-gold text-black"
                    : "bg-gray-100 text-black border border-gray-300 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Jahr */}
        {selectedCategory && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Jahr wählen:</h2>
            <div className="flex gap-2 flex-wrap">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded font-medium transition ${
                    selectedYear === year
                      ? "bg-gold text-black"
                      : "bg-gray-100 text-black border border-gray-300 hover:bg-gray-200"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Musikliste */}
        {selectedCategory && selectedYear && (
          <div>
            <h3 className="text-lg font-bold mb-4">
              Lieder für {selectedCategory} {selectedYear}
            </h3>
            <ul className="space-y-4">
              {musicData[selectedCategory][selectedYear].map(
                ({ title, src }) => (
                  <li key={src}>
                    <div className="font-medium">{title}</div>
                    <audio controls src={src} className="w-full mt-1" />
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </main>
    </Layout>
  );
}
