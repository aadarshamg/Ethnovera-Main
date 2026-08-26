import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/site-shell";
import { CartProvider } from "@/lib/cart-store";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "ETHNOVERA GLOBAL | Where Tradition Meets Global Elegance",
  description:
    "A premium global marketplace for authentic handmade crafts, artisan decor, traditional fashion, and cultural collectibles.",
  keywords: [
    "handmade marketplace",
    "handicrafts",
    "artisan decor",
    "luxury crafts",
    "ETHNOVERA GLOBAL",
    "global handmade products"
  ],
  openGraph: {
    title: "ETHNOVERA GLOBAL",
    description: "Where Tradition Meets Global Elegance",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
