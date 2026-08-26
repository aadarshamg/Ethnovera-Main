import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, PackageCheck, Star } from "lucide-react";
import { ProductCard, SectionHeading } from "@/components/ui";
import { artisans, products } from "@/lib/data";

export default async function ArtisanPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const artisan = artisans.find((item) => item.id === id);
  if (!artisan) notFound();

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid overflow-hidden rounded-[2rem] bg-ink text-ivory shadow-luxe lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[32rem]">
          <Image src={artisan.image} alt={artisan.name} fill priority className="object-cover" sizes="(min-width:1024px) 45vw, 100vw" />
        </div>
        <div className="p-8 md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Verified Artisan Profile</p>
          <h1 className="mt-4 font-serif text-6xl font-semibold leading-none">{artisan.name}</h1>
          <p className="mt-4 flex items-center gap-2 text-sand"><MapPin size={17} /> {artisan.region}</p>
          <p className="mt-6 font-serif text-3xl leading-tight text-ivory">&quot;{artisan.quote}&quot;</p>
          <p className="mt-5 leading-7 text-sand">{artisan.bio}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <Stat icon={<PackageCheck size={18} />} label="Since" value={artisan.since} />
            <Stat icon={<PackageCheck size={18} />} label="Sales" value={artisan.sales} />
            <Stat icon={<Star size={18} />} label="Rating" value={String(artisan.rating)} />
          </div>
        </div>
      </div>
      <section className="mt-16">
        <SectionHeading eyebrow="Studio Collection" title="Shop the artisan's signature pieces" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} compact />)}
        </div>
      </section>
    </section>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-gold/25 p-4">
      <div className="text-gold">{icon}</div>
      <p className="mt-3 text-xs uppercase tracking-[0.22em] text-sand">{label}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
    </div>
  );
}
