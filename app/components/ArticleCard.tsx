import Link from 'next/link'
import Image from 'next/image'

interface Props {
  slug: string
  title: string
  hook: string
  category: string
  readTime: string
  image?: string
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

export default function ArticleCard({ slug, title, hook, category, readTime, image }: Props) {
  const catClass = CAT_CLASS[category] ?? 'cat-cycle'
  return (
    <Link href={`/articles/${slug}`} className={`ac ${catClass}`}>
      <div className="ac-banner">
        {image ? (
          <Image
            src={`/images/${image}`}
            alt={title}
            fill
            className="ac-banner-img"
            style={{ objectFit: 'cover' }}
            unoptimized
          />
        ) : (
          <>
            <div className="ac-banner-orb ac-banner-orb-1" />
            <div className="ac-banner-orb ac-banner-orb-2" />
          </>
        )}
        <span className="ac-cat-pill">{category}</span>
      </div>
      <div className="ac-body">
        <p className="ac-title">{title}</p>
        <p className="ac-hook">{hook}</p>
        <div className="ac-foot">
          <span className="ac-time">{readTime} read</span>
          <span className="ac-arrow">→</span>
        </div>
      </div>
    </Link>
  )
}
