import React from "react";
import Layout from "../components/Layout";

const events = [
  {
    date: "04.03.2025",
    title: "Faschingsumzug Zeltweg | Quintett",
    time: "10:00",
  },
  { date: "04.03.2025", title: "Faschingsumzug Judenburg", time: "14:00" },
  {
    date: "06.04.2025",
    title: "Frühschoppenkonzert | Einspielprobe um 08:45 Uhr",
    time: "10:00",
  },
  {
    date: "20.04.2025",
    title: "Osterweckruf | Ausrückung mit Mantel",
    time: "04:00",
  },
  { date: "25.04.2025", title: "Murtalwiesen Eröffnung", time: "19:30" },
  {
    date: "01.05.2025",
    title: "Maiweckruf | danach Maifeier Zeltweghalle",
    time: "06:00",
  },
  { date: "09.05.2025", title: "AINOVA Eröffnung", time: "13:45" },
  { date: "18.05.2025", title: "Erstkommunion", time: "08:45" },
  {
    date: "22.05.2025",
    title: "Maiandacht | Quintett | Hangweg",
    time: "17:00",
  },
  { date: "05.06.2025", title: "Althea Rothenthurm | Quintett", time: "15:00" },
  { date: "08.06.2025", title: "Bezirksmusikerfest Obdach", time: "10:00" },
  { date: "19.06.2025", title: "Frohnleichnam | Quintett", time: "08:45" },
  {
    date: "29.06.2025",
    title: "Patrozinium Stadtpfarrkirche Zeltweg | Quintett",
    time: "08:45",
  },
  { date: "02.07.2025", title: "Schlosskonzert in Gmunden", time: "19:30" },
  { date: "13.09.2025", title: "Jubiläumsfeier Holz Papst", time: "" },
  { date: "21.09.2025", title: "Erntedank", time: "" },
  { date: "27.09.2025", title: "Marschmusikwertung Pöls", time: "14:00" },
  {
    date: "01.11.2025",
    title: "ÖKB Totengedenken (09:00 Einspielen im Probelokal)",
    time: "10:00",
  },
  { date: "01.11.2025", title: "Gräbersegnung | Quintett", time: "14:30" },
  { date: "09.11.2025", title: "Herbstkonzert", time: "17:00" },
  { date: "05.12.2025", title: "Barbarafeier", time: "" },
  { date: "12.12.2025", title: "Weihnachtsfeier Sandvik | Quintett", time: "" },
  {
    date: "13.12.2025",
    title: "Weihnachtsfeier VAE, ÖKB, Pensionisten | Quintett",
    time: "",
  },
  { date: "24.12.2025", title: "Turmblasen | Quintett", time: "" },
];

const weekdays = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
const months = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

function parseDate(dateStr) {
  const [day, month, year] = dateStr.split(".").map(Number);
  return new Date(year, month - 1, day);
}

function groupEventsByMonth(events) {
  const grouped = {};
  events.forEach((event) => {
    const dateObj = parseDate(event.date);
    const monthName = months[dateObj.getMonth()];
    if (!grouped[monthName]) grouped[monthName] = [];
    grouped[monthName].push({ ...event, dateObj });
  });
  return grouped;
}

function formatDateICS(dateStr, timeStr) {
  const [day, month, year] = dateStr.split(".").map(Number);
  let [hour, min] = timeStr.split(":");
  hour = hour ? hour.padStart(2, "0") : "00";
  min = min ? min.padStart(2, "0") : "00";
  return `${year}${month.toString().padStart(2, "0")}${day
    .toString()
    .padStart(2, "0")}T${hour}${min}00`;
}

function addOneHour(dtStart) {
  const year = parseInt(dtStart.slice(0, 4));
  const month = parseInt(dtStart.slice(4, 6)) - 1;
  const day = parseInt(dtStart.slice(6, 8));
  const hour = parseInt(dtStart.slice(9, 11));
  const min = parseInt(dtStart.slice(11, 13));
  const date = new Date(year, month, day, hour, min);
  date.setHours(date.getHours() + 1);
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, "0");
  const d = date.getDate().toString().padStart(2, "0");
  const h = date.getHours().toString().padStart(2, "0");
  const mi = date.getMinutes().toString().padStart(2, "0");
  return `${y}${m}${d}T${h}${mi}00`;
}

function formatDateICSNow() {
  const date = new Date();
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function createICS(event) {
  const dtStart = formatDateICS(event.date, event.time || "00:00");
  const dtEnd = addOneHour(dtStart);
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Werkskapelle Zeltweg//Termin//DE
BEGIN:VEVENT
UID:${Math.random().toString(36).substring(2, 15)}@werkskapelle-zeltweg
DTSTAMP:${formatDateICSNow()}
DTSTART:${dtStart}
DTEND:${dtEnd}
SUMMARY:${event.title.replace(/\|/g, "-")}
DESCRIPTION:${event.title.replace(/\|/g, "-")}
END:VEVENT
END:VCALENDAR`;
  return new Blob([icsContent], { type: "text/calendar" });
}

function generateICSFile(events) {
  const pad = (num) => String(num).padStart(2, "0");

  const toICSDate = (dateStr, timeStr = "00:00") => {
    const [day, month, year] = dateStr.split(".").map(Number);
    const [hour, minute] = timeStr ? timeStr.split(":").map(Number) : [0, 0];
    return `${year}${pad(month)}${pad(day)}T${pad(hour)}${pad(minute)}00`;
  };

  let icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "CALSCALE:GREGORIAN",
    "PRODID:-//Werkskapelle Zeltweg//DE",
  ];

  events.forEach((event, i) => {
    const start = toICSDate(event.date, event.time || "00:00");
    const end = toICSDate(event.date, event.time || "01:00");
    icsContent.push(
      "BEGIN:VEVENT",
      `UID:event-${i}@werkskapelle.at`,
      `DTSTAMP:${formatDateICSNow()}`,
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.title}`,
      "END:VEVENT"
    );
  });

  icsContent.push("END:VCALENDAR");
  return icsContent.join("\r\n");
}

function downloadAllICS(events) {
  const icsData = generateICSFile(events);
  const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "werkskapelle-termine.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export default function Calendar() {
  const today = new Date();
  const sortedEvents = [...events].sort(
    (a, b) => parseDate(a.date) - parseDate(b.date)
  );
  const pastEvents = sortedEvents.filter(
    (event) => parseDate(event.date) < today
  );
  const futureEvents = sortedEvents.filter(
    (event) => parseDate(event.date) >= today
  );
  const pastGrouped = groupEventsByMonth(pastEvents);
  const futureGrouped = groupEventsByMonth(futureEvents);

  const downloadICS = (event) => {
    const blob = createICS(event);
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${event.title.replace(/\s/g, "_").substring(0, 20)}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const renderMonthEvents = (monthName, events) => (
    <div key={monthName} className="mb-8">
      <h2 className="text-xl font-bold text-gold mb-4 border-b border-gold pb-1">
        {monthName}
      </h2>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map(({ dateObj, date, title, time }, idx) => (
          <div
            key={idx}
            className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between"
          >
            <div>
              <div className="text-xs text-gray-500 mb-1">
                {weekdays[dateObj.getDay()]}, {date}
              </div>
              <h3 className="text-base font-semibold text-black mb-1">
                {title}
              </h3>
              <div className="text-xs text-gray-700 mb-2">
                Uhrzeit: {time || "–"}
              </div>
            </div>

            <button
              onClick={() => downloadICS({ date, title, time })}
              className="self-start bg-gold text-black px-3 py-1.5 rounded-md hover:bg-yellow-400 transition text-sm"
              aria-label={`Termin "${title}" in Kalender importieren`}
            >
              In Kalender importieren
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      <main className="max-w-5xl mx-auto bg-white p-10 rounded-lg shadow-lg text-black">
        <div className="flex justify-center mb-10">
          <button
            onClick={() => downloadAllICS(events)}
            className="bg-gold text-black font-semibold px-6 py-3 rounded hover:bg-yellow-400 transition"
          >
            Alle Termine in Kalender exportieren
          </button>
        </div>

        <h1 className="text-4xl font-extrabold text-center text-gold mb-12 tracking-wide">
          Anstehende Termine
        </h1>
        {Object.keys(futureGrouped).length === 0 && (
          <p className="text-center text-gray-700 mb-8">
            Keine anstehenden Termine.
          </p>
        )}
        {Object.entries(futureGrouped).map(([month, evts]) =>
          renderMonthEvents(month, evts)
        )}

        <hr className="my-14 border-gold" />

        <h1 className="text-4xl font-extrabold text-center text-gold mb-12 tracking-wide">
          Abgelaufene Termine
        </h1>
        {Object.keys(pastGrouped).length === 0 && (
          <p className="text-center text-gray-700 mb-8">
            Keine abgelaufenen Termine.
          </p>
        )}
        {Object.entries(pastGrouped).map(([month, evts]) =>
          renderMonthEvents(month, evts)
        )}
      </main>
    </Layout>
  );
}
