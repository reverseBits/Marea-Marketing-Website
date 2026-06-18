import type { Metadata } from 'next'
import './globals.css'
import MixpanelProvider from './components/MixpanelProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://marea.app'),
  title: 'Marea: Know your cycle. Know yourself.',
  description: 'Track your cycle with Marea. Science-backed insights, 60-second evening check-ins, complete privacy. Free forever. Built for India.',
  openGraph: {
    title: 'Marea: Know your cycle. Know yourself.',
    description: 'Track your cycle with Marea. Science-backed insights, 60-second evening check-ins, complete privacy. Free forever. Built for India.',
    url: 'https://marea.app',
    siteName: 'Marea',
    images: [{ url: '/images/home.png', width: 1200, height: 630, alt: 'Marea app' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marea: Know your cycle. Know yourself.',
    description: 'Track your cycle with Marea. Science-backed insights, 60-second evening check-ins, complete privacy. Free forever. Built for India.',
    images: ['/images/home.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Nunito:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <MixpanelProvider>{children}</MixpanelProvider>
      </body>
    </html>
  )
}
