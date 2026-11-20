import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Features from './components/Features'
import Routes from './components/Routes'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Routes />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Trust />
      <FAQ />
      <Footer />
    </>
  )
}
