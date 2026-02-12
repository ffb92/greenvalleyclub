import { useEffect } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Pricing from './sections/Pricing';
import Timeline from './sections/Timeline';
import Location from './sections/Location';
import Strains from './sections/Strains';
import QualityGrowth from './sections/QualityGrowth';
import AISommelier from './sections/AISommelier';
import Games from './sections/Games';
import Team from './sections/Team';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    // Scroll reveal observer
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <Timeline />
        <Location />
        <Strains />
        <QualityGrowth />
        <AISommelier />
        <Games />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
