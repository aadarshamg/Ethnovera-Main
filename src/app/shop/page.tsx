"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { FilterPanel, PageHero, ProductCard, SearchDock } from "@/components/ui";
import { allProducts, categories } from "@/lib/data";

function ShopContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const categoryName = categories.find((item) => item.key === category)?.name;
  const visibleProducts = useMemo(() => {
    if (!category) return allProducts;
    return allProducts.filter((product) => product.category === category);
  }, [category]);

  return (
    <>
      <PageHero eyebrow="Marketplace" title="Shop verified handmade luxury from around the world." text={categoryName ? `Showing ${categoryName} pieces.` : "Filter by price, craft type, region, material, color, ratings, and availability in a masonry marketplace built for discovery."} />
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <SearchDock />
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[290px_1fr] lg:px-8">
        <FilterPanel />
        <div>
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm font-semibold text-walnut dark:text-sand">{visibleProducts.length} curated artisan products</p>
            <select aria-label="Sort products" className="rounded-full border border-gold/25 bg-white/70 px-5 py-3 text-sm text-walnut outline-none dark:bg-white/10 dark:text-sand">
              <option>Sort by recommended</option>
              <option>Price: low to high</option>
              <option>Highest rated</option>
              <option>Newest arrivals</option>
            </select>
          </div>
          <div className="masonry">
            {visibleProducts.map((product, index) => <ProductCard key={`${product.id}-${index}`} product={product} />)}
          </div>
        </div>
      </section>
    </>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-12 text-center text-sm text-walnut">Loading marketplace...</div>}>
      <ShopContent />
    </Suspense>
  );
}
