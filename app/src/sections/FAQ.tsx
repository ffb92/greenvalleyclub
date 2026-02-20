import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Kann jeder Mitglied werden?',
    answer:
      ' Personen die 21 Jahre oder älter sind und einen Wohnsitz in Deutschland haben, können Mitglied werden. Die Aufnahme erfolgt nach sorgfältiger Prüfung deiner Anmeldedaten. Sobald alle Angaben verifiziert wurden, bestätigen wir deine Mitgliedschaft',
  },
  {
    question: 'Muss ich etwas zahlen, wenn ich auf Mitglied werden klicke?',
    answer:
      'Nein, das Klicken auf "Mitglied werden" ist kostenlos. Du erhältst zunächst alle Informationen und kannst dich dann entscheiden, ob du die Mitgliedschaft beginnen möchtest.',
  },
  {
    question: 'Dürfen Social Clubs Cannabis versenden?',
    answer:
      'Nein, die Abgabe von Cannabis erfolgt ausschließlich persönlich an der dafür vorgesehenen Abgabestelle. Eine Zustellung per Post ist nicht erlaubt.',
  },
  {
    question: 'Wie viel Cannabis bekomme ich als Mitglied von meinem Social Club?',
    answer:
      'Die Menge richtet sich nach deinem gewählten Paket. Wir bieten Staffelungen von 5g, 12,5g, 25g oder 50g pro Monat an. Die tatsächliche Abgabemenge kann durch zusätzliche Upgrades erhöht werden. Desweiteren schreibt das Gesetz vor 50g im Monat und 25g pro Tag.',
  },
  {
    question: 'Wie viele Mitglieder dürfen wir aufnehmen?',
    answer:
      'Die maximale Mitgliederzahl ist auf 500 Mitglieder begrenzt. Wir achten darauf, eine ausgewogene Community aufzubauen und neue Mitglieder schrittweise aufzunehmen.',
  },
  {
    question: 'Welche Strains bieten wir an?',
    answer:
      'Wir bieten eine vielfältige Auswahl an Strains aus allen Kategorien: Sativa, Indica, Hybrid und unsere Signature-Sorten. Das Sortiment wird regelmäßig erweitert. Unsere Sorten decken ein Spektrum von 15% bis über 25% THC ab.',
  },
  {
    question: 'Wo ist die Anbau- und Abgabe-Location?',
    answer:
      'Unser Anbau findet in Bitterfeld statt. Die Abgabestelle ist in der Nähe des Berliner Hauptbahnhofs.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Alles, was du wissen musst
          </h2>
        </div>

        {/* Accordion */}
        <div className="reveal">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary rounded-2xl border-0 px-6 data-[state=open]:bg-secondary/80"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-5 text-base sm:text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
