# Twin Thrift

Online thrift shop with a unique Twin Thrift vibe, inspired by Thrift+, ThredUp, and ThriftTale. Built with Next.js App Router and Tailwind CSS.

## Tech
- Next.js (App Router, TypeScript)
- Tailwind CSS v4 (@tailwindcss/postcss)

## Configuration
- Create a `.env` file (see `.env.example`). Required:
	- `NEXT_PUBLIC_WHATSAPP_PHONE` and/or `WHATSAPP_PHONE`
	- `NEXT_PUBLIC_WHATSAPP_TAGLINE` (optional)
- Prices are shown in Kenyan Shillings (KES) via Intl.NumberFormat and helper `lib/currency.ts`.

## Brand theme
- Colors: #ece2ce (sand), #d7d0e1 (lilac), #f8f3f6 (blush), #faebd7 (antique), #f7edda (oat), #060609 (ink)

## Develop (Windows PowerShell)
```powershell
# 1) Install dependencies
npm install

# 2) Run dev server
npm run dev

# 3) Lint and type-check (optional)
npm run lint
npm run type-check
```

Open http://localhost:3000

### WhatsApp order flow
- The cart "WhatsApp to order" button opens WhatsApp Web on desktop or WhatsApp app on mobile with a prefilled message.
- If the message doesn’t prefill, use the "Copy message" button and paste it into WhatsApp.

### Troubleshooting (Windows)
- If a build fails with `EPERM: operation not permitted, open .next\trace`, make sure you don’t have the dev server running while building. Close any `npm run dev` terminals, then try `npm run build` again. If the project is inside OneDrive, pause syncing during the build or move the project to a non-synced folder.
- From VS Code, you can also use Tasks: `Terminal > Run Task…` and pick `Build`, `Type Check`, or `Lint`.

## Structure
- app/: App Router pages and API routes
- components/: UI components
- data/: Mock products
- lib/: Helpers (products filtering)
- public/: Assets (logo, favicon)

## API
- GET /api/products?q=&brand=&category=&size=&min=&max=

## Notes
- Images use remote Unsplash placeholders. Replace with your own.
- Tailwind v4 is configured via `postcss.config.mjs` and `@import "tailwindcss"` in `app/globals.css` with a `@theme` block for custom colors.

## License
For demo use.