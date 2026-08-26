import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui";

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Talk to our marketplace concierge." text="Support for buyers, sellers, media, partnerships, and premium artisan onboarding." />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="grid gap-4">
          <a href="mailto:info@ethnoveraglobal.com" className="glass flex items-center gap-4 rounded-2xl p-5 shadow-luxe text-walnut transition hover:text-terracotta dark:text-sand">
            <Mail className="text-gold" /> info@ethnoveraglobal.com
          </a>
          <a href="tel:+917359749940" className="glass flex items-center gap-4 rounded-2xl p-5 shadow-luxe text-walnut transition hover:text-terracotta dark:text-sand">
            <Phone className="text-gold" /> +91 73597 49940
          </a>
          <div className="glass flex items-center gap-4 rounded-2xl p-5 shadow-luxe text-walnut dark:text-sand">
            <MapPin className="text-gold" /> Ghatkopar West, Mumbai, Maharashtra 400086
          </div>
          <div className="glass flex items-center gap-4 rounded-2xl p-5 shadow-luxe text-walnut dark:text-sand">
            <MessageCircle className="text-gold" /> Live chat support
          </div>
        </div>
        <form className="glass rounded-[2rem] p-7 shadow-luxe">
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Name" />
            <Input label="Email" />
          </div>
          <label className="mt-4 grid gap-2 text-sm font-semibold text-walnut dark:text-sand">
            Message
            <textarea className="min-h-40 rounded-[1.5rem] border border-gold/20 bg-white/65 p-5 outline-none focus:border-terracotta dark:bg-white/10" />
          </label>
          <button className="mt-5 min-h-12 rounded-full bg-ink px-8 text-sm font-bold text-ivory dark:bg-ivory dark:text-ink">Send Message</button>
        </form>
      </section>
    </>
  );
}

function Input({ label }: { label: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-walnut dark:text-sand">
      {label}
      <input className="min-h-12 rounded-full border border-gold/20 bg-white/65 px-5 outline-none focus:border-terracotta dark:bg-white/10" />
    </label>
  );
}
