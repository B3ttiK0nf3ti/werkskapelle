import { useState } from "react";
import Layout from "../components/Layout";

const members = [
  {
    name: "BBakk. art. Herbert Bauer",
    title: "Kapellmeister",
    section: ["Vorstand", "Orchesterteil 4"],
    instrument: "Klarinette, Schlagwerk",
    info: `absolvierte die Höhere Technische Lehranstalt für Elektrotechnik in Kapfenberg und studierte Klarinette, Schlagwerk und Instrumentalpädagogik an der Musikhochschule in Graz, wo er auch den Kapellmeisterlehrgang abschloss. 1983 bis 1988 absolvierte er den Präsenzdienst bei der Militärmusik Steiermark. Seit 1994 dirigiert er die Werkskapelle Zeltweg. Verleihung des zweifachen akademischen Grades "Bakkalaureus der Künste" im Jahr 2007.`,
    image: "/images/members/HerbertBauer.jpg",
    vorstand: true,
    leistungsabzeichen: [
      "Jungmusiker-Leistungsabzeichen in Bronze",
      "Jungmusiker-Leistungsabzeichen in Silber",
      "Jungmusiker-Leistungsabzeichen in Gold",
    ],
    ehrenabzeichen: [
      "Ehrennadel in Gold",
      "Ehrennadel in Silber",
      "Ehrenzeichen 10 Jahre in Bronze",
      "Ehrenzeichen 15 Jahre in Silber",
      "Ehrenzeichen 25 Jahre in Silber-Gold mit Miniatur",
      "Ehrenzeichen 30 Jahre in Silber-Gold mit Miniatur",
      "Ehrenzeichen 40 Jahre in Gold mit Miniatur",
      "Verdienstkreuz in Bronze am Band & Miniatur",
      "Verdienstkreuz in Gold am Band & Miniatur",
      "Verdienstkreuz in Gold mit Stern & Miniatur",
      "Verdienstkreuz in Silber am Band & Miniatur",
      "Verdienstkreuz in Silber mit Stern & Miniatur",
    ],
    eintrittsdatum: "01.01.1977",
  },
  {
    name: "Johann Mayer",
    title: "Stellvertretender Kassier",
    section: ["Vorstand"],
    instrument: "",
    info: `war als Werkmeister bei der ehemaligen VOEST-ALPINE Bergtechnik GmbH (heute Sandvik Mining and Construction G.m.b.H.) für die Endmontage der Alpine Miner zuständig. Er bekleidete über 40 Jahre die Funktion des geschäftsführenden Obmanns der Werkskapelle Zeltweg.`,
    image: "/images/members/JohannMayer.jpg",
    vorstand: true,
    leistungsabzeichen: "",
    ehrenabzeichen: [
      "Ehrennadel in Gold",
      "Ehrennadel in Silber",
      "Ehrenzeichen 10 Jahre in Bronze",
      "Ehrenzeichen 15 Jahre in Silber mit Miniatur",
      "Ehrenzeichen 15 Jahre in Silber",
      "Ehrenzeichen 25 Jahre in Gold",
      "Ehrenzeichen 25 Jahre in Silber-Gold mit Miniatur",
      "Ehrenzeichen 30 Jahre in Silber-Gold mit Miniatur",
      "Ehrenzeichen 35 Jahre in Gold",
      "Ehrenzeichen 40 Jahre in Gold mit Miniatur",
      "Ehrenzeichen 50 Jahre in Gold",
      "ÖBV-Verdienstmedaille in Bronze",
      "ÖBV-Verdienstmedaille in Gold",
      "Verdienstkreuz in Bronze am Band & Miniatur",
      "Verdienstkreuz in Gold am Band & Miniatur",
      "Verdienstkreuz in Gold mit Stern & Miniatur",
      "Verdienstkreuz in Silber am Band & Miniatur",
    ],
    eintrittsdatum: "01.01.1964",
  },
  {
    name: "Dipl.-Ing. Heinz Gach",
    title: "Ehrenobmann",
    section: ["Vorstand"],
    instrument: "",
    info: `war von 1978 bis 2017 Obmann der Werkskapelle Zeltweg. Seit Jänner 2017 ist er Ehrenobmann.`,
    image: "/images/members/HeinzGach.jpg",
    vorstand: true,
    leistungsabzeichen: "",
    ehrenabzeichen: [
      "Ehrennadel in Gold",
      "Ehrennadel in Silber",
      "Ehrenzeichen 10 Jahre in Bronze",
      "Ehrenzeichen 15 Jahre in Silber mit Miniatur",
      "Ehrenzeichen 15 Jahre in Silber",
      "Ehrenzeichen 25 Jahre in Gold",
      "Ehrenzeichen 25 Jahre in Silber-Gold mit Miniatur",
      "Ehrenzeichen 30 Jahre in Silber-Gold mit Miniatur",
      "Ehrenzeichen 35 Jahre in Gold",
      "Ehrenzeichen 40 Jahre in Gold mit Miniatur",
      "Ehrenzeichen 50 Jahre in Gold",
      "ÖBV-Verdienstmedaille in Bronze",
      "ÖBV-Verdienstmedaille in Gold",
      "Verdienstkreuz in Bronze am Band & Miniatur",
      "Verdienstkreuz in Gold am Band & Miniatur",
      "Verdienstkreuz in Gold mit Stern & Miniatur",
      "Verdienstkreuz in Silber am Band & Miniatur",
    ],
    eintrittsdatum: "01.01.1963",
  },
  {
    name: "Prof. Willibald Kremser",
    title: "Ehrenkapellmeister",
    section: ["Vorstand"],
    instrument: "",
    info: `war von 1964 bis 1994 Kapellmeister der Werkskapelle Zeltweg. Seit Dezember 1994 ist er Ehrenkapellmeister.`,
    image: "/images/members/WillibaldKremser.jpg",
    vorstand: true,
    leistungsabzeichen: "",
    ehrenabzeichen: [
      "Ehrennadel in Gold",
      "Ehrenzeichen 15 Jahre in Silber",
      "Ehrenzeichen 25 Jahre in Gold",
      "Ehrenzeichen 40 Jahre in Gold mit Miniatur",
      "Ehrenzeichen 50 Jahre in Gold",
      "Ehrenzeichen 60 Jahre in Gold mit Miniatur",
      "Ehrenzeichen 70 Jahre in Gold mit Miniatur",
      "ÖBV-Verdienstmedaille in Bronze",
      "ÖBV-Verdienstmedaille in Silber",
      "Verdienstkreuz in Bronze am Band & Miniatur",
      "Verdienstkreuz in Silber am Band & Miniatur",
    ],
    eintrittsdatum: "01.01.1946",
  },
  {
    name: "Brigitte Stengg",
    section: ["Orchesterteil 1"],
    instrument: "Querflöte, Piccolo",
    info: "Brigitte begeistert mit feinem Klang auf Querflöte und Piccolo.",
    image: "/images/members/BrigitteStengg.jpg",
  },
  {
    name: "Manuela Stocker",
    section: ["Orchesterteil 1"],
    instrument: "Querflöte/Piccolo",
    info: "Manuela glänzt mit klarem Klang auf Querflöte und Piccolo.",
    image: "/images/members/ManuelaStocker.jpg",
  },
  {
    name: "Julia Mayer",
    section: ["Orchesterteil 1"],
    instrument: "Querflöte",
    info: "Julia bringt Leichtigkeit und Präzision auf der Querflöte.",
    image: "/images/members/JuliaMayer.jpg",
  },
  {
    name: "Birgit Obersberger",
    section: ["Orchesterteil 1"],
    instrument: "Querflöte",
    info: "Birgit verleiht dem Flötenregister viel Klangfarbe.",
    image: "/images/members/BirgitObersberger.jpg",
  },
  {
    name: "Selina Umundum",
    section: ["Orchesterteil 1"],
    instrument: "Querflöte/Piccolo",
    info: "Selina begeistert mit technischer Versiertheit auf Piccolo und Querflöte.",
    image: "/images/members/SelinaUmundum.jpg",
  },
  {
    name: "Viktoria Sturmann",
    section: ["Orchesterteil 1"],
    instrument: "Querflöte",
    info: "Viktoria bereichert das Orchester mit ihrem warmen Flötenton.",
    image: "/images/members/ViktoriaSturmann.jpg",
  },
  {
    name: "Larissa Kaiser",
    section: ["Orchesterteil 1"],
    instrument: "Querflöte",
    info: "Larissa überzeugt durch Präzision und Musikalität.",
    image: "/images/members/LarissaKaiser.jpg",
  },
  {
    name: "Mag. Natalie Hartner",
    section: ["Orchesterteil 1"],
    instrument: "Querflöte",
    info: "Natalie bringt Erfahrung und Tiefe ins Flötenregister.",
    image: "/images/members/NatalieHartner.jpg",
  },
  {
    name: "Daniele Umundum",
    section: ["Orchesterteil 1"],
    instrument: "Querflöte",
    info: "Daniele ergänzt das Ensemble mit einem feinen Klangbild.",
    image: "/images/members/DanieleUmundum.jpg",
  },
  {
    name: "Sarah Scherz",
    section: ["Orchesterteil 1"],
    instrument: "Querflöte",
    info: "Sarahs Spiel bringt Eleganz in jedes Stück.",
    image: "/images/members/SarahScherz.jpg",
  },
  {
    name: "Mag. Eva Tockner",
    section: ["Orchesterteil 1"],
    instrument: "Querflöte",
    info: "Eva überzeugt mit musikalischem Gespür und Ausdruck.",
    image: "/images/members/EvaTockner.jpg",
  },
  {
    name: "Alexandra Lackner",
    section: ["Orchesterteil 1"],
    instrument: "Querflöte",
    info: "Alexandra bringt frischen Wind ins Flötenregister.",
    image: "/images/members/AlexandraLackner.jpg",
  },
  {
    name: "Nicole Stock",
    section: ["Orchesterteil 1"],
    instrument: "Oboe, Fagott, Englischhorn",
    info: "Nicole ist ein Multitalent auf Holzblasinstrumenten.",
    image: "/images/members/NicoleStock.jpg",
  },
  {
    name: "Nora Schlager",
    section: ["Orchesterteil 1"],
    instrument: "Fagott",
    info: "Nora bringt mit dem Fagott Tiefe und Charme ins Orchester.",
    image: "/images/members/NoraSchlager.jpg",
  },
  {
    name: "Ines Scherz",
    section: ["Orchesterteil 1"],
    instrument: "Fagott",
    info: "Ines überzeugt mit feiner Tiefe und sonorem Klang.",
    image: "/images/members/InesScherz.jpg",
  },
  {
    name: "Peter Kreutzer",
    section: ["Orchesterteil 1"],
    instrument: "Klarinette",
    info: "Peter ist ein engagierter Klarinettist mit einer Leidenschaft für Blasmusik.",
    image: "/images/members/PeterKreutzer.jpg",
  },
  {
    name: "Hubert Sittlinger",
    section: ["Orchesterteil 1"],
    instrument: "Klarinette",
    info: "Hubert begeistert durch Erfahrung und Klangvielfalt.",
    image: "/images/members/HubertSittlinger.jpg",
  },
  {
    name: "Meike Reichstaler, MSc",
    section: ["Orchesterteil 1"],
    instrument: "Klarinette",
    info: "Meike vereint Wissenschaft und Musik in perfekter Harmonie.",
    image: "/images/members/MeikeReichstaler.jpg",
  },
  {
    name: "Fabienne Knolly",
    section: ["Orchesterteil 1"],
    instrument: "Klarinette",
    info: "Fabienne spielt mit großer Leidenschaft und feinem Ton.",
    image: "/images/members/FabienneKnolly.jpg",
  },
  {
    name: "Tobias Umundum",
    section: ["Orchesterteil 1"],
    instrument: "Klarinette",
    info: "Tobias bringt Energie und Spielfreude in die Klarinettengruppe.",
    image: "/images/members/TobiasUmundum.jpg",
  },
  {
    name: "Franz Kamper",
    section: ["Orchesterteil 1"],
    instrument: "Klarinette",
    info: "Franz bereichert das Orchester mit Ausdruck und Technik.",
    image: "/images/members/FranzKamper.jpg",
  },
  {
    name: "Sandra Scherz",
    section: ["Orchesterteil 1"],
    instrument: "Klarinette",
    info: "Sandra überzeugt durch feine Intonation und Musikalität.",
    image: "/images/members/SandraScherz.jpg",
  },
  {
    name: "Mag. Ewald Wilding",
    section: ["Orchesterteil 1"],
    instrument: "Klarinette",
    info: "Ewald verbindet Virtuosität mit musikalischer Tiefe.",
    image: "/images/members/EwaldWilding.jpg",
  },
  {
    name: "Tobias Sprung",
    section: ["Orchesterteil 1"],
    instrument: "Klarinette",
    info: "Tobias begeistert mit seiner Technik und Dynamik.",
    image: "/images/members/TobiasSprung.jpg",
  },
  {
    name: "Katharina Mayer",
    section: ["Orchesterteil 1"],
    instrument: "Klarinette",
    info: "Katharina überzeugt mit musikalischem Feingefühl.",
    image: "/images/members/KatharinaMayer.jpg",
  },
  {
    name: "Laura Kuttner",
    section: ["Orchesterteil 1"],
    instrument: "Klarinette",
    info: "Laura bringt Frische und Präzision ins Klarinettenregister.",
    image: "/images/members/LauraKuttner.jpg",
  },
  {
    name: "Sabine Ploder",
    section: ["Orchesterteil 1"],
    instrument: "Klarinette",
    info: "Sabine ergänzt das Ensemble mit einem warmen Ton.",
    image: "/images/members/SabinePloder.jpg",
  },
  {
    name: "Anja Galler",
    section: ["Orchesterteil 1"],
    instrument: "Klarinette",
    info: "Anja sorgt für musikalische Vielfalt im Ensemble.",
    image: "/images/members/AnjaGaller.jpg",
  },
  // Orchesterteil 2
  {
    name: "Ulrich Hollerer",
    section: ["Orchesterteil 2"],
    instrument: "Saxophon",
    info: "war Lehrer an der Musikschule Zeltweg und unterrichtete bis zu seiner Pensionierung die Instrumente Klarinette, Saxophon und Fagott.",
    image: "/images/members/UlrichHollerer.jpg",
    vorstand: true,
    leistungsabzeichen: "",
    ehrenabzeichen: [
      "Ehrennadel in Gold",
      "Ehrennadel in Silber",
      "Ehrenzeichen 15 Jahre in Silber",
      "Ehrenzeichen 25 Jahre in Gold",
      "Ehrenzeichen 30 Jahre in Silber-Gold mit Miniatur",
      "Ehrenzeichen 40 Jahre in Gold mit Miniatur",
      "Verdienstkreuz in Bronze am Band & Miniatur",
      "Verdienstkreuz in Silber am Band & Miniatur",
    ],
    eintrittsdatum: "01.01.1974",
  },
  {
    name: "Gabriel Reiter",
    section: ["Orchesterteil 2"],
    instrument: "Altsaxophon",
    info: "Gabriel verleiht dem Altsaxophon einen besonderen Klang.",
    image: "/images/members/GabrielReiter.jpg",
  },
  {
    name: "Ing. Markus Umundum",
    section: ["Orchesterteil 2"],
    instrument: "Altsaxophon",
    info: "Markus sorgt mit seinem Spiel für Dynamik und Präsenz.",
    image: "/images/members/MarkusUmundum.jpg",
  },
  {
    name: "Astrid Kranz",
    section: ["Orchesterteil 2"],
    instrument: "Tenorsaxophon",
    info: "Astrid überzeugt mit ihrem ausdrucksstarken Saxophonspiel.",
    image: "/images/members/AstridKranz.jpg",
  },
  {
    name: "DI Thomas Groß",
    section: ["Orchesterteil 2"],
    instrument: "Tenorsaxophon",
    info: "ist Berechnungsingenieur im Bereich Strukturfestigkeit bei der Sandvik Mining and Construction G.m.b.H. Er übernimmt seit 01.07.2024 die Agenden des Kassiers und kümmert sich unter anderem um alle Fragen der Finanzierung der Werkskapelle Zeltweg.",
    image: "/images/members/ThomasGross.jpg",
    vorstand: true,
    leistungsabzeichen: "",
    ehrenabzeichen: [
      "Ehrennadel in Gold",
      "Ehrennadel in Silber",
      "Ehrenzeichen 10 Jahre in Bronze mit Miniatur",
      "Ehrenzeichen 15 Jahre in Silber mit Miniatur",
      "Ehrenzeichen 25 Jahre in Silber-Gold mit Miniatur",
    ],
    eintrittsdatum: "01.02.2022",
  },
  {
    name: "Mag. Tanja Gugl",
    section: ["Orchesterteil 2"],
    instrument: "Waldhorn",
    info: "Tanja bringt Wärme und Ausdruck ins Waldhornregister.",
    image: "/images/members/TanjaGugl.jpg",
  },
  {
    name: "Rosemarie Bauer",
    section: ["Orchesterteil 2"],
    instrument: "Waldhorn",
    info: "Rosemarie begeistert mit weichem Klang und Präzision.",
    image: "/images/members/RosemarieBauer.jpg",
  },
  {
    name: "Mag. Carmen Bauer",
    section: ["Orchesterteil 2"],
    instrument: "Waldhorn",
    info: "Carmen verleiht dem Waldhornensemble eine besondere Note.",
    image: "/images/members/CarmenBauer.jpg",
  },
  {
    name: "Dr. Wolfgang Öfner",
    section: ["Orchesterteil 2"],
    instrument: "Waldhorn",
    info: "Wolfgang überzeugt mit Erfahrung und ausdrucksstarkem Spiel.",
    image: "/images/members/WolfgangOefner.jpg",
  },
  {
    name: "Alois Leitner",
    section: ["Orchesterteil 2"],
    instrument: "Flügelhorn",
    info: "Alois brilliert mit gefühlvollen Flügelhorn-Soli.",
    image: "/images/members/AloisLeitner.jpg",
  },
  {
    name: "DI(FH) Wolfgang Stiegmaier MBA",
    section: ["Orchesterteil 2"],
    instrument: "Flügelhorn",
    info: "ist seit Jänner 2017 stellvertretender Obmann der Werkskapelle Zeltweg. Er studierte Bioinformatik und Medizinische Informationstechnologie am Technikum Fachhochschule Kärnten und ist als Vertriebsleiter beim Unternehmen 4a manufacturing GmbH (Teil der 4a Gruppe) in Traboch tätig.",
    image: "/images/members/WolfgangStiegmaier.jpg",
    vorstand: true,
    leistungsabzeichen: "",
    ehrenabzeichen: [
      "Ehrenzeichen 10 Jahre in Bronze mit Miniatur",
      "Ehrenzeichen 15 Jahre in Silber mit Miniatur",
    ],
    eintrittsdatum: "01.01.1994",
  },
  {
    name: "Ing. Christoph Gruber-Veit",
    section: ["Orchesterteil 2"],
    instrument: "Flügelhorn",
    info: "Christoph überzeugt durch gefühlvollen Klang und Technik.",
    image: "/images/members/ChristophGruber-Veit.jpg",
  },
  {
    name: "Ing. Wolfgang Stiegmaier sen.",
    section: ["Orchesterteil 2"],
    instrument: "Flügelhorn",
    info: "absolvierte die Höhere Technische Lehranstalt für Elektrotechnik in Kapfenberg und arbeitete bei der SIEMENS in Wien sowie bei den Österreichischen Bundesbahnen als Leiter der Produktion für Steiermark, Kärnten und Osttirol. Seit seiner Pensionierung ist er als Versicherungsberater für die Österreichische Beamten Versicherung tätig, am 01. Jänner 2023 übernahm er die Funktion des Obmannes der Werkskapelle Zeltweg.",
    image: "/images/members/WolfgangStiegmaierSen.jpg",
    vorstand: true,
    leistungsabzeichen: ["Jungmusiker-Leistungsabzeichen in Bronze"],
    ehrenabzeichen: [
      "Ehrennadel in Gold",
      "Ehrenzeichen 10 Jahre in Bronze mit Miniatur",
      "Ehrenzeichen 15 Jahre in Silber mit Miniatur",
      "Ehrenzeichen 25 Jahre in Gold",
      "Verdienstkreuz in Bronze",
    ],
    eintrittsdatum: "01.01.1972",
  },
  {
    name: "Helmut Kranz",
    section: ["Orchesterteil 2"],
    instrument: "Flügelhorn",
    info: "Helmut begeistert mit seinem ausdrucksstarken Spiel.",
    image: "/images/members/HelmutKranz.jpg",
  },
  {
    name: "Stefan Stani",
    section: ["Orchesterteil 2"],
    instrument: "Tenorhorn",
    info: "Stefan sorgt für Klangtiefe und weichen Ton im Tenorhornregister.",
    image: "/images/members/StefanStani.jpg",
  },
  {
    name: "Dr. Doris Groß",
    section: ["Orchesterteil 2"],
    instrument: "Bariton",
    info: "Doris verbindet musikalisches Feingefühl mit kraftvollem Spiel.",
    image: "/images/members/DorisGross.jpg",
  },
  {
    name: "Hannes Gruber",
    section: ["Orchesterteil 2"],
    instrument: "Bariton",
    info: "Hannes bringt Stabilität und Klangfülle ins Baritonregister.",
    image: "/images/members/HannesGruber.jpg",
  },
  // Orchesterteil 3
  {
    name: "Walter Bauer",
    section: ["Orchesterteil 3"],
    instrument: "Trompete",
    info: "Walter überzeugt mit seinem strahlenden Trompetenklang.",
    image: "/images/members/WalterBauer.jpg",
  },
  {
    name: "Claudia Edlinger",
    section: ["Orchesterteil 3"],
    instrument: "Baßtrompete",
    info: "Claudia bringt mit ihrer Baßtrompete Tiefe und Klangfülle.",
    image: "/images/members/ClaudiaEdlinger.jpg",
  },
  {
    name: "DI Wolfgang Berlinger",
    section: ["Orchesterteil 3"],
    instrument: "Trompete",
    info: "Wolfgang glänzt durch präzises und kraftvolles Trompetenspiel.",
    image: "/images/members/WolfgangBerlinger.jpg",
  },
  {
    name: "Lukas Mayer",
    section: ["Orchesterteil 3"],
    instrument: "Trompete",
    info: "Lukas bringt mit seiner Trompete Klarheit und Energie.",
    image: "/images/members/LukasMayer.jpg",
  },
  {
    name: "Dr. Michael Zuber",
    section: ["Orchesterteil 3"],
    instrument: "Trompete",
    info: "Michael begeistert mit technischem Können und Musikalität.",
    image: "/images/members/MichaelZuber.jpg",
  },
  {
    name: "Christoph Hollerer",
    section: ["Orchesterteil 3"],
    instrument: "Trompete",
    info: "Christoph sorgt für Glanz und Brillanz im Trompetensatz.",
    image: "/images/members/ChristophHollerer.jpg",
  },
  {
    name: "Marcel Stock",
    section: ["Orchesterteil 3"],
    instrument: "Trompete",
    info: "Marcel trägt mit lebendigem Trompetenspiel zum Gesamtklang bei.",
    image: "/images/members/MarcelStock.jpg",
  },
  {
    name: "Robert Bauer",
    section: ["Orchesterteil 3"],
    instrument: "Posaune",
    info: "Robert bringt mit seiner Posaune markante Klangtiefe.",
    image: "/images/members/RobertBauer.jpg",
  },
  {
    name: "Maria Feldbaumer",
    section: ["Orchesterteil 3"],
    instrument: "Posaune",
    info: "Maria beeindruckt mit weichem Ton und präziser Intonation.",
    image: "/images/members/MariaFeldbaumer.jpg",
  },
  {
    name: "Kathrin Reiter",
    section: ["Orchesterteil 3"],
    instrument: "Tuba",
    info: "Kathrin verleiht dem Orchester mit ihrer Tuba Stabilität.",
    image: "/images/members/KathrinReiter.jpg",
  },
  {
    name: "Hannes Prisching",
    section: ["Orchesterteil 3"],
    instrument: "Tuba",
    info: "Hannes sorgt für ein sattes Fundament im Tuba-Register.",
    image: "/images/members/HannesPrisching.jpg",
  },
  {
    name: "Karl Rummel",
    section: ["Orchesterteil 3"],
    instrument: "Tuba",
    info: "Karl ergänzt das Klangbild mit seinem tiefen Tubaklang.",
    image: "/images/members/KarlRummel.jpg",
  },
  {
    name: "Peter Kreuter",
    section: ["Orchesterteil 3"],
    instrument: "Kontrabaß",
    info: "Peter liefert mit seinem Kontrabaß die klangliche Basis.",
    image: "/images/members/PeterKreuter.jpg",
  },
  // Orchesterteil 4
  {
    name: "Roman Maierhofer",
    section: ["Orchesterteil 4"],
    instrument: "Schlagzeug",
    info: "Roman bringt mit seinem Schlagzeug präzisen Rhythmus ins Orchester.",
    image: "/images/members/RomanMaierhofer.jpg",
  },
  {
    name: "Fabian Feyerl",
    section: ["Orchesterteil 4"],
    instrument: "Pauke/Schlagzeug",
    info: "Fabian begeistert mit seinem sicheren Umgang an Pauke und Schlagzeug.",
    image: "/images/members/FabianFeyerl.jpg",
  },
  {
    name: "DI Robert Weitenhüller",
    section: ["Orchesterteil 4"],
    instrument: "Schlagzeug",
    info: "Robert sorgt mit seinem Schlagzeug für den perfekten Takt.",
    image: "/images/members/RobertWeitenhueller.jpg",
  },
  {
    name: "Daniel Hurdes",
    section: ["Orchesterteil 4"],
    instrument: "Schlagzeug",
    info: "Daniel bringt mit seinem Schlagzeug viel Dynamik und Power.",
    image: "/images/members/DanielHurdes.jpg",
  },
  {
    name: "Bettina Weigandt",
    section: ["Orchesterteil 4"],
    instrument: "Schlagzeug",
    info: "Bettina überzeugt mit einem klaren und rhythmischen Spiel am Schlagzeug.",
    image: "/images/members/BettinaWeigandt.jpg",
  },
  {
    name: "Stefan Mayer",
    section: ["Orchesterteil 4"],
    instrument: "Schlagzeug",
    info: "Stefan sorgt für den stabilen Beat im Orchester.",
    image: "/images/members/StefanMayer.jpg",
  },
  {
    name: "Dominik Preis",
    section: ["Orchesterteil 4"],
    instrument: "Schlagzeug",
    info: "Dominik bringt mit seinem Schlagzeug rhythmische Vielfalt ein.",
    image: "/images/members/DominikPreis.jpg",
  },
  {
    name: "Rafael Ramaj",
    section: ["Orchesterteil 4"],
    instrument: "Schlagzeug",
    info: "Rafael liefert mit seinem Schlagzeug präzise Akzente.",
    image: "/images/members/RafaelRamaj.jpg",
  },
  {
    name: "DI(FH) Christian Gerer",
    section: ["Orchesterteil 4"],
    instrument: "Schlagzeug",
    info: "Christian begeistert mit technischem Können am Schlagzeug.",
    image: "/images/members/ChristianGerer.jpg",
  },
  {
    name: "Rene Krenker",
    section: ["Orchesterteil 4"],
    instrument: "Schlagzeug",
    info: "Rene bringt mit seinem Schlagzeug rhythmische Stabilität.",
    image: "/images/members/ReneKrenker.jpg",
  },
];

const FILTER_OPTIONS = [
  "Alle",
  "Orchesterteil 1",
  "Orchesterteil 2",
  "Orchesterteil 3",
  "Orchesterteil 4",
  "Vorstand",
];

function getVisibleSections(sectionArray) {
  return sectionArray.filter((s) => !s.startsWith("Orchesterteil"));
}

function MemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg p-6 relative w-full max-w-3xl max-h-[90vh] overflow-auto sm:max-w-xl sm:max-h-[80vh] md:max-w-3xl md:max-h-[90vh]"
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-gray-700 hover:text-black font-bold text-xl"
        >
          ×
        </button>
        <img
          src={member.image}
          alt={member.name}
          className="w-full object-contain rounded-md mb-5 max-h-[300px] sm:max-h-[400px] md:max-h-[400px]"
        />
        <h2 id="modal-title" className="text-3xl font-bold mb-2">
          {member.name} — {member.title}
        </h2>
        <p className="mb-4 text-gray-700">{member.info}</p>
        {member.instrument && (
          <p className="mt-4">
            <strong>Instrument:</strong> {member.instrument}
          </p>
        )}
        {getVisibleSections(member.section).length > 0 && (
          <p className="mt-4">
            <strong>Sektionen:</strong>{" "}
            {getVisibleSections(member.section).join(", ")}
          </p>
        )}
        {member.leistungsabzeichen?.length > 0 && (
          <div className="mt-4">
            <strong>Leistungsabzeichen:</strong>
            <ul className="list-disc list-inside mt-1">
              {member.leistungsabzeichen.map((abzeichen, idx) => (
                <li key={idx}>{abzeichen}</li>
              ))}
            </ul>
          </div>
        )}
        {member.ehrenabzeichen?.length > 0 && (
          <div className="mt-4">
            <strong>Ehrenabzeichen:</strong>
            <ul className="list-disc list-inside mt-1">
              {member.ehrenabzeichen.map((abzeichen, idx) => (
                <li key={idx}>{abzeichen}</li>
              ))}
            </ul>
          </div>
        )}
        {member.eintrittsdatum && (
          <p className="mt-4">
            <strong>Eintrittsdatum:</strong> {member.eintrittsdatum}
          </p>
        )}
      </div>
    </div>
  );
}

export default function MembersPage() {
  const [selectedFilter, setSelectedFilter] = useState("Alle");
  const [selectedMember, setSelectedMember] = useState(null);

  const filteredMembers = members.filter((m) => {
    if (selectedFilter === "Alle") return true;
    if (selectedFilter === "Vorstand") return m.vorstand === true;
    return m.section.includes(selectedFilter);
  });

  return (
    <Layout>
      <main className="max-w-6xl mx-auto p-10 bg-white rounded-lg shadow-md text-black">
        <h1 className="text-4xl font-extrabold text-center text-gold mb-12">
          Mitglieder
        </h1>

        {/* Filter Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-3 px-4">
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelectedFilter(opt)}
              className={`rounded-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-gold
              ${
                selectedFilter === opt
                  ? "bg-gold text-black shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }
              px-3 py-2 text-sm sm:px-6 sm:py-3 sm:text-base cursor-pointer select-none`}
              aria-pressed={selectedFilter === opt}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Mitglieder Liste */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredMembers.map(
            ({ name, section, instrument, info, image, vorstand }) => (
              <div
                key={name}
                className="border border-gray-300 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
                title={info}
                tabIndex={0}
                role="button"
                aria-label={`${name}, ${instrument}, klick für Details`}
                onClick={() =>
                  setSelectedMember(members.find((m) => m.name === name))
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedMember(members.find((m) => m.name === name));
                  }
                }}
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-56 object-cover rounded-md mb-5"
                />
                <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                <p className="text-lg text-gray-700">{instrument}</p>
                {vorstand ? (
                  <p className="mt-3 text-red-600 font-semibold text-lg">
                    Vorstand
                  </p>
                ) : (
                  getVisibleSections(section).length > 0 && (
                    <p className="mt-3 text-gray-600 text-sm">
                      <strong>Sektionen:</strong>{" "}
                      {getVisibleSections(section).join(", ")}
                    </p>
                  )
                )}
              </div>
            )
          )}
        </div>

        {/* Modal */}
        <MemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      </main>
    </Layout>
  );
}
