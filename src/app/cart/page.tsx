"use client";

import Image from "next/image";
import { Lock, Minus, PackageCheck, Plus, Truck, Wallet, CreditCard } from "lucide-react";
import { PageHero } from "@/components/ui";
import { formatInr } from "@/lib/currency";
import { getCartProduct, useCart } from "@/lib/cart-store";
import { FormEvent, useState } from "react";

export default function CartPage() {
  const cart = useCart();
  const [shippingName, setShippingName] = useState("");
  const [shippingEmail, setShippingEmail] = useState("");
  const [shippingPhone, setShippingPhone] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("India");
  const [errors, setErrors] = useState<string[]>([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [shippingComplete, setShippingComplete] = useState(false);
  const [paymentError, setPaymentError] = useState(false);

  const cartItems = cart.items
    .map((item) => {
      const product = getCartProduct(item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + 300;

  function handleShippingSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: string[] = [];

    if (!shippingName.trim()) nextErrors.push("Full name is required.");
    if (!shippingEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(shippingEmail)) nextErrors.push("Valid email is required.");
    if (!shippingPhone.trim() || !/^\+?\d{7,15}$/.test(shippingPhone)) nextErrors.push("Valid phone number is required.");
    if (!addressLine1.trim()) nextErrors.push("Address line 1 is required.");
    if (!city.trim()) nextErrors.push("City is required.");
    if (!region.trim()) nextErrors.push("State / Region is required.");
    if (!postalCode.trim()) nextErrors.push("Postal code is required.");
    if (cartItems.length === 0) nextErrors.push("Your cart is empty. Add items before placing an order.");

    if (nextErrors.length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors([]);
    setShippingComplete(true);
  }

  function handleCODPayment() {
    cart.clearCart();
    setOrderPlaced(true);
  }

  function handlePaymentGateway() {
    setPaymentError(true);
  }

  function resetPaymentError() {
    setPaymentError(false);
    setShippingComplete(false);
  }

  return (
    <>
      <PageHero eyebrow="Cart & Checkout" title="A refined cart built for secure global orders." text="Multi-vendor checkout, delivery estimates, payment gateway UI, duties-ready fulfillment, and artisan packaging cues." />
      {orderPlaced ? (
        <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="glass rounded-[2rem] p-10 text-center shadow-luxe">
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-terracotta">Order Confirmed</p>
            <h1 className="mt-6 text-4xl font-semibold text-ink dark:text-ivory">Thank you for your purchase.</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-walnut dark:text-sand">
              Your order has been placed successfully. A confirmation email will be sent to the address provided.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-gold/20 bg-white/70 p-6 text-left text-sm text-ink dark:bg-white/10 dark:text-sand">
                <p className="font-semibold">Shipping</p>
                <p className="mt-3">{shippingName}</p>
                <p>{addressLine1}</p>
                {addressLine2 && <p>{addressLine2}</p>}
                <p>{city}, {region} {postalCode}</p>
                <p>{country}</p>
              </div>
              <div className="rounded-[1.5rem] border border-gold/20 bg-white/70 p-6 text-left text-sm text-ink dark:bg-white/10 dark:text-sand">
                <p className="font-semibold">Payment</p>
                <p className="mt-3">Cash on Delivery</p>
                <p className="mt-4 font-semibold">Total</p>
                <p className="mt-1 text-2xl text-ink dark:text-ivory">{formatInr(total)}</p>
              </div>
            </div>
          </div>
        </section>
      ) : shippingComplete ? (
        <section className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:px-8">
          {paymentError ? (
            <div className="glass rounded-[2rem] p-10 text-center shadow-luxe">
              <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 dark:bg-rose-950/20">
                <p className="text-2xl">⚠️</p>
              </div>
              <h1 className="mt-6 text-3xl font-semibold text-ink dark:text-ivory">Payment Failed</h1>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-walnut dark:text-sand">
                Please try again in some time. Our payment gateway is temporarily unavailable. We apologize for the inconvenience.
              </p>
              <button
                onClick={resetPaymentError}
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-8 text-sm font-bold text-ivory transition hover:bg-ivory hover:text-ink dark:bg-ivory dark:text-ink dark:hover:bg-ink dark:hover:text-ivory"
              >
                Back to Payment
              </button>
            </div>
          ) : (
            <div className="glass rounded-[2rem] p-10 shadow-luxe">
              <p className="text-sm font-bold uppercase tracking-[0.32em] text-terracotta">Choose Payment Method</p>
              <h1 className="mt-4 text-4xl font-semibold text-ink dark:text-ivory">How would you like to pay?</h1>
              <p className="mt-3 text-walnut dark:text-sand">Select your preferred payment method to complete your order.</p>
              
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <button
                  onClick={handleCODPayment}
                  className="group rounded-[1.5rem] border-2 border-gold/40 bg-white/60 p-6 text-left transition hover:border-gold hover:bg-white/80 dark:bg-white/10 dark:hover:bg-white/15"
                >
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 group-hover:bg-gold/30">
                      <Wallet size={24} className="text-gold" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-ink dark:text-ivory">Cash on Delivery</h2>
                      <p className="mt-1 text-sm text-walnut dark:text-sand">Pay when you receive your order</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={handlePaymentGateway}
                  className="group rounded-[1.5rem] border-2 border-gold/40 bg-white/60 p-6 text-left transition hover:border-gold hover:bg-white/80 dark:bg-white/10 dark:hover:bg-white/15"
                >
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 group-hover:bg-gold/30">
                      <CreditCard size={24} className="text-gold" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-ink dark:text-ivory">Payment Gateway</h2>
                      <p className="mt-1 text-sm text-walnut dark:text-sand">Card, UPI, Wallet & more</p>
                    </div>
                  </div>
                </button>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-gold/20 bg-ivory/70 p-5 dark:bg-white/5">
                <h3 className="text-sm font-semibold text-ink dark:text-ivory">Order Total</h3>
                <p className="mt-3 text-3xl font-bold text-ink dark:text-ivory">{formatInr(total)}</p>
              </div>
            </div>
          )}
        </section>
      ) : (
        <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[1fr_430px] lg:px-8">
          <div className="grid gap-4">
            {cartItems.length === 0 ? (
              <div className="glass rounded-[1.5rem] p-8 text-center text-walnut dark:text-sand">Your cart is empty. Add a product to begin checkout.</div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <article key={item.id} className="glass grid gap-4 rounded-[1.5rem] p-4 shadow-luxe sm:grid-cols-[140px_1fr_auto]">
                    <div className="relative h-36 overflow-hidden rounded-2xl">
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="140px" />
                    </div>
                    <div>
                      <h2 className="font-serif text-3xl font-semibold text-ink dark:text-ivory">{item.name}</h2>
                      <p className="mt-2 text-sm text-walnut dark:text-sand">{item.artisan} - {item.region}</p>
                      <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-sand/30 px-3 py-1 text-xs font-bold text-walnut dark:bg-white/10 dark:text-sand">
                        <Truck size={14} /> Delivery in 7-12 days
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-terracotta">{formatInr(item.price * item.quantity)}</p>
                      <div className="mt-3 inline-flex items-center rounded-full border border-gold/20 bg-white/60 p-1 dark:bg-white/10">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${item.name}`}
                          onClick={() => cart.setQuantity(item.id, item.quantity - 1)}
                          className="grid h-9 w-9 place-items-center rounded-full text-walnut transition hover:bg-sand/50 dark:text-sand dark:hover:bg-white/10"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="min-w-10 text-center text-sm font-bold text-ink dark:text-ivory">{item.quantity}</span>
                        <button
                          type="button"
                          aria-label={`Increase quantity of ${item.name}`}
                          onClick={() => cart.addItem(item.id)}
                          className="grid h-9 w-9 place-items-center rounded-full text-walnut transition hover:bg-sand/50 dark:text-sand dark:hover:bg-white/10"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button className="mt-3 block w-full text-sm font-bold text-terracotta" onClick={() => cart.removeItem(item.id)}>Remove</button>
                    </div>
                  </article>
                ))}
                <div className="glass rounded-[1.5rem] p-6 shadow-luxe">
                  <h2 className="font-serif text-3xl font-semibold text-ink dark:text-ivory">Shipping information</h2>
                  <p className="mt-3 text-sm text-walnut dark:text-sand">Fill in the address details to continue to payment.</p>
                  <form onSubmit={handleShippingSubmit} className="mt-6 grid gap-4">
                    {errors.length > 0 && (
                      <div className="rounded-2xl bg-rose-50 p-4 text-sm text-rose-700">
                        <p className="font-semibold">Please fix the following issues:</p>
                        <ul className="mt-3 list-disc space-y-2 pl-5">
                          {errors.map((error) => (
                            <li key={error}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-sm font-semibold text-ink dark:text-ivory">Full name</span>
                        <input
                          type="text"
                          value={shippingName}
                          onChange={(event) => setShippingName(event.target.value)}
                          className="mt-2 w-full rounded-full border border-gold/20 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition focus:border-terracotta dark:bg-white/10 dark:text-sand"
                          placeholder="Name"
                        />
                      </label>
                      <label className="block">
                        <span className="text-sm font-semibold text-ink dark:text-ivory">Email</span>
                        <input
                          type="email"
                          value={shippingEmail}
                          onChange={(event) => setShippingEmail(event.target.value)}
                          className="mt-2 w-full rounded-full border border-gold/20 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition focus:border-terracotta dark:bg-white/10 dark:text-sand"
                          placeholder="you@example.com"
                        />
                      </label>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-sm font-semibold text-ink dark:text-ivory">Phone</span>
                        <input
                          type="tel"
                          value={shippingPhone}
                          onChange={(event) => setShippingPhone(event.target.value)}
                          className="mt-2 w-full rounded-full border border-gold/20 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition focus:border-terracotta dark:bg-white/10 dark:text-sand"
                          placeholder="+91 98765 43210"
                        />
                      </label>
                      <label className="block">
                        <span className="text-sm font-semibold text-ink dark:text-ivory">Country</span>
                        <input
                          type="text"
                          value={country}
                          onChange={(event) => setCountry(event.target.value)}
                          className="mt-2 w-full rounded-full border border-gold/20 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition focus:border-terracotta dark:bg-white/10 dark:text-sand"
                        />
                      </label>
                    </div>
                    <label className="block">
                      <span className="text-sm font-semibold text-ink dark:text-ivory">Address line 1</span>
                      <input
                        type="text"
                        value={addressLine1}
                        onChange={(event) => setAddressLine1(event.target.value)}
                        className="mt-2 w-full rounded-full border border-gold/20 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition focus:border-terracotta dark:bg-white/10 dark:text-sand"
                        placeholder="Street address, P.O. box, company name"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-ink dark:text-ivory">Address line 2</span>
                      <input
                        type="text"
                        value={addressLine2}
                        onChange={(event) => setAddressLine2(event.target.value)}
                        className="mt-2 w-full rounded-full border border-gold/20 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition focus:border-terracotta dark:bg-white/10 dark:text-sand"
                        placeholder="Apartment, suite, unit, building, floor"
                      />
                    </label>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-sm font-semibold text-ink dark:text-ivory">City</span>
                        <input
                          type="text"
                          value={city}
                          onChange={(event) => setCity(event.target.value)}
                          className="mt-2 w-full rounded-full border border-gold/20 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition focus:border-terracotta dark:bg-white/10 dark:text-sand"
                          placeholder="City"
                        />
                      </label>
                      <label className="block">
                        <span className="text-sm font-semibold text-ink dark:text-ivory">State / Region</span>
                        <input
                          type="text"
                          value={region}
                          onChange={(event) => setRegion(event.target.value)}
                          className="mt-2 w-full rounded-full border border-gold/20 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition focus:border-terracotta dark:bg-white/10 dark:text-sand"
                          placeholder="State or region"
                        />
                      </label>
                    </div>
                    <label className="block">
                      <span className="text-sm font-semibold text-ink dark:text-ivory">Postal code</span>
                      <input
                        type="text"
                        value={postalCode}
                        onChange={(event) => setPostalCode(event.target.value)}
                        className="mt-2 w-full rounded-full border border-gold/20 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition focus:border-terracotta dark:bg-white/10 dark:text-sand"
                        placeholder="PIN / ZIP code"
                      />
                    </label>
                    <button
                      type="submit"
                      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-bold text-ivory transition hover:bg-ivory hover:text-ink dark:bg-ivory dark:text-ink dark:hover:bg-ink dark:hover:text-ivory"
                    >
                      Continue to Payment
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
          <aside className="glass h-fit rounded-[1.5rem] p-6 shadow-luxe">
            <h2 className="font-serif text-3xl font-semibold text-ink dark:text-ivory">Order Summary</h2>
            <div className="mt-5 space-y-3 text-sm text-walnut dark:text-sand">
              <Row label="Subtotal" value={formatInr(subtotal)} />
              <Row label="Artisan packaging" value={formatInr(100)} />
              <Row label="Estimated shipping" value={formatInr(200)} />
              <Row label="Marketplace protection" value="Included" />
            </div>
            <div className="mt-6 border-t border-gold/20 pt-5">
              <Row label="Total" value={formatInr(total)} strong />
            </div>
            <div className="mt-5 grid gap-3">
              {[Lock, PackageCheck, Truck].map((Icon, index) => (
                <p key={index} className="flex items-center gap-3 text-sm text-walnut dark:text-sand">
                  <Icon size={16} className="text-gold" /> {['Encrypted payment flow', 'Verified seller fulfillment', 'Tracked worldwide delivery'][index]}
                </p>
              ))}
            </div>
          </aside>
        </section>
      )}
    </>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={`flex justify-between gap-4 ${strong ? "text-lg font-bold text-ink dark:text-ivory" : ""}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
