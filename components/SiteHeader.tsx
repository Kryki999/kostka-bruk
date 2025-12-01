"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const showSolidBackground = isHome ? isScrolled || isMenuOpen : true;

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${showSolidBackground
          ? "bg-gray-900/95 backdrop-blur-sm border-b border-gray-800"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className={`text-xl font-bold transition-colors duration-300 ${showSolidBackground ? "text-white" : "text-white/90"
                }`}
            >
              Usługi Brukarskie Grabowski
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <nav className="hidden md:flex items-center space-x-8">
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
                  className="h-5 w-5 invert"
                />
              </a>
              <Link
                prefetch={false}
                href="/#projects"
                className={`text-sm transition-colors ${showSolidBackground
                    ? "text-gray-300 hover:text-white"
                    : "text-white/90 hover:text-white"
                  }`}
              >
                REALIZACJE
              </Link>
              <Link
                prefetch={false}
                href="/#services"
                className={`text-sm transition-colors ${showSolidBackground
                    ? "text-gray-300 hover:text-white"
                    : "text-white/90 hover:text-white"
                  }`}
              >
                OFERTA
              </Link>
              <Link
                prefetch={false}
                href="/#references"
                className={`text-sm transition-colors ${showSolidBackground
                    ? "text-gray-300 hover:text-white"
                    : "text-white/90 hover:text-white"
                  }`}
              >
                REFERENCJE
              </Link>
            </nav>
            <a href="tel:+48515960402" className="shrink-0">
              <Button
                size="sm"
                className="bg-white text-gray-900 hover:bg-gray-200"
              >
                <img
                  src="/phone.svg"
                  alt="Telefon"
                  className="h-4 w-4 mr-2 invert"
                />{" "}
                ZADZWOŃ
              </Button>
            </a>
            <button
              className={`md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 transition-colors ${showSolidBackground
                  ? "text-gray-200 hover:text-white hover:bg-gray-800 focus:ring-gray-700"
                  : "text-white hover:text-white/90 focus:ring-white/30"
                }`}
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="md:hidden border-t border-gray-800 bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
            <Link
              href="/#projects"
              className="block text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              REALIZACJE
            </Link>
            <Link
              href="/#services"
              className="block text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              OFERTA
            </Link>
            <Link
              href="/#references"
              className="block text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              REFERENCJE
            </Link>
            <a
              href="https://www.facebook.com/piotr.mroz.olsztyn?locale=pl_PL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <img
                src="/facebook-square.svg"
                alt="Facebook"
                className="h-5 w-5 mr-2 invert"
              />
              Facebook
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
