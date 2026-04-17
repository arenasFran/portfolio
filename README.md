# Portfolio created using React + TypeScript + Vite

## EmailJS setup

1. Copy `.env.example` to `.env.local`.
2. Fill these variables with your EmailJS values:
	- `VITE_EMAILJS_SERVICE_ID`
	- `VITE_EMAILJS_TEMPLATE_ID`
	- `VITE_EMAILJS_PUBLIC_KEY`
3. Restart the dev server after updating env vars.

The contact form now sends messages through EmailJS instead of `mailto:`.