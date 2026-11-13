import { useTranslation } from 'react-i18next'

export function About() {
  const { t } = useTranslation()
  const title = t('about.title', { returnObjects: true }) as string[]
  return (
    <section id="about" className="section-wrap bg-paper">
      <div className="grid grid-cols-12 border-x border-ink">
        {/* Short banner on phones, tall index column from tablet up. */}
        <div className="col-span-12 flex items-end justify-between border-b border-ink p-5 md:col-span-4 md:flex-col md:items-stretch md:border-b-0 md:border-r md:p-8">
          <p className="eyebrow">{t('about.label')}</p>
          <div className="text-6xl font-black leading-none tracking-tighter md:mt-20 md:text-[clamp(5rem,12vw,11rem)]">01</div>
        </div>
        <div className="col-span-12 p-5 md:col-span-8 md:p-8">
          <h2 className="headline max-w-3xl text-[clamp(1.85rem,7.5vw,6.2rem)] leading-[.9] tracking-[-.09em] md:text-[clamp(2.6rem,6.4vw,5.5rem)] md:leading-[.88]">
            {title[0]}
            <br />
            <i>{title[1]}</i> {title[2]}
            <br />
            {title[3]}
          </h2>
          <div className="stack-gap mt-10 grid max-w-xl grid-cols-1 gap-6 border-t border-ink pt-4 sm:mt-16 sm:grid-cols-2">
            <p className="text-sm leading-5">{t('about.copyOne')}</p>
            <p className="text-sm leading-5">{t('about.copyTwo')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
