import { useState } from 'react'
import type { FormEvent, ChangeEvent } from 'react'
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaUser,
  FaGlobe,
  FaListCheck,
  FaShieldHalved,
  FaUsers,
  FaBolt,
  FaMessage,
} from 'react-icons/fa6'
import { HiChevronDown, HiCheck, HiArrowRight } from 'react-icons/hi2'
import { useTranslation } from "react-i18next";
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

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-[#f9fafb] pl-11 pr-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-[#d99420] focus:bg-white focus:ring-2 focus:ring-[#d99420]/20'

const ContactForm = () => {
  const { t } = useTranslation("contact");
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
    <section id="contact-form" className="bg-[#f2f5f9] px-4 py-12 sm:px-6 lg:px-8">
      {/* 12-column grid container */}
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-12 lg:items-stretch">
        
        {/* LEFT SIDEBAR - GET IN TOUCH (~34% width / col-span-4) */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-[#070e17] p-6 text-white shadow-xl sm:p-8 lg:col-span-4">
          {/* Background Image Layer */}
          <img
            src="/homeAbout.png"
            alt={t("form.sidebar.imageAlt")}
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />

          {/* Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070e17] via-[#070e17]/35 to-transparent" />

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
            
            {/* Top Header & Status Pill */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#d99420]">
                  {t("form.sidebar.eyebrow")}
                </span>
                <h3 className="mt-1 text-2xl font-extrabold text-white">
                  YES TIME GLOBAL
                </h3>
              </div>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 rounded-xl bg-[#000000]/90 px-3 py-2 border border-slate-700/60 backdrop-blur-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <div className="text-[11px] leading-tight">
                  <p className="text-slate-400">{t("form.sidebar.statusLabel")}</p>
                  <p className="font-bold text-amber-400">{t("form.sidebar.statusValue")}</p>
                </div>
              </div>
            </div>

            {/* Middle Contact Options */}
            <div className="space-y-3">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/923068509086"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-slate-800/80 bg-[#0d1622]/90 p-3.5 transition-all hover:border-slate-700 hover:bg-[#111c2e]"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
                    <FaWhatsapp className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400">{t("form.sidebar.whatsappLabel")}</p>
                    <p className="text-xs font-bold text-white" dir="ltr">+92 306 8509086</p>
                  </div>
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800/60 text-slate-400 transition-all group-hover:bg-slate-700 group-hover:text-white">
                  <HiArrowRight className="h-3.5 w-3.5" />
                </div>
              </a>

              {/* Direct Call Card */}
              <a
                href="tel:+923196336984"
                className="group flex items-center justify-between rounded-2xl border border-slate-800/80 bg-[#0d1622]/90 p-3.5 transition-all hover:border-slate-700 hover:bg-[#111c2e]"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#007AFF] text-white">
                    <FaPhone className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400">{t("form.sidebar.callLabel")}</p>
                    <p className="text-xs font-bold text-white" dir="ltr">+92 319 6336984</p>
                  </div>
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800/60 text-slate-400 transition-all group-hover:bg-slate-700 group-hover:text-white">
                  <HiArrowRight className="h-3.5 w-3.5" />
                </div>
              </a>

              {/* Email Support Card */}
              <a
                href="mailto:info@yestimeglobal.com"
                className="group flex items-center justify-between rounded-2xl border border-slate-800/80 bg-[#0d1622]/90 p-3.5 transition-all hover:border-slate-700 hover:bg-[#111c2e]"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EA4335] text-white">
                    <FaEnvelope className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400">{t("form.sidebar.emailLabel")}</p>
                    <p className="text-xs font-bold text-white" dir="ltr">info@yestimeglobal.com</p>
                  </div>
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800/60 text-slate-400 transition-all group-hover:bg-slate-700 group-hover:text-white">
                  <HiArrowRight className="h-3.5 w-3.5" />
                </div>
              </a>
            </div>

            {/* Prefer WhatsApp Banner Card */}
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-800/80 bg-[#0d1622]/90 p-3.5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber-500/20 bg-amber-500/10 text-amber-400">
                  <FaMessage className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-400">{t("form.sidebar.preferTitle")}</p>
                  <p className="text-[11px] text-slate-400">{t("form.sidebar.preferSubtitle")}</p>
                </div>
              </div>

              <a
                href="https://wa.me/923068509086"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#00a884] px-5 py-2 text-xs font-bold text-white transition-all hover:bg-[#008f70]"
              >
                <FaWhatsapp className="h-4 w-4" />
                <span>{t("form.sidebar.chatButton")}</span>
                <HiArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Bottom Location Tag */}
            <div className="flex justify-end pt-1">
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-[#0b131e]/90 px-3 py-2 backdrop-blur-md">
                <span className="text-amber-400 text-xs">📍</span>
                <div className="text-right">
                  <p className="text-xs font-bold text-white leading-tight">YES TIME GLOBAL</p>
                  <p className="text-[10px] text-slate-400 leading-tight">{t("form.sidebar.location")}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT FORM CONTAINER - SEND AN INQUIRY (~66% width / col-span-8) */}
        <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:col-span-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#d99420]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#d99420]">
                {t("form.eyebrow")}
              </span>
            </div>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {t("form.headingPre")} <span className="text-[#d99420]">{t("form.headingHighlight")}</span>{t("form.headingSuffix")}
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base leading-relaxed">
              {t("form.subtitle")}
            </p>

            {/* Badges / Features */}
            <div className="mt-6 flex flex-wrap items-center gap-4 border-b border-slate-100 pb-6 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <FaBolt className="text-[#d99420]" />
                <span>{t("form.badges.quick")}</span>
              </div>
              <span className="text-slate-300">|</span>
              <div className="flex items-center gap-2">
                <FaShieldHalved className="text-[#d99420]" />
                <span>{t("form.badges.secure")}</span>
              </div>
              <span className="text-slate-300">|</span>
              <div className="flex items-center gap-2">
                <FaUsers className="text-[#d99420]" />
                <span>{t("form.badges.support")}</span>
              </div>
            </div>

            {/* Form */}
            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              {/* Full Name & Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-bold text-slate-700">
                    {t("form.labels.name")} <span className="text-[#d99420]">*</span>
                  </label>
                  <div className="relative">
                    <FaUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                    <input
                      id="name"
                      name="name"
                      required
                      value={values.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder={t("form.placeholders.name")}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-bold text-slate-700">
                    {t("form.labels.email")} <span className="text-[#d99420]">*</span>
                  </label>
                  <div className="relative">
                    <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={values.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder={t("form.placeholders.email")}
                    />
                  </div>
                </div>
              </div>

              {/* Phone & Country */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-xs font-bold text-slate-700">
                    {t("form.labels.phone")} <span className="text-[#d99420]">*</span>
                  </label>
                  <div className="relative">
                    <FaPhone className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={values.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder={t("form.placeholders.phone")}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="country" className="text-xs font-bold text-slate-700">
                    {t("form.labels.country")} <span className="text-[#d99420]">*</span>
                  </label>
                  <div className="relative">
                    <FaGlobe className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                    <input
                      id="country"
                      name="country"
                      required
                      value={values.country}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder={t("form.placeholders.country")}
                    />
                    <HiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Inquiry Type Select */}
              <div className="space-y-1">
                <label htmlFor="inquiry" className="text-xs font-bold text-slate-700">
                  {t("form.labels.inquiry")} <span className="text-[#d99420]">*</span>
                </label>
                <div className="relative">
                  <FaListCheck className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                  <select
                    id="inquiry"
                    name="inquiry"
                    required
                    value={values.inquiry}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none pr-10`}
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {t(`inquiryTypes.${type}.label`)}
                      </option>
                    ))}
                  </select>
                  <HiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-bold text-slate-700">
                  {t("form.labels.message")} <span className="text-[#d99420]">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    rows={4}
                    value={values.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-[#f9fafb] p-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-[#d99420] focus:bg-white focus:ring-2 focus:ring-[#d99420]/20"
                    placeholder={t("form.placeholders.message")}
                  />

                </div>
              </div>

              {/* Consent Checkbox & Submit Button Grid */}
              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-2.5 max-w-xs">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    checked={values.consent}
                    onChange={handleChange}
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#d99420] focus:ring-[#d99420]"
                  />
                  <label htmlFor="consent" className="cursor-pointer text-xs text-slate-500 leading-tight select-none">
                    {t("form.consent")}
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#d99420] px-5 py-2 text-sm font-bold text-white shadow-md transition-all hover:bg-[#c48316] focus:outline-none focus:ring-2 focus:ring-[#d99420] focus:ring-offset-2 disabled:opacity-70"
                >
                  <FaPaperPlane className="text-xs" />
                  <span>{isSubmitting ? t("form.submitting") : t("form.submit")}</span>
                </button>
              </div>

              {/* Success Banner */}
              {submitted && (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"
                >
                  <HiCheck className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-semibold">{t("form.successTitle")}</p>
                    <p className="text-xs text-emerald-700">{t("form.successBody")}</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ContactForm