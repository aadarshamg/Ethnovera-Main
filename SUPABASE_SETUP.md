# Supabase Auth Setup

1. Create a Supabase project at https://supabase.com.
2. In Supabase, open Authentication > Providers and keep Email enabled.
3. Copy your project URL and anon public key from Project Settings > API.
4. Create `.env.local` in this project with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

5. Restart the local Next.js server after changing `.env.local`.

The login and signup forms use Supabase Auth directly from the browser with `signInWithPassword` and `signUp`.
