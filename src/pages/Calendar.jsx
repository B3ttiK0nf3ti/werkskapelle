export default function Calendar() {
  const events = [
    {
      date: "15. Juni 2025",
      title: "Frühschoppen beim Stadtfest",
      location: "Hauptplatz Zeltweg",
      time: "10:00 Uhr",
    },
    {
      date: "22. September 2025",
      title: "Herbstkonzert",
      location: "Kulturhaus Zeltweg",
      time: "19:30 Uhr",
    },
    {
      date: "24. Dezember 2025",
      title: "Weihnachtsblasen",
      location: "Rundgang durch Zeltweg",
      time: "ganztägig",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gold mb-4">Anstehende Termine</h1>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-black border-l-4 border-gold p-4 shadow-md"
          >
            <p className="text-xl font-semibold">{event.title}</p>
            <p className="text-md">
              {event.date} – {event.time}
            </p>
            <p className="text-sm text-gray-400">{event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
