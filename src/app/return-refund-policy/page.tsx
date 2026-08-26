import { PageHero } from "@/components/ui";

const sections = [
  {
    title: "1. Our Approach",
    body: "Every product on ETHNOVERA GLOBAL is handmade or small-batch by independent artisans. We want you to love what you receive, and this policy explains how returns, refunds, and cancellations work."
  },
  {
    title: "2. Order Cancellations",
    body: "Orders can be cancelled free of charge before they are dispatched. Once an order has shipped, it cannot be cancelled and must instead follow the return process below, where eligible."
  },
  {
    title: "3. Return Eligibility",
    body: "Returns are accepted within 7 days of delivery for items that arrive damaged, defective, or significantly not as described. To be eligible, items must be unused, in their original condition, and with original packaging and tags intact. Given the handmade nature of our products, minor variations in color, texture, or finish are not considered defects."
  },
  {
    title: "4. Non-Returnable Items",
    body: "For hygiene and customization reasons, made-to-order items, personalized products, and items marked \"Final Sale\" are not eligible for return unless received damaged or defective."
  },
  {
    title: "5. How to Initiate a Return",
    body: "Contact us at info@ethnoveraglobal.com or +91 73597 49940 within 7 days of delivery with your order number and photos of the item. Our team will review your request and share the next steps within 2-3 business days."
  },
  {
    title: "6. Refunds",
    body: "Once a returned item is received and inspected, approved refunds are processed to the original payment method within 7-10 business days. Shipping charges are non-refundable unless the return is due to our error."
  },
  {
    title: "7. Exchanges",
    body: "If you would like a different size, color, or product, please reach out to our support team. Exchanges are subject to stock availability from the originating artisan."
  },
  {
    title: "8. Damaged or Incorrect Items",
    body: "If an item arrives damaged or you receive the wrong product, please contact us within 48 hours of delivery with photos so we can arrange a free replacement or full refund."
  },
  {
    title: "9. Contact Us",
    body: "For any questions about a return, refund, or cancellation, reach us at info@ethnoveraglobal.com or +91 73597 49940."
  }
];

export default function ReturnRefundPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Return & Refund Policy" text="How cancellations, returns, and refunds work on the ETHNOVERA GLOBAL marketplace." />
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
