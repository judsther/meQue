import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import AboutHero from "./components/AboutHero";
import AboutSection from "./components/AboutSection";
import AboutTeam from "./components/AboutTeam";
import AboutWorks from "./components/AboutWorks";


export default function About() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <AboutHero />
      <AboutSection />
      <AboutWorks/>
      <AboutTeam/>
      <Footer />
    </div>
  )
}
