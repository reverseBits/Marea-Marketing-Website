'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { initMixpanel, track } from '@/lib/mixpanel'

export default function MixpanelProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    initMixpanel()
  }, [])

  useEffect(() => {
    track('page_viewed', { path: pathname })
  }, [pathname])

  return <>{children}</>
}
