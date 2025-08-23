import Image from 'next/image'
import type { ReactNode, HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  className?: string
  imageUrl?: string
  priority?: boolean
}

/**
 * GlassCard: reusable liquid-glass wrapper with a soft background image.
 * Usage: <GlassCard imageUrl="..."> ...content... </GlassCard>
 */
export default function GlassCard({ children, className = '', imageUrl, priority = false, ...rest }: Props) {
  const url =
    imageUrl ||
    'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop'

  return (
    <div
      {...rest}
      className={`relative overflow-hidden rounded-2xl border border-oat/30 bg-oat/15 p-6 backdrop-blur-xl shadow-xl ${className}`}
    >
      {/* Background image */}
      <Image
        aria-hidden
        src={url}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        priority={priority}
        className="pointer-events-none absolute inset-0 object-cover opacity-30"
      />
      {/* Subtle gradient wash for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />

      {/* Soft highlights */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-8 -right-16 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10">{children}</div>
    </div>
  )
}
