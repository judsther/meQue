import Navbar from "../components/Navbar/Navbar";
import AboutHero from "./components/AboutHero";
import AboutSection from "./components/AboutSection";
import AboutTeam from "./components/AboutTeam";


export default function About() {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <AboutSection />
      <AboutTeam/>
    </div>
  )
}
