'use client'

import Link from 'next/link'
import { useState } from 'react'

interface Article {
  slug: string
  title: string
  hook: string
  category: string
  readTime: string
  image: string
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

const CATEGORIES = ['All', 'Cycle 101', 'Hormones', 'Food', 'Movement', 'Sleep', 'Stress', 'Pain', 'Skin']

const ARTICLES: Article[] = [
  { slug: 'flow-colour',        title: 'What your flow colour is actually telling you',               hook: "Bright red vs dark brown, it's not random. Your blood communicates something every time.",                   category: 'Cycle 101', readTime: '8 min', image: 'article1.jpg'  },
  { slug: 'movement-day-1',     title: 'Moving on day 1 of your period: brave or brilliant?',        hook: "The science says something most people don't expect, and it might change your worst days.",                 category: 'Movement',  readTime: '8 min', image: 'article2.jpg'  },
  { slug: 'exam-week',          title: 'Exam week is secretly a cycle event',                        hook: 'Your period hears your stress. The biology is more direct than most people realise.',                       category: 'Stress',    readTime: '8 min', image: 'article3.jpg'  },
  { slug: 'skipping-breakfast', title: 'Skipping breakfast is messing with more than your mood',     hook: 'Your uterus cares about your meal schedule, irregular eating shows up in cycle data.',                      category: 'Food',      readTime: '8 min', image: 'article4.jpg'  },
  { slug: 'sleep-and-cycle',    title: 'Why your sleep gets worse before your period',               hook: "Progesterone drop is the culprit, and knowing that changes what you can do about it.",                     category: 'Sleep',     readTime: '7 min', image: 'sleep.jpg'     },
  { slug: 'pms-vs-pmdd',        title: "PMS vs PMDD: where's the line?",                            hook: "Bad PMS and PMDD are not the same thing. One is debilitating, and it's underdiagnosed.",                   category: 'Hormones',  readTime: '8 min', image: 'bath.jpg'      },
  { slug: 'four-cycle-phases',  title: 'Your cycle has four phases. Most people only know one.',    hook: 'Menstruation is 3–7 days. The other 21+ are doing a lot.',                                                  category: 'Cycle 101', readTime: '9 min', image: 'candle.jpg'    },
  { slug: 'luteal-phase-crash', title: "The week before your period is the hardest. Here's why.",   hook: 'Energy crashes, mood dips, brain fog. The luteal phase has biology behind all of it.',                      category: 'Hormones',  readTime: '7 min', image: 'tired.jpg'     },
  { slug: 'ovulation-signs',    title: '6 signs your body gives you around ovulation',              hook: "Your body announces ovulation clearly. You just haven't been told what to look for.",                       category: 'Cycle 101', readTime: '7 min', image: 'flowers.jpg'   },
  { slug: 'period-pain-science',title: "Period pain is not 'just cramps'. Here's what's actually happening.", hook: 'Prostaglandins, ischaemia, and nerve sensitisation — your pain has a mechanism, and that matters.', category: 'Pain',      readTime: '8 min', image: 'pain.jpg'      },
  { slug: 'cycle-sync-exercise',title: 'How to train smarter across your cycle',                    hook: "Your strength, endurance, and recovery all shift through the month. Your plan probably doesn't.",           category: 'Movement',  readTime: '8 min', image: 'fitness.jpg'   },
  { slug: 'iron-deficiency',    title: 'Iron deficiency is hiding in plain sight',                  hook: 'Tired, foggy, cold all the time? Your period might be the cause nobody checked for.',                       category: 'Food',      readTime: '7 min', image: 'nutrition.jpg' },
  { slug: 'late-period-reasons',title: '8 reasons your period is late that have nothing to do with pregnancy', hook: "A late period is your body sending a signal. Here's how to read it.",                            category: 'Cycle 101', readTime: '8 min', image: 'stress.jpg'    },
  { slug: 'cervical-mucus',     title: 'What your vaginal discharge is actually telling you',       hook: "It changes every week for a reason. Most people are never taught to read it.",                              category: 'Cycle 101', readTime: '7 min', image: 'mug.jpg'       },
  { slug: 'cycle-length-normal',title: 'What actually counts as a normal cycle length?',            hook: "28 days is an average, not a rule. Here's what the data actually says.",                                    category: 'Cycle 101', readTime: '6 min', image: 'planner.jpg'   },
  { slug: 'chocolate-cravings', title: 'Why you crave chocolate before your period (the real answer)', hook: "It's not weakness. It's serotonin, magnesium, and progesterone in conversation.",                       category: 'Food',      readTime: '6 min', image: 'chocolate.jpg' },
  { slug: 'mood-cycle',         title: "Your mood isn't random. It follows your cycle.",            hook: 'The emotional pattern most people live with but nobody maps for them.',                                      category: 'Hormones',  readTime: '7 min', image: 'journal.jpg'   },
  { slug: 'irregular-periods',  title: "Irregular periods: when your body is telling you something vs when it's not", hook: "Some irregularity is normal biology. Some is a signal worth following up. Here's how to tell.", category: 'Cycle 101', readTime: '7 min', image: 'stressed.jpg'  },
  { slug: 'skin-and-cycle',     title: 'Your skin is on a 28-day schedule too',                    hook: "Breakouts before your period, glow around ovulation. It's not coincidence, it's hormones.",               category: 'Skin',      readTime: '7 min', image: 'skincare.jpg'  },
  { slug: 'hydration-cycle',    title: 'Why you need more water in the second half of your cycle', hook: "Progesterone shifts your body's fluid regulation. Your thirst signals don't always keep up.",              category: 'Food',      readTime: '6 min', image: 'water.jpg'     },
]

export default function ArticlesFilter() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? ARTICLES : ARTICLES.filter(a => a.category === active)

  return (
    <>
      <div className="cat-filters">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`cat-filter-btn${active === cat ? ' active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="articles-grid">
        {filtered.map(a => (
          <Link
            key={a.slug}
            href={`/articles/${a.slug}`}
            className={`ac ${CAT_CLASS[a.category] ?? 'cat-cycle'}`}
          >
            <div className="ac-banner">
              <img
                src={`/images/${a.image}`}
                alt={a.title}
                className="ac-banner-img"
              />
              <span className="ac-cat-pill">{a.category}</span>
            </div>
            <div className="ac-body">
              <p className="ac-title">{a.title}</p>
              <p className="ac-hook">{a.hook}</p>
              <div className="ac-foot">
                <span className="ac-time">{a.readTime} read</span>
                <span className="ac-arrow">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
