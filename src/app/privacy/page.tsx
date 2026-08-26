import { PageHero } from "@/components/ui";

const sections = [
  {
    title: "1. Overview",
    body: "ETHNOVERA GLOBAL PRIVATE LIMITED (\"ETHNOVERA GLOBAL\", \"we\", \"us\") respects your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have when you use our website and services (the \"Platform\")."
  },
  {
    title: "2. Information We Collect",
    body: "We may collect information you provide directly, such as your name, email address, phone number, shipping and billing address, and payment details; account information such as login credentials and order history; and technical information such as device type, browser, IP address, and browsing behavior on the Platform."
  },
  {
    title: "3. How We Use Your Information",
    body: "We use your information to process and deliver orders, communicate order and account updates, provide customer support, personalize your shopping experience, improve our Platform, and comply with legal obligations."
  },
  {
    title: "4. Sharing of Information",
    body: "We do not sell your personal information. We may share data with trusted third parties who help us operate the Platform, including payment gateways, logistics and shipping partners, and IT service providers, solely for the purpose of fulfilling our services to you."
  },
  {
    title: "5. Cookies",
    body: "We use cookies and similar technologies to keep you signed in, remember your preferences, and understand how the Platform is used. You can control cookies through your browser settings."
  },
  {
    title: "6. Data Security",
    body: "We use reasonable technical and organizational measures to protect your personal information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security."
  },
  {
    title: "7. Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information, subject to applicable law, by contacting us using the details below."
  },
  {
    title: "8. Data Retention",
    body: "We retain personal information for as long as necessary to provide our services and comply with legal, accounting, or reporting requirements."
  },
  {
    title: "9. Children's Privacy",
    body: "The Platform is not intended for individuals under the age of 18, and we do not knowingly collect personal information from minors without guardian consent."
  },
  {
    title: "10. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Material changes will be reflected on this page with an updated revision date."
  },
  {
    title: "11. Contact Us",
    body: "For privacy-related questions or requests, please contact us at info@ethnoveraglobal.com or +91 73597 49940, or write to us at ETHNOVERA GLOBAL PRIVATE LIMITED, 2nd Floor, 212, BLDG NO 03, 86Central By Crystal Group, Ghatkopar Andheri Link Road, Ghatkopar West, Mumbai, Maharashtra 400086."
  }
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" text="How ETHNOVERA GLOBAL collects, uses, and protects your information." />
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="glass grid gap-8 rounded-[2rem] p-7 shadow-luxe md:p-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-2xl font-semibold text-ink dark:text-ivory">{section.title}</h2>
              <p className="mt-3 leading-7 text-walnut dark:text-sand">{section.body}</p>
            </div>
          ))}
          <p className="text-xs text-walnut/70 dark:text-sand/70">Last updated: August 2026</p>
        </div>
      </section>
    </>
  );
}
