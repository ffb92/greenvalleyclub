import { useEffect, useRef, useState } from 'react';
import { Sprout, Thermometer, Leaf, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  {
    icon: Sprout,
    value: 600,
    suffix: 'm2',
    label: 'ANBAUFLÄCHE',
  },
  {
    icon: Thermometer,
    value: 24,
    suffix: '/7',
    label: 'KLIMAKONTROLLE',
  },
  {
    icon: Leaf,
    value: 100,
    suffix: '%',
    label: 'ORGANISCH',
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-bold text-[#F8F3DF]">
      {count}
      {suffix}
    </div>
  );
}

export default function QualityGrowth() {
  return (
    <section className="relative py-32 overflow-hidden bg-primary">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-[#F8F3DF]">High-End Quality</span>
            <br />
            <span className="text-[#DDEBDF]">Controlled Growth</span>
          </h2>
        </div>

        <div className="reveal stagger-1">
          <p className="text-lg sm:text-xl text-[#F8F3DF]/90 max-w-3xl mx-auto mb-16 leading-relaxed">
            Auf über 600m2 Anbaufläche züchten wir unter strengsten Laborbedingungen.
            Keine Pestizide, 100% organisch und handverlesen für das perfekte Terpenprofil.
          </p>
        </div>

        <div className="reveal stagger-2 grid sm:grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#F8F3DF]/10 backdrop-blur-sm rounded-2xl p-6 border border-[#F8F3DF]/20 hover:border-[#F8F3DF]/50 transition-colors"
            >
              <stat.icon className="w-6 h-6 text-[#F8F3DF] mx-auto mb-4" />
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-xs font-medium tracking-wider text-[#F8F3DF]/80 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal stagger-3">
          <Button
            size="lg"
            onClick={() => {
              document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#F8F3DF] hover:bg-[#F8F3DF]/90 text-primary rounded-full px-8 py-6 text-base font-semibold group"
          >
            Jetzt Mitglied werden
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
