import { NextRequest, NextResponse } from 'next/server'
import { getProducts } from '@/lib/products'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q') ?? undefined
  const brand = searchParams.get('brand') ?? undefined
  const category = searchParams.get('category') ?? undefined
  const size = searchParams.get('size') ?? undefined
  const minStr = searchParams.get('min')
  const maxStr = searchParams.get('max')
  const min = minStr ? Number(minStr) : undefined
  const max = maxStr ? Number(maxStr) : undefined
  const items = await getProducts({ q, brand, category, size, min, max })
  return NextResponse.json(items)
}
