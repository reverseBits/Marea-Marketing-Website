import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Marea',
  description: "Marea's Privacy Policy. Marea is a fully offline period tracking app that stores all data locally on your device.",
}

export default function PrivacyPolicyPage() {
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
        <ul className="nav-links" style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}>
          <li><Link href="/" style={{ textDecoration: 'none', fontSize: '.875rem', color: 'var(--text-sub)', fontWeight: 400 }}>Home</Link></li>
          <li><Link href="/privacy-policy" style={{ textDecoration: 'none', fontSize: '.875rem', color: 'var(--rose-dark)', fontWeight: 600 }}>Privacy Policy</Link></li>
          <li><Link href="/data-deletion" style={{ textDecoration: 'none', fontSize: '.875rem', color: 'var(--text-sub)', fontWeight: 400 }}>Data Deletion</Link></li>
        </ul>
      </nav>

      <div className="page-wrap">
        <h1 className="page-title">Privacy Policy</h1>
        <p className="page-meta">Effective Date: June 9, 2026 &nbsp;&nbsp;|&nbsp;&nbsp; Last Updated: June 9, 2026</p>

        <section className="policy-section" id="overview">
          <h2>1. Overview</h2>
          <p>This Privacy Policy describes how <strong>Marea</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) handles information in connection with the Marea mobile application (&ldquo;App&rdquo;).</p>
          <p>Marea is a <strong>fully offline</strong> period and cycle tracking app. We have designed it from the ground up with your privacy as the highest priority. We do not operate servers, we do not require accounts, and we do not transmit any data off your device ever.</p>
          <p>By using Marea, you agree to this Privacy Policy. If you do not agree, please do not install or use the App.</p>
        </section>

        <section className="policy-section" id="data-collected">
          <h2>2. Data We Collect</h2>
          <h3>Data you enter into the App</h3>
          <p>Marea stores data you provide locally on your device, including:</p>
          <ul>
            <li>Cycle start and end dates, cycle length, and period duration</li>
            <li>Flow intensity logs</li>
            <li>Symptom and mood entries</li>
            <li>Daily notes</li>
            <li>Habit logs</li>
            <li>Streak count</li>
            <li>Notification preferences and reminder times (stored locally)</li>
          </ul>
          <p>Menstrual and reproductive health data constitutes <strong>sensitive personal data</strong> under Indian law. Marea treats all data you enter with the highest level of protection.</p>
          <p><strong>This data never leaves your device.</strong> It is not uploaded to any server, not shared with any third party, and not accessible to us or anyone else.</p>

          <h3>Notification permission</h3>
          <p>Marea requests permission to send notifications solely to deliver cycle reminders and daily log reminders that you configure within the App. Notification scheduling is handled entirely on your device. No notification content or delivery data is transmitted off your device.</p>

          <h3>Data we do NOT collect</h3>
          <ul>
            <li>Name, email address, or any personal identifier</li>
            <li>Device identifiers (IMEI, advertising ID)</li>
            <li>Location data</li>
            <li>Usage analytics or crash reports</li>
            <li>IP addresses or network data</li>
            <li>Payment or financial information</li>
          </ul>

          <h3>Automatic data collection</h3>
          <p>Marea does not use analytics SDKs, crash-reporting tools, advertising networks, or any background services that transmit data. The App operates entirely without an internet connection.</p>
        </section>

        <section className="policy-section" id="data-usage">
          <h2>3. How Data Is Used</h2>
          <p>All data stored by Marea is used solely to provide you with cycle predictions, insights, and reminders, entirely on your device. We have no access to this data and cannot use it for any other purpose.</p>
          <ul>
            <li>Cycle tracking and predictions - processed locally</li>
            <li>Symptom pattern analysis - processed locally</li>
            <li>Reminders and notifications - triggered locally by your device</li>
          </ul>
          <p>We do <strong>not</strong> use your data for advertising, profiling, research, or any commercial purpose.</p>
        </section>

        <section className="policy-section" id="data-storage">
          <h2>4. Data Storage &amp; Security</h2>
          <p>All data is stored in the App&apos;s private data directory on your device, accessible only to Marea via the operating system&apos;s app sandboxing. Your data is protected by:</p>
          <ul>
            <li>Your device&apos;s screen lock and biometric authentication</li>
            <li>The operating system&apos;s app sandboxing (iOS and Android), which prevents other apps from accessing Marea&apos;s data</li>
            <li>No network transmission; data is never sent over the internet or any external connection</li>
          </ul>
          <p>We recommend keeping your device up to date and using a screen lock to protect all apps, including Marea.</p>

          <h3>Cloud backup exclusion</h3>
          <p>Marea explicitly disables OS-level cloud backup on both Android (Google Auto Backup) and iOS (iCloud Backup). Your health data is never backed up to any cloud service by the operating system, even if you have cloud backup enabled globally on your device.</p>

          <h3>Data retention</h3>
          <p>Data is retained on your device until you clear the App&apos;s storage via device settings or uninstall the App. Uninstalling Marea <strong>permanently and irreversibly</strong> deletes all your data. We hold no copy of your data anywhere.</p>
        </section>

        <section className="policy-section" id="third-parties">
          <h2>5. Third-Party Services</h2>
          <p>Marea does <strong>not</strong> integrate analytics services, advertising networks, or cloud data providers. We do not share, sell, or license your data to any third party, because we never have access to it in the first place.</p>

          <h3>Local notifications (flutter_local_notifications)</h3>
          <p>Marea uses the <code>flutter_local_notifications</code> library to schedule and deliver reminders on your device. This library operates entirely offline and makes no network requests. No notification content or timing data leaves your device.</p>

          <p>The App does not contain links to external websites and does not make network requests.</p>
        </section>

        <section className="policy-section" id="children">
          <h2>6. Children&apos;s Privacy</h2>
          <p>Marea is designed for users aged <strong>13 and above</strong>. Users between the ages of 13 and 17 should use the App with parental awareness and guidance.</p>
          <p>Under the Digital Personal Data Protection Act 2023, a &ldquo;child&rdquo; means any person under 18 years of age, and processing their personal data ordinarily requires verifiable parental consent. However, since Marea collects no personal data from any user (all data is stored only on your device and never transmitted to us), the parental consent obligations under the DPDP Act 2023 are not triggered.</p>
          <p>We do not knowingly collect any personal information from users of any age. There is no risk of inadvertent data collection from minors as the App operates entirely offline with no server communication.</p>
        </section>

        <section className="policy-section" id="your-rights">
          <h2>7. Your Rights</h2>
          <p>Because Marea does not collect or store any data on our servers, most traditional data-subject rights (access, portability, rectification) are exercised entirely by you, on your own device.</p>

          <h3>Access your data</h3>
          <p>Open Marea. All your data is visible and accessible to you at any time within the App.</p>

          <h3>Delete your data</h3>
          <p>You can delete all your data at once by uninstalling the App. Uninstalling permanently removes everything from your device. See our <Link href="/data-deletion">Data Deletion page</Link> for step-by-step instructions.</p>

          <h3>Under Indian Law (DPDP Act, 2023)</h3>
          <p>Under the Digital Personal Data Protection Act 2023, you have the following rights as a Data Principal:</p>
          <ul>
            <li><strong>Right to access:</strong> view all your data directly within the App at any time.</li>
            <li><strong>Right to correction:</strong> edit or update your data within the App.</li>
            <li><strong>Right to erasure:</strong> delete all your data by uninstalling the App or clearing its storage via device settings.</li>
            <li><strong>Right to withdraw consent:</strong> since Marea requires no consent to collect data (none is collected), you may simply uninstall the App to cease all use.</li>
            <li><strong>Right to nominate:</strong> you may nominate another individual to exercise your data rights on your behalf in the event of your death or incapacity. Contact us at the address below to register a nominee.</li>
            <li><strong>Right to grievance redressal:</strong> raise a complaint with our Grievance Officer (see below). We will acknowledge within 48 hours and resolve within a reasonable time.</li>
            <li><strong>Right to approach the Data Protection Board:</strong> if your grievance is not resolved to your satisfaction, you may file a complaint with the Data Protection Board of India.</li>
          </ul>
          <p>Since Marea processes all data locally and we hold none of your data on servers, most rights are exercised directly through the App.</p>

          <h3>Grievance Officer</h3>
          <p>For any privacy grievances or data-related requests under the DPDP Act, contact our Grievance Officer:</p>
          <p><strong>Grievance Officer, Marea</strong><br />
            Email: <a href="mailto:hello@trackwithmarea.com">hello@trackwithmarea.com</a><br />
            Acknowledgment: within 48 hours. Resolution: within a reasonable time as per applicable law.</p>
        </section>

        <section className="policy-section" id="changes">
          <h2>8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy as the App evolves. When we do:</p>
          <ul>
            <li>The &ldquo;Last Updated&rdquo; date at the top of this page will be revised.</li>
            <li>Significant changes will be communicated via an in-app notice.</li>
            <li>Continued use of the App after changes constitutes acceptance.</li>
          </ul>
          <p>We encourage you to review this page periodically.</p>
        </section>

        <section className="policy-section" id="governing-law">
          <h2>9. Governing Law</h2>
          <p>This Privacy Policy is governed by the laws of India, including the Digital Personal Data Protection Act 2023 and the Information Technology Act 2000, without regard to conflict of law principles.</p>
          <p>Any disputes arising from this Privacy Policy shall be subject to the exclusive jurisdiction of the courts of India.</p>
        </section>

        <section className="policy-section" id="contact">
          <h2>10. Contact Us</h2>
          <p>Questions, concerns, or requests regarding this Privacy Policy? Reach us at:</p>
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
