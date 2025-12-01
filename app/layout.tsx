import type { Metadata } from "next";
import { Roboto_Condensed, Lora } from "next/font/google";
import "./globals.css";
// Swiper CSS is loaded within the ReviewsSection component only on pages that use it
import SiteHeader from "@/components/SiteHeader";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import SiteFooter from "@/components/SiteFooter";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "DAVIX – Układanie kostki brukowej i kamienia • Prace ziemne",
  description:
    "DAVIX Układanie kostki brukowej — Profesjonalne układanie kostki brukowej i kamienia, oraz wszelkie prace ziemne. Kontakt: 514 255 516 • biuro@davix.com.pl.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`dark ${robotoCondensed.variable} ${lora.variable} overflow-x-hidden`}
    >
      <head />
      <body className="overflow-x-hidden">
        <div
          className="fixed inset-0 -z-10 pointer-events-none dark:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)) rgb(248, 249, 250)",
          }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
