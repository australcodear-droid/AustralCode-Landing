import { useTranslation } from 'react-i18next'

type Service = { number: string; title: string; kicker: string; description: string }

export function Services() {
  const { t } = useTranslation()
  const services = t('services.items', { returnObjects: true }) as Service[]
  return (
    <section id="services" className="mx-auto max-w-[1500px] scroll-mt-[3.25rem] bg-navy text-paper">
      <div className="border-x border-paper">
        <div className="flex items-end justify-between gap-4 border-b border-paper p-5 md:p-8">
          <div>
            <p className="font-mono text-[10px] font-medium tracking-[.12em]">{t('services.label')}</p>
            <h2 className="mt-4 break-words font-[Arial_Black,Impact,sans-serif] text-4xl tracking-[-.09em] xs:text-5xl md:text-7xl">{t('services.title')}</h2>
          </div>
          <span className="shrink-0 text-xs font-bold text-mint">{t('services.count')}</span>
        </div>

        {/* Rows stay side-by-side from sm up; on phones each service becomes a stacked card. */}
        {services.map((service) => (
          <article
            className="group grid grid-cols-12 border-b border-paper transition-colors hover:bg-mint hover:text-navy motion-reduce:transition-none max-md:hover:bg-navy max-md:hover:text-paper"
            key={service.number}
          >
            <div className="col-span-2 flex items-start p-5 text-xs font-bold sm:p-6 md:p-7">{service.number}</div>
            <div className="col-span-10 border-l border-paper p-5 sm:p-6 md:col-span-5 md:p-7">
              <h3 className="break-words font-[Arial_Black,Impact,sans-serif] text-[clamp(1.6rem,5.5vw,3rem)] tracking-[-.07em] md:text-4xl lg:text-5xl">{service.title}</h3>
              <p className="mt-2 text-xs uppercase tracking-widest">{service.kicker}</p>
            </div>
            <div className="col-span-12 flex flex-col gap-5 border-t border-paper p-5 sm:flex-row sm:items-end sm:justify-between md:col-span-5 md:border-l md:border-t-0 md:p-7">
              <p className="max-w-xs text-sm leading-5">{service.description}</p>
              <span className="hidden text-2xl transition-transform group-hover:translate-x-2 sm:block">↗</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
