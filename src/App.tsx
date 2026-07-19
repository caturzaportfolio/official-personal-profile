import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { NavSection } from "./types";

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>("home");

  // Scroll spy to highlight current section in navigation
  useEffect(() => {
    const sections: NavSection[] = ["home", "about", "experience", "skills", "projects", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // offset for better trigger alignment

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: NavSection) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Find navbar height to offset scroll position accurately
      const navbar = document.getElementById("navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight + 2;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      
      setActiveSection(sectionId);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setActiveSection("home");
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]" id="portfolio-app">
      {/* Navigation */}
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero onNavClick={handleNavClick} />

        {/* About Section */}
        <About />

        {/* Experience Section */}
        <Experience />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onScrollToTop={handleScrollToTop} />
    </div>
  );
}
