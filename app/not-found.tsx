import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--cream)',
      textAlign: 'center',
      padding: '2rem',
      fontFamily: 'Nunito, sans-serif',
    }}>
      <svg height="36" viewBox="175 428 705 157" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 'auto', marginBottom: '1.5rem' }}>
        <g transform="translate(109.5, 397.0) scale(1.15)">
          <path d="M 70,150 C 110,150 135,100 165,100 S 210,150 235,150 C 280,150 315,70 358,70 S 405,150 430,150 C 475,150 535,102 590,70 C 610,60 625,54 630,52" fill="none" stroke="#7A4545" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="650" cy="46" r="13" fill="#7A4545" />
        </g>
      </svg>

      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '5rem', color: 'var(--rose-dark)', margin: '0 0 0.25rem', lineHeight: 1 }}>404</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-sub)', margin: '0 0 2rem', fontWeight: 300 }}>
        This page doesn&apos;t exist. Your cycle does, though.
      </p>

      <Link
        href="/"
        style={{
          display: 'inline-block',
          background: 'var(--rose-dark)',
          color: '#fff',
          padding: '0.75rem 2rem',
          borderRadius: '100px',
          textDecoration: 'none',
          fontSize: '0.9rem',
          fontWeight: 600,
          letterSpacing: '0.02em',
        }}
      >
        Back to Marea
      </Link>
    </div>
  )
}
