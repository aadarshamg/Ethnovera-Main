# ETHNOVERA GLOBAL API Architecture

Suggested production backend:

- Node.js + Express REST API
- PostgreSQL for orders, sellers, products, users, reviews, and commissions
- Supabase Auth email/password sessions with JWT access tokens and refresh-token rotation
- Cloud image storage for product galleries and seller documents
- Payment gateway adapter layer for Stripe, Razorpay, PayPal, or regional processors
- Modular domains: auth, catalog, sellers, orders, payments, reviews, recommendations, admin

The frontend mock data is intentionally shaped around these API resources so it can be replaced with live REST endpoints without changing page structure.
