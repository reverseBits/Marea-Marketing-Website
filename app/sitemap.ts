import type { MetadataRoute } from 'next'
import { getAllArticleSlugs } from '@/lib/articles'

export const dynamic = 'force-static'

const BASE = 'https://marea.app'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllArticleSlugs()

  const articleEntries: MetadataRoute.Sitemap = slugs.map(slug => ({
    url: `${BASE}/articles/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    { url: BASE, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/articles`, changeFrequency: 'weekly', priority: 0.9 },
    ...articleEntries,
  ]
}
