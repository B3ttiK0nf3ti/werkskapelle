import React, { useState } from "react";
import Layout from "../components/Layout";

const shopItems = [
  // Konzerte 2025
  {
    id: "cd-2025-1",
    type: "cd",
    year: 2025,
    title: "Frühschoppenkonzert",
    date: "06.04.2025",
    format: "1 CD",
    price: 15.0,
  },

  // Konzerte 2024
  {
    id: "cd-2024-1",
    type: "cd",
    year: 2024,
    title: "Frühschoppenkonzert",
    date: "07.04.2024",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2024-2",
    type: "cd",
    year: 2024,
    title: "Herbstkonzert",
    date: "03.11.2024",
    format: "1 CD oder USB Stick",
    price: 15.0,
  },
  {
    id: "cd-2024-3",
    type: "cd",
    year: 2024,
    title: "Konzertwertungsspiel Pöls",
    date: "17.11.2024",
    format: "2 CDs",
    price: 20.0,
  },

  // Konzerte 2023
  {
    id: "cd-2023-1",
    type: "cd",
    year: 2023,
    title: "Frühschoppenkonzert",
    date: "26.03.2023",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2023-2",
    type: "cd",
    year: 2023,
    title: "Herbstkonzert",
    date: "05.11.2023",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "usb-2023-1",
    type: "cd",
    year: 2023,
    title: "Herbstkonzert",
    date: "05.11.2023",
    format: "1 USB Stick",
    price: 15.0,
  },
  // Konzerte 2022
  {
    id: "cd-2022-1",
    type: "cd",
    year: 2022,
    title: "Frühschoppenkonzert",
    date: "03.04.2022",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2022-2",
    type: "cd",
    year: 2022,
    title: "Herbstkonzert",
    date: "06.11.2022",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2022-3",
    type: "cd",
    year: 2022,
    title: "Konzertwertungsspiel Pöls",
    date: "13.11.2022",
    format: "2 CDs",
    price: 20.0,
  },

  // Konzerte 2021
  {
    id: "cd-2021-1",
    type: "cd",
    year: 2021,
    title: "Herbstkonzert",
    date: "07.11.2021",
    format: "1 CD",
    price: 15.0,
  },

  // Konzerte 2019
  {
    id: "cd-2019-1",
    type: "cd",
    year: 2019,
    title: "Frühschoppenkonzert",
    date: "08.04.2019",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2019-2",
    type: "cd",
    year: 2019,
    title: "Herbstkonzert",
    date: "03.11.2019",
    format: "1 CD",
    price: 15.0,
  },

  // Konzerte 2018
  {
    id: "cd-2018-1",
    type: "cd",
    year: 2018,
    title: "Frühschoppenkonzert",
    date: "08.04.2018",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2018-2",
    type: "cd",
    year: 2018,
    title: "Herbstkonzert",
    date: "04.11.2018",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2018-3",
    type: "cd",
    year: 2018,
    title: "Konzertwertungsspiel Pöls",
    date: "18.11.2018",
    format: "3 CDs",
    price: 20.0,
  },

  // Konzerte 2017
  {
    id: "cd-2017-1",
    type: "cd",
    year: 2017,
    title: "Frühschoppenkonzert",
    date: "23.04.2017",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2017-2",
    type: "cd",
    year: 2017,
    title: "Herbstkonzert",
    date: "05.11.2017",
    format: "1 CD",
    price: 15.0,
  },

  // Konzerte 2016
  {
    id: "cd-2016-1",
    type: "cd",
    year: 2016,
    title: "Frühschoppenkonzert",
    date: "03.04.2016",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2016-2",
    type: "cd",
    year: 2016,
    title: "Herbstkonzert",
    date: "06.11.2016",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2016-3",
    type: "cd",
    year: 2016,
    title: "Konzertwertungsspiel Pöls",
    date: "13.11.2016",
    format: "3 CDs",
    price: 20.0,
  },
  // Konzerte 2015
  {
    id: "cd-2015-1",
    type: "cd",
    year: 2015,
    title: "Frühschoppenkonzert",
    date: "19.04.2015",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2015-2",
    type: "cd",
    year: 2015,
    title: "Herbstkonzert",
    date: "08.11.2015",
    format: "1 CD",
    price: 15.0,
  },

  // Konzerte 2014
  {
    id: "cd-2014-1",
    type: "cd",
    year: 2014,
    title: "Frühschoppenkonzert",
    date: "27.04.2014",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2014-2",
    type: "cd",
    year: 2014,
    title: "Herbstkonzert",
    date: "09.11.2014",
    format: "2 CDs",
    price: 20.0,
  },
  {
    id: "cd-2014-3",
    type: "cd",
    year: 2014,
    title: "Konzertwertungsspiel Pöls",
    date: "16.11.2014",
    format: "2 CDs",
    price: 20.0,
  },

  // Konzerte 2013
  {
    id: "cd-2013-1",
    type: "cd",
    year: 2013,
    title: "Herbstkonzert",
    date: "10.11.2013",
    format: "1 CD",
    price: 15.0,
  },

  // Konzerte 2012
  {
    id: "cd-2012-1",
    type: "cd",
    year: 2012,
    title: "Frühschoppenkonzert",
    date: "22.04.2012",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2012-2",
    type: "cd",
    year: 2012,
    title: "Herbstkonzert",
    date: "04.11.2012",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2012-3",
    type: "cd",
    year: 2012,
    title: "Konzertwertungsspiel Pöls",
    date: "21.10.2012",
    format: "2 CDs",
    price: 20.0,
  },

  // Konzerte 2011
  {
    id: "cd-2011-1",
    type: "cd",
    year: 2011,
    title: "Frühschoppenkonzert",
    date: "03.04.2011",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2011-2",
    type: "cd",
    year: 2011,
    title: "Herbstkonzert",
    date: "06.11.2011",
    format: "1 CD",
    price: 15.0,
  },

  // Konzerte 2010
  {
    id: "cd-2010-1",
    type: "cd",
    year: 2010,
    title: "Frühschoppenkonzert",
    date: "11.04.2010",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2010-2",
    type: "cd",
    year: 2010,
    title: "Herbstkonzert",
    date: "07.11.2010",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "dvd-2010-1",
    type: "dvd",
    year: 2010,
    title: "Herbstkonzert (Video)",
    date: "07.11.2010",
    format: "1 DVD",
    price: 25.0,
  },
  {
    id: "cd-2010-3",
    type: "cd",
    year: 2010,
    title: "Konzertwertungsspiel Pöls",
    date: "21.11.2010",
    format: "3 CDs",
    price: 30.0,
  },

  // Konzerte 2009
  {
    id: "cd-2009-1",
    type: "cd",
    year: 2009,
    title: "Frühschoppenkonzert",
    date: "26.04.2009",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2009-2",
    type: "cd",
    year: 2009,
    title: "Herbstkonzert",
    date: "29.11.2009",
    format: "1 CD",
    price: 15.0,
  },

  // Konzerte 2008
  {
    id: "cd-2008-1",
    type: "cd",
    year: 2008,
    title: "Frühschoppenkonzert",
    date: "06.04.2008",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2008-2",
    type: "cd",
    year: 2008,
    title: "Herbstkonzert",
    date: "09.11.2008",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2008-3",
    type: "cd",
    year: 2008,
    title: "Konzertwertungsspiel Pöls",
    date: "23.11.2008",
    format: "2 CDs",
    price: 20.0,
  },

  // Konzerte 2007
  {
    id: "cd-2007-1",
    type: "cd",
    year: 2007,
    title: "Frühschoppenkonzert",
    date: "22.04.2007",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "dvd-2007-1",
    type: "dvd",
    year: 2007,
    title: "Marschwertung (Video)",
    date: "14.10.2007",
    format: "1 DVD",
    price: 15.0,
  },
  {
    id: "cd-2007-2",
    type: "cd",
    year: 2007,
    title: "Herbstkonzert",
    date: "04.11.2007",
    format: "1 CD",
    price: 15.0,
  },

  // Konzerte 2006
  {
    id: "cd-2006-1",
    type: "cd",
    year: 2006,
    title: "Frühschoppenkonzert",
    date: "23.04.2006",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2006-2",
    type: "cd",
    year: 2006,
    title: "Steirischer Bläsertag",
    date: "26.05.2006",
    format: "2 CDs",
    price: 20.0,
  },
  {
    id: "cd-2006-3",
    type: "cd",
    year: 2006,
    title: "Herbstkonzert",
    date: "05.11.2006",
    format: "1 CD",
    price: 15.0,
  },
  {
    id: "cd-2006-4",
    type: "cd",
    year: 2006,
    title: "Konzertwertungsspiel Pöls",
    date: "19.11.2006",
    format: "2 CDs",
    price: 20.0,
  },

  // Konzerte 2005
  {
    id: "dvd-2005-1",
    type: "dvd",
    year: 2005,
    title: "Kirchenkonzert (Video)",
    date: "05.11.2005",
    format: "2 DVDs",
    price: 35.0,
  },

  // Konzerte 2004
  {
    id: "dvd-2004-1",
    type: "dvd",
    year: 2004,
    title: "Herbstkonzert (Video)",
    date: "07.11.2004",
    format: "1 DVD",
    price: 25.0,
  },

  // Konzerte 2003
  {
    id: "dvd-2003-1",
    type: "dvd",
    year: 2003,
    title: "Herbstkonzert (Video)",
    date: "09.11.2003",
    format: "1 DVD",
    price: 25.0,
  },

  // Konzerte 2002
  {
    id: "cd-2002-1",
    type: "cd",
    year: 2002,
    title: "Herbstkonzert",
    date: "10.11.2002",
    format: "1 CD",
    price: 15.0,
  },
  // Fanartikel
  {
    id: "fan-tshirt",
    type: "fanartikel",
    title: "T-Shirt",
    price: 20.0, // Preis bitte noch anpassen, falls anders
  },
  {
    id: "fan-polo",
    type: "fanartikel",
    title: "Polo Shirt",
    price: 25.0, // Preis bitte noch anpassen, falls anders
  },
  {
    id: "fan-chronik",
    type: "fanartikel",
    title: "Chronik der Werkskapelle Zeltweg",
    price: 10.0,
  },
  {
    id: "fan-marke",
    type: "fanartikel",
    title: "Sondermarke der Werkskapelle Zeltweg",
    price: 5.0, // Beispielpreis
  },
  {
    id: "fan-lesezeichen",
    type: "fanartikel",
    title: "Lesezeichen 130 Jahre Werkskapelle Zeltweg",
    price: 3.0, // Beispielpreis
  },
  {
    id: "fan-bildband",
    type: "fanartikel",
    title: "Bildband 130 Jahre Werkskapelle Zeltweg",
    price: 30.0, // Beispielpreis
  },
  {
    id: "fan-usb",
    type: "fanartikel",
    title: "USB-Stick Werkskapelle-Zeltweg (ohne Daten)",
    price: 5.0,
  },
  {
    id: "cd-2025-1",
    type: "cd",
    year: 2025,
    title: "Frühschoppenkonzert",
    date: "06.04.2025",
    format: "1 CD",
    price: 15.0,
  },
];

function groupBy(array, key) {
  return array.reduce((result, item) => {
    (result[item[key]] = result[item[key]] || []).push(item);
    return result;
  }, {});
}

export default function Shop() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 1. Nach Kategorien gruppieren
  const categorizedItems = {
    Konzerte: shopItems.filter(
      (item) => item.type === "cd" || item.type === "dvd"
    ),
    Fanartikel: shopItems.filter((item) => item.type === "fanartikel"),
  };

  // 2. Konzerte nach Jahr gruppieren und sortieren (absteigend)
  const concertsByYear = groupBy(categorizedItems.Konzerte, "year");
  const sortedYears = Object.keys(concertsByYear)
    .map(Number)
    .sort((a, b) => b - a); // absteigend sortieren

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const shippingCost = total > 0 ? 4.5 : 0;

  return (
    <Layout>
      <main className="max-w-6xl mx-auto p-10 bg-white rounded-lg shadow text-black">
        <h1 className="text-4xl font-bold text-center text-gold mb-10">
          Shop – CDs & Fanartikel
        </h1>

        {/* Warenkorb zuerst */}
        <section className="bg-gray-100 p-6 rounded shadow-md mt-10">
          <h2 className="text-2xl font-semibold text-gold mb-4">
            🛒 Warenkorb
          </h2>
          {cart.length === 0 ? (
            <p className="text-gray-600">Keine Artikel im Warenkorb.</p>
          ) : (
            <ul className="divide-y divide-gray-300 mb-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="py-2 flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-600">
                      {item.quantity} × {item.price.toFixed(2)} €
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Entfernen
                  </button>
                </li>
              ))}
            </ul>
          )}
          {cart.length > 0 && (
            <>
              <p className="text-right mb-2 text-sm text-gray-700">
                Versandkosten: {shippingCost.toFixed(2)} €
              </p>
              <p className="text-right font-semibold text-lg">
                Gesamt: {(total + shippingCost).toFixed(2)} €
              </p>
            </>
          )}
        </section>

        {/* Artikel nach Kategorien (z.B. Fanartikel) */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gold">Fanartikel</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorizedItems.Fanartikel.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-md bg-white"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Preis: {item.price.toFixed(2)} €
                </p>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-gold hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded"
                >
                  In den Warenkorb
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Konzerte nach Jahr */}
        {sortedYears.map((year) => (
          <section key={year} className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-gold">{year}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {concertsByYear[year].map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-md bg-white"
                >
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    {item.date} — {item.format}
                  </p>
                  <p className="text-sm font-semibold mb-4">
                    Preis: {item.price.toFixed(2)} €
                  </p>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-gold hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded"
                  >
                    In den Warenkorb
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </Layout>
  );
}
