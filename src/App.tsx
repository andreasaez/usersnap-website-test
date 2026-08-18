import Header from './components/Header'
import Hero from './components/Hero'
import Blueprint from './components/Blueprint'
import Pillars from './components/Pillars'
import Differentiators from './components/Differentiators'
import RoiCalculator from './components/RoiCalculator'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Blueprint />
        <Pillars />
        <Differentiators />
        <RoiCalculator />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

export default App
