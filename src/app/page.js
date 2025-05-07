import "./globals.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import QuickProducts from "./components/QuickProducts/QuickProducts";
import Footer from "./components/Footer/Footer";



export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
     
        <Section />
        <QuickProducts />
<Footer />
    </div>
  );
}
