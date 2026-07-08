import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a short "initialization" beat for the loading screen, then reveal the page.
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Loader isLoading={isLoading} />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}
