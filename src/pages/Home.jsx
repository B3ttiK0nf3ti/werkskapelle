import React from "react";
import Layout from "../components/Layout"; // Pfad anpassen, je nach Ordnerstruktur

export default function Home() {
  return (
    <Layout>
      <header className="text-center mb-8">
        <div className="flex justify-center items-center gap-4 mb-2">
          <img
            src="/images/glueck_auf.gif"
            alt="Glück Auf"
            height={20}
            className="inline-block"
          />
          <h1 id="head3" className="text-xl font-bold">
            Ein herzliches "Glück Auf!" auf der Homepage
          </h1>
          <img
            src="/images/glueck_auf.gif"
            alt="Glück Auf"
            height={20}
            className="inline-block"
          />
        </div>
        <p id="head2" className="text-lg font-semibold mb-1">
          der
        </p>
        <p id="head4" className="text-2xl font-semibold">
          Werkskapelle Zeltweg
        </p>
      </header>

      <section className="w-full max-w-4xl">
        <img
          src="/images/WKZ_startbild.jpg"
          alt="Orchester der Werkskapelle Zeltweg"
          className="mx-auto mb-6 rounded shadow-lg"
          style={{ maxWidth: "100%", height: "auto" }}
        />

        <article className="mb-8 px-4 text-justify leading-relaxed">
          Die Werkskapelle besteht aus{" "}
          <a
            href="/html/wkz_orchester-1.htm"
            className="underline hover:text-yellow-400"
            rel="noreferrer"
          >
            Musikern
          </a>{" "}
          jeder Altersstufe, wobei erfreulicherweise großes Interesse beim
          Nachwuchs besteht, der in der Musikschule Zeltweg ausgebildet wird. Im
          Stand der heutigen Werkskapelle sind neben{" "}
          <a
            href="/html/wkz_werk.htm"
            className="underline hover:text-yellow-400"
            rel="noreferrer"
          >
            Werksangehörigen
          </a>{" "}
          als Musiker auch Musiklehrer, Studenten, Schüler,
          Bundesheerangehörige, Lehrlinge, Angestellte der Privatwirtschaft und
          agile Pensionisten tätig. Ziel der Probenarbeit der Zukunft soll eine
          größere Aufgeschlossenheit gegenüber der Originalblasmusik und der
          zeitgenössischen Unterhaltungsmusik sein. Mit Stolz verwahrt das
          Orchester mehrere{" "}
          <a
            href="/html/wkz_chronik-1.htm"
            className="underline hover:text-yellow-400"
            rel="noreferrer"
          >
            Steirische Panther und Robert Stolz-Preise
          </a>
          .
        </article>

        <hr className="border-t border-gray-600 mb-8" />

        <nav className="flex justify-center gap-8">
          <a
            href="http://www.facebook.com/pages/Werkskapelle-Zeltweg/212803062113848"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img
              src="/images/Facebook_Logo_Primary.png"
              alt="Werkskapelle Zeltweg auf Facebook"
              width={24}
              height={25}
              className="hover:opacity-75"
            />
          </a>

          <a
            href="https://www.instagram.com/werkskapellezeltweg/?hl=de-de"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src="/images/Instagram_icon.png"
              alt="Werkskapelle Zeltweg auf Instagram"
              width={24}
              height={25}
              className="hover:opacity-75"
            />
          </a>

          <a
            href="https://www.tiktok.com/@werkskapelle_zeltweg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <img
              src="/images/Symbol-Tiktok.png"
              alt="Werkskapelle Zeltweg auf TikTok"
              width={24}
              height={25}
              className="hover:opacity-75"
            />
          </a>
        </nav>
      </section>
    </Layout>
  );
}
