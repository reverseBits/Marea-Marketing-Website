import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Data Deletion — Marea',
  description: 'How to delete your Marea data. All data is stored locally on your device, no accounts, no servers.',
}

export default function DataDeletionPage() {
  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.2rem 6vw', background: 'rgba(255,250,246,.95)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(167,98,98,.1)' }}>
        <Link href="/" className="nav-logo">
          <svg height="22" viewBox="175 428 705 157" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 'auto', display: 'block' }}>
            <g transform="translate(109.5, 397.0) scale(1.15)">
              <path d="M 70,150 C 110,150 135,100 165,100 S 210,150 235,150 C 280,150 315,70 358,70 S 405,150 430,150 C 475,150 535,102 590,70 C 610,60 625,54 630,52" fill="none" stroke="#7A4545" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="650" cy="46" r="13" fill="#7A4545" />
            </g>
          </svg>
          <span className="nav-wordmark">Marea</span>
        </Link>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}>
          <li><Link href="/" style={{ textDecoration: 'none', fontSize: '.875rem', color: 'var(--text-sub)', fontWeight: 400 }}>Home</Link></li>
          <li><Link href="/privacy-policy" style={{ textDecoration: 'none', fontSize: '.875rem', color: 'var(--text-sub)', fontWeight: 400 }}>Privacy Policy</Link></li>
          <li><Link href="/data-deletion" style={{ textDecoration: 'none', fontSize: '.875rem', color: 'var(--rose-dark)', fontWeight: 600 }}>Data Deletion</Link></li>
        </ul>
      </nav>

      <div className="page-wrap">
        <h1 className="page-title">Data Deletion</h1>
        <p className="page-meta">Last Updated: June 9, 2026</p>

        <section className="policy-section" id="overview">
          <h2>1. How Your Data Is Stored</h2>
          <p>Marea is a fully offline app. <strong>All your data is stored only on your device.</strong> We do not have servers, accounts, or cloud storage. There is no data held by us to request deletion of; everything lives on your phone.</p>
          <p>Deleting your data is entirely in your hands and takes effect immediately.</p>
        </section>

        <section className="policy-section" id="android">
          <h2>2. Delete Data on Android</h2>

          <h3>Option A: Clear app storage (keeps the app installed)</h3>
          <ol>
            <li>Open your phone&apos;s <strong>Settings</strong></li>
            <li>Go to <strong>Apps</strong> (or <strong>Application Manager</strong>)</li>
            <li>Find and tap <strong>Marea</strong></li>
            <li>Tap <strong>Storage</strong></li>
            <li>Tap <strong>Clear Storage</strong> (or <strong>Clear Data</strong>)</li>
            <li>Confirm when prompted. All your cycle data, logs, and settings are permanently deleted.</li>
          </ol>

          <h3>Option B: Uninstall the app</h3>
          <ol>
            <li>Long-press the <strong>Marea</strong> app icon on your home screen or app drawer</li>
            <li>Tap <strong>Uninstall</strong> (or drag to the Uninstall area)</li>
            <li>Confirm. The app and all its data are permanently deleted.</li>
          </ol>
          <p>Alternatively: <strong>Settings → Apps → Marea → Uninstall</strong></p>
        </section>

        <section className="policy-section" id="ios">
          <h2>3. Delete Data on iOS</h2>

          <h3>Option A: Delete via home screen</h3>
          <ol>
            <li>Long-press the <strong>Marea</strong> app icon on your home screen</li>
            <li>Tap <strong>Remove App</strong></li>
            <li>Tap <strong>Delete App</strong></li>
            <li>Confirm. The app and all your data are permanently and irreversibly deleted.</li>
          </ol>

          <h3>Option B: Delete via Settings</h3>
          <ol>
            <li>Open <strong>Settings → General → iPhone Storage</strong></li>
            <li>Find and tap <strong>Marea</strong></li>
            <li>Tap <strong>Delete App</strong></li>
            <li>Confirm. All app data is permanently deleted.</li>
          </ol>
        </section>

        <section className="policy-section" id="what-gets-deleted">
          <h2>4. What Gets Deleted</h2>
          <p>Deleting the App or clearing its storage removes all data stored by Marea, including:</p>
          <ul>
            <li>All cycle dates, period logs, and predictions</li>
            <li>All daily log entries (symptoms, mood, flow, notes)</li>
            <li>Habit logs and streak data</li>
            <li>Onboarding settings (cycle length, period duration)</li>
            <li>Notification preferences and reminder times</li>
            <li>App lock settings</li>
          </ul>
          <p>Deletion is <strong>immediate and irreversible</strong>. There is no recovery option because we hold no copy of your data.</p>
        </section>

        <section className="policy-section" id="no-server-data">
          <h2>5. No Server-Side Data to Delete</h2>
          <p>Because Marea has no user accounts and no servers, there is no data held by us on your behalf. You do not need to submit a deletion request to us — all deletion is performed by you, on your device, instantly.</p>
          <p>If you have any questions or concerns, you can still reach us at the address below.</p>
        </section>

        <section className="policy-section" id="contact">
          <h2>6. Contact Us</h2>
          <p><strong>Grievance Officer, Marea</strong><br />
            Email: <a href="mailto:hello@trackwithmarea.com">hello@trackwithmarea.com</a><br />
            Acknowledgment: within 48 hours</p>
        </section>
      </div>

      <footer className="legal-footer">
        <div className="footer-inner">
          <div className="footer-brand">Marea</div>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/data-deletion">Data Deletion</Link></li>
          </ul>
          <p className="footer-copy">© 2026 Marea. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
