export default function SiteFooter() {
  return (
    <footer className="bg-gray-900/95 backdrop-blur border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="text-xl font-bold text-white">Usługi Brukarskie Grabowski</div>
            <div className="text-sm text-gray-400 border-l border-gray-700 pl-3">
              Układanie kostki brukowej i kamienia • Prace ziemne
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/piotr.mroz.olsztyn?locale=pl_PL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center"
            >
              <img
                src="/facebook-square.svg"
                alt="Facebook"
                className="h-6 w-6 invert"
              />
            </a>
            <div className="text-sm text-gray-400">
              © 2024 Usługi Brukarskie Grabowski. Wszelkie prawa zastrzeżone.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
