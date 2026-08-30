import { useState } from 'react'
import type { FormEvent, ChangeEvent } from 'react'
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa6'
import { HiChevronDown, HiCheck } from 'react-icons/hi2'
import { inquiryTypes } from './contactData'

type FormValues = {
  name: string
  email: string
  phone: string
  inquiry: string
  country: string
  message: string
  consent: boolean
}

const initialValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  inquiry: inquiryTypes[0] || '',
  country: '',
  message: '',
  consent: false,
}

const fieldBaseClass =
  'w-full rounded-2xl border border-slate-200/80 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10'

const ContactForm = () => {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value

    if (submitted) setSubmitted(false)
    setValues((prev) => ({ ...prev, [name]: val }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 800))

    setIsSubmitting(false)
    setSubmitted(true)
    setValues(initialValues)
  }

  return (
    <section id="contact-form" className="bg-slate-50/50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:items-start">
        {/* Form Container */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-10 lg:col-span-7">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              Send an Inquiry
            </span>
          </div>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Let's start a conversation.
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Share a few details and our team will guide you to the right next step.
          </p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {/* Name & Email */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Full Name <span className="text-amber-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={values.name}
                  onChange={handleChange}
                  className={fieldBaseClass}
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Email Address <span className="text-amber-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={values.email}
                  onChange={handleChange}
                  className={fieldBaseClass}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Phone & Country */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={handleChange}
                  className={fieldBaseClass}
                  placeholder="+92 300 0000000"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="country" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Country
                </label>
                <input
                  id="country"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  className={fieldBaseClass}
                  placeholder="Your country"
                />
              </div>
            </div>

            {/* Inquiry Select */}
            <div className="space-y-1.5">
              <label htmlFor="inquiry" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Inquiry Type <span className="text-amber-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="inquiry"
                  name="inquiry"
                  required
                  value={values.inquiry}
                  onChange={handleChange}
                  className={`${fieldBaseClass} appearance-none pr-10`}
                >
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                  <HiChevronDown className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Message <span className="text-amber-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={4}
                value={values.message}
                onChange={handleChange}
                className={`${fieldBaseClass} resize-y`}
                placeholder="Tell us what you would like to discuss."
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3 pt-1">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                required
                checked={values.consent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
              />
              <label htmlFor="consent" className="cursor-pointer text-xs leading-5 text-slate-600 select-none">
                I agree that YES TIME GLOBAL may use these details to respond to my inquiry.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-200 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <span>Send Message</span>
              )}
            </button>

            {/* Status Alert */}
            {submitted && (
              <div
                role="status"
                aria-live="polite"
                className="flex items-center gap-3 rounded-2xl border border-emerald-200/80 bg-emerald-50/80 p-4 text-sm text-emerald-900 animate-in fade-in slide-in-from-bottom-2"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-600">
                  <HiCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Message Sent!</p>
                  <p className="text-xs text-emerald-700">Thank you. Your inquiry has been received by YES TIME GLOBAL.</p>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Sidebar Contact Card */}
        <aside className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl shadow-slate-900/10 lg:col-span-5 lg:sticky lg:top-8">
          <span className="inline-block rounded-full bg-amber-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-amber-400 ring-1 ring-inset ring-amber-500/20">
            Head Office
          </span>
          <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">
            YES TIME GLOBAL
          </h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
            Lahore, Pakistan
          </p>

          <div className="mt-8 space-y-5 border-t border-slate-800 pt-6">
            {/* WhatsApp Support */}
            <a
              href="https://wa.me/923357990041"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-800/50 p-3.5 transition-all hover:border-[#25D366]/50 hover:bg-slate-800"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-md shadow-[#25D366]/20">
                <FaWhatsapp className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400">WhatsApp Support</p>
                <p className="text-sm font-semibold text-slate-100 transition-colors group-hover:text-[#25D366]">
                  +92 335 7990041
                </p>
              </div>
            </a>

            {/* Direct Call */}
            <a
              href="tel:+923027392442"
              className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-800/50 p-3.5 transition-all hover:border-[#007AFF]/50 hover:bg-slate-800"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#007AFF] text-white shadow-md shadow-[#007AFF]/20">
                <FaPhone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400">Direct Call</p>
                <p className="text-sm font-semibold text-slate-100 transition-colors group-hover:text-[#007AFF]">
                  +92 302 7392442
                </p>
              </div>
            </a>

            {/* Email Address */}
            <a
              href="mailto:info@yestimeglobal.com"
              className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-800/50 p-3.5 transition-all hover:border-[#EA4335]/50 hover:bg-slate-800"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EA4335] text-white shadow-md shadow-[#EA4335]/20">
                <FaEnvelope className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400">Email Address</p>
                <p className="text-sm font-semibold text-slate-100 transition-colors group-hover:text-[#EA4335]">
                  info@yestimeglobal.com
                </p>
              </div>
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default ContactForm