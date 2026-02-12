import { useState } from 'react';
import { Check, ChevronDown, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const packages = [
  {
    id: 's',
    name: 'S',
    price: '59',
    amount: '7.5g',
    perGram: '7,86€ / g',
    popular: false,
    features: [
      'Zugang zu allen Strains',
      'Club-Events & Austausch',
      'Direkter Zugang zum Team',
    ],
  },
  {
    id: 'm',
    name: 'M',
    price: '112.50',
    amount: '15g',
    perGram: '7,50€ / g',
    popular: true,
    features: [
      'Zugang zu allen Strains',
      'Club-Events & Austausch',
      'Direkter Zugang zum Team',
    ],
  },
  {
    id: 'l',
    name: 'L',
    price: '325',
    amount: '50g',
    perGram: '6,50€ / g',
    popular: false,
    features: [
      'Zugang zu allen Strains',
      'Club-Events & Austausch',
      'Direkter Zugang zum Team',
    ],
  },
];

export default function Pricing() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-4">
            Mitgliedschaft
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Unsere Beiträge
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Wähle das Paket, das zu dir passt
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`reveal stagger-${index + 1} relative rounded-3xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 ${
                pkg.popular
                  ? 'bg-card border-2 border-primary shadow-lg shadow-primary/10'
                  : 'bg-card border border-border'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-[#F5F0E6] px-4 py-1 text-xs font-semibold uppercase tracking-wider">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary font-bold text-xl mb-4">
                  {pkg.name}
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl lg:text-5xl font-bold text-foreground">
                    {pkg.price}€
                  </span>
                  <span className="text-muted-foreground">/ Monat</span>
                </div>
                <div className="mt-3 flex items-center justify-center gap-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                    {pkg.amount}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{pkg.perGram}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      pkg.popular ? 'bg-primary' : 'bg-primary/10'
                    }`}>
                      <Check className={`w-3 h-3 ${pkg.popular ? 'text-[#F5F0E6]' : 'text-primary'}`} />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full rounded-full py-6 font-semibold transition-all ${
                  pkg.popular
                    ? 'bg-primary hover:bg-primary/90 text-[#F5F0E6]'
                    : 'bg-primary/10 hover:bg-primary/20 text-primary'
                }`}
              >
                Paket wählen
              </Button>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mb-12 reveal">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Weitere Pakete anzeigen
            <ChevronDown className={`w-5 h-5 transition-transform ${showMore ? 'rotate-180' : ''}`} />
          </button>
          <p className="text-sm text-muted-foreground mt-3">
            Enthält alle Staffelungen aus der Beitragsordnung von 7,5g bis 50g.
          </p>
        </div>

        {/* Info Box */}
        <div className="reveal max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl p-6 lg:p-8 border border-border">
            <p className="text-muted-foreground text-center leading-relaxed mb-6">
              Um Teil unseres Cannabis Social Clubs zu werden, fällt eine einmalige 
              Aufnahmegebühr von <span className="text-foreground font-semibold">50 €</span> sowie 
              ein monatlicher Grundbeitrag von <span className="text-foreground font-semibold">20 €</span> an. 
              Diese Beiträge sind umsatzsteuerfrei. Die variablen Kosten je Staffelung enthalten 19% MwSt. 
              Eine genaue Übersicht findest du in unserer Beitragsordnung.
            </p>
            <div className="text-center">
              <p className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase mb-3">
                Bleib auf dem Laufenden
              </p>
              <Button
                variant="outline"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-[#F5F0E6] transition-all"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Jetzt WhatsApp beitreten
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
