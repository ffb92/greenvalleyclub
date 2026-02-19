const packages = [
  { id: '5', title: '5g' },
  { id: '12-5', title: '12,5g' },
  { id: '25', title: '25g' },
  { id: '50', title: '50g' },
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
            Bei uns erh&auml;ltst du hochwertige Qualit&auml;t zu einem fairen Preis von nur <strong>5,95 &euro; pro Gramm</strong>. Transparente Beitragsoptionen, flexibel w&auml;hlbar und ganz ohne versteckte Kosten &ndash; selbstverst&auml;ndlich <strong>ohne Eintragsgeb&uuml;hr</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`reveal stagger-${index + 1} relative rounded-3xl p-6 lg:p-8 bg-card border border-border transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-foreground mb-3">{pkg.title}</p>
                <p className="text-sm text-muted-foreground">pro Monat</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}