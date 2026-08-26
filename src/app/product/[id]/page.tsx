import Image from "next/image";
import { notFound } from "next/navigation";
import { BadgeCheck, Box, Heart, Rotate3D, ShieldCheck, ShoppingBag, Star, Truck } from "lucide-react";
import { AddToCartButton, AuthenticityStrip, ProductCard, SectionHeading } from "@/components/ui";
import { formatInr } from "@/lib/currency";
import { products } from "@/lib/data";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);
  if (!product) notFound();

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative min-h-[34rem] overflow-hidden rounded-[2rem] shadow-luxe">
          <Image src={product.image} alt={product.name} fill priority className="object-cover" sizes="(min-width:1024px) 55vw, 100vw" />
          <div className="absolute bottom-5 left-5 rounded-full bg-ink/70 px-4 py-2 text-sm font-bold text-ivory backdrop-blur">
            Zoom gallery + 360 preview concept
          </div>
        </div>

        <div className="glass rounded-[2rem] p-7 shadow-luxe">
          <p className="inline-flex items-center gap-2 rounded-full bg-gold/18 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
            <BadgeCheck size={15} /> {product.badge}
          </p>
          <h1 className="mt-5 font-serif text-5xl font-semibold leading-tight text-ink dark:text-ivory">{product.name}</h1>
          <p className="mt-3 text-walnut dark:text-sand">{product.artisan} - {product.region}</p>
          <div className="mt-4 flex items-center gap-2 text-sm font-bold text-walnut dark:text-sand">
            <Star size={16} className="fill-gold text-gold" /> {product.rating} stars from {product.reviews} reviews
          </div>
          <p className="mt-6 text-4xl font-bold text-terracotta">{formatInr(product.price)}</p>
          <p className="mt-5 leading-7 text-walnut dark:text-sand">{product.story}</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <AddToCartButton productId={product.id} />
            <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gold/35 px-6 text-sm font-bold text-walnut dark:text-sand">
              <Heart size={17} /> Wishlist
            </button>
          </div>
          <div className="mt-7 grid gap-3">
            {[
              [Truck, "Estimated delivery: 7-12 business days worldwide"],
              [ShieldCheck, "Secure payment gateway-ready checkout"],
              [Rotate3D, "AR preview concept for home decor placement"],
              [Box, "Multi-vendor order tracking and artisan packaging"]
            ].map(([Icon, text]) => (
              <div key={text as string} className="flex items-center gap-3 rounded-2xl bg-white/55 p-4 text-sm text-walnut dark:bg-white/10 dark:text-sand">
                <Icon size={18} className="text-gold" /> {text as string}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <AuthenticityStrip />
      </div>

      <section className="mt-16">
        <SectionHeading eyebrow="Craft Origin" title="A product page built around provenance" text={`${product.material}, ${product.craft}, and the regional story are surfaced clearly for premium handmade trust.`} />
      </section>

      <section className="mt-14">
        <SectionHeading eyebrow="Related Products" title="Objects that belong together" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {products.filter((item) => item.id !== product.id).slice(0, 3).map((item) => <ProductCard key={item.id} product={item} compact />)}
        </div>
      </section>
    </section>
  );
}
