type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <div className="mb-10 max-w-2xl">
    <p className="text-sm font-semibold tracking-[0.2em] text-[#a97916]">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-bold leading-tight text-[#000000] md:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-lg leading-8 text-[#41566f]">{description}</p>}
  </div>
)

export default SectionHeading
