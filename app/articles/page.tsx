import type { Metadata } from 'next'
import Link from 'next/link'
import ArticlesFilter from '@/app/components/ArticlesFilter'

export const metadata: Metadata = {
  title: 'Articles | Marea',
  description: 'Science-backed reads on menstrual health, hormones, cycle phases, nutrition, sleep, and more. Written clearly, grounded in research.',
  keywords: ['menstrual cycle', 'period health', 'hormones', 'cycle phases', 'period pain', 'PMS', 'PMDD', 'cycle tracking', 'women\'s health'],
  openGraph: {
    title: 'Articles | Marea',
    description: 'Science-backed reads on menstrual health, hormones, cycle phases, nutrition, sleep, and more.',
    type: 'website',
    url: '/articles',
  },
  twitter: {
    card: 'summary',
    title: 'Articles | Marea',
    description: 'Science-backed reads on menstrual health, hormones, cycle phases, nutrition, sleep, and more.',
  },
  alternates: {
    canonical: '/articles',
  },
}

export default function ArticlesPage() {
  return (
    <>
      <nav className="article-page-nav">
        <Link href="/" className="nav-logo">
          <svg height="22" viewBox="175 428 705 157" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 'auto', display: 'block' }}>
            <g transform="translate(109.5, 397.0) scale(1.15)">
              <path d="M 70,150 C 110,150 135,100 165,100 S 210,150 235,150 C 280,150 315,70 358,70 S 405,150 430,150 C 475,150 535,102 590,70 C 610,60 625,54 630,52" fill="none" stroke="#7A4545" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="650" cy="46" r="13" fill="#7A4545" />
            </g>
          </svg>
          <span className="nav-wordmark">Marea</span>
        </Link>
        <Link href="/" className="article-back-link">← Home</Link>
      </nav>

      <main className="articles-page">
        <div className="articles-page-inner">
          <header className="articles-page-hdr">
            <h1>Science-backed reads.<br /><em>Judgment free.</em></h1>
            <p>Everything you weren't taught about your cycle, written clearly, grounded in research.</p>
          </header>

          <ArticlesFilter />
        </div>
      </main>
    </>
  )
}
