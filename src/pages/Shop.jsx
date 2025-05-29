export default function Shop() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shop</h1>
      <p>CDs & Merch bestellen über das Formular:</p>
      <a
        href="DEIN_GOOGLE_FORM_LINK"
        className="text-gold underline"
        target="_blank"
        rel="noreferrer"
      >
        Zum Bestellformular
      </a>

      <div className="mt-4">
        <h2 className="text-xl">Direkt bezahlen (z. B. CD):</h2>
        {/* Hier PayPal Button einbinden */}
      </div>
    </div>
  );
}
