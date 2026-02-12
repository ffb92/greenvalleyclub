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
      'Mitglied kann grundsätzlich jeder werden, der mindestens 18 Jahre alt ist und seinen Wohnsitz in Deutschland hat. Eine Aufnahme erfolgt nach Prüfung deiner Unterlagen und einem kurzen Gespräch.',
  },
  {
    question: 'Muss ich etwas zahlen, wenn ich auf Mitglied werden klicke?',
    answer:
      'Nein, das Klicken auf "Mitglied werden" ist kostenlos. Du erhältst zunächst alle Informationen und kannst dich dann entscheiden, ob du die Mitgliedschaft beginnen möchtest.',
  },
  {
    question: 'Warum muss ich eine Anmeldegebühr von 50 € zahlen?',
    answer:
      'Die einmalige Anmeldegebühr deckt die administrativen Kosten der Mitgliedschaftsaufnahme und trägt zur Deckung der initialen Kosten des Clubs bei.',
  },
  {
    question: 'Dürfen Social Clubs Cannabis versenden?',
    answer:
      'Nein, die Abgabe von Cannabis erfolgt ausschließlich persönlich an der dafür vorgesehenen Abgabestelle. Eine Zustellung per Post ist nicht erlaubt.',
  },
  {
    question: 'Wie viel Cannabis bekomme ich als Mitglied von meinem Social Club?',
    answer:
      'Die Menge richtet sich nach deinem gewählten Paket. Wir bieten Staffelungen von 7,5g bis 50g pro Monat an. Die genauen Kosten pro Gramm werden günstiger, je höher das Paket ist.',
  },
  {
    question: 'Wer kann Mitglied werden?',
    answer:
      'Volljährige Personen mit Wohnsitz in Deutschland können Mitglied werden. Wir behalten uns vor, die Aufnahme nach einer persönlichen Vorstellung zu entscheiden.',
  },
  {
    question: 'Wie viele Mitglieder dürfen wir aufnehmen?',
    answer:
      'Die maximale Mitgliederzahl ist gesetzlich begrenzt. Wir achten darauf, eine ausgewogene Community aufzubauen und neue Mitglieder schrittweise aufzunehmen.',
  },
  {
    question: 'Welche Strains bieten wir an?',
    answer:
      'Wir bieten eine vielfältige Auswahl an Strains aus allen Kategorien: Sativa, Indica, Hybrid und unsere Signature-Sorten. Das Sortiment wird regelmäßig erweitert.',
  },
  {
    question: 'Wo ist die Anbau- und Abgabe-Location?',
    answer:
      'Unser Anbau findet in Berlin statt. Die genaue Abgabestelle wird Mitgliedern nach der Registrierung mitgeteilt.',
  },
  {
    question: 'Wer konsumiert eigentlich Cannabis?',
    answer:
      'Cannabis wird von Menschen aller Altersgruplen und Lebensbereichen konsumiert – sei es zur Entspannung, für kreative Zwecke oder aus medizinischen Gründen.',
  },
  {
    question: 'Wie ist der durchschnittliche THC-Gehalt des sich aktuell im Umlauf befindenden Cannabis?',
    answer:
      'Der durchschnittliche THC-Gehalt im unregulierten Markt liegt bei etwa 15-20%. Unsere Sorten decken ein Spektrum von 15% bis über 21% THC ab.',
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
