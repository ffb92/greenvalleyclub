import { BadgeCheck, PiggyBank } from 'lucide-react';

const fees = [
  {
    id: 'gramm',
    label: 'Preis pro Gramm',
    amount: '5,95€',
    suffix: 'inkl. MwSt.',
    icon: PiggyBank,
    solid: false,
  },
  {
    id: 'aufnahme',
    label: 'Aufnahmegebühr',
    amount: '0€',
    suffix: 'Anmeldegebühr',
    icon: BadgeCheck,
    solid: true,
  },
] as const;

const packages = [
  { id: '5', title: '5g', price: '29,75€' },
  { id: '12-5', title: '12,5g', price: '74,38€' },
  { id: '25', title: '25g', price: '148,75€' },
  { id: '50', title: '50g', price: '297,50€' },
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
            Unsere Beitragsoptionen
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Bei uns erhältst du hochwertige Qualität zu einem fairen Preis von nur{' '}
            <strong>5,95€ inklusive MwSt. pro Gramm</strong>. Transparente
            Beitragsoptionen, flexibel wählbar und ganz ohne versteckte Kosten -
            selbstverständlich <strong>ohne Anmeldegebühr</strong>.
          </p>
        </div>

        <div className="mb-10">
          <div className="mx-auto w-full max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fees.map((fee, index) => {
                const Icon = fee.icon;

                return (
                  <div
                    key={fee.id}
                    className={`reveal stagger-${
                      index + 1
                    } rounded-3xl p-6 border transition-all duration-300 hover:-translate-y-0.5 ${
                      fee.solid
                        ? 'bg-primary border-primary text-primary-foreground'
                        : 'bg-card border-border text-foreground'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center">
                        <Icon className="w-10 h-10" />
                      </div>

                      <div>
                        <p
                          className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] ${
                            fee.solid
                              ? 'text-primary-foreground'
                              : 'text-muted-foreground'
                          }`}
                        >
                          {fee.label}
                        </p>
                        <p className="text-4xl font-bold leading-none mt-1">
                          {fee.amount}
                          <span
                            className={`text-sm font-semibold ml-2 uppercase tracking-[0.08em] ${
                              fee.solid
                                ? 'text-primary-foreground'
                                : 'text-muted-foreground'
                            }`}
                          >
                            {fee.suffix}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`reveal stagger-${
                index + 1
              } relative rounded-3xl p-6 lg:p-8 bg-card border border-border transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-foreground mb-3">
                  {pkg.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span>{pkg.price} pro Monat</span>
                  <span className="block text-xs mt-1">(inkl. MwSt.)</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
