import ContactForm from '../components/contact/ContactForm'
import ContactHero from '../components/contact/ContactHero'
import ContactMarkets from '../components/contact/ContactMarkets'

const ContactUs = () => {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <ContactHero />
      <ContactForm />
      <ContactMarkets />
    </main>
  )
}

export default ContactUs