"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Heart,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Star
} from "lucide-react";
import { categories, categoryCounts, craftTypes, materials, products, regions } from "@/lib/data";
import { formatInr } from "@/lib/currency";
import { useCart } from "@/lib/cart-store";

export function ButtonLink({ href, children, tone = "dark" }: { href: string; children: React.ReactNode; tone?: "dark" | "light" | "gold" }) {
  const styles = {
    dark: "bg-ink text-ivory hover:bg-walnut dark:bg-ivory dark:text-ink",
    light: "border border-gold/35 bg-white/70 text-ink hover:border-gold dark:bg-white/10 dark:text-ivory",
    gold: "bg-gold text-ink hover:bg-sand"
  };
  return (
    <Link href={href} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition ${styles[tone]}`}>
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}

export function SectionHeading({ eyebrow, title, text, inverted = false }: { eyebrow: string; title: string; text?: string; inverted?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-terracotta">{eyebrow}</p>
      <h2 className={`mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl ${inverted ? "text-ivory" : "text-ink dark:text-ivory"}`}>{title}</h2>
      {text && <p className={`mt-4 text-base leading-7 ${inverted ? "text-sand" : "text-walnut dark:text-sand"}`}>{text}</p>}
    </div>
  );
}

export function SearchDock() {
  return (
    <form className="glass mx-auto mt-8 grid max-w-4xl gap-3 rounded-[2rem] p-3 shadow-luxe md:grid-cols-[1fr_auto]">
      <label className="flex min-h-14 items-center gap-3 rounded-full bg-white/70 px-5 text-walnut dark:bg-white/10 dark:text-sand">
        <Search size={18} aria-hidden />
        <span className="sr-only">Search handmade products</span>
        <input className="w-full bg-transparent text-sm outline-none placeholder:text-walnut/60 dark:placeholder:text-sand/60" placeholder="Search handwoven rugs, terracotta vases, brass lamps..." />
      </label>
      <button className="flex min-h-14 items-center justify-between gap-3 rounded-full bg-white/70 px-5 text-sm font-semibold text-walnut dark:bg-white/10 dark:text-sand" type="button">
        All categories <ChevronDown size={16} />
      </button>
      <button className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-terracotta px-6 text-sm font-bold text-white transition hover:bg-walnut" type="submit">
        Search
      </button>
    </form>
  );
}

export function ProductCard({ product, compact = false }: { product: (typeof products)[number]; compact?: boolean }) {
  const height = compact ? "h-64" : product.height === "xl" ? "h-[31rem]" : product.height === "lg" ? "h-[27rem]" : product.height === "sm" ? "h-72" : "h-96";
  const cart = useCart();
  return (
    <article className="group overflow-hidden rounded-[1.35rem] border border-gold/20 bg-white/78 shadow-luxe transition duration-300 hover:-translate-y-1 hover:shadow-glow dark:bg-white/10">
      <Link href={`/product/${product.id}`} className="block">
        <div className={`relative ${height} overflow-hidden`}>
          <Image src={product.image} alt={product.name} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-xs font-bold text-walnut">{product.badge}</span>
          <button aria-label={`Add ${product.name} to wishlist`} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-ink/65 text-ivory backdrop-blur transition hover:bg-terracotta">
            <Heart size={17} />
          </button>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-serif text-2xl font-semibold leading-tight text-ink dark:text-ivory">{product.name}</h3>
            <p className="text-lg font-bold text-terracotta">{formatInr(product.price)}</p>
          </div>
          <p className="mt-2 text-sm text-walnut dark:text-sand">{product.artisan} - {product.region}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-walnut dark:text-sand">
              <Star size={15} className="fill-gold text-gold" /> {product.rating} ({product.reviews})
            </span>
            <span className="rounded-full bg-sand/35 px-3 py-1 text-xs font-bold text-walnut dark:bg-white/10 dark:text-sand">{product.craft}</span>
          </div>
        </div>
      </Link>
      <div className="px-5 pb-5">
        <button
          type="button"
          onClick={() => cart.addItem(product.id)}
          className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-ivory transition hover:bg-terracotta dark:bg-ivory dark:text-ink"
        >
          <ShoppingBag size={16} /> Add to cart
        </button>
      </div>
    </article>
  );
}

export function ProductMasonry() {
  return (
    <div className="masonry">
      {products.concat(products.slice(0, 3)).map((product, index) => (
        <ProductCard key={`${product.id}-${index}`} product={product} />
      ))}
    </div>
  );
}

export function FilterPanel() {
  return (
    <aside className="glass hidden rounded-[1.5rem] p-5 shadow-luxe lg:sticky lg:top-24 lg:block">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl font-semibold text-ink dark:text-ivory">Refine</h2>
        <SlidersHorizontal size={18} className="text-terracotta" />
      </div>
      <FilterGroup title="Price" items={["₹100", "₹200", "₹300", "₹500", "₹1000"]} />
      <FilterGroup title="Craft Type" items={craftTypes} />
      <FilterGroup title="Region" items={regions} />
      <FilterGroup title="Material" items={materials} />
      <FilterGroup title="Color" items={["Ivory", "Sand", "Terracotta", "Walnut", "Matte Black", "Gold"]} />
      <FilterGroup title="Availability" items={["Ready to ship", "Made to order", "Low stock"]} />
    </aside>
  );
}

function FilterGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-6 border-t border-gold/15 pt-5">
      <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">{title}</h3>
      <div className="mt-3 grid gap-2">
        {items.map((item) => (
          <label key={item} className="flex items-center gap-3 text-sm text-walnut dark:text-sand">
            <input type="checkbox" className="h-4 w-4 rounded border-gold text-terracotta focus:ring-terracotta" />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
}

export function CategoryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Link key={category.name} href={`/shop?category=${category.key}`} className="group relative h-72 overflow-hidden rounded-[1.5rem] shadow-luxe">
          <Image src={category.image} alt={category.name} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 33vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 text-ivory">
            <p className="font-serif text-3xl font-semibold">{category.name}</p>
            <p className="mt-1 text-sm text-sand">{categoryCounts[category.key] ?? 0} artisan pieces</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function AddToCartButton({ productId, label = "Add to Cart" }: { productId: string; label?: string }) {
  const cart = useCart();
  return (
    <button
      type="button"
      onClick={() => cart.addItem(productId)}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-bold text-ivory dark:bg-ivory dark:text-ink"
    >
      <ShoppingBag size={17} /> {label}
    </button>
  );
}

export function AuthenticityStrip() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {["Authenticity badge", "Secure payment UI", "Multi-vendor ready"].map((item) => (
        <div key={item} className="glass flex items-center gap-3 rounded-2xl p-4 shadow-luxe">
          <BadgeCheck size={20} className="text-gold" />
          <span className="text-sm font-bold text-walnut dark:text-sand">{item}</span>
        </div>
      ))}
    </div>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="glass rounded-[2rem] p-8 shadow-luxe md:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-terracotta">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-serif text-5xl font-semibold leading-none text-ink dark:text-ivory md:text-7xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-walnut dark:text-sand">{text}</p>
      </div>
    </section>
  );
}
