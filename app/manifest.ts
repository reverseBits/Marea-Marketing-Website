import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Marea',
    short_name: 'Marea',
    description: 'Track your cycle with Marea. Science-backed insights, complete privacy.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFF9F6',
    theme_color: '#7A4545',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
