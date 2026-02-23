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

const footerLinks = {
  kontakt: [
    { label: 'info@greenvalleyclub.de', href: 'mailto:info@greenvalleyclub.de', icon: Mail },
    { label: '@greenvalley.gvc', href: 'https://www.instagram.com/greenvalley.gvc/', icon: Instagram },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 items-start">
          {/* Kontakt */}
          <div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3">
              {footerLinks.kontakt.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
            <p className="text-sm font-semibold text-foreground">Green Valley Club</p>
          </div>

          {/* Rechtliches */}
          <div className="lg:justify-self-end lg:text-right">
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Rechtliches
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
                      Jugendschutz
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Jugendschutz</DialogTitle>
                      <DialogDescription asChild>
                        <div className="space-y-4 pt-2 text-sm text-foreground leading-relaxed">
                          <p>
                            Der Schutz junger Menschen und ein verantwortungsbewusster Umgang mit Cannabis stehen im
                            Green Valley Club an oberster Stelle. Unser Ziel ist es, eine sichere, transparente und
                            informierte Community zu fördern.
                          </p>
                          <p>
                            Für alle Anliegen rund um Jugendschutz, Prävention und verantwortungsbewussten Konsum
                            steht dir unser Beauftragter Christian Neugebauer zur Verfügung. Er ist zentrale
                            Ansprechperson für Fragen, Hinweise oder Unsicherheiten.
                          </p>
                          <div className="space-y-1">
                            <p className="font-semibold">Kontakt</p>
                            <p>Christian Neugebauer</p>
                            <p>Email: info@greenvalleyclub.de</p>
                          </div>
                          <div className="space-y-1">
                            <p className="font-semibold">Wichtige Hinweise</p>
                            <p>
                              Cannabis darf nur von volljährigen Personen genutzt werden. Bitte achte darauf, keine
                              Produkte an Minderjährige weiterzugeben. Verantwortungsvoller Konsum bedeutet, die
                              eigenen Grenzen zu kennen, bewusst zu dosieren und niemals unter Einfluss aktiv am
                              Straßenverkehr teilzunehmen.
                            </p>
                          </div>
                          <div className="space-y-1">
                            <p className="font-semibold">Weitere Anlaufstellen</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Suchthotline Deutschland: 01805 313031</li>
                              <li>Beratungsstelle der örtlichen Gesundheitsämter</li>
                              <li>Drogeninfo Portal der Bundesregierung</li>
                              <li>Lokale Präventionszentren in deiner Region</li>
                            </ul>
                          </div>
                          <p>
                            Der Green Valley Club versteht sich als Gemeinschaft, die füreinander einsteht und bewusst
                            handelt. Wenn du Fragen hast oder Unterstützung brauchst, melde dich jederzeit an unser
                            Team: info@greenvalleyclub.de
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
                      Impressum
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Impressum</DialogTitle>
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
                      Vereinssatzung
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Vereinssatzung</DialogTitle>
                      <DialogDescription asChild>
                        <div className="space-y-2 pt-2 text-sm text-foreground leading-relaxed">
<h1>Satzung des Green Valley Club e.V.</h1>

<h2>1. Name und Sitz</h2>
<p>1.1 Der Verein führt den Namen Green Valley Club e.V.</p>
<p>1.2 Der Sitz des Vereins ist in Bitterfeld-Wolfen.</p>
<p>1.3 Das Geschäftsjahr des Vereins ist das Kalenderjahr.</p>

<h2>2. Zweck</h2>
<p>
Der Zweck des Vereins ist der gemeinschaftliche, nicht-gewerbliche Eigenanbau von Cannabis zum Eigenkonsum der Mitglieder und die Weitergabe des in gemeinschaftlichem Eigenanbau angebauten Cannabis und Vermehrungsmaterial an die Mitglieder des Vereins gemäß den Bestimmungen des Konsumcannabisgesetzes („KCanG“).
</p>
<p>
Bis zur Erteilung der für die Verwirklichung des Zwecks erforderlichen Genehmigungen ist der Zweck des Vereins darauf gerichtet, die erforderlichen Genehmigungen für die Verwirklichung des Zwecks zu erlangen und vorbereitende Maßnahmen zu treffen.
</p>

<h2>3. Mitgliedschaft</h2>

<p><strong>3.1 Mitglied des Vereins kann jede natürliche Person werden,</strong></p>
<ul>
<li>3.1.1 die das 21. Lebensjahr vollendet hat und unbeschränkt geschäftsfähig ist,</li>
<li>3.1.2 die ihren Wohnsitz oder gewöhnlichen Aufenthalt in der Bundesrepublik Deutschland hat,</li>
<li>3.1.3 die nicht Mitglied einer anderen Cannabis-Anbauvereinigung ist, und</li>
<li>3.1.4 bei der keine Gründe in ihrer Person bestehen, welche die Erteilung der Genehmigung nach § 11 KCanG gegenüber dem Verein gefährden könnte.</li>
</ul>

<p><strong>3.2</strong> Mitglied des Vereins kann werden, wer einen Aufnahmeantrag in Textform an den Vorstand stellt. Dem Antrag sind beizufügen:</p>
<ul>
<li>3.2.1 Nachweis des Alters (Personalausweis oder Pass),</li>
<li>3.2.2 Nachweis des Wohnsitzes in Deutschland,</li>
<li>3.2.3 Erklärung, dass keine Mitgliedschaft in einem anderen Anbauverein besteht, und</li>
<li>3.2.4 Bestätigung der Kenntnisnahme der Vereinssatzung und Hausordnung.</li>
</ul>

<p>3.3 Der Vorstand entscheidet über den Aufnahmeantrag nach freiem Ermessen. Eine Ablehnung des Antrags muss er gegenüber dem Antragsteller nicht begründen.</p>
<p>3.4 Der Vorstand muss den Aufnahmeantrag ablehnen, wenn der Verein bereits 500 Mitglieder hat.</p>

<h2>4. Beendigung der Mitgliedschaft</h2>

<p><strong>4.1 Die Mitgliedschaft im Verein endet durch</strong></p>
<ul>
<li>4.1.1 Tod,</li>
<li>4.1.2 Austritt,</li>
<li>4.1.3 Ausschluss oder</li>
<li>4.1.4 Aufgabe des Wohnsitzes oder gewöhnlichen Aufenthaltsortes in der Bundesrepublik Deutschland.</li>
</ul>

<p>
4.2 Der Austritt ist gegenüber dem Vorstand in Textform zu erklären. Der Austritt kann nur mit einer Frist von einem Monat zum Ende des Kalendermonats, frühestens jedoch zum Ende des dritten vollen Kalendermonats nach Erwerb der Mitgliedschaft erklärt werden.
</p>

<p>
4.3 Der freiwillige Austritt ist frühestens drei Monate nach dem Erwerb der Mitgliedschaft zulässig.
</p>

<p><strong>4.4 Ein Mitglied kann durch Beschluss des Vorstands mit zustimmendem Beschluss des Beirats aus dem Verein ausgeschlossen werden, wenn es</strong></p>
<ul>
<li>4.4.1 gegen die Vereinssatzung und/oder die Hausordnung verstößt,</li>
<li>4.4.2 schuldhaft das Ansehen oder die Interessen des Vereins in schwerwiegender Weise schädigt,</li>
<li>4.4.3 mehr als einen Monat mit der Zahlung seiner Aufnahmegebühr oder seiner Mitgliedsbeiträge im Verzug ist und trotz schriftlicher Mahnung unter Androhung des Ausschlusses die Rückstände nicht ausgeglichen hat,</li>
<li>4.4.4 in der Bundesrepublik Deutschland keinen Wohnsitz oder gewöhnlichen Aufenthalt mehr hat oder seinen Wohnsitz oder gewöhnlichen Aufenthalt nicht auf jederzeit mögliches Verlangen des Vorstands durch geeignete amtliche Dokumente nachweist.</li>
</ul>

<p>
Jedes Mitglied ist verpflichtet, Änderungen seines Wohnsitzes oder seines gewöhnlichen Aufenthalts unaufgefordert dem Verein mitzuteilen.
</p>

<p>
4.5 Der Vorstand kann eine Mitgliedschaft nach Ablauf der ersten drei Monate mit einer Frist von einem Monat kündigen.
</p>

<p>
4.6 Der Vorstand und Beirat kündigen den Ausschluss gegenüber dem Mitglied an. Das Mitglied kann sich zu den Gründen des Ausschlusses innerhalb von 14 Tagen in Textform gegenüber dem Vorstand äußern. Der Ausschluss ergeht durch einstimmigen Beschluss des Vorstandes und Beirats.
</p>

<h2>5. Organe des Vereins</h2>
<p>Organe des Vereins sind der Vorstand, der Beirat und die Mitgliederversammlung.</p>

<h2>6. Mitgliedsbeiträge</h2>
<p>6.1 Von den Mitgliedern werden zur Erfüllung des Vereinszwecks Mitgliedsbeiträge erhoben.</p>
<p>6.2 Die Höhe und Fälligkeit des Mitgliedsbeitrags wird durch den Vorstand bestimmt.</p>

<h2>7. Vorstand</h2>
<p>
7.1 Der Vorstand besteht aus drei Personen, nämlich dem Vorsitzenden, dem Stellvertreter des Vorsitzenden und dem Schatzmeister. Die Mitglieder des Vorstands müssen Mitglieder des Vereins sein. Dem Vorstand des Vereins obliegt die Vertretung des Vereins nach § 26 BGB und die Führung seiner Geschäfte.
</p>
<p>7.2 Der Vorsitzende, sein Stellvertreter und der Schatzmeister vertreten den Verein jeweils einzeln.</p>
<p>7.3 Die Vorstandsmitglieder werden von den Beschränkungen des § 181 BGB insgesamt befreit.</p>

<h2>8. Zuständigkeit des Vorstands</h2>
<ul>
<li>(a) Vorbereitung der Mitgliederversammlung und Aufstellung der Tagesordnung;</li>
<li>(b) Einberufung der Mitgliederversammlung;</li>
<li>(c) Ausführung von Beschlüssen der Mitgliederversammlung;</li>
<li>(d) Aufstellung eines Haushaltsplans für jedes Geschäftsjahr, Buchführung, Erstellung eines Jahresberichts, Erlass von Ordnungen (z.B. Hausordnung);</li>
<li>(e) Aufnahme neuer Mitglieder in den Verein;</li>
<li>(f) Ausschluss von Mitgliedern aus dem Verein;</li>
<li>(g) Festsetzung des Mitgliedsbeitrags;</li>
<li>(h) Verlängerung der Laufzeit;</li>
<li>(i) Erfüllung der Dokumentations- und Berichtspflichten.</li>
</ul>

<h2>9. Bestellung des Vorstands, Amtsdauer</h2>
<p>
9.1 Der Vorstand wird durch den Beirat für die Dauer des Bestehens des Vereins, längstens jedoch für die Dauer von drei Jahren, vom Tage seiner Bestellung gerechnet, bestellt.
</p>
<p>
Jedes Vorstandsmitglied ist einzeln zu bestellen. Mitglieder des Vorstands können nur Mitglieder des Vereins sein; mit der Mitgliedschaft im Verein endet auch die Mitgliedschaft im Vorstand.
</p>
<p>
Die erneute Bestellung oder die vorzeitige Abberufung eines Mitglieds durch den Beirat ist zulässig.
</p>
<p>
Ein Mitglied bleibt nach Ablauf der regulären Amtszeit bis zur Bestellung des Nachfolgers im Amt.
</p>

<p>
9.2 Scheidet ein Mitglied vorzeitig aus dem Vorstand aus, so hat der Beirat unverzüglich ein neues Mitglied des Vereins in den Vorstand zu bestellen.
</p>
<h2>10. Beratung und Beschlussfassung des Vorstands</h2>

<p>
10.1 Der Vorstand tritt nach Bedarf zusammen. Die Sitzungen werden von dem Vorsitzenden in Textform einberufen. Einer Mitteilung der Tagesordnung bedarf es nicht. Der Vorstand ist beschlussfähig, wenn mindestens zwei Mitglieder anwesend sind. Bei der Beschlussfassung entscheidet die Mehrheit der abgegebenen gültigen Stimmen; bei Stimmengleichheit entscheidet die Stimme des Vorsitzenden.
</p>

<p>
10.2 Ein Vorstandsbeschluss kann in Textform gefasst werden, wenn alle Vorstandsmitglieder ihre Zustimmung erklären.
</p>

<h2>11. Der Beirat</h2>

<p>
11.1 Der Beirat besteht aus drei Mitgliedern. Er wird für die Dauer des Bestehens des Vereins, längstens jedoch für die Dauer von drei Jahren, vom Tage der Wahl gerechnet, von der Mitgliederversammlung gewählt; er bleibt bis zur Neuwahl des Beirats im Amt. Jedes Mitglied des Beirats ist einzeln zu wählen. Wählbar sind nur Mitglieder des Vereins. Vorstandsmitglieder können nicht zugleich Mitglieder des Beirats sein.
</p>

<p>
11.2 Der Beirat hat die Aufgabe, den Vorstand zu wählen und abzuberufen sowie den Vorstand in wichtigen Vereinsangelegenheiten zu beraten.
</p>

<p>
11.3 Der Beirat tritt nach Bedarf zusammen. Die Sitzungen werden von dem 1. Vorsitzenden, bei dessen Verhinderung vom 2. Vorsitzenden des Beirats geleitet. Der Beirat bildet seine Meinung durch Beschlussfassung. Bei der Beschlussfassung entscheidet die Mehrheit der abgegebenen gültigen Stimmen. Die Beschlüsse des Beirats können in Textform gefasst werden, wenn alle Beiratsmitglieder ihre Zustimmungen erklären.
</p>

<h2>12. Die Mitgliederversammlung</h2>

<p>Die Mitgliederversammlung ist zuständig für die Entscheidungen in folgenden Angelegenheiten:</p>
<ul>
<li>(a) Änderungen der Satzung;</li>
<li>(b) Wahl und Abberufung der Mitglieder des Beirats;</li>
<li>(c) Entgegennahme des Jahresberichts und die Entlastung des Vorstands;</li>
<li>(d) Auflösung des Vereins.</li>
</ul>

<h2>13. Einberufung der Mitgliederversammlung</h2>

<p>
13.1 Mindestens einmal im Jahr ist vom Vorstand eine ordentliche Mitgliederversammlung einzuberufen. Die Mitgliederversammlung kann entweder virtuell (ausschließlich unter Einsatz technischer Kommunikationsmittel) oder in hybrider Form als Online-Präsenzversammlung erfolgen. Der Vorstand entscheidet hierüber nach seinem Ermessen und teilt dies den Mitgliedern in der Einladung mit.
</p>

<p>
13.2 Virtuelle Mitgliederversammlungen finden in einem nur für Mitglieder zugänglichen virtuellen Veranstaltungsraum statt. Mitglieder müssen sich mit ihren Daten sowie einem gesonderten Passwort anmelden. Das Passwort ist jeweils nur für eine virtuelle Mitgliederversammlung gültig. Mitglieder, die ihre E-Mail-Adresse beim Verein registriert haben, erhalten das Passwort durch eine gesonderte E-Mail; die übrigen Mitglieder erhalten das Passwort per Brief. Ausreichend ist eine Versendung des Passworts zwei Tage vor der Mitgliederversammlung an die dem Verein zuletzt bekannt gegebene E-Mail-Adresse bzw. eine Woche vor Versammlung an die zuletzt bekannte Postadresse. Die Mitglieder sind verpflichtet, das Passwort geheim zu halten. Eine Weitergabe an Dritte ist nicht zulässig.
</p>

<p>
13.3 Im Fall einer Online-Präsenzversammlung entscheidet der Vorstand über die Modalitäten der Fernabstimmung, die allen Mitgliedern die Teilnahme im Wege elektronischer Kommunikation ermöglicht. Der Vorstand kann auch entscheiden, dass jedes Mitglied seine Stimme ohne Teilnahme an der Versammlung im Wege elektronischer Kommunikation abgeben darf. In diesem Fall muss dem Verein die Stimme bis zum Ablauf des Tages vor dem Versammlungstag zugegangen sein.
</p>

<p>
13.4 Der Vorstand ist ermächtigt, die Bestimmungen zum Verfahren und zur Ausübung der Mitgliedschaftsrechte in der Versammlung zu treffen. Im Falle einer virtuellen Mitgliederversammlung ist der Vorstand berechtigt, das Rede- und Fragerecht angemessen zu begrenzen. Wird die Versammlung als Online-Präsenzversammlung abgehalten, kann der Vorstand das Rede- und Fragerecht auf die anwesenden Mitglieder beschränken oder entscheiden, welche Fragen der nicht persönlich anwesenden Mitglieder beantwortet werden. Die Beschränkungen sind mit der Einladung anzukündigen.
</p>

<h2>14. Beschlussfassung der Mitgliederversammlung</h2>

<p>
14.1 Die Mitgliederversammlung wird vom Vorstandsvorsitzenden und bei dessen Verhinderung von einem durch die Mitgliederversammlung zu wählenden Versammlungsleiter geleitet.
</p>

<p>14.2 Die Mitgliederversammlung ist ohne Rücksicht auf die Zahl der erschienenen Mitglieder beschlussfähig.</p>

<p>
14.3 Für Wahlen gilt: Hat im ersten Wahlgang kein Kandidat die Mehrheit der abgegebenen gültigen Stimmen erreicht, findet eine Stichwahl zwischen den beiden Kandidaten mit den höchsten Stimmenzahlen statt.
</p>

<p>
14.4 Der Vorstand ist berechtigt, Mitgliedern die Stimmabgabe auf elektronischem Weg vor oder während der Versammlung zu ermöglichen. Beschlüsse können in Textform, mündlich oder per Telefon, Telefax, E-Mail oder sonstigem elektronischem Weg oder in kombinierten Beschlussverfahren gefasst werden, sofern alle Mitglieder einverstanden sind und keine zwingenden Formvorschriften entgegenstehen.
</p>

<p>
14.5 Mitglieder können Beschlüsse auch ohne Mitgliederversammlung im Umlaufverfahren fassen, wenn sämtliche Mitglieder beteiligt wurden. Eine Beschlussfassung ist wirksam, wenn mindestens die Hälfte der Mitglieder ihre Stimme innerhalb einer vom Vorstand bestimmten Frist abgegeben hat.
</p>

<p>
14.6 Über den Ablauf der Mitgliederversammlung und die gefassten Beschlüsse ist ein Protokoll zu fertigen, das vom Protokollführer und dem Versammlungsleiter zu unterzeichnen ist (elektronische Form, z.B. DocuSign, ausreichend).
</p>

<h2>15. Dauer</h2>
<p>
Die Dauer des Vereins Green Valley Club e.V. ist auf ein Jahr, gerechnet ab Eintragung im Vereinsregister, festgelegt. Die Laufzeit kann durch den Vorstand verlängert werden.
</p>

<h2>16. Auflösung des Vereins</h2>
<p>
Die Auflösung des Vereins kann nur in einer Mitgliederversammlung mit der in dieser Satzung festgelegten Stimmenmehrheit beschlossen werden.
</p>
<p>
Im Falle der Auflösung ist der Vorstandsvorsitzende vertretungsberechtigter und von den Beschränkungen des § 181 BGB befreiter Liquidator, sofern die Mitgliederversammlung nichts anderes beschließt.
</p>
<p>
Das Ende der Laufzeit führt nicht automatisch zur Auflösung des Vereins.
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
                      Beitragsordnung
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Beitragsordnung</DialogTitle>
                      <DialogDescription asChild>
                        <div className="space-y-2 pt-2 text-sm text-foreground leading-relaxed">
<h1>Beitragsordnung des Green Valley Club e. V.</h1>

<p>
Diese Beitragsordnung regelt die monatlichen Beiträge, die Abgabe von Cannabisblüten sowie die Zahlungsmodalitäten des Green Valley Club e. V.
</p>
<p>
Sie ist für alle Mitglieder verbindlich.
</p>
<p>
Sie ist nicht Bestandteil der Satzung und kann nur durch den Vorstand geändert werden.
</p>


<h2>1. Begründung der Beitragslogik</h2>
<p>
Die Beitragsstruktur des Clubs richtet sich ausschließlich nach den Anforderungen einer stabilen und verlässlichen Eigenversorgung.
</p>
<p>
Der Verein verfolgt keine Gewinnerzielungsabsicht.
</p>
<p>
Die Beiträge dienen ausschließlich der Kostendeckung der gemeinschaftlichen nicht-gewerblichen Eigenversorgung gemäß § 11 KCanG.
</p>
<p>
Die Beitragslogik stellt sicher, dass der Betrieb wirtschaftlich stabil bleibt, alle Mitglieder unabhängig von saisonalen oder individuellen Schwankungen gleichmäßig versorgt und seine Aufgaben im Rahmen der gemeinschaftlichen Eigenversorgung erfüllen kann.
</p>
<p>
Die Kultivierung von Cannabis erfordert eine kontinuierliche Pflege, hochwertige Technik und verlässliche Kapazitäten, die nur durch eine planbare monatliche Struktur gewährleistet werden können.
</p>


<h2>2. Allgemeine Grundsätze</h2>
<ul>
<li>Für die Mitgliedschaft wird keine Aufnahmegebühr erhoben.</li>
<li>Die monatlichen Beiträge richten sich nach der gewählten Abgabemenge.</li>
<li>Die Abgabe erfolgt ausschließlich zur gemeinschaftlichen und nicht gewerblichen Eigenversorgung.</li>
<li>Der Cannabisbezug ist nur möglich, wenn der monatliche Beitrag vollständig gezahlt wurde.</li>
<li>Es besteht kein Anspruch auf bestimmte Sorten, Genetiken oder Qualitäten. Gewährleistungsansprüche hinsichtlich der Beschaffenheit des abgegebenen Cannabis bestehen nicht.</li>
<li>Der Verein gibt ausschließlich Cannabis ab, das die gesetzlichen Anforderungen gemäß KCanG und seiner Verordnungen erfüllt.</li>
<li>Die Beitragsstruktur dient der planbaren Versorgung sowie der Sicherstellung einer konstanten Qualität.</li>
<li>Erfolgt der Beitritt in der Mitte des Monats, so ist der Beitrag für den ganzen Monat, in dem der Beitritt wirksam wird, zu entrichten.</li>
</ul>


<h2>3. Sonderregelung zur Startphase des Clubs</h2>
<p>
In den ersten drei Monaten nach Start der Abgabestelle in Berlin gilt eine gesonderte Beitragsstruktur für alle Mitglieder, die in diesem Zeitraum beitreten.
</p>
<p>
Nach Ablauf der Startphase entfällt diese Regelung automatisch.
</p>

<h3>3.1. Verpflichtender Mitgliedsbeitrag in der Startphase</h3>
<p>
Während der Startphase ist das Mitglied verpflichtet einen Mindest-Mitgliedsbeitrag von 29,75 Euro inkl. MwSt. zu entrichten.
</p>
<p>
Dieser ermächtigt das Mitglied zu einer Abnahme von 5 Gramm Cannabis.
</p>
<p>
Mitglieder können diese Menge abrufen, sind hierzu jedoch nicht verpflichtet.
</p>
<p>
Die 29,75 Euro Mitgliedsbeitrag-Option bleibt über die Startphase hinaus noch bis einschließlich Juni 2026 bestehen und entfällt ab dem 1. Juli 2026 automatisch.
</p>

<h3>3.2. Option zu höheren Mitgliedsbeiträgen in der Startphase</h3>
<p>
Mitglieder können höhere Mitgliedsbeiträge wählen.
</p>
<p>Der Preis richtet sich nach folgender Struktur:</p>

<ul>
<li>74,38 Euro inklusive Mehrwertsteuer = 12,5 Gramm pro Monat</li>
<li>89,25 Euro inklusive Mehrwertsteuer = 15 Gramm pro Monat</li>
<li>148,75 Euro inklusive Mehrwertsteuer = 25 Gramm pro Monat</li>
<li>297,50 Euro inklusive Mehrwertsteuer = 50 Gramm pro Monat</li>
</ul>

<p>
(Die Abholung von fünfzig Gramm ist nur in zwei Abholterminen möglich.)
</p>

<p>
Der gewählte Beitrag umfasst ein monatliches Abholrecht für das betreffende Mitglied in der entsprechenden Höhe.
</p>
<p>
Nicht abgeholte Mengen verfallen zum Monatsende.
</p>
<p>
Die Produktionskapazität wird unabhängig von individuellen Abholmengen konstant vorgehalten.
</p>


<h2>4. Regelbeiträge ab dem vierten Monat</h2>
<p>
Nach Ablauf der Startphase gilt für alle Mitglieder eine einheitliche reguläre Beitragsstruktur.
</p>

<h3>4.1. Mindestbeitrag nach der Startphase (Reguläre Beitragsstruktur)</h3>
<p>
Die Mitgliedsbeitragsoption 89,25 Euro inkl. MwSt. entfällt vollständig.
</p>
<p>
Die 29,75 Euro Mitgliedsbeitragsoption bleibt abweichend hiervon noch bis einschließlich Juni 2026 bestehen und entfällt ab dem 1. Juli automatisch, da die Clubproduktion ab diesem Zeitpunkt auf eine stabile und planbare Gesamtmenge ausgerichtet ist.
</p>
<p>
Mitgliedern wird empfohlen, einen Mitgliedsbeitrag zu wählen.
</p>
<p>
Ohne Rückmeldung wird das Standardmodell von 148,75 Euro inkl. MwSt. pro Monat zugrunde gelegt.
</p>
<p>
Diese Voreinstellung kann jederzeit auf 29,75 Euro inkl. MwSt. reduziert oder auf 297,50 Euro inkl. MwSt. erhöht werden, sofern die gesetzliche Obergrenze von 50 g pro Monat eingehalten wird.
</p>
<p>
Die tatsächliche Abnahme bleibt in jedem Fall freiwillig.
</p>

<p>Für die reguläre Struktur stehen folgende Optionen zur Verfügung:</p>

<ul>
<li>29,75 Euro inklusive Mehrwertsteuer = 5 Gramm pro Monat (bis einschl. Juni 2026)</li>
<li>74,38 Euro inklusive Mehrwertsteuer = 12,5 Gramm pro Monat</li>
<li>148,75 Euro inklusive Mehrwertsteuer = 25 Gramm pro Monat (Standardmodell)</li>
<li>297,50 Euro inklusive Mehrwertsteuer = 50 Gramm pro Monat (Die Abholung von fünfzig Gramm ist nur an zwei verschiedenen Tagen möglich.)</li>
</ul>

<p>
Der Beitrag umfasst ein monatliches Abholrecht in der entsprechenden Höhe.
</p>
<p>
Nicht abgeholte Mengen verfallen zum Monatsende.
</p>
<p>
Die Produktionskapazität wird unabhängig von individuellen Abholmengen konstant vorgehalten.
</p>


<h3>4.2. Upgrades</h3>
<p>
Upgrades sind optional und dienen lediglich dazu, zusätzliche Mengen oberhalb der regulären Abnahmemenge zu ermöglichen.
</p>
<p>
Die tatsächliche Abnahme bleibt in jedem Fall freiwillig.
</p>
<p>
Upgrades stehen in Stufen von 5 Gramm, 12,5 Gramm, 15 Gramm und 25 Gramm zur Verfügung, sofern die gesetzliche Monatsobergrenze von fünfzig Gramm nicht überschritten wird.
</p>
<p>
Die Zahlung erfolgt ausschließlich vor Abholung per Überweisung auf das Vereinskonto.
</p>


<h2>5. Mengenbegrenzungen</h2>
<p>Gesetzliche Mengenobergrenzen gelten zwingend.</p>

<p>Die Abgabe ist beschränkt auf:</p>
<ul>
<li>maximal fünfundzwanzig Gramm pro Tag</li>
<li>maximal fünfzig Gramm pro Monat</li>
</ul>


<h2>6. Anpassung der Abnahmemenge</h2>
<p>
Mitglieder können ihren Mitgliedsbeitrag jeweils zum Monatsende für den folgenden Monat anpassen, sofern Kapazitäten und gesetzliche Vorgaben dies zulassen.
</p>


<h2>7. Zahlungsmodalitäten</h2>
<ul>
<li>Die monatlichen Beiträge sind zum Monatsanfang fällig und werden per SEPA Lastschrift eingezogen.</li>
<li>Jedes Mitglied erteilt dem Club ein SEPA Mandat und sorgt für ausreichende Kontodeckung.</li>
<li>Upgrades erfolgen ausschließlich per Überweisung und müssen vor der Abholung eingehen.</li>
<li>Änderungen der Kontoverbindung sind dem Club unverzüglich schriftlich mitzuteilen.</li>
<li>Bei nicht ausreichender Kontodeckung trägt das Mitglied die Kosten der Rücklastschrift.</li>
<li>Bei Zahlungsverzug erfolgt eine schriftliche Mahnung. Es können Mahnkosten in Höhe von fünfundzwanzig Euro erhoben werden.</li>
<li>Cannabis wird nur abgegeben, wenn der Beitrag vollständig beglichen wurde.</li>
</ul>

<p>
<strong>Das Vereinskonto:</strong><br />
Empfänger: Green Valley Club e.V.<br />
IBAN: DE36 8604 0000 0533 5674 00<br />
BIC: COBADEFFXXX
</p>


<h2>8. Pausieren der Beiträge</h2>
<p>
Jedes Mitglied kann einmal pro Kalenderjahr eine Beitragsruhe für einen Monat beantragen.
</p>
<p>
Während der Beitragsruhe besteht kein Abholrecht und es erfolgt keine Mengenübertragung.
</p>
<p>
Die Beitragsruhe muss bis zum Monatsende für den Folgemonat beantragt werden.
</p>


<h2>9. Austritt und Rückerstattung</h2>
<ul>
<li>Die Beitragspflicht endet mit Ablauf des Monats, in dem die Mitgliedschaft endet.</li>
<li>Bereits gezahlte Beiträge werden nicht erstattet.</li>
<li>Die Nichtabnahme von Cannabis berechtigt nicht zu einer Rückerstattung.</li>
</ul>


<h2>10. Schlussbestimmungen</h2>
<p>
Diese Beitragsordnung tritt mit ihrer Veröffentlichung in Kraft.
</p>
<p>
Änderungen werden den Mitgliedern schriftlich mitgeteilt und bedürfen der einfachen Mehrheit der Mitgliederversammlung.
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
            <span className="font-semibold text-foreground">Green Valley Club</span>
          </p>
          <p className="text-sm text-muted-foreground">
            © 2026 Green Valley Club e.V. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-muted-foreground">
            Qualität. Gemeinschaft. Vertrauen.
          </p>
        </div>
      </div>
    </footer>
  );
}

