import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function ProjectsIndexPage() {
  return (
    <main className="min-h-screen w-full bg-gray-900 text-white">
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-6 text-sm">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              ← Wróć
            </Link>
          </nav>
          <h1 className="text-4xl font-light text-white mb-4">
            Wszystkie projekty
          </h1>
          <p className="text-lg text-gray-400 mb-12">
            Wybrane realizacje brukarskie.
          </p>

          {projects.length === 0 ? (
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Brak realizacji do wyświetlenia
              </h3>
              <p className="text-gray-400">
                Aktualnie uzupełniamy nasze portfolio. Skontaktuj się z nami,
                aby otrzymać ofertę i przykłady realizacji.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="tel:+48514255516"
                  className="inline-flex items-center rounded-md bg-white text-gray-900 px-4 py-2 hover:bg-gray-200"
                >
                  <img
                    src="/phone.svg"
                    alt="Telefon"
                    className="h-5 w-5 mr-2"
                  />
                  514 255 516
                </a>
                <a
                  href="mailto:biuro@davix.com.pl"
                  className="inline-flex items-center rounded-md border border-gray-600 text-white px-4 py-2 hover:bg-gray-800"
                >
                  <img
                    src="/mail.svg"
                    alt="E-mail"
                    className="h-5 w-5 mr-2 invert"
                  />
                  biuro@davix.com.pl
                </a>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4 border border-gray-800 bg-gray-900">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      width={1200}
                      height={800}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      loading="lazy"
                      quality={70}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">{project.summary}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
