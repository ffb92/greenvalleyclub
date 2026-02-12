import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const strainCategories = [
  {
    id: 'sativa',
    name: 'SATIVA',
    label: 'Sativa Sparks',
    description: 'Kreative Energie und fokussierte Momente zwischen 15-21% THC.',
    color: '#1B4D3E',
  },
  {
    id: 'indica',
    name: 'INDICA',
    label: 'Indica Lounge',
    description: 'Cozy Couch-Vibes für ruhige Abende bei 18-21% THC.',
    color: '#1B4D3E',
  },
  {
    id: 'hybrid',
    name: 'HYBRID',
    label: 'Hybrid Flow',
    description: 'Ausbalanciert zwischen Fokus und Relax – ideal für den Alltag.',
    color: '#1B4D3E',
  },
  {
    id: 'signature',
    name: 'SIGNATURE',
    label: 'Signature High',
    description: '≥21% THC für erfahrene Mitglieder, die intensive Wirkung lieben.',
    color: '#1B4D3E',
  },
];

const terpeneData = [
  { label: 'Bisa', value: 0.7 },
  { label: 'β-Myrc', value: 0.9 },
  { label: 'α-Pin', value: 0.6 },
  { label: 'β-Pin', value: 0.5 },
  { label: 'β-Cary', value: 0.8 },
  { label: 'Limo', value: 0.7 },
  { label: 'Humu', value: 0.4 },
  { label: 'Farnes', value: 0.6 },
  { label: 'Terp', value: 0.8 },
  { label: 'α-Terp', value: 0.5 },
  { label: 'Oci', value: 0.3 },
  { label: 'Linal', value: 0.7 },
];

export default function Strains() {
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    const newRotation = rotation + 90 + Math.random() * 30;
    setRotation(newRotation);
  };

  return (
    <section id="strains" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4">
            Aktuelle Sorten
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Unsere Strains
          </h2>
          <div className="flex items-center justify-center gap-4">
            <button className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors">
              Alle Strains ansehen
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span>Neu: Orange Bud Drop</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Interactive Wheel */}
          <div className="reveal flex flex-col items-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Outer Ring */}
              <div
                className="absolute inset-0 rounded-full border-[40px] border-primary transition-transform duration-1000 ease-out cursor-pointer"
                style={{ transform: `rotate(${rotation}deg)` }}
                onClick={spinWheel}
              >
                {/* Category Labels */}
                {strainCategories.map((cat, index) => (
                  <div
                    key={cat.id}
                    className="absolute text-xs font-bold text-[#F5F0E6]"
                    style={{
                      top: index === 0 ? '10%' : index === 2 ? 'auto' : '45%',
                      bottom: index === 2 ? '10%' : 'auto',
                      left: index === 3 ? '10%' : index === 1 ? 'auto' : '45%',
                      right: index === 1 ? '10%' : 'auto',
                      transform: `rotate(${-rotation}deg)`,
                    }}
                  >
                    {cat.name}
                  </div>
                ))}
              </div>

              {/* Inner Circle */}
              <div className="absolute inset-8 rounded-full bg-card flex flex-col items-center justify-center border border-border">
                <div className="text-4xl mb-2">🌿</div>
                <p className="text-xs text-muted-foreground text-center px-4">
                  CLICK TO SPIN
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground text-center">
              Entdecke unser Terpen & THC Spektrum
            </p>
          </div>

          {/* Right: Educational Content */}
          <div className="reveal stagger-2 space-y-6">
            {/* Educational Spotlight */}
            <div className="bg-card rounded-3xl p-6 border border-border">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Educational Spotlight
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Unsere vier Segmente zeigen dir, wie wir das Spektrum von sanften 
                Light-Strains bis hin zu potenten High-THC Sorten kuratieren. 
                Jede Kategorie enthält handverlesene Genetiken, abgestimmt auf 
                Wirkung, THC-Gehalt und Geschmack.
              </p>
              <div className="space-y-2">
                {strainCategories.map((cat) => (
                  <div key={cat.id} className="text-sm">
                    <span className="text-primary font-semibold">{cat.label}:</span>{' '}
                    <span className="text-muted-foreground">{cat.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Strain */}
            <div className="bg-card rounded-3xl p-6 border border-border">
              <p className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase mb-2">
                Heute im Fokus
              </p>
              <h3 className="text-2xl font-bold text-primary mb-1">Orion F1</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Indica Lounge · 22% THC
              </p>
              <Badge className="bg-primary/10 text-primary border-0 mb-4">
                In Stock · Limit 50g
              </Badge>
              <p className="text-sm text-muted-foreground mb-4">
                Dreh am Wheel, um weitere Strains zu entdecken.
              </p>

              {/* Radar Chart */}
              <div className="relative w-full h-48">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Grid circles */}
                  {[0.25, 0.5, 0.75, 1].map((r) => (
                    <circle
                      key={r}
                      cx="100"
                      cy="100"
                      r={r * 80}
                      fill="none"
                      stroke="hsl(var(--border))"
                      strokeWidth="0.5"
                    />
                  ))}
                  {/* Axis lines */}
                  {terpeneData.map((_, i) => {
                    const angle = (i * 360) / terpeneData.length - 90;
                    const x = 100 + 80 * Math.cos((angle * Math.PI) / 180);
                    const y = 100 + 80 * Math.sin((angle * Math.PI) / 180);
                    return (
                      <line
                        key={i}
                        x1="100"
                        y1="100"
                        x2={x}
                        y2={y}
                        stroke="hsl(var(--border))"
                        strokeWidth="0.5"
                      />
                    );
                  })}
                  {/* Data polygon */}
                  <polygon
                    points={terpeneData
                      .map((d, i) => {
                        const angle = (i * 360) / terpeneData.length - 90;
                        const x = 100 + 80 * d.value * Math.cos((angle * Math.PI) / 180);
                        const y = 100 + 80 * d.value * Math.sin((angle * Math.PI) / 180);
                        return `${x},${y}`;
                      })
                      .join(' ')}
                    fill="hsl(var(--primary) / 0.3)"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                  />
                  {/* Data points */}
                  {terpeneData.map((d, i) => {
                    const angle = (i * 360) / terpeneData.length - 90;
                    const x = 100 + 80 * d.value * Math.cos((angle * Math.PI) / 180);
                    const y = 100 + 80 * d.value * Math.sin((angle * Math.PI) / 180);
                    return (
                      <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="3"
                        fill="hsl(var(--primary))"
                      />
                    );
                  })}
                  {/* Labels */}
                  {terpeneData.slice(0, 6).map((d, i) => {
                    const angle = (i * 360) / terpeneData.length - 90;
                    const x = 100 + 95 * Math.cos((angle * Math.PI) / 180);
                    const y = 100 + 95 * Math.sin((angle * Math.PI) / 180);
                    return (
                      <text
                        key={i}
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-[6px] fill-muted-foreground"
                      >
                        {d.label}
                      </text>
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
