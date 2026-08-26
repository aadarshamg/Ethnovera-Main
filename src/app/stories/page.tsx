import Image from "next/image";
import { PageHero } from "@/components/ui";

const posts = [
  ["The meaning of handloom motifs", "How regional symbols move from ceremony into contemporary interiors.", "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1000&q=80"],
  ["Inside a terracotta firing week", "A slow craft diary from clay preparation to the final mineral wash.", "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1000&q=80"],
  ["Why provenance changes value", "Collectors increasingly buy the story, process, and origin behind an object.", "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"]
];

export default function StoriesPage() {
  return (
    <>
      <PageHero eyebrow="Blog & Stories" title="Editorial stories from the world of craft." text="A premium content hub for artisan journeys, origin stories, material guides, festival themes, and cultural collecting." />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        {posts.map(([title, text, image]) => (
          <article key={title} className="overflow-hidden rounded-[1.5rem] bg-white/78 shadow-luxe dark:bg-white/10">
            <div className="relative h-72">
              <Image src={image} alt={title} fill className="object-cover" sizes="(min-width:1024px) 33vw, 100vw" />
            </div>
            <div className="p-6">
              <h2 className="font-serif text-3xl font-semibold text-ink dark:text-ivory">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-walnut dark:text-sand">{text}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
