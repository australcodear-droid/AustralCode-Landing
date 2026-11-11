import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const links = [['home', '#home'], ['about', '#about'], ['services', '#services'], ['work', '#work'], ['contact', '#contact']] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const toggleLanguage = () => void i18n.changeLanguage(i18n.language.startsWith('es') ? 'en' : 'es')

  // Close the mobile panel on Escape and lock scroll while it is open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-paper/95 backdrop-blur-sm">
      <nav className="section-wrap grid grid-cols-[1fr_auto] items-center lg:grid-cols-[220px_1fr_auto]">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="border-r border-ink px-4 py-3.5 text-sm font-black leading-tight tracking-[-.08em] lg:px-4 lg:py-4"
        >
          AUSTRAL
          <br />
          CODE
        </a>

        <div
          className={`${open ? 'block' : 'hidden'} absolute inset-x-0 top-full max-h-[calc(100dvh-3.25rem)] overflow-y-auto border-b border-ink bg-paper lg:static lg:block lg:max-h-none lg:w-auto lg:overflow-visible lg:border-0`}
        >
          <div className="flex flex-col lg:flex-row lg:justify-end">
            {links.map(([label, href]) => (
              <a
                onClick={() => setOpen(false)}
                className="nav-link border-b border-ink/10 px-4 py-4 text-[11px] font-bold tracking-wide lg:border-0"
                href={href}
                key={label}
              >
                {t(`nav.${label}`)}
              </a>
            ))}
            {/* Language switch lives inside the panel on small screens, where there is no room in the bar. */}
            <button
              onClick={toggleLanguage}
              className="px-4 py-4 text-left text-[11px] font-bold tracking-wide lg:hidden"
              aria-label="Cambiar idioma"
            >
              {i18n.language.startsWith('es') ? 'EN' : 'ES'} / 26
            </button>
          </div>
        </div>

        <div className="flex items-stretch border-l border-ink lg:border-0">
          <button
            onClick={toggleLanguage}
            className="hidden border-l border-ink px-4 py-3 text-center text-xs font-bold transition-colors hover:bg-mint lg:block"
            aria-label="Cambiar idioma"
          >
            {i18n.language.startsWith('es') ? 'EN' : 'ES'} / 26
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="px-4 text-left text-xs font-bold lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={t('nav.menu')}
          >
            {t('nav.menu')} {open ? '−' : '+'}
          </button>
        </div>
      </nav>

      {open && <div className="fixed inset-0 top-full z-40 bg-ink/40 lg:hidden" aria-hidden onClick={() => setOpen(false)} />}
    </header>
  )
}
