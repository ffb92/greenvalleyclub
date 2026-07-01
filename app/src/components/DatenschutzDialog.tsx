import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useI18n } from '@/i18n/use-i18n';

export default function DatenschutzDialog() {
  const { t } = useI18n();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {t('footer.privacy')}
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-x-hidden overflow-y-auto p-4 sm:max-w-2xl sm:p-6">
        <DialogHeader>
          <DialogTitle>{t('footer.privacy')}</DialogTitle>
          <DialogDescription asChild>
            <div className="space-y-3 pt-2 text-left text-sm leading-relaxed text-foreground break-words [overflow-wrap:anywhere] [&_a]:break-all">

<h2>1. Datenschutzhinweis</h2>
<p>
Als Einsen und Nullen UG (haftungsbeschränkt) (nachfolgend Einsen und Nullen) legen wir größten Wert auf den Schutz der personenbezogenen Daten unserer Kund:innen und Besucher:innen unserer Webseiten.
</p>
<p>
Bei der Verarbeitung Ihrer personenbezogenen Daten befolgen wir die Vorgaben der Datenschutz-Grundverordnung (DSGVO), des Telekommunikation-Digitale-Dienste-Datenschutz-Gesetzes (TDDDG) und – sofern relevant – des Digitales-Dienste-Gesetzes (DDG).
</p>
<p>
Dieser Datenschutzhinweis erläutert, welche Informationen bei Besuch der Website erhoben, gespeichert und genutzt werden, zu welchen Zwecken und auf welcher Rechtsgrundlage dies erfolgt. Er klärt Sie außerdem über Ihre Rechte auf und darüber, wie Sie Auskunft über Ihre Daten erhalten oder diese ändern bzw. löschen lassen können.
</p>
<p>
Änderungen dieser Datenschutzerklärung sind möglich – bitte beachten Sie stets die jeweils aktuelle Version.
</p>

<h2>2. Verantwortliche Stelle</h2>
<p>
Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
</p>

<p>
<strong>Einsen und Nullen UG (haftungsbeschränkt)</strong><br />
Mintropstraße 5<br />
40215 Düsseldorf
</p>

<p>
<strong>Kontakt</strong><br />
E-Mail: <a href="mailto:info@cannanas.club">info@cannanas.club</a>
</p>

<p>
<strong>Geschäftsführung</strong><br />
Benjamin Kluck · Peter Mösenthin
</p>

<p>
<strong>Handelsregister</strong><br />
Amtsgericht Düsseldorf · HRB 90099
</p>

<p>Umsatzsteuer-ID-Nr.: DE331566664 · Steuer-Nr.: 106/5737/3731</p>

<p>
<strong>Hinweis zum Urheberrecht</strong><br />
Die durch Einsen und Nullen erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
</p>

<h2>3. Ihre Betroffenenrechte</h2>
<p>Unter den angegebenen Kontaktdaten können Sie jederzeit folgende Rechte ausüben:</p>
<ul>
<li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
<li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)</li>
<li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
<li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
<li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
<li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
</ul>
<p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>

<h2>4. Erfassung allgemeiner Informationen</h2>
<p>Wenn Sie auf unsere Website zugreifen, werden automatisch Informationen allgemeiner Natur erfasst (Server-Logfiles: Browsertyp, Betriebssystem, Domainname, IP-Adresse etc.).</p>
<p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses.</p>

<h2>5. Cookies</h2>
<p>Wir verwenden Cookies – kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie können Cookies über Ihre Browsereinstellungen deaktivieren.</p>

<h2>6. Kartendienste</h2>
<p>Unsere Website verwendet interaktive Karten von OpenStreetMap, CARTO und Esri ArcGIS.</p>

<h2>7. Audio- und Videokonferenzen</h2>
<p>Für die Kommunikation setzen wir Google Meet und Discord ein.</p>

<h2>8. Newsletter</h2>
<p>Ihre Daten werden ausschließlich zum Newsletterversand verwendet. Wir setzen das Double-opt-in-Verfahren ein.</p>

<h2>9. Kontaktformular</h2>
<p>Die eingegebenen Daten werden zum Zweck der individuellen Kommunikation gespeichert.</p>

<h2>10. Sentry</h2>
<p>Sentry (Functional Software, Inc.) dient der Überwachung von Applikationen. Verarbeitungsort: USA.</p>

<h2>11. Chatbot (OpenAI)</h2>
<p>Der Chatbot basiert auf Vorleistungen von OpenAI. Die Nutzung ist freiwillig.</p>

<h2>12. Eingebettete YouTube-Videos</h2>
<p>Auf einigen Webseiten betten wir YouTube-Videos ein. Betreiber: YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.</p>

            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
