import type { ReactNode } from 'react'

type ActionPanelProps = {
  title: string
  description: string
  children: ReactNode
}

const ActionPanel = ({ title, description, children }: ActionPanelProps) => (
  <section className="bg-[#071a36] px-6 py-14 text-white md:px-12 lg:px-20">
    <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
        <p className="mt-3 leading-7 text-[#dbe5f2]">{description}</p>
      </div>
      {children}
    </div>
  </section>
)

export default ActionPanel
