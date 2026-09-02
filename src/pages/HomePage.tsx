import Header from '../components/Header'
import Hero from '../components/Hero'
import Blueprint from '../components/Blueprint'
import Pillars from '../components/Pillars'
import Differentiators from '../components/Differentiators'
import HowWeWin from '../components/HowWeWin'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import ProofScale from '../components/ProofScale'
import FinalCta from '../components/FinalCta'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <Blueprint />
        <Pillars />
        <Differentiators />
        <HowWeWin />
        <ProofScale />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
