type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <div className="mb-10 max-w-2xl">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b763c]">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#10233f] md:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>}
  </div>
)

export default SectionHeading
