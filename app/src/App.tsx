import { useEffect } from 'react';
import AgeGateModal from './components/AgeGateModal';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Pricing from './sections/Pricing';
import CannanasForm from './sections/CannanasForm';
import Location from './sections/Location';
import Strains from './sections/Strains';
import QualityGrowth from './sections/QualityGrowth';
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
      <AgeGateModal />
      <Navbar />
      <main>
        <Hero />
        <Location />
        <Pricing />
        <CannanasForm />
        <Strains />
        <QualityGrowth />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
