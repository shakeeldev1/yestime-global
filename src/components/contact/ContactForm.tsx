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

const inputClassName = 'mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#071a36] outline-none transition placeholder:text-[#8b9bad] focus:border-[#d99420] focus:ring-2 focus:ring-[#d99420]/15'

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
    <section id="contact-form" className="bg-white px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)] lg:items-start">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(11,59,110,0.08)] sm:p-8">
          <span className="inline-flex rounded-full border border-amber-300/50 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-700">Send an inquiry</span>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#061832] sm:text-4xl">Tell us how we can help.</h2>
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
              <input required type="checkbox" className="mt-1 h-4 w-4 accent-[#d99420]" />
              <span>I agree that YES TIME GLOBAL may use these details to respond to my inquiry.</span>
            </label>

            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f5c54e] to-[#d99420] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.08em] text-[#07182d] shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5 hover:shadow-amber-500/30 focus-visible:outline-2 focus-visible:outline-amber-400 sm:w-auto">
              Send message
            </button>

            {submitted ? <p role="status" className="rounded-xl border border-[#d6b35a] bg-[#fff8e1] px-4 py-3 text-sm leading-6 text-[#6f5310]">Thank you. Your inquiry has been prepared for the YES TIME GLOBAL team.</p> : null}
          </form>
        </div>

        <aside className="self-start rounded-3xl border border-[#d6b35a]/40 bg-[#06234b] p-5 text-white shadow-[0_18px_40px_rgba(2,12,28,0.16)] sm:p-8 lg:sticky lg:top-24">
          <span className="inline-flex rounded-full border border-amber-300/50 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#f5c54e]">Before you send</span>
          <h2 className="mt-4 text-2xl font-black text-white">A clear path starts here.</h2>
          <div className="mt-6 space-y-4">
            {['Choose the inquiry that best matches your question.', 'Include enough detail for a useful response.', 'Use the form for program, support, partnership, or investment questions.'].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c5962e]" />
                <p className="m-0 text-sm leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}

export default ContactForm
