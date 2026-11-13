import { useTranslation } from 'react-i18next'

type Step = { number: string; title: string; description: string }

export function Process() {
  const { t } = useTranslation()
  const title = t('process.title', { returnObjects: true }) as string[]
  const steps = t('process.items', { returnObjects: true }) as Step[]
  return (
    <section className="mx-auto max-w-[1500px] scroll-mt-[3.25rem] bg-paper">
      <div className="border-x border-ink">
        <div className="grid grid-cols-12 border-b border-ink">
          <div className="col-span-12 p-5 md:col-span-5 md:border-r md:border-ink md:p-8">
            <p className="font-mono text-[10px] font-medium tracking-[.12em]">{t('process.label')}</p>
            <h2 className="mt-10 break-words font-[Arial_Black,Impact,sans-serif] text-[clamp(2.6rem,8vw,7rem)] leading-[.86] tracking-[-.1em] md:mt-20 md:text-[clamp(2.6rem,6.4vw,7rem)] md:leading-[.8]">
              {title[0]}
              <br />
              {title[1]}
              <br />
              <i className="text-navy not-italic">{title[2]}</i>
            </h2>
          </div>
          {/* 1 → 2 → 4 columns as width allows, instead of squeezing four cards into a fixed grid. */}
          <div className="col-span-12 grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr))] md:col-span-7">
            {steps.map((step) => (
              <div className="border-b border-ink p-5 [&:nth-child(even)]:border-l md:min-h-[195px] md:p-6" key={step.number}>
                <span className="text-xs font-bold">{step.number}</span>
                <h3 className="mt-6 text-xl font-black tracking-tight md:mt-9">{step.title}</h3>
                <p className="mt-2 max-w-[175px] text-xs leading-4">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
