import Header from "./components/header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import EducationSection from "./components/EducationSection"
import ExperienceSection from "./components/ExperienceSection"
import SkillsSection from "./components/SkillsSection"
import HobbiesSection from "./components/HobbiesSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <HobbiesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
