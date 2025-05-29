import React from "react";

export default function Layout({ children }) {
  return (
    <main className="bg-black min-h-screen flex flex-col items-center p-6">
      {/* Navbar */}

      {/* Weißer Content-Container */}
      <section className="w-full max-w-4xl bg-white text-black rounded p-6 shadow-md">
        {children}
      </section>
    </main>
  );
}
