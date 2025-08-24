import GlassCard from '@/components/GlassCard'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

export const metadata = {
  title: 'Contact • Twin Thrift',
  description: 'Get in touch with Twin Thrift — WhatsApp, email, or social.',
}

const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || process.env.WHATSAPP_PHONE || ''

export default function ContactPage() {
  const whatsappLink = buildWhatsAppUrl(WHATSAPP_PHONE, 'Hi Twin Thrift! I have a question…')
  const email = 'hello@twinthrift.local' // placeholder; replace when ready
  const phone = '+254 751 660 546'

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">Contact</h1>

      <GlassCard
        imageUrl="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop"
        className="p-8"
        aria-labelledby="contact-title"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 id="contact-title" className="text-2xl font-semibold">We’d love to hear from you</h2>
            <p className="mt-2 text-ink/80">
              Questions about sizing, availability, or selling with us? Reach out on WhatsApp for the fastest response,
              or use email and we’ll get back to you.
            </p>

            <div className="mt-6 grid gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-oat no-underline"
              >
                WhatsApp us
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center rounded-md border border-lilac/40 bg-oat px-4 py-2 no-underline"
              >
                Email: {email}
              </a>
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center rounded-md border border-lilac/40 bg-oat px-4 py-2 no-underline"
              >
                Call: {phone}
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-lilac/30 bg-oat/60 p-4">
              <h3 className="font-medium">Business hours</h3>
              <p className="mt-1 text-sm text-ink/70">Mon–Sat: 9:00–18:00 EAT</p>
            </div>
            <div className="rounded-xl border border-lilac/30 bg-oat/60 p-4">
              <h3 className="font-medium">Community</h3>
              <p className="mt-1 text-sm text-ink/70">Join our WhatsApp group for drops and deals.</p>
              <a
                href="https://chat.whatsapp.com/INVITE_PLACEHOLDER"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block rounded-md border border-lilac/40 px-3 py-1 no-underline"
              >
                Join the group
              </a>
            </div>
            <div className="rounded-xl border border-lilac/30 bg-oat/60 p-4">
              <h3 className="font-medium">Socials</h3>
              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                <a href="#" className="rounded-md border border-lilac/40 px-3 py-1 no-underline">Instagram</a>
                <a href="#" className="rounded-md border border-lilac/40 px-3 py-1 no-underline">TikTok</a>
                <a href="#" className="rounded-md border border-lilac/40 px-3 py-1 no-underline">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}
