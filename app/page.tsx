import Link from 'next/link'
import Image from 'next/image'
import ClientScripts from './components/ClientScripts'
import ArticleCard from './components/ArticleCard'
import { getAllArticles } from '@/lib/articles'

export default async function Home() {
  const articles = await getAllArticles()
  const featured = articles.slice(0, 3)
  return (
    <>
      <ClientScripts />

      {/* ══ NAV ══ */}
      <nav id="main-nav">
        <Link href="#hero" className="nav-logo">
          <svg height="22" viewBox="175 428 705 157" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 'auto', display: 'block' }}>
            <g transform="translate(109.5, 397.0) scale(1.15)">
              <path d="M 70,150 C 110,150 135,100 165,100 S 210,150 235,150 C 280,150 315,70 358,70 S 405,150 430,150 C 475,150 535,102 590,70 C 610,60 625,54 630,52" fill="none" stroke="#7A4545" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="650" cy="46" r="13" fill="#7A4545" />
            </g>
          </svg>
          <span className="nav-wordmark">Marea</span>
        </Link>
        <ul className="nav-links" id="nav-links">
          <li><a href="#ch-ritual">How it works</a></li>
          <li><a href="#ch-privacy">Privacy</a></li>
          <li><a href="#ch-learn">Learn</a></li>
          <li><a href="#ch-faq">FAQ</a></li>
          <li><a href="#ch-download" className="nav-cta">Get App</a></li>
        </ul>
        <button className="nav-hamburger" id="nav-hamburger" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* ══ CHAPTER 1 — HERO ══ */}
      <section id="hero">
        {/* LEFT: text */}
        <div className="hero-text">
          <h1 className="hero-hl r d1">
            Understand <br />your cycle,<br /><em>not just track it.</em>
          </h1>
          <p className="hero-p r d2">
            Discover how your energy, mood, symptoms, and daily habits connect to your menstrual cycle.
          </p>
          <div className="hero-cta-group r d3">
            <div className="hero-actions">
              <a href="#ch-download" className="btn-dark">Download Marea</a>
              <a href="#ch-ritual" className="btn-outline">See how it works</a>
            </div>
            <p className="hero-note d4">Science-backed · Privacy-first · Built for India</p>
          </div>
        </div>

        {/* RIGHT: real app mockup */}
        <div className="hero-visual r d2">
          <div className="phone-mockup-wrap">
            <div className="phone-float-inner">
              <Image
                src="/images/home.png"
                className="hero-phone-img"
                alt="Marea home screen showing luteal phase day 20"
                width={320}
                height={640}
                priority
                unoptimized
              />
              <div className="phone-badge pb-phase">
                <span className="phone-badge-dot"></span> Luteal Phase
              </div>
              <div className="phone-badge pb-day">
                Day 20 of 28
              </div>
              <div className="phone-badge pb-insight">
                <span className="phone-badge-dot" style={{ background: 'var(--rose-light)' }}></span> Rest today
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CHAPTER 2 — THE SILENCE ══ */}
      <section id="ch-silence">
        <div className="silence-glow"></div>
        <p className="ch-kicker ck-light r">The gap no one talks about</p>
        <blockquote className="silence-q r d1">
          &ldquo;Your body runs a <span>full story</span> every month.<br />
          Most of us were just never taught how to read it.&rdquo;
        </blockquote>
        <div className="silence-stats">
          <div className="sstat r">
            <span className="sstat-num">355M</span>
            <div className="sstat-lbl">menstruating women in India</div>
          </div>
          <div className="sstat r d1">
            <span className="sstat-num">39%</span>
            <div className="sstat-lbl">of schools offer menstrual health education</div>
          </div>
          <div className="sstat r d2">
            <span className="sstat-num">88%</span>
            <div className="sstat-lbl">of studies link stress to menstrual disruption</div>
          </div>
        </div>
        <p className="stats-source r d3">Office of the Registrar General of India &nbsp;·&nbsp; UNFPA India Menstrual Health Report &nbsp;·&nbsp; Meta-analysis of 41 studies (Gollenberg et al., 2010)</p>
      </section>

      {/* ══ APP SCREENS SHOWCASE ══ */}
      <section id="ch-screens">
        <div className="screens-hdr">
          <p className="ch-kicker ck-light r">Everything in one place</p>
          <h2 className="sec-hl r d1">Four screens.<br /><em>One complete picture.</em></h2>
        </div>
        <div className="screens-grid">
          <div className="screen-item r d1">
            <Image src="/images/home.png" alt="Home dashboard showing phase and reflection" loading="lazy" width={200} height={400} unoptimized />
            <span className="screen-caption">Home dashboard</span>
          </div>
          <div className="screen-item screen-center r d2">
            <Image src="/images/cycle.png" alt="Cycle calendar with phase colors" loading="lazy" width={200} height={400} unoptimized />
            <span className="screen-caption">Cycle calendar</span>
          </div>
          <div className="screen-item r d3">
            <Image src="/images/habits.png" alt="Habits tracker with weekly averages" loading="lazy" width={200} height={400} unoptimized />
            <span className="screen-caption">Habit patterns</span>
          </div>
          <div className="screen-item r d4">
            <Image src="/images/insights.png" alt="Insights — cycle patterns and habit correlations" loading="lazy" width={200} height={400} unoptimized />
            <span className="screen-caption">Insights</span>
          </div>
        </div>
      </section>

      {/* ══ CHAPTER 3 — THE RITUAL ══ */}
      <section id="ch-ritual">
        <div className="phone-wrap r">
          <Image
            src="/images/dailylog.png"
            className="ritual-phone-img"
            alt="Daily log — Sleep, Mood, Energy, Stress check-in"
            loading="lazy"
            width={300}
            height={600}
            unoptimized
          />
        </div>
        <div className="ritual-text">
          <p className="ch-kicker ck-light r">The ritual</p>
          <h2 className="sec-hl r d1">
            60 seconds.<br />Every evening.<br /><em>Forever changed.</em>
          </h2>
          <p className="sec-p r d2">
            Five simple questions about your day. Over time, the answers become the most personal health data you&apos;ve ever had.
          </p>
          <div className="habit-pills r d3">
            <span className="hpill"><span className="hpill-dot"></span>Sleep</span>
            <span className="hpill"><span className="hpill-dot"></span>Movement</span>
            <span className="hpill"><span className="hpill-dot"></span>Stress</span>
            <span className="hpill"><span className="hpill-dot"></span>Hydration</span>
            <span className="hpill"><span className="hpill-dot"></span>Meals</span>
          </div>
        </div>
      </section>

      {/* ══ CHAPTER 4 — THE JOURNEY ══ */}
      <section id="ch-journey">
        <div className="jny-inner">
          <div className="jny-text">
            <p className="ch-kicker ck-light r">The difference</p>
            <h2 className="sec-hl r d1">The longer<br />you track,<br />the more <em>you see.</em></h2>
            <p className="sec-p r d2">
              Marea connects your daily habits: sleep, stress, movement, hydration to your cycle over time. Patterns that took years to notice become visible in weeks.
            </p>
            <div className="jny-unlock r d3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="5" y="11" width="14" height="10" rx="2" stroke="var(--rose)" strokeWidth="1.8" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="var(--rose)" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span>Insights appear once you add daily logs and cycle data. A few cycles in, your body starts making sense.</span>
            </div>
          </div>
          <div className="jny-phone-wrap r d2">
            <Image
              src="/images/habits.png"
              className="jny-phone-img"
              alt="Habit insights in Marea app"
              loading="lazy"
              width={300}
              height={600}
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ══ CHAPTER 5 — PRIVACY ══ */}
      <section id="ch-privacy">
        <div className="priv-inner">
          <p className="ch-kicker ck-light r">Privacy</p>
          <h2 className="priv-hl r d1">
            Your data is <em>yours.</em><br />Completely.
          </h2>
          <p className="priv-p r d2">
            Privacy isn&apos;t a feature, it&apos;s the foundation. Marea never sees, stores, or touches your data. Everything stays on your phone.
          </p>
          <div className="priv-grid r d3">
            {/* No account */}
            <div className="pitem">
              <div className="pitem-ico">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="7" r="3.5" stroke="rgba(212,160,160,.85)" strokeWidth="1.5" />
                  <path d="M3.5 17c0-3.6 2.9-5.5 6.5-5.5s6.5 1.9 6.5 5.5" stroke="rgba(212,160,160,.85)" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="14" y1="3" x2="17" y2="6" stroke="rgba(212,160,160,.85)" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="17" y1="3" x2="14" y2="6" stroke="rgba(212,160,160,.85)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h4>No account required</h4>
              <p>Anonymous. No email, no name, no phone number.</p>
            </div>
            {/* On-device */}
            <div className="pitem">
              <div className="pitem-ico">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5.5" y="1.5" width="9" height="17" rx="2" stroke="rgba(212,160,160,.85)" strokeWidth="1.5" />
                  <line x1="8.5" y1="16" x2="11.5" y2="16" stroke="rgba(212,160,160,.85)" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M8.5 8.5V7.2a1.5 1.5 0 013 0v1.3" stroke="rgba(212,160,160,.85)" strokeWidth="1.3" strokeLinecap="round" />
                  <rect x="7.5" y="8.5" width="5" height="3.5" rx="1" stroke="rgba(212,160,160,.85)" strokeWidth="1.3" />
                </svg>
              </div>
              <h4>On-device only</h4>
              <p>Encrypted local database. Never uploaded.</p>
            </div>
          </div>

          <div className="priv-docs r d4">
            <Link href="/privacy-policy" className="priv-doc-link">
              <div className="priv-doc-ico">📄</div>
              <div className="priv-doc-text">
                <strong>Privacy Policy</strong>
                <span>How we protect your data</span>
              </div>
              <span className="priv-doc-arrow">→</span>
            </Link>
            <Link href="/data-deletion" className="priv-doc-link">
              <div className="priv-doc-ico">🗑️</div>
              <div className="priv-doc-text">
                <strong>Data Deletion</strong>
                <span>How to delete your data</span>
              </div>
              <span className="priv-doc-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CHAPTER 6 — LEARN ══ */}
      <section id="ch-learn">
        <div className="learn-hdr" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p className="ch-kicker ck-light r">Understand yourself</p>
          <h2 className="sec-hl r d1">Knowledge drops.<br /><em>Judgment free.</em></h2>
          <p className="learn-sub r d2">Science-backed. Written for real people. No jargon.</p>
        </div>

        <div className="article-grid r d1">
          {featured.map(a => (
            <ArticleCard
              key={a.slug}
              slug={a.slug}
              title={a.title}
              hook={a.hook}
              category={a.category}
              readTime={a.readTime}
              image={a.image}
            />
          ))}
          <Link href="/articles" className="ac-show-all">
            <span className="ac-show-all-count">{articles.length}</span>
            <span className="ac-show-all-label">articles</span>
            <span className="ac-show-all-action">Browse all →</span>
          </Link>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="ch-faq">
        <div className="faq-inner">
          <p className="ch-kicker ck-light r">Questions</p>
          <h2 className="sec-hl r d1">Common questions,<br /><em>honest answers.</em></h2>
          <div className="faq-grid r d2">

            <div className="faq-item">
              <div className="faq-q">Do I need to create an account?</div>
              <div className="faq-a">No account, no email, no phone number required. Open the app and start tracking. Nothing is asked of you.</div>
            </div>

            <div className="faq-item">
              <div className="faq-q">Does it work without internet?</div>
              <div className="faq-a">Works offline. All data stays on your device - no account required and no data transmitted externally.</div>
            </div>

            <div className="faq-item">
              <div className="faq-q">Is Marea available on iPhone?</div>
              <div className="faq-a">Yes, Marea is available on both Android and iOS.</div>
            </div>

            <div className="faq-item">
              <div className="faq-q">Can I delete all my data?</div>
              <div className="faq-a">Yes, simply uninstall the app. All data lives on your device only, so uninstalling removes everything instantly.</div>
            </div>

            <div className="faq-item">
              <div className="faq-q">Is Marea a medical app?</div>
              <div className="faq-a">No. Marea is a personal tracking tool, not a medical device. It helps you notice patterns in your own data. For medical concerns, speak to a doctor.</div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ CHAPTER 7 — CTA + DOWNLOAD ══ */}
      <section id="ch-cta">
        <span id="ch-download"></span>
        <div className="cta-glow"></div>
        <svg className="cta-wave" viewBox="0 0 1440 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,150 C200,220 400,80 600,150 C800,220 1000,80 1200,150 C1320,185 1390,165 1440,150 L1440,300 L0,300Z" fill="white" />
        </svg>

        <div className="cta-inner">
          <div className="cta-copy">
            <p className="ch-kicker ck-dark r">Get the app</p>
            <h2 className="cta-hl r d1">
              Your body is already<br />telling you. <em>Start listening.</em>
            </h2>
            <p className="cta-p r d2">
              Free forever. 60 seconds a day. Everything stays on your phone - no account, no cloud, no compromise.
            </p>

            <div className="dl-btns r d3" style={{ justifyContent: 'center', marginBottom: 0 }}>
              <a href="#" className="dl-btn dl-btn-google" target="_blank" rel="noopener noreferrer">
                <svg width="22" height="24" viewBox="13 9 31 35" xmlns="http://www.w3.org/2000/svg">
                  <path d="m13.426 12.37c-0.08533 0.31466-0.13018 0.64425-0.13018 0.98651v26.623c0 0.34162 0.04432 0.67233 0.13072 0.98587l14.684-14.681-14.684-13.914" fill="#4285F4" />
                  <path d="m27.727 26.668 7.3473-7.3451-15.96-9.2534c-0.58012-0.34746-1.2572-0.54799-1.9817-0.54799-1.7734 0-3.2697 1.2068-3.7051 2.8447-0.00053 0.0016-0.00053 0.0027-0.00053 0.0041l14.3 14.298" fill="#34A853" />
                  <path d="m27.622 25.899-14.194 15.066c0.00053 0.0031 0.0016 0.0057 0.0021 0.0089 0.43532 1.636 1.9296 2.8406 3.703 2.8406 0.70892 0 1.3745-0.19166 1.9453-0.52812l0.04533-0.02656 15.978-9.22-7.479-8.141" fill="#EA4335" />
                  <path d="m41.983 23.334-0.0136-0.0093-6.8982-3.999-7.7717 6.9156 7.7987 7.7977 6.8618-3.9592c1.203-0.64945 2.0197-1.9177 2.0197-3.3802 0-1.452-0.80571-2.7139-1.9968-3.3655" fill="#FBBC04" />
                </svg>
                <div className="dl-btn-text">
                  <span className="dl-btn-sub">Get it on</span>
                  <span className="dl-btn-name">Google Play</span>
                </div>
              </a>
              <a href="#" className="dl-btn dl-btn-apple" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="24" viewBox="10 8 19 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.76888,20.30068a4.94881,4.94881,0,0,1,2.35656-4.15206,5.06566,5.06566,0,0,0-3.99116-2.15768c-1.67924-.17626-3.30719,1.00483-4.1629,1.00483-.87227,0-2.18977-.98733-3.6085-.95814a5.31529,5.31529,0,0,0-4.47292,2.72787c-1.934,3.34842-.49141,8.26947,1.3612,10.97608.9269,1.32535,2.01018,2.8058,3.42763,2.7533,1.38706-.05753,1.9051-.88448,3.5794-.88448,1.65876,0,2.14479.88448,3.591.8511,1.48838-.02416,2.42613-1.33124,3.32051-2.66914a10.962,10.962,0,0,0,1.51842-3.09251A4.78205,4.78205,0,0,1,24.76888,20.30068Z" />
                  <path d="M22.03725,12.21089a4.87248,4.87248,0,0,0,1.11452-3.49062,4.95746,4.95746,0,0,0-3.20758,1.65961,4.63634,4.63634,0,0,0-1.14371,3.36139A4.09905,4.09905,0,0,0,22.03725,12.21089Z" />
                </svg>
                <div className="dl-btn-text">
                  <span className="dl-btn-sub">Download on the</span>
                  <span className="dl-btn-name">App Store</span>
                </div>
              </a>
            </div>

            <p className="cta-note r d4">Free · No account · No ads · Data stays on your device</p>
          </div>
        </div>

        <div className="cta-connect">
          <a href="mailto:hello@trackwithmarea.com?subject=Feedback" className="cta-connect-card" id="feedback-trigger">
            <div className="ccc-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.75)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <p className="ccc-title">Share your feedback</p>
            <p className="ccc-sub">Found a bug? Love a feature? Have a wish? We read every single message.</p>
            <span className="ccc-action">Write to us →</span>
          </a>
          <a href="https://instagram.com/trackwithmarea" target="_blank" rel="noopener noreferrer" className="cta-connect-card">
            <div className="ccc-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.75)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="rgba(255,255,255,.75)" stroke="none" />
              </svg>
            </div>
            <p className="ccc-title">Follow along</p>
            <p className="ccc-sub">Cycle wellness tips, app updates, and a community that gets it.</p>
            <span className="ccc-action">@trackwithmarea →</span>
          </a>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer>
        <Link href="#hero" className="ft-logo">
          <svg height="18" viewBox="175 428 705 157" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 'auto', display: 'block' }}>
            <g transform="translate(109.5, 397.0) scale(1.15)">
              <path d="M 70,150 C 110,150 135,100 165,100 S 210,150 235,150 C 280,150 315,70 358,70 S 405,150 430,150 C 475,150 535,102 590,70 C 610,60 625,54 630,52" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="650" cy="46" r="13" fill="rgba(255,255,255,.55)" />
            </g>
          </svg>
          <span className="ft-wm">Marea</span>
        </Link>
        <div className="ft-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/data-deletion">Data Deletion</Link>
        </div>
        <div>© 2026 Marea · Not a medical device · Not medical advice</div>
      </footer>

      {/* ── Feedback form modal ── */}
      <div id="feedback-modal-backdrop"></div>
      <div id="feedback-modal" role="dialog" aria-modal={true} aria-label="Write to us">
        <div className="fm-header">
          <div>
            <div className="fm-title">Write to us</div>
            <div className="fm-sub">Bugs, love, wishes — we read every message.</div>
          </div>
          <button className="fm-close" id="feedback-modal-close" aria-label="Close">✕</button>
        </div>
        <iframe
          className="fm-iframe"
          src="https://docs.google.com/forms/d/e/1FAIpQLSd5Vn8CaGX0cF1u0lq8LewZiqS0m3J6B4HzH7bEFFHkTXyVFQ/viewform?embedded=true"
          title="Feedback form"
          loading="lazy"
        ></iframe>
      </div>
    </>
  )
}
