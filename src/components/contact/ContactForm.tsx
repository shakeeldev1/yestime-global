import { useState } from 'react'
import type { FormEvent } from 'react'
import { inquiryTypes } from './contactData'

type FormValues = {
  name: string
  email: string
  phone: string
  inquiry: string
  country: string
  message: string
}

const initialValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  inquiry: inquiryTypes[0],
  country: '',
  message: '',
}

const inputClassName = 'mt-2 w-full rounded-xl border border-[#dbe5f2] bg-white px-4 py-3 text-sm text-[#071a36] outline-none transition placeholder:text-[#8b9bad] focus:border-[#0b3b6e] focus:ring-2 focus:ring-[#0b3b6e]/10'

const ContactForm = () => {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [submitted, setSubmitted] = useState(false)

  const updateValue = (field: keyof FormValues, value: string) => {
    setSubmitted(false)
    setValues((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact-form" className="bg-[#f7fafc] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)] lg:items-start">
        <div className="rounded-[2rem] border border-[#dbe5f2] bg-white p-5 shadow-[0_18px_40px_rgba(11,59,110,0.08)] sm:p-8">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#a97916]">Send an inquiry</span>
          <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.8rem)] font-normal leading-tight tracking-[-0.03em] text-[#071a36]">Tell us how we can help.</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[#41566f]">Share a few details and our team can guide you to the right next step.</p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-[#0b2b52]">
                Full name <span className="text-[#a97916]">*</span>
                <input required value={values.name} onChange={(event) => updateValue('name', event.target.value)} className={inputClassName} placeholder="Your full name" />
              </label>
              <label className="block text-sm font-medium text-[#0b2b52]">
                Email address <span className="text-[#a97916]">*</span>
                <input required type="email" value={values.email} onChange={(event) => updateValue('email', event.target.value)} className={inputClassName} placeholder="you@example.com" />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-[#0b2b52]">
                Phone or WhatsApp
                <input value={values.phone} onChange={(event) => updateValue('phone', event.target.value)} className={inputClassName} placeholder="Your preferred number" />
              </label>
              <label className="block text-sm font-medium text-[#0b2b52]">
                Country
                <input value={values.country} onChange={(event) => updateValue('country', event.target.value)} className={inputClassName} placeholder="Your country" />
              </label>
            </div>

            <label className="block text-sm font-medium text-[#0b2b52]">
              Inquiry type <span className="text-[#a97916]">*</span>
              <select required value={values.inquiry} onChange={(event) => updateValue('inquiry', event.target.value)} className={inputClassName}>
                {inquiryTypes.map((type) => <option key={type}>{type}</option>)}
              </select>
            </label>

            <label className="block text-sm font-medium text-[#0b2b52]">
              Message <span className="text-[#a97916]">*</span>
              <textarea required minLength={10} value={values.message} onChange={(event) => updateValue('message', event.target.value)} className={`${inputClassName} min-h-32 resize-y`} placeholder="Tell us what you would like to discuss." />
            </label>

            <label className="flex items-start gap-3 text-sm leading-6 text-[#41566f]">
              <input required type="checkbox" className="mt-1 h-4 w-4 accent-[#0b3b6e]" />
              <span>I agree that YES TIME GLOBAL may use these details to respond to my inquiry.</span>
            </label>

            <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#c5962e_0%,#f0c75e_100%)] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-[#071a36] shadow-[0_10px_22px_rgba(197,150,46,0.24)] transition duration-300 ease-out hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5962e] focus-visible:ring-offset-2 sm:w-auto">
              Send message
            </button>

            {submitted ? <p role="status" className="rounded-xl border border-[#d6b35a] bg-[#fff8e1] px-4 py-3 text-sm leading-6 text-[#6f5310]">Thank you. Your inquiry has been prepared for the YES TIME GLOBAL team.</p> : null}
          </form>
        </div>

        <aside className="rounded-[2rem] border border-[#dbe5f2] bg-[linear-gradient(145deg,#ffffff_0%,#eff6ff_100%)] p-5 sm:p-8">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#a97916]">Before you send</span>
          <h2 className="mt-3 text-2xl font-normal text-[#071a36]">A clear path starts here.</h2>
          <div className="mt-6 space-y-4">
            {['Choose the inquiry that best matches your question.', 'Include enough detail for a useful response.', 'Use the form for program, support, partnership, or investment questions.'].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c5962e]" />
                <p className="m-0 text-sm leading-6 text-[#41566f]">{item}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}

export default ContactForm
