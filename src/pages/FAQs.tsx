import FAQAccordion from '../components/faqs/FAQAccordion'
import FAQCategories from '../components/faqs/FAQCategories'
import FAQHero from '../components/faqs/FAQHero'
import FAQSupportCTA from '../components/faqs/FAQSupportCTA'

const FAQs = () => {
  return (
    <main className="min-h-screen bg-white">
      <FAQHero />
      <FAQCategories />
      <FAQAccordion />
      <FAQSupportCTA />
    </main>
  )
}

export default FAQs