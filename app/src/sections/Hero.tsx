import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(245, 240, 230, 0.9), rgba(245, 240, 230, 0.95)), url('https://images.unsplash.com/photo-1603909223429-69bb7101f420?w=1920&q=80')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Eyebrow */}
        <p className="animate-fade-in text-xs sm:text-sm font-medium tracking-[0.2em] text-primary uppercase mb-6">
          Cannabis Social Club Berlin
        </p>

        {/* Main Title */}
        <h1 className="animate-fade-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 leading-tight">
          Willkommen beim{' '}
          <span className="text-gradient">Green Valley Club</span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-up text-lg text-primary/80 font-medium mb-4" style={{ animationDelay: '0.05s' }}>
          Qualität. Gemeinschaft. Vertrauen.
        </p>

        {/* Subtitle */}
        <p className="animate-fade-up text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed" style={{ animationDelay: '0.1s' }}>
          Dein legaler Cannabis Social Club in Berlin. Wir bauen hochwertiges 
          Cannabis an – kontrolliert, transparent und fair.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '0.2s' }}>
          <Button
            size="lg"
            onClick={() => scrollToSection('#cannannas')}
            className="bg-primary hover:bg-primary/90 text-[#F8F3DF] rounded-full px-8 py-6 text-base font-semibold group"
          >
            Jetzt Mitglied werden
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
}
