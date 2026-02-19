import { Badge } from '@/components/ui/badge';

const packages = [
  {
    id: '12-5',
    title: '12,5 Gramm',
    price: '74,38',
    note: 'inklusive Mehrwertsteuer',
  },
  {
    id: '25',
    title: '25 Gramm',
    price: '148,75',
    note: 'inklusive Mehrwertsteuer (Standardmodell)',
  },
  {
    id: '50',
    title: '50 Gramm',
    price: '297,50',
    note: 'inklusive Mehrwertsteuer',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-4">
            Mitgliedschaft
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Unsere Beiträge
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`reveal stagger-${index + 1} relative rounded-3xl p-6 lg:p-8 bg-card border border-border transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-center">
                <div className="flex items-baseline justify-center gap-1 mb-3">
                  <span className="text-4xl lg:text-5xl font-bold text-foreground">
                    {pkg.price} Euro
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{pkg.note}</p>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                  {pkg.title} pro Monat
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
