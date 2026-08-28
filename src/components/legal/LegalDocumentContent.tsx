import type { LegalDocument } from './legalData'

type LegalDocumentContentProps = {
  document: LegalDocument
}

const LegalDocumentContent = ({ document }: LegalDocumentContentProps) => {
  return (
    <section className="bg-[#f7fafc] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.8fr)] lg:items-start">
        <aside className="rounded-3xl border border-[#dbe5f2] bg-white p-5 shadow-[0_12px_30px_rgba(11,59,110,0.06)] sm:p-7 lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#a97916]">Please note</p>
          <h2 className="mt-3 text-2xl font-normal leading-tight text-[#071a36]">Review the details carefully.</h2>
          <p className="mt-4 text-sm leading-7 text-[#41566f]">Program terms may differ by plan and market. The latest approved policy and plan-specific terms take priority over general website information.</p>
        </aside>

        <article className="rounded-3xl border border-[#dbe5f2] bg-white p-5 shadow-[0_12px_30px_rgba(11,59,110,0.06)] sm:p-8 lg:p-10">
          <div className="space-y-9">
            {document.sections.map((section) => (
              <section key={section.heading} className="border-b border-[#e5edf5] pb-8 last:border-0 last:pb-0">
                <h2 className="text-xl font-medium leading-tight text-[#071a36] sm:text-2xl">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-sm leading-7 text-[#41566f] sm:text-base">{paragraph}</p>)}
                </div>
                {section.bullets ? <ul className="mt-4 space-y-3">{section.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-3 text-sm leading-7 text-[#41566f]"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c5962e]" />{bullet}</li>)}</ul> : null}
              </section>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default LegalDocumentContent
