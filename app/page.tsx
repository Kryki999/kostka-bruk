import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import LightboxGallery from "@/components/LightboxGallery";
import ReviewsSection from "@/components/ReviewsSection";
import StatsSection from "@/components/StatsSection";

const PHONE = "515 960 402";
const EMAIL = "graboowski@wp.pl";

const references = [
  { src: "/referencja1.jpeg", alt: "Referencja 1" },
  { src: "/referencja2.jpeg", alt: "Referencja 2" },
  { src: "/referencja3.jpeg", alt: "Referencja 3" },
  { src: "/referencja4.jpg", alt: "Referencja 4" },
  { src: "/referencja5.jpeg", alt: "Referencja 5" },
  { src: "/referencja6.jpeg", alt: "Referencja 6" },
  { src: "/referencja7.jpeg", alt: "Referencja 7" },
  { src: "/referencja8.jpeg", alt: "Referencja 8" },
  { src: "/referencja9.jpeg", alt: "Referencja 9" },
  { src: "/referencja10.jpeg", alt: "Referencja 10" },
  { src: "/referencja11.jpeg", alt: "Referencja 11" },
];

const services = [
  {
    title: "Układanie kostki brukowej",
    desc: "Kompleksowe układanie kostki brukowej i granitowej. Podjazdy, ścieżki, tarasy, parkingi.",
  },
  {
    title: "Ogrodzenia panelowe",
    desc: "Montaż trwałych i estetycznych ogrodzeń panelowych.",
  },
  {
    title: "Ogrodzenia murowane",
    desc: "Solidne ogrodzenia murowane, które zapewniają prywatność i bezpieczeństwo.",
  },
  {
    title: "Prace ziemne",
    desc: "Korytowanie, niwelacja terenu, wymiana gruntu i przygotowanie podłoża.",
  },
  {
    title: "Odwodnienia",
    desc: "Systemy odprowadzania wody deszczowej, drenaże i studnie chłonne.",
  },
  {
    title: "Doradztwo techniczne",
    desc: "Doradztwo techniczne w doborze materiałów i projektowaniu.",
  },
];

const steps = [
  {
    no: "01",
    title: "Kontakt i wycena",
    desc: "Darmowy pomiar/wycena oraz doradztwo w doborze materiałów.",
  },
  {
    no: "02",
    title: "Przygotowanie podłoża",
    desc: "Korytowanie, podbudowa i zagęszczenie zgodnie ze sztuką.",
  },
  {
    no: "03",
    title: "Montaż i detale",
    desc: "Układ, spadki, krawężniki, docinki – dbałość o szczegóły.",
  },
  {
    no: "04",
    title: "Odbiór i gwarancja",
    desc: "Czyszczenie, wypełnienie fug, instrukcja pielęgnacji i gwarancja.",
  },
];

const gallery = [
  "/visual1.jpeg",
  "/visual2.jpeg",
  "/visual3.jpeg",
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative h-[95vh] min-h-[700px] flex items-center justify-center">
        {/* Tło: obraz + gradient (używamy placeholdera, można podmienić na własne zdjęcie np. /davix-hero.jpg) */}
        <Image
          src="/kostka1.jpg"
          alt="Tło – układanie kostki brukowej"
          fill
          priority
          sizes="100dvw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900/30 to-gray-900/50" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center text-xs tracking-widest uppercase text-gray-300 mb-4">
            Usługi Brukarskie Grabowski
            <span className="mx-3 h-3 w-px bg-gray-700" />
            Brukarstwo w Czaple
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
            Profesjonalne układanie kostki brukowej
          </h1>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href={`tel:+48${PHONE.replace(/\s/g, "")}`}>
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-200"
              >
                <img
                  src="/phone.svg"
                  alt="Telefon"
                  className="h-5 w-5 mr-2 invert"
                />
                Zadzwoń: {PHONE}
              </Button>
            </a>
            <a href={`mailto:${EMAIL}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800"
              >
                <img
                  src="/mail.svg"
                  alt="E-mail"
                  className="h-5 w-5 mr-2 invert"
                />
                Napisz: {EMAIL}
              </Button>
            </a>
            <Link href="/#services">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800"
              >
                Zobacz ofertę
                <img
                  src="/arrow-right.svg"
                  alt="Strzałka"
                  className="ml-2 h-4 w-4 invert"
                />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* O NAS */}
      <section id="about" className="py-20 bg-gray-900">
        {/* STATYSTYKI */}
        <StatsSection />
        <div className="max-w-6xl mx-auto px-6 pt-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                Usługi Brukarskie Grabowski – jakość i doświadczenie
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Specjalnością firmy Grabowscy jest realizacja szerokiego zakresu
                usług brukarskich. Jeśli potrzebują Państwo specjalistów z
                doświadczeniem i pasją, którzy podejmą się układania kostki
                granitowej oraz brukowej – jesteśmy do dyspozycji. Nasza firma
                brukarska pracuje na terenie całego województwa Pomorskiego,
                zapewniając usługi brukarskie na najwyższym poziomie.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Dla naszej firmy układanie bruku to sztuka. Klienci, którzy
                zdecydują się na współpracę z nami, zawsze mogą oczekiwać
                kompleksowej obsługi – począwszy od doradztwa technicznego przy
                doborze odpowiedniej kostki brukowej, przez przygotowanie
                projektu chodnika, placu czy innej przestrzeni do wybrukowania,
                aż po sprawne i profesjonalne ułożenie kostki. Stawiając na
                Grabowskich, wybieracie Państwo niezawodnych specjalistów.
                Działamy na rynku od 2005 roku.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4 text-md text-gray-300">
                <div className="rounded-lg border border-gray-800 bg-gray-800/50 p-4">
                  • Darmowa wycena i doradztwo
                </div>
                <div className="rounded-lg border border-gray-800 bg-gray-800/50 p-4">
                  • Gwarancja na wykonane prace
                </div>
                <div className="rounded-lg border border-gray-800 bg-gray-800/50 p-4">
                  • Materiały renomowanych producentów
                </div>
                <div className="rounded-lg border border-gray-800 bg-gray-800/50 p-4">
                  • Terminowość i porządek na budowie
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl border border-gray-800 bg-gray-800">
                <Image
                  src="/kostka2.webp"
                  alt="Prace brukarskie – DAVIX"
                  width={1200}
                  height={800}
                  sizes="(min-width: 1024px) 600px, 100vw"
                  quality={75}
                  className="w-full h-auto object-cover opacity-90"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 hidden sm:block h-24 w-24 rounded-xl border border-gray-800 bg-gray-800/60 backdrop-blur" />
              <div className="absolute -top-4 -right-4 hidden sm:block h-24 w-24 rounded-xl border border-gray-800 bg-gray-800/60 backdrop-blur" />
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="services" className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Oferta
            </h2>
            <p className="text-gray-400">
              Kompleksowe usługi brukarskie – od przygotowania gruntu po
              wykończenie detali.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-800 bg-gray-900 hover:bg-gray-850/50 transition-colors p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-gray-800 bg-gray-900 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-300">
              Nie wiesz, jaki materiał wybrać? Pomożemy dopasować wzór i
              technologię do Twojego budżetu i potrzeb.
            </div>
            <div className="flex gap-3">
              <a href={`tel:+48${PHONE.replace(/\s/g, "")}`}>
                <Button className="bg-white text-gray-900 hover:bg-gray-200">
                  <img
                    src="/phone.svg"
                    alt="Telefon"
                    className="h-5 w-5 mr-2"
                  />
                  {PHONE}
                </Button>
              </a>
              <a href={`mailto:${EMAIL}`}>
                <Button
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-800"
                >
                  <img
                    src="/mail.svg"
                    alt="E-mail"
                    className="h-5 w-5 mr-2 invert"
                  />
                  {EMAIL}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REALIZACJE (galeria poglądowa / do podmiany obrazów) */}
      <section id="projects" className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Realizacje
            </h2>
            <p className="text-gray-400">
              Wybrane realizacje i inspiracje. Obrazy poglądowe – dodaj własne
              zdjęcia do folderu public, aby podmienić galerię.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((src, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg border border-gray-800 bg-gray-800 aspect-[4/3]"
              >
                <Image
                  src={src}
                  alt={`Realizacja DAVIX ${idx + 1}`}
                  width={800}
                  height={600}
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  quality={70}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JAK PRACUJEMY – kroki */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Jak pracujemy
            </h2>
            <p className="text-gray-400">
              Transparentny proces od pierwszego kontaktu po odbiór inwestycji.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div
                key={s.no}
                className="rounded-xl border border-gray-800 bg-gray-900 p-10 min-h-[280px] flex flex-col justify-center"
              >
                <div className="text-lg text-gray-500 mb-4">{s.no}</div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-lg">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCJE */}
      <ReviewsSection />
      {/* KONTAKT */}
      <section id="contact" className="py-24 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Porozmawiajmy o Twojej inwestycji
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Opowiedz nam o swoim projekcie – przygotujemy wycenę, doradzimy
                materiały i zaproponujemy optymalne rozwiązania.
              </p>

              <div className="mb-8 text-gray-300">
                <p className="font-semibold text-white mb-1">Adres:</p>
                <p>Pelikana 7, 80-298 Czaple</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img
                    src="/phone.svg"
                    alt="Telefon"
                    className="h-5 w-5 invert"
                  />
                  <a
                    href={`tel:+48${PHONE.replace(/\s/g, "")}`}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {PHONE}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="/mail.svg"
                    alt="E-mail"
                    className="h-5 w-5 invert"
                  />
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/#services">
                  <Button
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-gray-800"
                  >
                    Zobacz pełną ofertę
                    <img
                      src="/arrow-right.svg"
                      alt="Strzałka"
                      className="ml-2 h-4 w-4 invert"
                    />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
