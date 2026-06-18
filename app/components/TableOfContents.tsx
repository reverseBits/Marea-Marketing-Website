'use client'

import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const article = document.querySelector('.article-content')
    if (!article) return

    const els = article.querySelectorAll('h2, h3')
    const items: Heading[] = []

    els.forEach((el, i) => {
      const text = el.textContent?.trim() || ''
      const id = el.id ||
        text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') ||
        `section-${i}`
      el.id = id
      items.push({ id, text })
    })

    setHeadings(items)
  }, [])

  useEffect(() => {
    if (!headings.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-15% 0% -70% 0%', threshold: 0 }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (!headings.length) return null

  return (
    <div className="toc-box">
      <p className="toc-title">Table of Contents</p>
      <ul className="toc-list">
        {headings.map(({ id, text }) => (
          <li key={id} className={`toc-item${activeId === id ? ' active' : ''}`}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
