'use client'

import { useEffect } from 'react'

export default function ClientScripts() {
  useEffect(() => {
    /* ── Hamburger menu ── */
    const hamburger = document.getElementById('nav-hamburger')
    const navLinks = document.getElementById('nav-links')
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open')
        hamburger.classList.toggle('open', isOpen)
        hamburger.setAttribute('aria-expanded', String(isOpen))
        document.body.style.overflow = isOpen ? 'hidden' : ''
      })
      navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          navLinks.classList.remove('open')
          hamburger.classList.remove('open')
          hamburger.setAttribute('aria-expanded', 'false')
          document.body.style.overflow = ''
        })
      })
    }

    /* ── FAQ accordion ── */
    document.querySelectorAll('.faq-q').forEach(q => {
      q.addEventListener('click', () => {
        const item = q.parentElement
        if (!item) return
        const wasOpen = item.classList.contains('open')
        document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'))
        if (!wasOpen) item.classList.add('open')
      })
    })

    /* ── Anchor smooth scroll ── */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const href = a.getAttribute('href')
        if (!href) return
        const target = document.querySelector(href)
        if (!target) return
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth' })
      })
    })

    /* ── Nav scroll ── */
    const nav = document.getElementById('main-nav')
    const onScroll = () => {
      if (nav) nav.classList.toggle('solid', window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    /* ── Scroll reveal ── */
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.r').forEach(el => revealObs.observe(el))

    /* ── Feedback form modal ── */
    const openFeedback = (e: Event) => {
      e.preventDefault()
      document.getElementById('feedback-modal')?.classList.add('open')
      document.getElementById('feedback-modal-backdrop')?.classList.add('open')
      document.body.style.overflow = 'hidden'
    }
    const closeFeedback = () => {
      document.getElementById('feedback-modal')?.classList.remove('open')
      document.getElementById('feedback-modal-backdrop')?.classList.remove('open')
      document.body.style.overflow = ''
    }

    document.getElementById('feedback-modal-backdrop')?.addEventListener('click', closeFeedback)
    document.getElementById('feedback-modal-close')?.addEventListener('click', closeFeedback)
    document.getElementById('feedback-trigger')?.addEventListener('click', openFeedback)

    /* ── Keyboard escape ── */
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeFeedback()
    }
    document.addEventListener('keydown', onKeydown)

    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('keydown', onKeydown)
      revealObs.disconnect()
    }
  }, [])

  return null
}
