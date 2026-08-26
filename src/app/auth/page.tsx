import { AuthForm } from "@/components/auth-form";
import { PageHero } from "@/components/ui";

export default function AuthPage() {
  return (
    <>
      <PageHero eyebrow="Login / Signup" title="Join the global craft circle." text="Email and password authentication powered by Supabase for shoppers, sellers, and admins." />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <AuthForm mode="signin" />
        <AuthForm mode="signup" />
      </section>
    </>
  );
}
