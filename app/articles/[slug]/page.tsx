import { notFound } from 'next/navigation'
import { getArticleBySlug, getAllArticleSlugs, getAllArticles } from '@/lib/articles'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ArticleCard from '@/app/components/ArticleCard'

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: `${article.title} — Marea`,
    description: article.hook,
    openGraph: {
      title: article.title,
      description: article.hook,
      type: 'article',
      images: article.image ? [{ url: `/images/${article.image}` }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.hook,
    },
  }
}

const CAT_CLASS: Record<string, string> = {
  'Cycle 101': 'cat-cycle',
  'Movement':  'cat-movement',
  'Stress':    'cat-stress',
  'Food':      'cat-food',
  'Sleep':     'cat-sleep',
  'Hormones':  'cat-hormones',
  'Pain':      'cat-pain',
  'Skin':      'cat-skin',
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const [article, allArticles] = await Promise.all([
    getArticleBySlug(slug),
    getAllArticles(),
  ])
  if (!article) notFound()

  const related = allArticles
    .filter(a => a.slug !== slug && (a.category === article.category || a.tags.some(t => article.tags.includes(t))))
    .slice(0, 4)

  const catClass = CAT_CLASS[article.category] ?? 'cat-cycle'

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
        <Link href="/articles" className="article-back-link">← All articles</Link>
      </nav>

      <div className="article-detail-wrap">
        <div className="article-detail-layout">
          <main className="article-content">
            {article.image ? (
              <Image
                src={`/images/${article.image}`}
                alt={article.title}
                width={720}
                height={320}
                className="article-hero-img"
                unoptimized
                priority
              />
            ) : (
              <div className={`ac ${catClass}`} style={{ borderRadius: 16, marginBottom: '1.75rem', height: 200, cursor: 'default' }}>
                <div className="ac-banner" style={{ height: '100%' }}>
                  <span className="ac-cat-pill">{article.category}</span>
                  <div className="ac-banner-orb ac-banner-orb-1" />
                  <div className="ac-banner-orb ac-banner-orb-2" />
                </div>
              </div>
            )}

            <div className="article-meta-bar">
              {article.tags.map(tag => (
                <span key={tag} className={`article-tag ${catClass}`} style={{ background: 'var(--cat-pill-bg)', color: 'var(--cat-pill-text)' }}>
                  {tag}
                </span>
              ))}
              <span className="article-read-time">{article.readTime} read</span>
            </div>

            <h1>{article.title}</h1>
            <p className="article-hook-lede">{article.hook}</p>

            <MDXRemote source={article.content} />
          </main>

          {related.length > 0 && (
            <aside className="article-sidebar">
              <p className="sidebar-heading">Suggested reads</p>
              <div className="sidebar-cards">
                {related.map(a => (
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
              </div>
            </aside>
          )}
        </div>
      </div>
    </>
  )
}
