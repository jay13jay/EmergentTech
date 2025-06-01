import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import ProcessSection from './components/ProcessSection.jsx'
import ServicesGrid from './components/ServicesGrid.jsx'
import AboutSection from './components/AboutSection.jsx'
import TestimonialsSection from './components/TestimonialsSection.jsx'
import BlogPreview from './components/BlogPreview.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProcessSection />
        <ServicesGrid />
        <AboutSection />
        <TestimonialsSection />
        <BlogPreview />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
