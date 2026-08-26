"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Mail, UserPlus } from "lucide-react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

type AuthMode = "signin" | "signup";

export function AuthForm({ mode }: { mode: AuthMode }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const isSignup = mode === "signup";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setStatus("idle");

    if (!isSupabaseConfigured || !supabase) {
      setStatus("error");
      setMessage("Supabase is not configured yet. Add your project URL and anon key to .env.local.");
      return;
    }

    if (password.length < 6) {
      setStatus("error");
      setMessage("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    const { error } = isSignup
      ? await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName
            }
          }
        })
      : await supabase.auth.signInWithPassword({
          email,
          password
        });

    setLoading(false);

    if (error) {
      setStatus("error");
      setMessage(error.message);
      return;
    }

    setStatus("success");
    setMessage(isSignup ? "Account created. Check your email if confirmation is enabled." : "Signed in successfully.");
    setPassword("");
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-[2rem] p-7 shadow-luxe">
      <h2 className="font-serif text-4xl font-semibold text-ink dark:text-ivory">
        {isSignup ? "Create Account" : "Welcome Back"}
      </h2>
      <div className="mt-6 grid gap-4">
        {isSignup && (
          <label className="grid gap-2 text-sm font-semibold text-walnut dark:text-sand">
            Full name
            <input
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required
              autoComplete="name"
              className="min-h-12 rounded-full border border-gold/20 bg-white/65 px-5 outline-none focus:border-terracotta dark:bg-white/10"
            />
          </label>
        )}
        <label className="grid gap-2 text-sm font-semibold text-walnut dark:text-sand">
          Email address
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            type="email"
            autoComplete="email"
            className="min-h-12 rounded-full border border-gold/20 bg-white/65 px-5 outline-none focus:border-terracotta dark:bg-white/10"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-walnut dark:text-sand">
          Password
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            minLength={6}
            type="password"
            autoComplete={isSignup ? "new-password" : "current-password"}
            className="min-h-12 rounded-full border border-gold/20 bg-white/65 px-5 outline-none focus:border-terracotta dark:bg-white/10"
          />
        </label>
      </div>
      <button
        disabled={loading}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink text-sm font-bold text-ivory transition hover:bg-walnut disabled:cursor-not-allowed disabled:opacity-70 dark:bg-ivory dark:text-ink"
      >
        {loading ? <Loader2 size={17} className="animate-spin" /> : isSignup ? <UserPlus size={17} /> : <Mail size={17} />}
        {loading ? "Please wait..." : isSignup ? "Create Account" : "Sign In"}
      </button>
      {message && (
        <p
          role="status"
          className={`mt-4 flex items-start gap-2 rounded-2xl px-4 py-3 text-sm leading-6 ${
            status === "success"
              ? "bg-green-50 text-green-800 dark:bg-green-400/10 dark:text-green-200"
              : "bg-red-50 text-red-800 dark:bg-red-400/10 dark:text-red-200"
          }`}
        >
          {status === "success" ? <CheckCircle2 size={17} className="mt-0.5 shrink-0" /> : <AlertCircle size={17} className="mt-0.5 shrink-0" />}
          {message}
        </p>
      )}
    </form>
  );
}
