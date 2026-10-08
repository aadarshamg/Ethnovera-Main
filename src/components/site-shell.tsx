"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Heart,
  Menu,
  Moon,
  Search,
  ShoppingBag,
  Sparkles,
  Sun,
  User,
  X
} from "lucide-react";
import { navItems } from "@/lib/data";
import { useCart } from "@/lib/cart-store";

export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const cart = useCart();
  const cartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  function toggleDark() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-ivory/82 backdrop-blur-xl dark:bg-ink/82">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="ETHNOVERA GLOBAL home">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-ink text-gold shadow-glow transition group-hover:scale-105 dark:bg-ivory dark:text-walnut">
            <Sparkles size={18} />
          </span>
          <span>
            <span className="block font-serif text-2xl font-semibold leading-none tracking-normal text-ink dark:text-ivory">
              ETHNOVERA
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.28em] text-terracotta">
              Global
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-walnut transition hover:text-terracotta dark:text-sand">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <IconLink href="/shop" label="Search marketplace" icon={<Search size={18} />} />
          <IconLink href="/wishlist" label="Wishlist" icon={<Heart size={18} />} />
          <IconLink href="/cart" label={`Cart with ${cartCount} items`} icon={<ShoppingBag size={18} />} badge={cartCount} />
          <IconLink href="/auth" label="Account" icon={<User size={18} />} />
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 place-items-center rounded-full border border-gold/20 bg-white/60 text-walnut transition hover:border-gold hover:text-terracotta dark:bg-white/10 dark:text-sand"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-gold/25 text-walnut lg:hidden dark:text-sand"
          aria-label="Toggle menu"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gold/15 bg-ivory px-4 py-5 shadow-luxe dark:bg-ink lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-base font-medium text-walnut dark:text-sand">
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <IconLink href="/wishlist" label="Wishlist" icon={<Heart size={18} />} />
              <IconLink href="/cart" label={`Cart with ${cartCount} items`} icon={<ShoppingBag size={18} />} badge={cartCount} />
              <IconLink href="/auth" label="Account" icon={<User size={18} />} />
              <button
                onClick={toggleDark}
                aria-label="Toggle dark mode"
                className="grid h-10 w-10 place-items-center rounded-full border border-gold/20 bg-white/60 text-walnut dark:bg-white/10 dark:text-sand"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function IconLink({ href, label, icon, badge }: { href: string; label: string; icon: React.ReactNode; badge?: number }) {
  return (
    <Link
      href={href}
      aria-label={label}
      title={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-gold/20 bg-white/60 text-walnut transition hover:border-gold hover:text-terracotta dark:bg-white/10 dark:text-sand"
    >
      <span className="relative">
        {icon}
        {!!badge && badge > 0 && (
          <span className="absolute -right-2 -top-2 grid min-h-5 min-w-5 place-items-center rounded-full bg-terracotta px-1 text-[10px] font-bold leading-none text-white">
            {badge > 99 ? "99+" : badge}
          </span>
        )}
      </span>
    </Link>
  );
}

export function Footer() {
  const footerSections = [
    {
      title: "Marketplace",
      items: [
        { label: "Shop", href: "/shop" },
        { label: "Wishlist", href: "/wishlist" },
        { label: "Gift Cards", href: "/" }
      ]
    },
    {
      title: "Legal",
      items: [
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Return & Refund Policy", href: "/return-refund-policy" },
        { label: "Contact Us", href: "/contact" }
      ]
    }
  ];

  return (
    <footer className="border-t border-gold/20 bg-ink text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_1fr_1.4fr] lg:px-8">
        <div>
          <p className="font-serif text-3xl font-semibold">ETHNOVERA GLOBAL</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-sand">
            Where Tradition Meets Global Elegance. A premium marketplace connecting local artisans with collectors and homes worldwide.
          </p>
          <div className="mt-6 flex gap-3 text-xs uppercase tracking-[0.22em] text-gold">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>LinkedIn</span>
          </div>
        </div>
        <div className="grid gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-gold">{section.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-sand">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition hover:text-ivory">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-gold">Registered Office</h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-sand">
            <p className="font-semibold text-ivory">ETHNOVERA GLOBAL PRIVATE LIMITED</p>
            <p>
              Phone: <a href="tel:+917359749940" className="text-gold transition hover:text-sand">7359749940</a>
            </p>
            <p>
              Email: <a href="mailto:info@ethnoveraglobal.com" className="text-gold transition hover:text-sand">info@ethnoveraglobal.com</a>
            </p>
            <address className="not-italic">
              Office No: 810, BLDG NO 03<br />
              Name Of Premises/Building: 86Central By Crystal Group<br />
              Road/Street: Ghatkopar Andheri Link Road<br />
              Locality/Sub Locality: Ghatkopar West<br />
              City/Town/Village: Mumbai<br />
              District: Mumbai Suburban<br />
              State: Maharashtra<br />
              PIN Code: 400086
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
