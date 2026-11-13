import { useTranslation } from 'react-i18next'

export function Hero() {
  const { t } = useTranslation()
  const title = t('hero.title', { returnObjects: true }) as string[]
  return (
    <section id="home" className="mx-auto max-w-[1500px] scroll-mt-[3.25rem] border-x border-ink">
      <div className="grid grid-cols-12 border-b border-ink lg:min-h-[720px]">
        <div className="col-span-12 flex flex-col justify-between gap-12 p-5 xs:p-6 md:p-8 lg:col-span-7 lg:min-h-0 lg:gap-0 lg:border-r lg:border-ink lg:p-9">
          <div className="flex justify-between gap-4 text-[10px] font-bold tracking-widest">
            <span>{t('hero.studio')}</span>
            <span className="shrink-0">{t('hero.location')}</span>
          </div>
          <h1 className="break-words font-[Arial_Black,Impact,sans-serif] text-[clamp(2.9rem,13vw,10.5rem)] leading-[.82] tracking-[-.1em] lg:text-[clamp(4rem,9.4vw,9.3rem)] lg:leading-[.78]">
            {title[0]}
            <br />
            {title[1]}
            <br />
            <i className="text-navy not-italic">{title[2]}</i>
          </h1>
          {/* On wide screens the copy + action sit apart; on small screens they stack and the button stretches. */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between lg:mt-0">
            <p className="max-w-[275px] text-sm leading-5">{t('hero.description')}</p>
            <a className="group inline-flex w-full items-center justify-between gap-6 border border-ink bg-mint px-[15px] py-3 text-xs font-extrabold transition-colors duration-200 hover:border-navy hover:bg-navy hover:text-mint motion-reduce:transition-none sm:w-auto xs:w-fit" href="#contact">
              {t('hero.talk')} <span className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none">→</span>
            </a>
          </div>
        </div>

        <div className="relative col-span-12 h-[clamp(280px,52vw,420px)] overflow-hidden bg-navy p-5 text-mint md:p-7 lg:col-span-5 lg:h-auto lg:min-h-0">
          <span className="absolute right-5 top-4 text-xs font-bold tracking-widest md:right-7">{t('hero.south')}</span>
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <span className="absolute left-[55%] top-[15%] block h-3 w-3 rotate-45 bg-mint" />
            <span className="absolute left-[33%] top-[29%] block h-3 w-3 rotate-45 bg-mint" />
            <span className="absolute left-[50%] top-[43%] block h-2 w-2 rotate-45 bg-mint" />
            <span className="absolute left-[67%] top-[38%] block h-3 w-3 rotate-45 bg-mint" />
            <span className="absolute left-[18%] top-[58%] block h-3 w-3 rotate-45 bg-mint" />
          </div>
          <img
            src="/Mountain-Hero.webp"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[76%] max-w-none -translate-x-1/2 select-none [filter:contrast(1.12)_grayscale(1)] mix-blend-screen"
          />
          <div className="absolute inset-x-5 bottom-20 z-10 border-t border-mint/60 pt-3 text-[10px] font-bold tracking-widest md:inset-x-7 lg:bottom-5">
            {t('hero.disciplines')}
          </div>
          {/* The big year is decorative: pulled out of the flow so it never overlaps the caption on narrow panels. */}
          <span className="absolute bottom-4 right-5 z-20 text-7xl font-black leading-none tracking-tighter md:text-8xl lg:text-9xl">26</span>
        </div>
      </div>
    </section>
  )
}
