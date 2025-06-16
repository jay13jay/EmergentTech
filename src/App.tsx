import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import ProcessSection from './components/ProcessSection.jsx'
import ServicesGrid from './components/ServicesGrid.jsx'
import AboutSection from './components/AboutSection.jsx'
import TestimonialsSection from './components/TestimonialsSection.jsx'
import BlogPreview from './components/BlogPreview.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import PricingCalculator from './components/PricingCalculator'
import { ThemeProvider } from './contexts/ThemeContext'

function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProcessSection />
      <ServicesGrid />
      <AboutSection />
      <TestimonialsSection />
      <BlogPreview />
      <ContactSection />
    </main>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calculator" element={<PricingCalculator />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
