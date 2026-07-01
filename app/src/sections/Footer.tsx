import { Mail, Instagram } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import DatenschutzDialog from '@/components/DatenschutzDialog';
import { useI18n } from '@/i18n/use-i18n';

export default function Footer() {
  const { t } = useI18n();

  const footerLinks = {
    kontakt: [
      {
        label: 'info@greenvalleyclub.de',
        href: 'mailto:info@greenvalleyclub.de',
        icon: Mail,
      },
      {
        label: '@greenvalley.gvc',
        href: 'https://www.instagram.com/greenvalley.gvc/',
        icon: Instagram,
      },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 items-start">
          {/* Kontakt */}
          <div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.kontakt.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      link.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <link.icon className="w-4 h-4" />
                    <span className="text-sm">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center text-center">
            <img
              src="/images/logo.png"
              alt="Green Valley Club Logo"
              className="w-24 h-24 object-contain mb-3"
            />
            <p className="text-sm font-semibold text-foreground">
              Green Valley Club
            </p>
          </div>

          {/* Rechtliches */}
          <div className="lg:justify-self-end lg:text-right">
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              {t('footer.legal')}
            </h4>
            <ul className="space-y-3 lg:flex lg:flex-col lg:items-end">
              <li>
                <DatenschutzDialog />
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t('footer.youth')}
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{t('footer.youth')}</DialogTitle>
                      <DialogDescription asChild>
                        <div className="space-y-4 pt-2 text-sm text-foreground leading-relaxed">
                          <p>
                            Der Schutz junger Menschen und ein
                            verantwortungsbewusster Umgang mit Cannabis stehen
                            im Green Valley Club an oberster Stelle. Unser Ziel
                            ist es, eine sichere, transparente und informierte
                            Community zu fördern.
                          </p>
                          <p>
                            Für alle Anliegen rund um Jugendschutz, Prävention
                            und verantwortungsbewussten Konsum steht dir unser
                            Beauftragter Christian Neugebauer zur Verfügung. Er
                            ist zentrale Ansprechperson für Fragen, Hinweise
                            oder Unsicherheiten.
                          </p>
                          <div className="space-y-1">
                            <p className="font-semibold">Kontakt</p>
                            <p>Christian Neugebauer</p>
                            <p>Email: info@greenvalleyclub.de</p>
                          </div>
                          <div className="space-y-1">
                            <p className="font-semibold">Wichtige Hinweise</p>
                            <p>
                              Cannabis darf nur von volljährigen Personen
                              genutzt werden. Bitte achte darauf, keine Produkte
                              an Minderjährige weiterzugeben.
                              Verantwortungsvoller Konsum bedeutet, die eigenen
                              Grenzen zu kennen, bewusst zu dosieren und niemals
                              unter Einfluss aktiv am Straßenverkehr
                              teilzunehmen.
                            </p>
                          </div>
                          <div className="space-y-1">
                            <p className="font-semibold">
                              Weitere Anlaufstellen
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Suchthotline Deutschland: 01805 313031</li>
                              <li>
                                Beratungsstelle der örtlichen
                                Gesundheitsämter
                              </li>
                              <li>
                                Drogeninfo Portal der Bundesregierung
                              </li>
                              <li>
                                Lokale Präventionszentren in deiner Region
                              </li>
                            </ul>
                          </div>
                          <p>
                            Der Green Valley Club versteht sich als
                            Gemeinschaft, die füreinander einsteht und bewusst
                            handelt. Wenn du Fragen hast oder Unterstützung
                            brauchst, melde dich jederzeit an unser Team:
                            info@greenvalleyclub.de
                          </p>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t('footer.imprint')}
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{t('footer.imprint')}</DialogTitle>
                      <DialogDescription asChild>
                        <div className="space-y-1 pt-2 text-sm text-foreground">
                          <p>Green Valley Club e.V.</p>
                          <p>Sonnenallee 14-30</p>
                          <p>06766 Bitterfeld</p>
                          <p>Vereinsregister Stendal: VR6882</p>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t('footer.statutes')}
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{t('footer.statutes')}</DialogTitle>
                      <DialogDescription asChild>
                        <div className="space-y-2 pt-2 text-sm text-foreground leading-relaxed">
                          <h1>Satzung des Green Valley Club e.V.</h1>

                          <h2>1. Name und Sitz</h2>
                          <p>1.1 Der Verein führt den Namen Green Valley Club e.V.</p>
                          <p>1.2 Der Sitz des Vereins ist in Bitterfeld-Wolfen.</p>
                          <p>1.3 Das Geschäftsjahr des Vereins ist das Kalenderjahr.</p>

                          <h2>2. Zweck</h2>
                          <p>
                            Der Zweck des Vereins ist der gemeinschaftliche,
                            nicht-gewerbliche Eigenanbau von Cannabis zum
                            Eigenkonsum der Mitglieder und die Weitergabe des in
                            gemeinschaftlichem Eigenanbau angebauten Cannabis und
                            Vermehrungsmaterial an die Mitglieder des Vereins
                            gemäß den Bestimmungen des
                            Konsumcannabisgesetzes („KCanG“).
                          </p>
                          <p>
                            Bis zur Erteilung der für die Verwirklichung des
                            Zwecks erforderlichen Genehmigungen ist der Zweck des
                            Vereins darauf gerichtet, die erforderlichen
                            Genehmigungen für die Verwirklichung des Zwecks zu
                            erlangen und vorbereitende Maßnahmen zu treffen.
                          </p>

                          <h2>3. Mitgliedschaft</h2>
                          <p>
                            <strong>
                              3.1 Mitglied des Vereins kann jede natürliche
                                Person werden,
                            </strong>
                          </p>
                          <ul>
                            <li>
                              3.1.1 die das 21. Lebensjahr vollendet hat und
                                unbeschränkt geschäftsfähig ist,
                            </li>
                            <li>
                              3.1.2 die ihren Wohnsitz oder gewöhnlichen
                                Aufenthalt in der Bundesrepublik Deutschland hat,
                            </li>
                            <li>
                              3.1.3 die nicht Mitglied einer anderen
                                Cannabis-Anbauvereinigung ist, und
                            </li>
                            <li>
                              3.1.4 bei der keine Gründe in ihrer Person
                                bestehen, welche die Erteilung der Genehmigung nach
                                § 11 KCanG gegenüber dem Verein gefährden könnte.
                            </li>
                          </ul>

                          <p>
                            <strong>3.2</strong> Mitglied des Vereins kann
                            werden, wer einen Aufnahmeantrag in Textform an den
                            Vorstand stellt. Dem Antrag sind beizufügen:
                          </p>
                          <ul>
                            <li>3.2.1 Nachweis des Alters (Personalausweis oder Pass),</li>
                            <li>3.2.2 Nachweis des Wohnsitzes in Deutschland,</li>
                            <li>
                              3.2.3 Erklärung, dass keine Mitgliedschaft in einem
                                anderen Anbauverein besteht, und
                            </li>
                            <li>
                              3.2.4 Bestätigung der Kenntnisnahme der
                                Vereinssatzung und Hausordnung.
                            </li>
                          </ul>

                          <p>
                            3.3 Der Vorstand entscheidet über den Aufnahmeantrag
                            nach freiem Ermessen. Eine Ablehnung des Antrags muss
                            er gegenüber dem Antragsteller nicht begründen.
                          </p>
                          <p>
                            3.4 Der Vorstand muss den Aufnahmeantrag ablehnen,
                            wenn der Verein bereits 500 Mitglieder hat.
                          </p>

                          <h2>4. Beendigung der Mitgliedschaft</h2>
                          <p>
                            <strong>
                              4.1 Die Mitgliedschaft im Verein endet durch
                            </strong>
                          </p>
                          <ul>
                            <li>4.1.1 Tod,</li>
                            <li>4.1.2 Austritt,</li>
                            <li>4.1.3 Ausschluss oder</li>
                            <li>
                              4.1.4 Aufgabe des Wohnsitzes oder gewöhnlichen
                                Aufenthaltsortes in der Bundesrepublik Deutschland.
                            </li>
                          </ul>
                          <p>
                            4.2 Der Austritt ist gegenüber dem Vorstand in
                            Textform zu erklären. Der Austritt kann nur mit einer
                            Frist von einem Monat zum Ende des Kalendermonats,
                            frühestens jedoch zum Ende des dritten vollen
                            Kalendermonats nach Erwerb der Mitgliedschaft erklärt
                            werden.
                          </p>
                          <p>
                            4.3 Der freiwillige Austritt ist frühestens drei
                            Monate nach dem Erwerb der Mitgliedschaft zulässig.
                          </p>
                          <p>
                            <strong>
                              4.4 Ein Mitglied kann durch Beschluss des Vorstands
                                mit zustimmendem Beschluss des Beirats aus dem
                                Verein ausgeschlossen werden, wenn es
                            </strong>
                          </p>
                          <ul>
                            <li>
                              4.4.1 gegen die Vereinssatzung und/oder die
                                Hausordnung verstößt,
                            </li>
                            <li>
                              4.4.2 schuldhaft das Ansehen oder die Interessen
                                des Vereins in schwerwiegender Weise schädigt,
                            </li>
                            <li>
                              4.4.3 mehr als einen Monat mit der Zahlung seiner
                                Aufnahmegebühr oder seiner Mitgliedsbeiträge im
                                Verzug ist und trotz schriftlicher Mahnung unter
                                Androhung des Ausschlusses die Rückstände nicht
                                ausgeglichen hat,
                            </li>
                            <li>
                              4.4.4 in der Bundesrepublik Deutschland keinen
                                Wohnsitz oder gewöhnlichen Aufenthalt mehr hat oder
                                seinen Wohnsitz oder gewöhnlichen Aufenthalt nicht
                                auf jederzeit mögliches Verlangen des Vorstands
                                durch geeignete amtliche Dokumente nachweist.
                            </li>
                          </ul>
                          <p>
                            Jedes Mitglied ist verpflichtet, Änderungen seines
                            Wohnsitzes oder seines gewöhnlichen Aufenthalts
                            unaufgefordert dem Verein mitzuteilen.
                          </p>
                          <p>
                            4.5 Der Vorstand kann eine Mitgliedschaft nach Ablauf
                            der ersten drei Monate mit einer Frist von einem
                            Monat kündigen.
                          </p>
                          <p>
                            4.6 Der Vorstand und Beirat kündigen den Ausschluss
                            gegenüber dem Mitglied an. Das Mitglied kann sich zu
                            den Gründen des Ausschlusses innerhalb von 14 Tagen
                            in Textform gegenüber dem Vorstand äußern. Der
                            Ausschluss ergeht durch einstimmigen Beschluss des
                            Vorstandes und Beirats.
                          </p>

                          <h2>5. Organe des Vereins</h2>
                          <p>
                            Organe des Vereins sind der Vorstand, der Beirat und
                            die Mitgliederversammlung.
                          </p>

                          <h2>6. Mitgliedsbeiträge</h2>
                          <p>
                            6.1 Von den Mitgliedern werden zur Erfüllung des
                            Vereinszwecks Mitgliedsbeiträge erhoben.
                          </p>
                          <p>
                            6.2 Die Höhe und Fälligkeit des Mitgliedsbeitrags
                            wird durch den Vorstand bestimmt.
                          </p>

                          <h2>7. Vorstand</h2>
                          <p>
                            7.1 Der Vorstand besteht aus drei Personen, nämlich
                            dem Vorsitzenden, dem Stellvertreter des Vorsitzenden
                            und dem Schatzmeister. Die Mitglieder des Vorstands
                            müssen Mitglieder des Vereins sein. Dem Vorstand des
                            Vereins obliegt die Vertretung des Vereins nach § 26
                            BGB und die Führung seiner Geschäfte.
                          </p>
                          <p>
                            7.2 Der Vorsitzende, sein Stellvertreter und der
                            Schatzmeister vertreten den Verein jeweils einzeln.
                          </p>
                          <p>
                            7.3 Die Vorstandsmitglieder werden von den
                            Beschränkungen des § 181 BGB insgesamt befreit.
                          </p>

                          <h2>8. Zuständigkeit des Vorstands</h2>
                          <ul>
                            <li>
                              (a) Vorbereitung der Mitgliederversammlung und
                              Aufstellung der Tagesordnung;
                            </li>
                            <li>(b) Einberufung der Mitgliederversammlung;</li>
                            <li>
                              (c) Ausführung von Beschlüssen der
                              Mitgliederversammlung;
                            </li>
                            <li>
                              (d) Aufstellung eines Haushaltsplans für jedes
                              Geschäftsjahr, Buchführung, Erstellung eines
                              Jahresberichts, Erlass von Ordnungen (z.B.
                              Hausordnung);
                            </li>
                            <li>(e) Aufnahme neuer Mitglieder;</li>
                            <li>(f) Ausschluss von Mitgliedern;</li>
                            <li>(g) Festsetzung des Mitgliedsbeitrags;</li>
                            <li>(h) Verlängerung der Laufzeit;</li>
                            <li>
                              (i) Erfüllung der Dokumentations- und
                              Berichtspflichten.
                            </li>
                          </ul>

                          <h2>9. Bestellung des Vorstands, Amtsdauer</h2>
                          <p>
                            9.1 Der Vorstand wird durch den Beirat für die Dauer
                            des Bestehens des Vereins, längstens jedoch für die
                            Dauer von drei Jahren bestellt. Jedes Vorstandsmitglied
                            ist einzeln zu bestellen. Die erneute Bestellung oder
                            vorzeitige Abberufung ist zulässig.
                          </p>
                          <p>
                            9.2 Scheidet ein Mitglied vorzeitig aus dem Vorstand
                            aus, so hat der Beirat unverzüglich ein neues
                            Mitglied des Vereins in den Vorstand zu bestellen.
                          </p>

                          <h2>10. Beratung und Beschlussfassung</h2>
                          <p>
                            10.1 Der Vorstand tritt nach Bedarf zusammen. Die
                            Sitzungen werden von dem Vorsitzenden in Textform
                            einberufen. Der Vorstand ist beschlussfähig, wenn
                            mindestens zwei Mitglieder anwesend sind. Bei
                            Stimmengleichheit entscheidet die Stimme des
                            Vorsitzenden.
                          </p>
                          <p>
                            10.2 Ein Vorstandsbeschluss kann in Textform gefasst
                            werden, wenn alle Vorstandsmitglieder ihre Zustimmung
                            erklären.
                          </p>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t('footer.fees')}
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{t('footer.fees')}</DialogTitle>
                      <DialogDescription asChild>
                        <div className="space-y-2 pt-2 text-sm text-foreground leading-relaxed">
                          <h1>Beitragsordnung des Green Valley Club e.V.</h1>
                          <p>
                            Diese Beitragsordnung regelt die monatlichen
                            Beiträge, die Abgabe von Cannabisblüten sowie die
                            Zahlungsmodalitäten. Sie ist für alle Mitglieder
                            verbindlich.
                          </p>

                          <h2>1. Begründung der Beitragslogik</h2>
                          <p>
                            Die Beitragsstruktur richtet sich ausschließlich
                            nach den Anforderungen einer stabilen und
                            verlässlichen Eigenversorgung. Der Verein verfolgt
                            keine Gewinnerzielungsabsicht. Die Beiträge dienen
                            der Kostendeckung der gemeinschaftlichen
                            nicht-gewerblichen Eigenversorgung gemäß § 11 KCanG.
                          </p>

                          <h2>2. Allgemeine Grundsätze</h2>
                          <ul>
                            <li>Keine Aufnahmegebühr</li>
                            <li>Beiträge richten sich nach der gewählten Abgabemenge</li>
                            <li>Abgabe nur nach vollständiger Beitragszahlung</li>
                            <li>Kein Anspruch auf bestimmte Sorten</li>
                          </ul>

                          <h2>3. Sonderregelung zur Startphase</h2>
                          <p>
                            In den ersten drei Monaten gilt eine gesonderte
                            Beitragsstruktur. Mindestbeitrag: 29,75€ für 5g.
                            Optionen: 74,38€ (12,5g), 89,25€ (15g),
                            148,75€ (25g), 297,50€ (50g).
                          </p>

                          <h2>4. Regelbeiträge</h2>
                          <p>
                            Optionen: 29,75€ (5g, bis Juni 2026),
                            74,38€ (12,5g), 148,75€ (25g, Standard),
                            297,50€ (50g).
                          </p>

                          <h2>5. Mengenbegrenzungen</h2>
                          <p>Max. 25g pro Tag, max. 50g pro Monat.</p>

                          <h2>6-7. Anpassung und Zahlung</h2>
                          <p>
                            Beiträge anpassbar zum Monatsende. Zahlung per
                            SEPA Lastschrift. Upgrades per Überweisung vor
                            Abholung.
                          </p>
                          <p>
                            <strong>Vereinskonto:</strong><br />
                            Green Valley Club e.V.<br />
                            IBAN: DE36 8604 0000 0533 5674 00<br />
                            BIC: COBADEFFXXX
                          </p>

                          <h2>8-9. Pausieren und Austritt</h2>
                          <p>
                            Einmal pro Kalenderjahr Beitragsruhe möglich.
                            Keine Rückerstattung bei Nichtabnahme oder Austritt.
                          </p>

                          <h2>10. Schlussbestimmungen</h2>
                          <p>
                            Diese Beitragsordnung tritt mit Veröffentlichung
                            in Kraft.
                          </p>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              Green Valley Club
            </span>
          </p>
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>
          <p className="text-sm text-muted-foreground">
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </footer>
  );
}
