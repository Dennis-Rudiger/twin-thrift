import { formatKES } from '@/lib/currency'

export function cleanPhone(phone: string) {
  return (phone || '').replace(/[^\d]/g, '')
}

export function buildWhatsAppUrl(phone: string, text: string) {
  const p = cleanPhone(phone)
  const t = encodeURIComponent(text || '')
  return `https://wa.me/${p}${t ? `?text=${t}` : ''}`
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
