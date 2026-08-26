import { CheckCircle2, ImagePlus, Percent, ShieldCheck, Tag, Users } from "lucide-react";
import { PageHero } from "@/components/ui";
import { adminStats } from "@/lib/data";

export default function AdminPage() {
  return (
    <>
      <PageHero eyebrow="Admin Dashboard" title="Marketplace control for growth, trust, and curation." text="User management, seller verification, product approvals, analytics, banner management, commissions, and category operations." />
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {adminStats.map((stat) => (
            <div key={stat.label} className="glass rounded-[1.5rem] p-5 shadow-luxe">
              <stat.icon className="text-gold" />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.24em] text-terracotta">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold text-ink dark:text-ivory">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass rounded-[2rem] p-6 shadow-luxe">
            <h2 className="font-serif text-3xl font-semibold text-ink dark:text-ivory">Approval Queue</h2>
            <div className="mt-5 grid gap-3">
              {["Mira Clay Studio", "Sana Basket Guild", "Blue Courtyard Collective", "Nile Metal Atelier"].map((seller, index) => (
                <div key={seller} className="flex items-center justify-between gap-4 rounded-2xl bg-white/60 p-4 dark:bg-white/10">
                  <div>
                    <p className="font-bold text-ink dark:text-ivory">{seller}</p>
                    <p className="text-sm text-walnut dark:text-sand">{index + 4} products pending review</p>
                  </div>
                  <button aria-label={`Approve ${seller}`} className="grid h-10 w-10 place-items-center rounded-full bg-gold text-ink">
                    <CheckCircle2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [Users, "User Management", "Role controls for shoppers, sellers, support, and admins."],
              [ShieldCheck, "Seller Verification", "Document checks, craft proof, and authenticity status."],
              [ImagePlus, "Banner Management", "Festival themes, campaign modules, and homepage hero slots."],
              [Percent, "Commission Settings", "Category rates, seller tiers, and marketplace fees."],
              [Tag, "Category Management", "Craft types, regions, materials, and seasonal taxonomy."]
            ].map(([Icon, title, text]) => (
              <div key={title as string} className="glass rounded-[1.5rem] p-5 shadow-luxe">
                <Icon className="text-gold" />
                <h3 className="mt-4 font-serif text-2xl font-semibold text-ink dark:text-ivory">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-walnut dark:text-sand">{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
