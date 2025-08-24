import { formatKES } from '@/lib/currency'

export function cleanPhone(phone: string) {
  return (phone || '').replace(/[^\d]/g, '')
}

export function buildWhatsAppUrl(phone: string, text: string) {
  const p = cleanPhone(phone)
  const t = encodeURIComponent(text || '')
  const isClient = typeof navigator !== 'undefined'
  const isMobile = isClient && /Android|iPhone|iPad|iPod|Windows Phone|Mobile/i.test(navigator.userAgent)
  if (isMobile) {
    return `https://wa.me/${p}${t ? `?text=${t}` : ''}`
  }
  // On desktop, prefer opening the WhatsApp app via api.whatsapp.com (prompts to open the app)
  return `https://api.whatsapp.com/send?phone=${p}${t ? `&text=${t}` : ''}`
}

export function buildWhatsAppWebUrl(phone: string, text: string) {
  const p = cleanPhone(phone)
  const t = encodeURIComponent(text || '')
  const qs = [`phone=${p}`]
  if (t) qs.push(`text=${t}`)
  qs.push('type=phone_number', 'app_absent=0')
  return `https://web.whatsapp.com/send?${qs.join('&')}`
}

export function buildWhatsAppAppUrl(phone: string, text: string) {
  const p = cleanPhone(phone)
  const t = encodeURIComponent(text || '')
  // api.whatsapp.com preserves text similarly to wa.me and can open app
  return `https://api.whatsapp.com/send?phone=${p}${t ? `&text=${t}` : ''}`
}

export function buildCartInquiryText(params: {
  items: { name: string; qty: number; price: number }[]
  subtotal: number
  brand?: string
  tagline?: string
}) {
  const { items, subtotal, brand = 'Twin Thrift', tagline } = params
  const lines = [
    `Hi ${brand}! I'd like to inquire about these item(s):`,
    ...items.map((it) => `• ${it.name} × ${it.qty} — ${formatKES(it.price * it.qty)}`),
    `Subtotal: ${formatKES(subtotal)}`,
    '',
    'Are these available? What are the delivery/pickup options?',
    ...(tagline ? ['','— ' + tagline] : []),
  ]
  return lines.join('\n')
}
