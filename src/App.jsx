import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Cerifications";
import AboutMe from "./components/AboutMe";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe/>
      <Projects />
      <Certifications/>
      <Contact />
      <Footer />
    </>
  );
}
