const milestones = [
  {
    number: '01',
    date: '1. JULI 2024',
    status: 'ERLEDIGT',
    title: 'Lizenzantrag',
    description: 'Startschuss für die Lizenzanträge von Cannabis Social Clubs (CSCs). Wir haben unseren Antrag bereits eingereicht und sind bereit für den legalen Cannabisanbau.',
  },
  {
    number: '02',
    date: '26. FEBRUAR 2025',
    status: 'ERLEDIGT',
    title: 'Lizenz erhalten',
    description: 'Unsere Anbaulizenz wurde offiziell genehmigt. Damit erfüllen wir alle behördlichen Voraussetzungen und dürfen nun legal für unsere Mitglieder anbauen.',
  },
  {
    number: '03',
    date: 'MÄRZ 25',
    status: 'ERLEDIGT',
    title: 'Grow Start',
    description: 'Wir starten mit dem Anbau unserer ersten Cannabispflanzen. Über 12 Strains decken das ganze Spektrum von Light- bis High-THC ab.',
  },
  {
    number: '04',
    date: 'ENDE MAI 25',
    status: 'ERLEDIGT',
    title: 'Erste Ernte',
    description: 'Nach erfolgreicher Reifephase wird geerntet, auf Reinheit und Qualität geprüft und anschließend gesetzeskonform an unsere Mitglieder verteilt.',
  },
  {
    number: '05',
    date: 'ANFANG JUNI 25',
    status: 'ERLEDIGT',
    title: 'Erste Ausgabe',
    description: 'Welcome to Berlin! Nach Registrierung und Zahlung der Anmeldegebühr erhältst du alle Infos für deinen persönlichen Abholtermin.',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4">
            Timetable
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Unser Fahrplan
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-border" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.number}
                className={`reveal stagger-${index + 1} relative pl-16 sm:pl-20`}
              >
                {/* Number Circle */}
                <div className="absolute left-0 top-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="text-[#F8F3DF] font-bold text-sm sm:text-base">
                    {milestone.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs sm:text-sm font-medium tracking-wider text-muted-foreground uppercase">
                      {milestone.date}
                    </span>
                    <span className="text-xs font-medium text-primary">
                      ({milestone.status})
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
