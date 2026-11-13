import { useTranslation } from 'react-i18next'

export function Hero() {
  const { t } = useTranslation()
  const title = t('hero.title', { returnObjects: true }) as string[]
  return (
    <section id="home" className="section-wrap border-x border-ink">
      <div className="grid grid-cols-12 border-b border-ink lg:min-h-[720px]">
        <div className="col-span-12 flex flex-col justify-between gap-12 p-5 xs:p-6 md:p-8 lg:col-span-7 lg:min-h-0 lg:gap-0 lg:border-r lg:border-ink lg:p-9">
          <div className="flex justify-between gap-4 text-[10px] font-bold tracking-widest">
            <span>{t('hero.studio')}</span>
            <span className="shrink-0">{t('hero.location')}</span>
          </div>
          <h1 className="headline text-[clamp(2.9rem,13vw,10.5rem)] leading-[.82] tracking-[-.1em] lg:text-[clamp(4rem,9.4vw,9.3rem)] lg:leading-[.78]">
            {title[0]}
            <br />
            {title[1]}
            <br />
            <i>{title[2]}</i>
          </h1>
          {/* On wide screens the copy + action sit apart; on small screens they stack and the button stretches. */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between lg:mt-0">
            <p className="max-w-[275px] text-sm leading-5">{t('hero.description')}</p>
            <a className="button w-full sm:w-auto xs:w-fit" href="#contact">
              {t('hero.talk')} <span>→</span>
            </a>
          </div>
        </div>

        <div className="relative col-span-12 h-[clamp(280px,52vw,420px)] overflow-hidden bg-navy p-5 text-mint md:p-7 lg:col-span-5 lg:h-auto lg:min-h-0">
          <span className="absolute right-5 top-4 text-xs font-bold tracking-widest md:right-7">{t('hero.south')}</span>
          <div className="code-orb absolute left-[15%] top-[24%] h-44 w-44 rounded-full border border-mint/70 md:h-60 md:w-60 lg:h-72 lg:w-72" />
          <div className="absolute inset-x-5 bottom-20 border-t border-mint/60 pt-3 text-[10px] font-bold tracking-widest md:inset-x-7 lg:bottom-5">
            {t('hero.disciplines')}
          </div>
          {/* The big year is decorative: pulled out of the flow so it never overlaps the caption on narrow panels. */}
          <span className="absolute bottom-4 right-5 text-7xl font-black leading-none tracking-tighter md:text-8xl lg:text-9xl">26</span>
          <span className="absolute left-[68%] top-[23%] text-xl">✦</span>
          <span className="absolute left-[32%] top-[15%] text-sm">✦</span>
        </div>
      </div>
    </section>
  )
}
