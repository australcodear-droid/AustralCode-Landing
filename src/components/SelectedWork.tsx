import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const images = [
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=85',
]

type Project = { number: string; name: string; type: string; description: string }

export function SelectedWork() {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState<number | null>(null)
  const projects = t('work.projects', { returnObjects: true }) as Project[]

  return (
    <section id="work" className="section-wrap bg-paper">
      <div className="border-x border-ink">
        <div className="grid grid-cols-12 border-b border-ink">
          {/* Intro block never keeps a 200px empty gutter on phones. */}
          <div className="col-span-12 p-5 md:col-span-4 md:border-r md:border-ink md:p-8">
            <div className="flex items-start justify-between gap-4 md:block">
              <p className="eyebrow">{t('work.label')}</p>
              <h2 className="headline text-4xl leading-[.84] tracking-[-.1em] xs:text-5xl md:mt-8 md:text-6xl md:leading-[.8]">
                {t('work.title')}
              </h2>
            </div>
            <p className="stack-gap mt-6 max-w-[420px] text-sm leading-5 md:mt-16 md:max-w-[200px]">{t('work.intro')}</p>
          </div>

          <div className="col-span-12 md:col-span-8">
            {projects.map((project, index) => {
              const isExpanded = expanded === index
              return (
                <article className={`project-card ${isExpanded ? 'is-expanded' : ''} border-b border-ink last:border-b-0`} key={project.number}>
                  <button
                    onClick={() => setExpanded(isExpanded ? null : index)}
                    className="project-trigger grid w-full grid-cols-[52px_1fr] text-left sm:grid-cols-[64px_1fr] md:grid-cols-[86px_1fr]"
                    aria-expanded={isExpanded}
                  >
                    <span className="border-r border-ink p-4 text-xs font-bold md:p-6">{project.number}</span>
                    <div
                      className="project-art relative min-h-44 overflow-hidden p-5 text-paper xs:min-h-52 md:min-h-56 md:p-7"
                      style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,128,.55), rgba(0,0,0,.08)), url(${images[index]})` }}
                    >
                      <span className="relative z-10 text-[10px] font-bold tracking-widest md:text-xs">{project.type}</span>
                      {/* Fluid wordmark keeps long project names inside the panel at every width. */}
                      <span className="project-word relative z-10 mt-12 block break-words font-black leading-none tracking-[-.12em] md:mt-14">
                        {project.name}
                      </span>
                      <span className="absolute bottom-4 right-4 z-10 border border-paper bg-navy/40 px-3 py-2 text-[10px] font-bold tracking-widest md:bottom-5 md:right-5">
                        {isExpanded ? t('work.collapse') : t('work.expand')} {isExpanded ? '−' : '+'}
                      </span>
                    </div>
                  </button>
                  <div className="project-detail grid grid-cols-[52px_1fr] overflow-hidden sm:grid-cols-[64px_1fr] md:grid-cols-[86px_1fr]">
                    <span className="border-r border-ink" />
                    <div className="project-detail-inner grid gap-5 bg-navy p-5 text-paper md:grid-cols-[1.2fr_.8fr] md:p-7">
                      <p className="max-w-md text-base leading-6">{project.description}</p>
                      <span className="text-xs font-bold tracking-widest text-mint md:self-end">{project.type}</span>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
