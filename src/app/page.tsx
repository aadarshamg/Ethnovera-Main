import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote, Sparkles } from "lucide-react";
import { artisans, featurePillars, premiumFeatures, products, quickLinks } from "@/lib/data";
import { ButtonLink, CategoryGrid, ProductCard, SearchDock, SectionHeading } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ethnovera-hero.png"
            alt="Premium handmade decor and craft marketplace display"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/76 to-ink/18 dark:from-ink dark:via-ink/84" />
        </div>
        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl content-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/62 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-terracotta backdrop-blur dark:bg-white/10">
              <Sparkles size={15} /> Where Tradition Meets Global Elegance
            </p>
            <h1 className="mt-6 font-serif text-6xl font-semibold leading-none text-ink dark:text-ivory md:text-8xl">
              ETHNOVERA GLOBAL
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-walnut dark:text-sand">
              A luxurious global marketplace for handmade crafts, cultural collectibles, artisan fashion, and home decor shaped by real makers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/shop">Explore Marketplace</ButtonLink>
              <ButtonLink href="/contact" tone="light">Contact Us</ButtonLink>
            </div>
          </div>
          <SearchDock />
        </div>
      </section>

      <section className="mx-auto -mt-10 grid max-w-7xl gap-4 px-4 pb-16 sm:px-6 md:grid-cols-4 lg:px-8">
        {quickLinks.map((item) => (
          <Link key={item.label} href={item.href} className="glass flex items-center justify-between rounded-2xl p-5 shadow-luxe transition hover:-translate-y-1">
            <span className="flex items-center gap-3 text-sm font-bold text-walnut dark:text-sand">
              <item.icon size={19} className="text-terracotta" /> {item.label}
            </span>
            <ArrowRight size={16} className="text-gold" />
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Featured Collections" title="Curated by craft, culture, and rarity" text="Limited-edition pieces from verified studios, small-batch workshops, and heritage craft clusters." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} compact />)}
        </div>
      </section>

      <section className="bg-ink py-16 text-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Regional Showcase" title="Craft routes from every continent" text="Discover handwork by origin, material, technique, and the story behind each object." inverted />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["Desert Clay", "Coastal Looms", "Brass and Ritual"].map((title, index) => (
              <div key={title} className="rounded-[1.5rem] border border-gold/25 bg-white/8 p-6">
                <p className="font-serif text-3xl font-semibold">{title}</p>
                <p className="mt-3 text-sm leading-6 text-sand">{["Rajasthan, Tunisia, Oaxaca", "Gujarat, Peru, Kyoto", "Cairo, Fez, Istanbul"][index]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Meet The Artisans" title="Real hands. Real heritage. Global reach." />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {artisans.map((artisan) => (
            <Link key={artisan.id} href={`/artisans/${artisan.id}`} className="group overflow-hidden rounded-[1.5rem] bg-white/78 shadow-luxe dark:bg-white/10">
              <div className="relative h-72">
                <Image src={artisan.image} alt={artisan.name} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 33vw, 100vw" />
              </div>
              <div className="p-6">
                <p className="font-serif text-3xl font-semibold text-ink dark:text-ivory">{artisan.name}</p>
                <p className="mt-2 text-sm text-terracotta">{artisan.craft} - {artisan.region}</p>
                <p className="mt-4 text-sm leading-6 text-walnut dark:text-sand">{artisan.bio}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[2rem] bg-walnut text-ivory shadow-luxe lg:grid-cols-2">
          <div className="relative min-h-96">
            <Image src="https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=1400&q=80" alt="Luxury handmade decor showcase" fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
          </div>
          <div className="p-8 md:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Premium Decor Showcase</p>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight">Objects with a room-changing presence</h2>
            <p className="mt-5 text-base leading-7 text-sand">Bring AR-ready decor concepts, material provenance, and artisan storytelling into one elegant shopping journey.</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {premiumFeatures.map((item) => (
                <span key={item.label} className="flex items-center gap-2 rounded-full border border-gold/25 px-4 py-3 text-sm text-sand">
                  <item.icon size={16} className="text-gold" /> {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-terracotta">Why Handmade Matters</p>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight text-ink dark:text-ivory">Every purchase keeps a craft language alive.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {featurePillars.map((pillar) => (
              <div key={pillar.title} className="glass rounded-2xl p-6 shadow-luxe">
                <pillar.icon className="text-gold" />
                <h3 className="mt-4 font-serif text-2xl font-semibold text-ink dark:text-ivory">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-6 text-walnut dark:text-sand">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <CategoryGrid />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="glass grid gap-8 rounded-[2rem] p-8 shadow-luxe lg:grid-cols-[1fr_0.8fr]">
          <div>
            <Quote className="text-gold" />
            <p className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink dark:text-ivory">
              &quot;It feels like discovering a private design fair, but every piece arrives with the maker&apos;s story.&quot;
            </p>
            <p className="mt-4 text-sm font-bold text-terracotta">Amelia R., interior curator</p>
          </div>
          <div className="rounded-[1.5rem] bg-terracotta p-7 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-sand">Festival Offers</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold">Golden Home Edit</h2>
            <p className="mt-3 text-sm leading-6">Seasonal bundles, artisan gift wrapping, and limited decor drops for global celebrations.</p>
            <div className="mt-6">
              <ButtonLink href="/shop" tone="gold">Shop Seasonal Edit</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-terracotta">Newsletter</p>
        <h2 className="mt-4 font-serif text-5xl font-semibold text-ink dark:text-ivory">Receive the monthly craft letter</h2>
        <form className="glass mx-auto mt-7 flex max-w-2xl flex-col gap-3 rounded-full p-3 shadow-luxe sm:flex-row">
          <input aria-label="Email address" className="min-h-12 flex-1 rounded-full bg-transparent px-5 outline-none placeholder:text-walnut/60 dark:placeholder:text-sand/60" placeholder="you@example.com" />
          <button className="min-h-12 rounded-full bg-ink px-6 text-sm font-bold text-ivory dark:bg-ivory dark:text-ink">Subscribe</button>
        </form>
      </section>
    </>
  );
}
