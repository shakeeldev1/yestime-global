import { useTranslation } from 'react-i18next'
import type { LegalDocumentId, LegalSection } from './legalData'

type LegalDocumentContentProps = {
  documentId: LegalDocumentId
}

const LegalDocumentContent = ({ documentId }: LegalDocumentContentProps) => {
  const { t } = useTranslation('legal')
  const sections = t(`documents.${documentId}.sections`, { returnObjects: true }) as LegalSection[]

  return (
    <section className="bg-slate-100/70 px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.8fr)] lg:items-start">
        <aside className="self-start rounded-3xl border border-[#d6b35a]/40 bg-[#06234b] p-5 text-white shadow-[0_18px_40px_rgba(2,12,28,0.16)] sm:p-7 lg:sticky lg:top-28">
          <p className="inline-flex rounded-full border border-amber-300/50 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#f5c54e]">{t('documentContent.noteBadge')}</p>
          <h2 className="mt-4 text-2xl font-black leading-tight text-white">{t('documentContent.noteHeading')}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-200">{t('documentContent.noteDescription')}</p>
        </aside>

        <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(11,59,110,0.08)] sm:p-8 lg:p-10">
          <div className="space-y-9">
            {sections.map((section, sectionIdx) => (
              <section key={sectionIdx} className="border-b border-[#e5edf5] pb-8 last:border-0 last:pb-0">
                <h2 className="text-xl font-bold leading-tight text-[#000000] sm:text-2xl">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph, pIdx) => <p key={pIdx} className="text-sm leading-7 text-[#41566f] sm:text-base">{paragraph}</p>)}
                </div>
                {section.bullets ? <ul className="mt-4 space-y-3">{section.bullets.map((bullet, bIdx) => <li key={bIdx} className="flex items-start gap-3 text-sm leading-7 text-[#41566f]"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c5962e]" />{bullet}</li>)}</ul> : null}
              </section>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default LegalDocumentContent
