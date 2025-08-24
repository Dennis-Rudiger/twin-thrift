import type { MetadataRoute } from 'next'
import products from '@/data/products.json'
import { getSiteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getSiteUrl()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${url}/`, changeFrequency: 'daily', priority: 1 },
    { url: `${url}/shop`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${url}/about`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${url}/sell`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${url}/contact`, changeFrequency: 'monthly', priority: 0.6 },
  ]

  const productRoutes: MetadataRoute.Sitemap = (products as any[]).map((p) => ({
    url: `${url}/product/${p.slug}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...productRoutes]
}
