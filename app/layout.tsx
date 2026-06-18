import type { Metadata } from 'next'
import './globals.css'
import MixpanelProvider from './components/MixpanelProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://marea.app'),
  title: 'Marea — Know your cycle. Know yourself.',
  description: 'Marea — Track your menstrual cycle and connect it to your daily habits. Science-backed insights, 60-second evening check-ins, complete privacy. Free forever. Built for India.',
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
