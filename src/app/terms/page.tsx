import { PageHero } from "@/components/ui";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using the ETHNOVERA GLOBAL website, mobile experience, or marketplace services (collectively, the \"Platform\"), you agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use of the Platform."
  },
  {
    title: "2. About Us",
    body: "The Platform is owned and operated by ETHNOVERA GLOBAL PRIVATE LIMITED, a company registered in India, with its registered office at Floor No. 2nd Floor, Building No./Flat No. 212, BLDG NO 03, 86Central By Crystal Group, Ghatkopar Andheri Link Road, Ghatkopar West, Mumbai, Mumbai Suburban, Maharashtra 400086."
  },
  {
    title: "3. Eligibility",
    body: "You must be at least 18 years of age, or accessing the Platform under the supervision of a parent or legal guardian, to place an order or create an account."
  },
  {
    title: "4. Products & Listings",
    body: "We work with independent artisans and workshops to list handmade and small-batch products. Colors, textures, and dimensions may vary slightly from images shown due to the handmade nature of each item and display settings on your device."
  },
  {
    title: "5. Orders & Pricing",
    body: "All prices are listed in Indian Rupees (INR) unless stated otherwise and are subject to change without prior notice. An order is confirmed only after successful payment authorization. We reserve the right to cancel or refuse any order at our discretion, including in cases of pricing errors or suspected fraud."
  },
  {
    title: "6. Payments",
    body: "Payments are processed through secure, third-party payment gateways. We do not store your full card or banking credentials on our servers."
  },
  {
    title: "7. Shipping & Delivery",
    body: "Estimated delivery timelines are provided on each product page and at checkout. Delivery estimates are not guaranteed and may be affected by artisan production time, logistics partners, customs, or events beyond our control."
  },
  {
    title: "8. Returns, Refunds & Cancellations",
    body: "Returns, refunds, and order cancellations are governed by our Return & Refund Policy, available on the Platform."
  },
  {
    title: "9. Intellectual Property",
    body: "All content on the Platform, including logos, text, graphics, and product photography, is the property of ETHNOVERA GLOBAL PRIVATE LIMITED or its artisan partners and may not be reproduced without written consent."
  },
  {
    title: "10. Limitation of Liability",
    body: "To the extent permitted by law, ETHNOVERA GLOBAL PRIVATE LIMITED shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Platform or purchase of products."
  },
  {
    title: "11. Governing Law",
    body: "These Terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra."
  },
  {
    title: "12. Contact Us",
    body: "For any questions regarding these Terms & Conditions, please reach us at info@ethnoveraglobal.com or +91 73597 49940."
  }
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" text="Please read these terms carefully before using the ETHNOVERA GLOBAL marketplace." />
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
