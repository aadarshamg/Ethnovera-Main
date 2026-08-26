import { PageHero, ProductCard } from "@/components/ui";
import { products } from "@/lib/data";

export default function WishlistPage() {
  return (
    <>
      <PageHero eyebrow="Wishlist" title="Your saved handmade finds." text="Recently viewed items, favorite sellers, AI recommendations, and thoughtful gift-ready collections." />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-16 sm:px-6 md:grid-cols-3 lg:px-8">
        {products.slice(1, 5).map((product) => <ProductCard key={product.id} product={product} compact />)}
      </section>
    </>
  );
}
