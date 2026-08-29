import ContactChannels from '../components/contact/ContactChannels'
import ContactForm from '../components/contact/ContactForm'
import ContactHero from '../components/contact/ContactHero'
import ContactMarkets from '../components/contact/ContactMarkets'

const ContactUs = () => {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      <ContactChannels />
      <ContactForm />
      <ContactMarkets />
    </main>
  )
}

export default ContactUs