export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-[60vh] py-16 bg-gray-900 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl md:text-4xl font-light text-white mb-8">
          Polityka prywatności i cookies
        </h1>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-light text-white">
            Administrator danych
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Administratorem danych osobowych jest DAVIX. Kontakt e-mail:
            biuro@davix.com.pl.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-light text-white">Cookies</h2>
          <p className="text-gray-300 leading-relaxed">
            Strona internetowa wykorzystuje wyłącznie pliki cookies niezbędne do
            jej prawidłowego działania (np. zapamiętywanie preferencji
            użytkownika). Nie stosujemy plików cookies analitycznych ani
            marketingowych.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Użytkownik może w każdej chwili samodzielnie usunąć lub zablokować
            pliki cookies w ustawieniach swojej przeglądarki. Szczegółowe
            informacje dostępne są w dokumentacji producenta przeglądarki.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-light text-white">Dane osobowe</h2>
          <p className="text-gray-300 leading-relaxed">
            Strona nie zbiera żadnych dodatkowych danych osobowych użytkowników
            i nie prowadzi profilowania.
          </p>
        </section>

        <section className="space-y-3 mb-10">
          <h2 className="text-2xl font-light text-white">Prawa użytkownika</h2>
          <p className="text-gray-300 leading-relaxed">
            - dostępu do swoich danych,
          </p>
          <p className="text-gray-300 leading-relaxed">
            - ich sprostowania, usunięcia lub ograniczenia przetwarzania,
          </p>
          <p className="text-gray-300 leading-relaxed">
            - wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych,
            jeśli uzna, że przetwarzanie danych narusza przepisy RODO.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-light text-white">Kontakt</h2>
          <p className="text-gray-300 leading-relaxed">
            W sprawach związanych z ochroną danych osobowych można kontaktować
            się pod adresem e-mail: biuro@davix.com.pl.
          </p>
        </section>
      </div>
    </main>
  );
}
