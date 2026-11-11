import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  const location = t('footer.location', { returnObjects: true }) as string[]
  return (
    <footer className="bg-navy text-paper">
      <div className="section-wrap grid grid-cols-12 border-x border-paper">
        {/* Brand block collapses to a compact band on phones instead of reserving a tall empty column. */}
        <div className="col-span-12 flex flex-wrap items-end justify-between gap-6 border-b border-paper p-5 md:col-span-7 md:block md:border-b-0 md:border-r md:p-8">
          <p className="text-3xl font-black leading-none tracking-[-.09em] md:text-4xl">
            AUSTRAL
            <br />
            CODE
          </p>
          <p className="text-xs font-bold tracking-widest md:mt-8">{t('footer.studio')}</p>
        </div>
        <div className="col-span-12 grid grid-cols-2 md:col-span-5">
          <div className="border-r border-paper p-5 text-xs leading-5 md:p-8">
            {location[0]}
            <br />
            {location[1]}
          </div>
          <div className="p-5 text-xs leading-5 md:p-8">
            <a className="block hover:text-mint" href="mailto:hello@australcode.com">
              {t('footer.email')} ↗
            </a>
            <a className="block hover:text-mint" href="#">
              {t('footer.instagram')} ↗
            </a>
          </div>
        </div>
        <div className="col-span-12 border-t border-paper p-4 text-[10px] font-bold tracking-widest md:p-5">{t('footer.copyright')}</div>
      </div>
    </footer>
  )
}
