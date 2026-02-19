import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function DatenschutzDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Datenschutz
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Datenschutz</DialogTitle>
          <DialogDescription asChild>
            <div className="space-y-3 pt-2 text-sm text-foreground leading-relaxed text-left">
              <h1 className="text-base font-semibold">Datenschutzerklaerung</h1>

              <h2 className="font-semibold">1. Datenschutzhinweis</h2>
              <p>
                Die Einsen und Nullen UG (haftungsbeschraenkt) (nachfolgend "Einsen und Nullen")
                legt groessten Wert auf den Schutz der personenbezogenen Daten unserer Kund:innen
                und Besucher:innen unserer Webseiten.
              </p>
              <p>
                Bei der Verarbeitung Ihrer personenbezogenen Daten beachten wir die Vorgaben der
                Datenschutz-Grundverordnung (DSGVO), des Telekommunikation-Digitale-Dienste-
                Datenschutz-Gesetzes (TDDDG) sowie, sofern relevant, des Digitale-Dienste-Gesetzes
                (DDG).
              </p>
              <p>
                Diese Datenschutzerklaerung informiert Sie darueber, welche Daten wir erheben, zu
                welchen Zwecken wir sie verarbeiten und welche Rechte Ihnen zustehen.
              </p>

              <h2 className="font-semibold">2. Verantwortliche Stelle</h2>
              <p>
                <strong>Einsen und Nullen UG (haftungsbeschraenkt)</strong>
                <br />
                Mintropstrasse 5
                <br />
                40215 Duesseldorf
              </p>
              <p>
                E-Mail: <a href="mailto:info@cannanas.club">info@cannanas.club</a>
                <br />
                Geschaeftsfuehrung: Benjamin Kluck · Peter Moesenthin
                <br />
                Amtsgericht Duesseldorf · HRB 90099
                <br />
                USt-ID: DE331566664
                <br />
                Steuernummer: 106/5737/3731
              </p>

              <h2 className="font-semibold">3. Ihre Betroffenenrechte</h2>
              <p>Sie haben jederzeit das Recht auf:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Auskunft gemaess Art. 15 DSGVO</li>
                <li>Berichtigung gemaess Art. 16 DSGVO</li>
                <li>Loeschung gemaess Art. 17 DSGVO</li>
                <li>Einschraenkung der Verarbeitung gemaess Art. 18 DSGVO</li>
                <li>Widerspruch gegen die Verarbeitung gemaess Art. 21 DSGVO</li>
                <li>Datenuebertragbarkeit gemaess Art. 20 DSGVO</li>
              </ul>
              <p>Erteilte Einwilligungen koennen jederzeit mit Wirkung fuer die Zukunft widerrufen werden.</p>
              <p>Sie haben ausserdem das Recht, sich bei einer Datenschutz-Aufsichtsbehoerde zu beschweren.</p>

              <h2 className="font-semibold">4. Server-Logfiles</h2>
              <p>
                Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst
                (z. B. Browsertyp, Betriebssystem, IP-Adresse, Uhrzeit des Zugriffs).
              </p>
              <p>
                Die Verarbeitung erfolgt zur Sicherstellung eines stoerungsfreien Betriebs der Website
                auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
              </p>
              <p>Die Daten werden geloescht, sobald sie fuer den Zweck nicht mehr erforderlich sind.</p>

              <h2 className="font-semibold">5. Cookies</h2>
              <p>
                Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die auf
                Ihrem Endgeraet gespeichert werden.
              </p>
              <p>Cookies dienen der technischen Funktionalitaet sowie der Optimierung unseres Angebots.</p>
              <p>
                Die Speicherung erfolgt auf Grundlage Ihrer Einwilligung gemaess Art. 6 Abs. 1 lit. a
                DSGVO und Paragraf 25 TDDDG.
              </p>
              <p>Sie koennen Ihre Cookie-Einstellungen jederzeit ueber den entsprechenden Link im Footer anpassen.</p>

              <h2 className="font-semibold">6. Kartendienste</h2>
              <p>
                Wir verwenden Kartendienste von Drittanbietern (OpenStreetMap, CARTO, Esri ArcGIS).
                Beim Laden der Karten wird Ihre IP-Adresse an die jeweiligen Anbieter uebertragen.
              </p>
              <p>Die Nutzung erfolgt auf Grundlage unseres berechtigten Interesses gemaess Art. 6 Abs. 1 lit. f DSGVO.</p>

              <h2 className="font-semibold">7. Audio- und Videokonferenzen</h2>
              <p>
                Zur Kommunikation nutzen wir u. a. Google Meet und Discord. Dabei werden personenbezogene
                Daten (z. B. E-Mail-Adresse, IP-Adresse, Metadaten der Konferenz) verarbeitet.
              </p>
              <p>
                Die Verarbeitung erfolgt gemaess Art. 6 Abs. 1 lit. b DSGVO (Vertragserfuellung) bzw.
                lit. f DSGVO (berechtigtes Interesse).
              </p>

              <h2 className="font-semibold">8. Newsletter</h2>
              <p>Wenn Sie unseren Newsletter abonnieren, verarbeiten wir Ihre E-Mail-Adresse ausschliesslich fuer den Versand des Newsletters.</p>
              <p>Rechtsgrundlage ist Ihre Einwilligung gemaess Art. 6 Abs. 1 lit. a DSGVO.</p>
              <p>Sie koennen den Newsletter jederzeit ueber den Abmeldelink widerrufen.</p>

              <h2 className="font-semibold">9. Kontaktformular</h2>
              <p>Die von Ihnen eingegebenen Daten werden zur Bearbeitung Ihrer Anfrage gespeichert.</p>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO bzw. bei vorvertraglichen Massnahmen
                Art. 6 Abs. 1 lit. b DSGVO.
              </p>
              <p>
                Die Daten werden spaetestens 6 Monate nach Bearbeitung geloescht, sofern keine
                gesetzlichen Aufbewahrungspflichten bestehen.
              </p>

              <h2 className="font-semibold">10. Sentry</h2>
              <p>Wir nutzen Sentry (Functional Software, Inc.) zur Fehlerueberwachung unserer Anwendungen.</p>
              <p>
                Verarbeitungsort: USA
                <br />
                Weitere Informationen:{' '}
                <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">
                  https://sentry.io/privacy/
                </a>
              </p>

              <h2 className="font-semibold">11. Chatbot (OpenAI)</h2>
              <p>
                Unser Chatbot basiert auf Technologien von OpenAI. Die Nutzung ist freiwillig.
                Personenbezogene Daten sind fuer die Nutzung nicht erforderlich.
              </p>

              <h2 className="font-semibold">12. YouTube-Videos</h2>
              <p>
                Auf unserer Website sind Videos von YouTube eingebettet. Beim Aufruf kann eine
                Verbindung zu Servern von Google hergestellt werden.
              </p>
              <p>Rechtsgrundlage ist Ihre Einwilligung gemaess Art. 6 Abs. 1 lit. a DSGVO.</p>

              <h2 className="font-semibold">13. SSL-Verschluesselung</h2>
              <p>Unsere Website nutzt SSL-Verschluesselung zur sicheren Uebertragung Ihrer Daten.</p>

              <h2 className="font-semibold">14. Auftragsverarbeiter</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Vercel (Hosting)</li>
                <li>Hetzner (Hosting)</li>
                <li>Firebase (Hosting)</li>
                <li>Cloudflare (Hosting)</li>
                <li>SendGrid (E-Mail Gateway)</li>
              </ul>

              <h2 className="font-semibold">15. Google Ads</h2>
              <p>
                Wir nutzen Google Ads zur Bewerbung unserer Angebote. Dabei koennen Cookies gesetzt und
                personenbezogene Daten verarbeitet werden.
              </p>
              <p>Rechtsgrundlage ist Ihre Einwilligung gemaess Art. 6 Abs. 1 lit. a DSGVO.</p>

              <h2 className="font-semibold">16. Facebook Pixel</h2>
              <p>Wir verwenden das Meta Conversion Pixel zur Analyse der Wirksamkeit unserer Werbung.</p>
              <p>Rechtsgrundlage ist Ihre Einwilligung gemaess Art. 6 Abs. 1 lit. a DSGVO.</p>

              <h2 className="font-semibold">17. Aenderungen</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklaerung anzupassen, um sie an aktuelle
                rechtliche Anforderungen oder Aenderungen unserer Leistungen anzupassen.
              </p>
              <p>
                <strong>Stand: 19.09.2025</strong>
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
