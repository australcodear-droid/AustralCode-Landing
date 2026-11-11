import { useTranslation } from 'react-i18next'

export function CTA() {
  const { t } = useTranslation()
  const title = t('cta.title', { returnObjects: true }) as string[]
  return (
    <section className="bg-mint text-navy">
      <div className="section-wrap border-x border-navy">
        <div className="grid grid-cols-12 md:min-h-[460px]">
          <div className="col-span-12 flex flex-col justify-between gap-10 p-5 sm:p-6 md:col-span-9 md:gap-8 md:border-r md:border-navy md:p-8">
            <p className="eyebrow">{t('cta.label')}</p>
            <h2 className="headline text-[clamp(2.6rem,9vw,9.5rem)] leading-[.84] tracking-[-.1em] md:leading-[.78]">
              {title[0]}
              <br />
              {title[1]}
              <br />
              <i>{title[2]}</i>
            </h2>
            <a
              href="#contact"
              className="relative z-10 inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 border border-navy bg-navy px-5 py-3 text-sm font-bold text-mint transition-colors hover:bg-paper hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy sm:w-fit"
            >
              {t('cta.button')} →
            </a>
          </div>
          {/* Decorative tile: a slim strip on phones, full side column from md up. */}
          <div className="relative col-span-12 h-24 overflow-hidden md:col-span-3 md:h-auto md:min-h-0">
            <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-4 opacity-30">
              {Array.from({ length: 20 }, (_, i) => (
                <span className="border border-navy" key={i} />
              ))}
            </div>
            <span className="absolute bottom-2 right-5 text-6xl font-black tracking-tighter md:bottom-5 md:text-7xl">✦</span>
          </div>
        </div>
      </div>
    </section>
  )
}
