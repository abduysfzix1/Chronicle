import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Compass, Globe2,
  Landmark, Menu, ScrollText, Sparkles, Swords, X, Languages
} from 'lucide-react'

type Language = 'EN' | 'UR'

const copy = {
  EN: {
    nav: ['Discover', 'Collections', 'Timeline', 'Quests'],
    eyebrow: 'A LIVING ARCHIVE OF HUMAN HISTORY',
    titleA: 'THE PAST',
    titleB: 'IS ALIVE.',
    intro: 'Step beyond the pages. Explore the people, ideas and turning points that shaped our world.',
    explore: 'ENTER THE MUSEUM',
    scroll: 'SCROLL TO EXPLORE',
    featured: 'CURATED HISTORIES',
    featuredTitle: 'Worlds worth discovering.',
    featuredIntro: 'Walk through remarkable lives and defining moments. Every story opens a new door into history.',
    exploreStory: 'EXPLORE STORY',
    alex: 'THE CONQUEROR',
    iqbal: 'THE PHILOSOPHER-POET',
    jinnah: 'THE FOUNDER',
    alexDesc: 'Trace the extraordinary campaigns and ambitions of Alexander of Macedon.',
    iqbalDesc: 'Discover the thought, poetry and vision of a voice that awakened a generation.',
    jinnahDesc: 'Explore the determination and leadership behind the creation of Pakistan.',
    archive: 'INSIDE THE ARCHIVE',
    archiveTitle: 'More than dates. A deeper perspective.',
    archiveDesc: 'A place to explore the context behind the moment: the people, the ideas, the evidence and the legacy.',
    magazines: 'HISTORICAL MAGAZINES',
    magazinesDesc: 'Long-form stories, beautifully presented.',
    timelines: 'INTERACTIVE TIMELINES',
    timelinesDesc: 'See how events connect across time.',
    quests: 'KNOWLEDGE QUESTS',
    questsDesc: 'Challenge what you know. Learn as you go.',
    quote: 'History is not simply what happened. It is the story of how we became who we are.',
    quoteBy: 'THE CHRONICLES EDITORIAL',
    footer: 'Explore the past. Discover the truth. Shape the future.',
    language: 'اردو'
  },
  UR: {
    nav: ['دریافت', 'تاریخی مجموعے', 'ٹائم لائن', 'سوالات'],
    eyebrow: 'انسانی تاریخ کا ایک زندہ آرکائیو',
    titleA: 'ماضی',
    titleB: 'زندہ ہے۔',
    intro: 'صفحات سے آگے بڑھیں۔ ان شخصیات، خیالات اور تاریخی موڑ کو دریافت کریں جنہوں نے ہماری دنیا کو تشکیل دیا۔',
    explore: 'میوزیم میں داخل ہوں',
    scroll: 'مزید دریافت کریں',
    featured: 'منتخب تاریخی کہانیاں',
    featuredTitle: 'دریافت کے قابل دنیائیں۔',
    featuredIntro: 'غیر معمولی زندگیوں اور اہم تاریخی لمحات کا سفر کریں۔ ہر کہانی تاریخ کا ایک نیا دروازہ کھولتی ہے۔',
    exploreStory: 'کہانی دیکھیں',
    alex: 'فاتحِ اعظم',
    iqbal: 'فلسفی شاعر',
    jinnah: 'بانیٔ پاکستان',
    alexDesc: 'سکندرِ اعظم کی غیر معمولی فتوحات اور عزائم کا سفر جانیں۔',
    iqbalDesc: 'اقبال کے افکار، شاعری اور اس وژن کو دریافت کریں جس نے ایک نسل کو بیدار کیا۔',
    jinnahDesc: 'پاکستان کے قیام کے پیچھے عزم اور قیادت کی داستان دریافت کریں۔',
    archive: 'آرکائیو کے اندر',
    archiveTitle: 'صرف تاریخیں نہیں، ایک گہری نظر۔',
    archiveDesc: 'واقعات کے پس منظر کو دریافت کرنے کی جگہ: لوگ، خیالات، شواہد اور تاریخی اثرات۔',
    magazines: 'تاریخی میگزین',
    magazinesDesc: 'تفصیلی کہانیاں، خوبصورت انداز میں۔',
    timelines: 'انٹرایکٹو ٹائم لائنز',
    timelinesDesc: 'وقت کے ساتھ واقعات کا تعلق دیکھیں۔',
    quests: 'علمی چیلنجز',
    questsDesc: 'اپنے علم کو آزمائیں اور سیکھتے جائیں۔',
    quote: 'تاریخ صرف یہ نہیں کہ کیا ہوا؛ یہ اس سفر کی کہانی ہے جس نے ہمیں آج کا انسان بنایا۔',
    quoteBy: 'کرانیکلز ادارتی ٹیم',
    footer: 'ماضی کو دریافت کریں۔ حقیقت جانیں۔ مستقبل بنائیں۔',
    language: 'English'
  }
}

const stories = [
  {
    id: '01', title: 'Alexander the Great', years: '356–323 BCE', category: 'THE CONQUEROR',
    description: 'Trace the extraordinary campaigns and ambitions of Alexander of Macedon.',
    image: 'https://images.unsplash.com/photo-1599708153386-62bf5fift5a?auto=format&fit=crop&w=1000&q=85',
    fallback: 'Ancient Greek marble sculpture'
  },
  {
    id: '02', title: 'Allama Muhammad Iqbal', years: '1877–1938', category: 'THE PHILOSOPHER-POET',
    description: 'Discover the thought, poetry and vision of a voice that awakened a generation.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=85',
    fallback: 'Historic library with warm light'
  },
  {
    id: '03', title: 'Quaid-e-Azam Muhammad Ali Jinnah', years: '1876–1948', category: 'THE FOUNDER',
    description: 'Explore the determination and leadership behind the creation of Pakistan.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=85',
    fallback: 'Historic monumental architecture'
  }
]

function App() {
  const [language, setLanguage] = useState<Language>('EN')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[language]
  const isUrdu = language === 'UR'

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main className={isUrdu ? 'app urdu' : 'app'}>
      <div className="grain" />
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Chronicles home">
          <span className="brand-mark"><Landmark size={19} strokeWidth={1.4} /></span>
          <span>CHRONICLES<span className="brand-dot">.</span><small>HISTORY, REIMAGINED</small></span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <button onClick={() => goTo('discover')}>{t.nav[0]}</button>
          <button onClick={() => goTo('collections')}>{t.nav[1]}</button>
          <button onClick={() => goTo('archive')}>{t.nav[2]}</button>
          <button onClick={() => goTo('quests')}>{t.nav[3]}</button>
        </nav>
        <div className="nav-actions">
          <button className="language-button" onClick={() => setLanguage(isUrdu ? 'EN' : 'UR')} aria-label="Change language">
            <Languages size={15} /> {t.language}
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-backdrop" />
        <div className="hero-vignette" />
        <div className="hero-grid" />
        <div className="hero-copy" id="discover">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
            <span className="eyebrow-line" /> {t.eyebrow}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .15 }}>
            {t.titleA}<br /><em>{t.titleB}</em>
          </motion.h1>
          <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: .45 }}>{t.intro}</motion.p>
          <motion.div className="hero-buttons" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .6 }}>
            <button className="gold-button" onClick={() => goTo('collections')}>{t.explore} <ArrowUpRight size={16} /></button>
            <button className="text-button" onClick={() => goTo('archive')}><span className="play-icon"><Compass size={16} /></span> {t.scroll}</button>
          </motion.div>
        </div>

        <div className="museum-scene" aria-label="Abstract cinematic ancient museum architecture">
          <div className="sun-orb" />
          <div className="distant-arch arch-one" />
          <div className="distant-arch arch-two" />
          <div className="museum-floor" />
          <div className="column column-left"><i /><b /><span /></div>
          <div className="column column-right"><i /><b /><span /></div>
          <div className="central-plinth"><div className="plinth-top" /><div className="plinth-body" /><div className="plinth-base" /></div>
          <div className="scene-caption"><span>01 / 03</span><i /> THE ANCIENT WORLD</div>
        </div>
        <div className="hero-bottom">
          <span>EST. IN CURIOSITY</span>
          <span className="scroll-cue"><ArrowDown size={14} /> {t.scroll}</span>
          <span>35° 41' N — 51° 25' E</span>
        </div>
      </section>

      <section className="intro-strip">
        <div className="strip-symbol"><Sparkles size={19} /></div>
        <p>{t.quote}</p>
        <span>{t.quoteBy}</span>
      </section>

      <section className="collections section-pad" id="collections">
        <div className="section-heading">
          <div><span className="section-kicker"><span /> {t.featured}</span><h2>{t.featuredTitle}</h2></div>
          <p>{t.featuredIntro}</p>
        </div>
        <div className="story-grid">
          {stories.map((story, index) => (
            <motion.article className={`story-card story-${index + 1}`} key={story.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, delay: index * .12 }}>
              <div className="story-image" style={{ backgroundImage: `linear-gradient(180deg, transparent 35%, rgba(7,8,10,.92) 100%), url("${story.image}")` }}>
                <span className="story-number">{story.id}</span>
                <span className="image-fallback">{story.fallback}</span>
              </div>
              <div className="story-content">
                <span className="story-category">{index === 0 ? t.alex : index === 1 ? t.iqbal : t.jinnah}</span>
                <h3>{story.title}</h3>
                <span className="story-years">{story.years}</span>
                <p>{index === 0 ? t.alexDesc : index === 1 ? t.iqbalDesc : t.jinnahDesc}</p>
                <button className="story-link" onClick={() => goTo('archive')}>{t.exploreStory} <ArrowUpRight size={15} /></button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="archive-section section-pad" id="archive">
        <div className="archive-copy">
          <span className="section-kicker"><span /> {t.archive}</span>
          <h2>{t.archiveTitle}</h2>
          <p>{t.archiveDesc}</p>
          <button className="outline-button" onClick={() => goTo('quests')}>DISCOVER THE ARCHIVE <ArrowRight size={15} /></button>
        </div>
        <div className="archive-features">
          <article><div className="feature-icon"><BookOpen /></div><div><h3>{t.magazines}</h3><p>{t.magazinesDesc}</p></div><ArrowUpRight /></article>
          <article><div className="feature-icon"><Globe2 /></div><div><h3>{t.timelines}</h3><p>{t.timelinesDesc}</p></div><ArrowUpRight /></article>
          <article id="quests"><div className="feature-icon"><Swords /></div><div><h3>{t.quests}</h3><p>{t.questsDesc}</p></div><ArrowUpRight /></article>
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#top"><span className="brand-mark"><Landmark size={19} /></span><span>CHRONICLES<span className="brand-dot">.</span><small>HISTORY, REIMAGINED</small></span></a>
        <p>{t.footer}</p>
        <span>© 2026 CHRONICLES — A DIGITAL HISTORY MUSEUM</span>
      </footer>
    </main>
  )
}

export default App
