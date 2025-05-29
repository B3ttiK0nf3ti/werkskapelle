import { useState } from "react";

const CORRECT_PASSWORD = "0815";

export default function Internal() {
  const [accessGranted, setAccessGranted] = useState(false);
  const [input, setInput] = useState("");

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
      <div className="p-4">
        <h1 className="text-xl mb-4">Mitgliederbereich</h1>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="password"
            placeholder="Passwort eingeben"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border p-2"
          />
          <button
            type="submit"
            className="bg-gold text-black px-4 py-2 rounded"
          >
            Einloggen
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Intern: Musikstücke & Noten</h1>

      <h2 className="text-lg font-semibold mt-6">Frühschoppen 2024</h2>
      <ul className="list-disc ml-5">
        <li>
          <audio controls src="/audio/fruehschoppen-2024/marsch1.mp3" />
        </li>
        <li>
          <audio controls src="/audio/fruehschoppen-2024/polka1.mp3" />
        </li>
      </ul>

      <h2 className="text-lg font-semibold mt-6">Herbstkonzert 2023</h2>
      <ul className="list-disc ml-5">
        <li>
          <audio controls src="/audio/herbstkonzert-2023/klassik.mp3" />
        </li>
      </ul>
    </div>
  );
}
