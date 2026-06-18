import mixpanel from 'mixpanel-browser'

let initialized = false

export function initMixpanel() {
  if (initialized || typeof window === 'undefined') return
  const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN
  if (!token) return
  mixpanel.init(token, {
    track_pageview: false,
    persistence: 'localStorage',
    ignore_dnt: true,
    debug: process.env.NODE_ENV === 'development',
    api_host: 'https://api-eu.mixpanel.com',
  })
  initialized = true
}

export function track(event: string, props?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  initMixpanel()
  if (!initialized) return
  mixpanel.track(event, props)
}
