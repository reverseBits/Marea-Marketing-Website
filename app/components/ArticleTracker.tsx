'use client'

import { useEffect, useRef } from 'react'
import { track } from '@/lib/mixpanel'

interface Props {
  slug: string
  title: string
  category: string
  readTime: string
}

export default function ArticleTracker({ slug, title, category, readTime }: Props) {
  const sentView = useRef(false)
  const sentComplete = useRef(false)

  useEffect(() => {
    if (sentView.current) return
    sentView.current = true
    track('article_viewed', { slug, title, category, read_time: readTime })
  }, [slug, title, category, readTime])

  useEffect(() => {
    const sentinel = document.getElementById('article-end-sentinel')
    if (!sentinel) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !sentComplete.current) {
          sentComplete.current = true
          track('article_read_completed', { slug, title, category })
          obs.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(sentinel)
    return () => obs.disconnect()
  }, [slug, title, category])

  return null
}
