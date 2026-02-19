import { useMemo } from 'react';
import { ArrowLeft, ChevronRight, Shield } from 'lucide-react';

type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'list'; items: string[] };

type Section = {
  number: number;
  title: string;
  anchor: string;
  blocks: ContentBlock[];
};

const RAW_CONTENT = "1. Datenschutzhinweis\r\nAls Einsen und Nullen UG (haftungsbeschränkt) (nachfolgend Einsen und Nullen) legen\r\nwir größten Wert auf den Schutz der personenbezogenen Daten unserer Kund:innen und\r\nBesucher:innen unserer Webseiten. Bei der Verarbeitung Ihrer personenbezogenen\r\nDaten befolgen wir die Vorgaben der Datenschutz-Grundverordnung (DSGVO), des\r\nTelekommunikation-Digitale-Dienste-Datenschutz-Gesetzes (TDDDG) und – sofern\r\nrelevant – des Digitales-Dienste-Gesetzes (DDG). Dieser Datenschutzhinweis erläutert,\r\nwelche Informationen bei Besuch der Website erhoben, gespeichert und genutzt\r\nwerden, zu welchen Zwecken und auf welcher Rechtsgrundlage dies erfolgt. Er klärt Sie\r\naußerdem über Ihre Rechte auf und darüber, wie Sie Auskunft über Ihre Daten erhalten\r\noder diese ändern bzw. löschen lassen können. Änderungen dieser\r\nDatenschutzerklärung sind möglich – bitte beachten Sie stets die jeweils aktuelle\r\nVersion.\r\n2. Verantwortliche Stelle\r\nVerantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EUDatenschutzgrundverordnung (DSGVO), ist:\r\nEinsen und Nullen UG (haftungsbeschränkt)\r\nMintropstraße 5\r\n40215 Düsseldorf\r\nKontakt\r\nE-Mail: info@cannanas.club\r\nGeschäftsführung\r\nBenjamin Kluck · Peter Mösenthin\r\nHandelsregister\r\nAmtsgericht Düsseldorf · HRB 90099\r\nSitz der Gesellschaft Düsseldorf\r\nUmsatzsteuer-ID-Nr. · Steuer-Nr.\r\nDE331566664 · 106/5737/3731\r\nHinweis zum Urheberrecht\r\nDie durch Einsen und Nullen erstellten Inhalte und Werke auf diesen Seiten unterliegen\r\ndem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede\r\nArt der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der\r\nschriftlichen Zustimmung.\r\n3. Ihre Betroffenenrechte\r\nUnter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie\r\njederzeit folgende Rechte ausüben:\r\n• Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15\r\nDSGVO),\r\n• Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),\r\n• Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),\r\n• Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund\r\ngesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),\r\n• Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und\r\n• Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben\r\noder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).\r\nSofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für\r\ndie Zukunft widerrufen.\r\nSie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B.\r\nan die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für\r\nuns als verantwortliche Stelle zuständige Behörde.\r\nEine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden\r\nSie unter: https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_linksnode.html.\r\n4. Erfassung allgemeiner Informationen beim Besuch unserer Website\r\nArt und Zweck der Verarbeitung:\r\nWenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder\r\nanderweitig Informationen übermitteln, werden automatisch Informationen allgemeiner\r\nNatur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des\r\nWebbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres InternetService-Providers, Ihre IP-Adresse und ähnliches.\r\nSie werden insbesondere zu folgenden Zwecken verarbeitet:\r\n• Sicherstellung eines problemlosen Verbindungsaufbaus der Website,\r\n• Sicherstellung einer reibungslosen Nutzung unserer Website,\r\n• Auswertung der Systemsicherheit und -stabilität sowie\r\n• zu weiteren administrativen Zwecken.\r\nWir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen.\r\nInformationen dieser Art werden von uns ggfs. statistisch ausgewertet, um unseren\r\nInternetauftritt und die dahinterstehende Technik zu optimieren.\r\nRechtsgrundlage:\r\nDie Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten\r\nInteresses an der Verbesserung der Stabilität und Funktionalität unserer Website.\r\nEmpfänger:\r\nEmpfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die\r\nWartung unserer Webseite als Auftragsverarbeiter tätig werden.\r\nSpeicherdauer:\r\nDie Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht mehr\r\nerforderlich sind. Dies ist für die Daten, die der Bereitstellung der Webseite dienen,\r\ngrundsätzlich der Fall, wenn die jeweilige Sitzung beendet ist.\r\nBereitstellung vorgeschrieben oder erforderlich:\r\nDie Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich\r\nnoch vertraglich vorgeschrieben. Ohne die IP-Adresse ist jedoch der Dienst und die\r\nFunktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste\r\nund Services nicht verfügbar oder eingeschränkt sein. Aus diesem Grund ist ein\r\nWiderspruch ausgeschlossen.\r\n5. Cookies\r\nArt und Zweck der Verarbeitung:\r\nWie viele andere Webseiten verwenden wir auch so genannte „Cookies“. Bei Cookies\r\nhandelt es sich um kleine Textdateien, die auf Ihrem Endgerät (Laptop, Tablet,\r\nSmartphone o.ä.) gespeichert werden, wenn Sie unsere Webseite besuchen.\r\nHierdurch erhalten wir bestimmte Daten wie z. B. IP-Adresse, verwendeter Browser und\r\nBetriebssystem.\r\nCookies können nicht verwendet werden, um Programme zu starten oder Viren auf einen\r\nComputer zu übertragen. Anhand der in Cookies enthaltenen Informationen können wir\r\nIhnen die Navigation erleichtern und die korrekte Anzeige unserer Webseiten\r\nermöglichen.\r\nIn keinem Fall werden die von uns erfassten Daten an Dritte weitergegeben oder ohne\r\nIhre Einwilligung eine Verknüpfung mit personenbezogenen Daten hergestellt.\r\nNatürlich können Sie unsere Website grundsätzlich auch ohne Cookies betrachten.\r\nInternet-Browser sind regelmäßig so eingestellt, dass sie Cookies akzeptieren. Im\r\nAllgemeinen können Sie die Verwendung von Cookies jederzeit über die Einstellungen\r\nIhres Browsers deaktivieren. Bitte verwenden Sie die Hilfefunktionen Ihres\r\nInternetbrowsers, um zu erfahren, wie Sie diese Einstellungen ändern können. Bitte\r\nbeachten Sie, dass einzelne Funktionen unserer Website möglicherweise nicht\r\nfunktionieren, wenn Sie die Verwendung von Cookies deaktiviert haben.\r\nSpeicherdauer und eingesetzte Cookies:\r\nSoweit Sie uns durch Ihre Browsereinstellungen oder Zustimmung die Verwendung von\r\nCookies erlauben, können folgende Cookies auf unseren Webseiten zum Einsatz\r\nkommen:\r\n• Daten über Darstellungsoptionen\r\nSoweit diese Cookies (auch) personenbezogene Daten betreffen können, informieren\r\nwir Sie darüber in den folgenden Abschnitten.\r\nSie können über Ihre Browsereinstellungen einzelne Cookies oder den gesamten\r\nCookie-Bestand löschen. Darüber hinaus erhalten Sie Informationen und Anleitungen,\r\nwie diese Cookies gelöscht oder deren Speicherung vorab blockiert werden können. Je\r\nnach Anbieter Ihres Browsers finden Sie die notwendigen Informationen unter den\r\nnachfolgenden Links:\r\n• Mozilla Firefox\r\n• Internet Explorer\r\n• Google Chrome\r\n• Opera\r\n• Safari\r\n6. Kartendienste (OpenStreetMap, CARTO, Esri ArcGIS)\r\nArt und Zweck der Verarbeitung:\r\nUnsere Website verwendet interaktive Karten, die von Drittanbietern bereitgestellt\r\nwerden. Beim Laden der Karten werden Anfragen an die Server der jeweiligen Anbieter\r\ngesendet, wodurch Ihre IP-Adresse und ggf. weitere technische Daten übermittelt\r\nwerden. Die folgenden Kartendienste werden verwendet:\r\n• OpenStreetMap: Kartenmaterial von OpenStreetMap Foundation,\r\nDatenschutzerklärung\r\n• CARTO: Karten-Tiles von CARTO, Datenschutzerklärung\r\n• Esri ArcGIS: Satellitenbilder von Esri, Datenschutzerklärung\r\nDie Nutzung dieser Kartendienste erfolgt im Interesse einer ansprechenden Darstellung\r\nunseres Online-Angebots und einer leichten Auffindbarkeit der von uns auf der Website\r\nangegebenen Orte.\r\n7. Audio- und Videokonferenzen\r\nDatenverarbeitung:\r\nFür die Kommunikation mit unseren Kunden setzen wir unter anderen Online-KonferenzTools ein. Die im Einzelnen von uns genutzten Tools sind unten aufgelistet. Wenn Sie mit\r\nuns per Video- oder Audiokonferenz via Internet kommunizieren, werden Ihre\r\npersonenbezogenen Daten von uns und dem Anbieter des jeweiligen Konferenz-Tools\r\nerfasst und verarbeitet.\r\nDie Konferenz-Tools erfassen dabei alle Daten, die Sie zur Nutzung der Tools\r\nbereitstellen/einsetzen (E-Mail-Adresse und/oder Ihre Telefonnummer). Ferner\r\nverarbeiten die Konferenz-Tools die Dauer der Konferenz, Beginn und Ende (Zeit) der\r\nTeilnahme an der Konferenz, Anzahl der Teilnehmer und sonstige\r\n„Kontextinformationen“ im Zusammenhang mit dem Kommunikationsvorgang\r\n(Metadaten).\r\nDes Weiteren verarbeitet der Anbieter des Tools alle technischen Daten, die zur\r\nAbwicklung der Online-Kommunikation erforderlich sind. Dies umfasst insbesondere IPAdressen, MAC-Adressen, Geräte-IDs, Gerätetyp, Betriebssystemtyp und -version,\r\nClient-Version, Kameratyp, Mikrofon oder Lautsprecher sowie die Art der Verbindung.\r\nSofern innerhalb des Tools Inhalte ausgetauscht, hochgeladen oder in sonstiger Weise\r\nbereitgestellt werden, werden diese ebenfalls auf den Servern der Tool-Anbieter\r\ngespeichert. Zu solchen Inhalten zählen insbesondere Cloud-Aufzeichnungen, Chat-/\r\nSofortnachrichten, Voicemails, hochgeladene Fotos und Videos, Dateien, Whiteboards\r\nund andere Informationen, die während der Nutzung des Dienstes geteilt werden.\r\nBitte beachten Sie, dass wir nicht vollumfänglich Einfluss auf die\r\nDatenverarbeitungsvorgänge der verwendeten Tools haben. Unsere Möglichkeiten\r\nrichten sich maßgeblich nach der Unternehmenspolitik des jeweiligen Anbieters.\r\nWeitere Hinweise zur Datenverarbeitung durch die Konferenztools entnehmen Sie den\r\nDatenschutzerklärungen der jeweils eingesetzten Tools, die wir unter diesem Text\r\naufgeführt haben.\r\nZweck und Rechtsgrundlagen\r\nDie Konferenz-Tools werden genutzt, um mit angehenden oder bestehenden\r\nVertragspartnern zu kommunizieren oder bestimmte Leistungen gegenüber unseren\r\nKunden anzubieten (Art. 6 Abs. 1 b) DS-GVO). Des Weiteren dient der Einsatz der Tools\r\nder allgemeinen Vereinfachung und Beschleunigung der Kommunikation mit uns bzw.\r\nunserem Unternehmen (berechtigtes Interesse im Sinne von Art. 6 Abs. 1 f) DS-GVO).\r\nSoweit eine Einwilligung abgefragt wurde, erfolgt der Einsatz der betreffenden Tools auf\r\nGrundlage dieser Einwilligung; die Einwilligung ist jederzeit mit Wirkung für die Zukunft\r\nwiderrufbar.\r\nSpeicherdauer\r\nDie unmittelbar von uns über die Video- und Konferenz-Tools erfassten Daten werden\r\nvon unseren Systemen gelöscht, sobald Sie uns zur Löschung auffordern, Ihre\r\nEinwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung\r\nentfällt. Gespeicherte Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen.\r\nZwingende gesetzliche Aufbewahrungsfristen bleiben unberührt.\r\nAuf die Speicherdauer Ihrer Daten, die von den Betreibern der Konferenz-Tools zu\r\neigenen Zwecken gespeichert werden, haben wir keinen Einfluss. Für Einzelheiten dazu\r\ninformieren Sie sich bitte direkt bei den Betreibern der Konferenz-Tools.\r\nEingesetzte Konferenz-Tools\r\nGoogle Meet\r\nWir nutzen Google Meet. Anbieter ist die Google Ireland Limited, Gordon House, 4\r\nBarrow St, Dublin, D04 E5W5, Irland. Details zur Datenverarbeitung entnehmen Sie der\r\nDatenschutzerklärung von Google: https://policies.google.com/privacy.\r\nDiscord\r\nWir nutzen Discord. Anbieter ist die Discord, Inc., 444 De Haro St, Suite 200, San\r\nFrancisco, California 94107, USA. Details zur Datenverarbeitung entnehmen Sie der\r\nDatenschutzerklärung von Discord: https://discordapp.com/privacy.\r\n8. Newsletter\r\nArt und Zweck der Verarbeitung:\r\nIhre Daten werden ausschließlich dazu verwendet, Ihnen den abonnierten Newsletter\r\nper E-Mail zuzustellen. Die Angabe Ihres Namens erfolgt, um Sie im Newsletter\r\npersönlich ansprechen zu können und ggf. zu identifizieren, falls Sie von Ihren Rechten\r\nals Betroffener Gebrauch machen wollen.\r\nFür den Empfang des Newsletters ist die Angabe Ihrer E-Mail-Adresse ausreichend. Bei\r\nder Anmeldung zum Bezug unseres Newsletters werden die von Ihnen angegebenen\r\nDaten ausschließlich für diesen Zweck verwendet. Abonnenten können auch über\r\nUmstände per E-Mail informiert werden, die für den Dienst oder die Registrierung\r\nrelevant sind (bspw. Änderungen des Newsletterangebots oder technische\r\nGegebenheiten).\r\nFür eine wirksame Registrierung benötigen wir eine valide E-Mail-Adresse. Um zu\r\nüberprüfen, dass eine Anmeldung tatsächlich durch den Inhaber einer E-Mail-Adresse\r\nerfolgt, setzen wir das „Double-opt-in“-Verfahren ein. Hierzu protokollieren wir die\r\nBestellung des Newsletters, den Versand einer Bestätigungsmail und den Eingang der\r\nhiermit angeforderten Antwort. Weitere Daten werden nicht erhoben. Die Daten werden\r\nausschließlich für den Newsletterversand verwendet und nicht an Dritte weitergegeben.\r\nRechtsgrundlage:\r\nAuf Grundlage Ihrer ausdrücklich erteilten Einwilligung (Art. 6 Abs. 1 lit. a DSGVO),\r\nübersenden wir Ihnen regelmäßig unseren Newsletter bzw. vergleichbare Informationen\r\nper E-Mail an Ihre angegebene E-Mail-Adresse.\r\nDie Einwilligung zur Speicherung Ihrer persönlichen Daten und ihrer Nutzung für den\r\nNewsletterversand können Sie jederzeit mit Wirkung für die Zukunft widerrufen. In jedem\r\nNewsletter findet sich dazu ein entsprechender Link. Außerdem können Sie sich\r\njederzeit auch direkt auf dieser Website abmelden oder uns Ihren Widerruf über die am\r\nEnde dieser Datenschutzhinweise angegebene Kontaktmöglichkeit mitteilen.\r\nEmpfänger:\r\nEmpfänger der Daten sind ggf. Auftragsverarbeiter.\r\nSpeicherdauer:\r\nDie Daten werden in diesem Zusammenhang nur verarbeitet, solange die\r\nentsprechende Einwilligung vorliegt. Danach werden sie gelöscht.\r\nBereitstellung vorgeschrieben oder erforderlich:\r\nDie Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig, allein auf Basis Ihrer\r\nEinwilligung. Ohne bestehende Einwilligung können wir Ihnen unseren Newsletter leider\r\nnicht zusenden.\r\n9. Kontaktformular\r\nArt und Zweck der Verarbeitung:\r\nDie von Ihnen eingegebenen Daten werden zum Zweck der individuellen Kommunikation\r\nmit Ihnen gespeichert. Hierfür ist die Angabe einer validen E-Mail-Adresse sowie Ihres\r\nNamens erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden\r\nBeantwortung derselben. Die Angabe weiterer Daten ist optional.\r\nRechtsgrundlage:\r\nDie Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der\r\nGrundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).\r\nDurch Bereitstellung des Kontaktformulars möchten wir Ihnen eine unkomplizierte\r\nKontaktaufnahme ermöglichen. Ihre gemachten Angaben werden zum Zwecke der\r\nBearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.\r\nSofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt die\r\nVerarbeitung der in das Kontaktformular eingegebenen Daten zur Durchführung\r\nvorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).\r\nEmpfänger:\r\nEmpfänger der Daten sind ggf. Auftragsverarbeiter.\r\nSpeicherdauer:\r\nDaten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht.\r\nSofern es zu einem Vertragsverhältnis kommt, unterliegen wir den gesetzlichen\r\nAufbewahrungsfristen nach HGB und löschen Ihre Daten nach Ablauf dieser Fristen.\r\nBereitstellung vorgeschrieben oder erforderlich:\r\nDie Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir können Ihre\r\nAnfrage jedoch nur bearbeiten, sofern Sie uns Ihren Namen, Ihre E-Mail-Adresse und\r\nden Grund der Anfrage mitteilen.\r\n10. Sentry (Functional Software, Inc. )\r\nArt und Zweck der Verarbeitung:\r\nSentry ist ein von Functional Software, Inc. bereitgestellter Dienst für die Überwachung\r\nvon Applikationen. Verarbeitete personenbezogene Daten: verschiedene Datenarten,\r\nwie in der Datenschutzerklärung des Dienstes beschrieben.\r\nMit dieser Art von Diensten kann Cannanas zur Verbesserung der Leistung, des Betriebs,\r\nder Wartung und der Fehlersuche die Nutzung und das Verhalten ihrer einzelnen\r\nBestandteile überwachen. Welche personenbezogenen Daten verarbeitet werden, hängt\r\nvon den Eigenschaften und der Art der Ausführung der Dienste ab, deren Funktion das\r\nFiltern der über Cannanas stattfindenden Aktivitäten ist.\r\nVerarbeitungsort: Vereinigte Staaten – Datenschutzerklärung:https://sentry.io/privacy/\r\n11. Chatbot (OpenAI)\r\nArt und Zweck der Verarbeitung:\r\nDer Chatbot ist ein Computerprogramm, das automatisiert bestimmte Kundenanfragen\r\nzur Funktionsweise der Software im direkten Dialog beantworten kann. Der Chatbot\r\nbasiert auf Vorleistungen der Firma OpenAI. Die Nutzung des Chatbot ist freiwillig. Die\r\nEingabe personenbezogener Daten ist zur Nutzung des Chatbot nicht notwendig und\r\nwerden vom Chatbot auch nicht abgefragt. Der Chatbot dient allein der\r\nAufnahme/Bearbeitung von Kundenanfragen. Der Nutzer hat jederzeit die Möglichkeit,\r\ndie Verarbeitung jeglicher Daten zu beenden, in dem der Dialog nicht fortgesetzt wird. Es\r\nbesteht neben dem Chatbot die Möglichkeit, über das Kontaktformular oder per Email in\r\nKontakt zu treten.\r\n12. Eingebettete YouTube-Videos\r\nArt und Zweck der Verarbeitung:\r\nAuf einigen unserer Webseiten betten wir YouTube-Videos ein. Betreiber der\r\nentsprechenden Plugins ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066,\r\nUSA (nachfolgend „YouTube“). Wenn Sie eine Seite mit dem YouTube-Plugin besuchen,\r\nwird eine Verbindung zu Servern von YouTube hergestellt. Dabei wird YouTube mitgeteilt,\r\nwelche Seiten Sie besuchen. Wenn Sie in Ihrem YouTube-Account eingeloggt sind, kann\r\nYouTube Ihr Surfverhalten Ihnen persönlich zuzuordnen. Dies verhindern Sie, indem Sie\r\nsich vorher aus Ihrem YouTube-Account ausloggen.\r\nWird ein YouTube-Video gestartet, setzt der Anbieter Cookies ein, die Hinweise über das\r\nVerhalten von Nutzer:innen sammeln.\r\nWeitere Informationen zu Zweck und Umfang der Datenerhebung und ihrer Verarbeitung\r\ndurch YouTube erhalten Sie in den Datenschutzerklärungen des Anbieters, Dort erhalten\r\nSie auch weitere Informationen zu Ihren diesbezüglichen Rechten und\r\nEinstellungsmöglichkeiten zum Schutze Ihrer Privatsphäre\r\n(https://policies.google.com/privacy). Google verarbeitet Ihre Daten in den USA und hat\r\nsich dem EU-US Privacy Shield unterworfen https://www.privacyshield.gov/EU-USFramework\r\nRechtsgrundlage:\r\nRechtsgrundlage für die Einbindung von YouTube und dem damit verbundenen\r\nDatentransfer zu Google ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).\r\nEmpfänger:\r\nDer Aufruf von YouTube löst automatisch eine Verbindung zu Google aus.\r\nSpeicherdauer und Widerruf der Einwilligung:\r\nWer das Speichern von Cookies für das Google-Ad-Programm deaktiviert hat, wird auch\r\nbeim Anschauen von YouTube-Videos mit keinen solchen Cookies rechnen müssen.\r\nYouTube legt aber auch in anderen Cookies nicht-personenbezogene\r\nNutzungsinformationen ab. Möchten Sie dies verhindern, so müssen Sie das Speichern\r\nvon Cookies im Browser blockieren.\r\nWeitere Informationen zum Datenschutz bei „YouTube“ finden Sie in der\r\nDatenschutzerklärung des Anbieters unter:\r\nhttps://www.google.de/intl/de/policies/privacy/\r\nDrittlandtransfer:\r\nGoogle verarbeitet Ihre Daten in den USA und hat sich dem EU_US Privacy Shield\r\nunterworfen https://www.privacyshield.gov/EU-US-Framework.\r\nBereitstellung vorgeschrieben oder erforderlich:\r\nDie Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig, allein auf Basis Ihrer\r\nEinwilligung. Sofern Sie den Zugriff unterbinden, kann es hierdurch zu\r\nFunktionseinschränkungen auf der Website kommen.\r\n13. SSL-Verschlüsselung\r\nUm die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem\r\naktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über\r\nHTTPS.\r\n14. Eingesetzte Auftragsverarbeiter\r\nFolgende Organisationen, Unternehmen bzw. Personen wurden vom Betreiber dieser\r\nWebsite mit der Verarbeitung von Daten beauftragt:\r\n• Vercel (Hosting)\r\n• Hetzner (Hosting)\r\n• Firebase (Hosting)\r\n• Cloudflare (Hosting)\r\n• SendGrid (E-Mail Gateway)\r\n15. Google Ads\r\nBeschreibung und Umfang der Verarbeitung von Daten:\r\nAuf einigen unserer Websites nutzen wir den Dienst Google Ads der Google LLC, 1600\r\nAmphitheatre Parkway Mountain View, CA 94043 USA. Google Ads ist ein Dienst zur\r\nInternetwerbung, der es Werbetreibenden gestattet, sowohl Anzeigen in den\r\nSuchmaschinenergebnissen von Google als auch im Google-Werbenetzwerk zu\r\nschalten. Google Ads ermöglicht es uns, vorab bestimmte Schlüsselwörter und\r\nZielgruppen festzulegen, mittels derer eine Anzeige in den Suchmaschinenergebnissen\r\nvon Google angezeigt wird, wenn der Nutzer mit der Suchmaschine ein\r\nschlüsselwortrelevantes Suchergebnis abruft. Im Google-Werbenetzwerk werden die\r\nAnzeigen mittels eines automatischen Algorithmus und unter Beachtung der zuvor\r\nfestgelegten Schlüsselwörter und Zielgruppen auf themenrelevanten Websites verteilt.\r\nDer Zweck von Google Ads ist die Bewerbung unserer Website durch die Einblendung\r\nvon interessenrelevanter Werbung auf den Websites von Drittunternehmen und in den\r\nSuchmaschinenergebnissen der Suchmaschine Google.\r\nMittels des Cookies werden personenbezogene Informationen, beispielsweise die durch\r\nSie besuchten Websites, gespeichert. Bei jedem Besuch unserer Websites werden\r\ndemnach personenbezogene Daten, einschließlich der IP-Adresse des genutzten\r\nInternetanschlusses an Google übertragen. Diese personenbezogenen Daten werden\r\ndurch Google gespeichert. Google gibt diese über das technische Verfahren erhobenen\r\npersonenbezogenen Daten unter Umständen an Dritte weiter.\r\nRechtsgrundlage:\r\nDie Verwendung von Google Ads erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6\r\nAbs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG.\r\nWiderspruchs- und Beseitigungsmöglichkeit:\r\nDie Erfassung von Daten durch Google Ads können Sie unterbinden, indem Sie Ihre\r\nEinwilligung in die Speicherung der entsprechenden Cookies widerrufen bzw. nicht\r\nerteilen. Ihre Einwilligung in die Speicherung von Cookies können Sie direkt über die\r\nConsent Management Plattform verwalten. Diese kann jederzeit über den Link \"Cookie\r\nEinstellungen\" in der Fußzeile aufgerufen werden.\r\nFerner besteht die Möglichkeit, der interessenbezogenen Werbung durch Google zu\r\nwidersprechen. Hierzu müssen Sie von jedem der von Ihnen genutzten Internetbrowser\r\naus den Link https://www.google.de/settings/ads aufrufen und dort die gewünschten\r\nEinstellungen vornehmen.\r\nWeitere Informationen und die geltenden Datenschutzbestimmungen von Google\r\nkönnen unter https://www.google.de/intl/de/policies/privacy/ abgerufen werden.\r\n16. Facebook Pixel\r\nBeschreibung und Umfang der Verarbeitung von Daten:\r\nAuf einigen unserer Websites setzen wir den \"Conversion-Pixel\" bzw. BesucheraktionsPixel der Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour,\r\nDublin 2, Irland (\"Meta\") ein. Durch den Aufruf dieses Pixels aus Ihrem Browser kann\r\nMeta erkennen, ob eine Meta-Werbeanzeige erfolgreich war, also z.B. zu einem\r\nVertragsabschluss geführt hat.\r\nWir erhalten von Meta hierzu ausschließlich statistische Daten, die keinen Bezug zu\r\nkonkreten Personen haben. Wir können so die Wirksamkeit der Anzeigen auf\r\nFacebook/Instagram für statistische Zwecke und Zwecke der Marktforschung erfassen.\r\nInsbesondere falls Sie bei Facebook/Instagram angemeldet sind, verweisen wir im\r\nÜbrigen auf deren Datenschutzinformationen:\r\nhttps://www.facebook.com/about/privacy/\r\nRechtsgrundlage:\r\nDie Verwendung des Facebook Pixels erfolgt auf Grundlage Ihrer Einwilligung gemäß Art.\r\n6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG.\r\nWiderspruchs- und Beseitigungsmöglichkeit:\r\nBitte klicken Sie hier, wenn Sie Ihre Einwilligung zu Conversion Pixel widerrufen\r\nmöchten.\r\n17. Änderung unserer Datenschutzbestimmungen\r\nWir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den\r\naktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer\r\nLeistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer\r\nServices. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.\r\nFragen an den Datenschutzbeauftragten\r\nWenn Sie Fragen hinsichtlich der Verarbeitung Ihrer persönlichen Daten haben, können\r\nSie sich an den Datenschutzbeauftragten von Einsen und Nullen wenden, der im Falle\r\nvon Auskunftsersuchen, Anregungen oder Beschwerden zur Verfügung steht.\r\nDatenschutzbeauftragter der Einsen und Nullen UG (haftungsbeschränkt):\r\nEinsen und Nullen UG (haftungsbeschränkt)\r\nMintropstraße 5\r\n40215 Düsseldorf\r\nKontakt\r\nE-Mail: info@cannanas.club\r\nGeschäftsführung\r\nBenjamin Kluck · Peter Mösenthin\r\nHandelsregister\r\nAmtsgericht Düsseldorf · HRB 90099\r\nSitz der Gesellschaft Düsseldorf\r\nUmsatzsteuer-ID-Nr. · Steuer-Nr.\r\nDE331566664 · 106/5737/3731\r\nHinweis zum Urheberrecht\r\nDie durch Einsen und Nullen erstellten Inhalte und Werke auf diesen Seiten unterliegen\r\ndem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede\r\nArt der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der\r\nschriftlichen Zustimmung.\r\nStand: 19.09.2025";

function toAnchor(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9????\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function linkifyText(text: string): Array<string | { label: string; href: string }> {
  const pattern = /(https?:\/\/[^\s]+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi;
  const out: Array<string | { label: string; href: string }> = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    const start = match.index;
    const value = match[0];

    if (start > cursor) {
      out.push(text.slice(cursor, start));
    }

    const href = value.includes('@') ? `mailto:${value}` : value;
    out.push({ label: value, href });
    cursor = start + value.length;
  }

  if (cursor < text.length) {
    out.push(text.slice(cursor));
  }

  return out;
}

function parseSectionBlocks(raw: string): ContentBlock[] {
  const lines = raw.split('\n').map((line) => line.trim());
  const blocks: ContentBlock[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    blocks.push({ type: 'paragraph', text: paragraph.join(' ').replace(/\s+/g, ' ').trim() });
    paragraph = [];
  };

  const flushList = () => {
    if (listItems.length === 0) return;
    blocks.push({ type: 'list', items: listItems });
    listItems = [];
  };

  for (const line of lines) {
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    if (/^(?:•|â€¢|\u2022)\s*/.test(line)) {
      flushParagraph();
      listItems.push(line.replace(/^(?:•|â€¢|\u2022)\s*/, '').trim());
      continue;
    }

    if (line.endsWith(':') && line.length <= 80) {
      flushParagraph();
      flushList();
      blocks.push({ type: 'subheading', text: line.replace(/:$/, '') });
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();

  return blocks;
}

function parseSections(raw: string): Section[] {
  const normalized = raw.replace(/\r\n/g, '\n').trim();
  const matches = [...normalized.matchAll(/(^\d+)\.\s+(.+)$/gm)];
  const sections: Section[] = [];

  for (let i = 0; i < matches.length; i += 1) {
    const current = matches[i];
    const next = matches[i + 1];

    const start = current.index ?? 0;
    const titleStart = start + current[0].length;
    const end = next?.index ?? normalized.length;
    const body = normalized.slice(titleStart, end).trim();

    const number = Number(current[1]);
    const title = current[2].trim();

    sections.push({
      number,
      title,
      anchor: toAnchor(`${number}-${title}`),
      blocks: parseSectionBlocks(body),
    });
  }

  return sections;
}

function RichText({ text }: { text: string }) {
  const pieces = linkifyText(text);

  return (
    <>
      {pieces.map((piece, index) => {
        if (typeof piece === 'string') {
          return <span key={index}>{piece}</span>;
        }

        return (
          <a
            key={index}
            href={piece.href}
            target={piece.href.startsWith('http') ? '_blank' : undefined}
            rel={piece.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors"
          >
            {piece.label}
          </a>
        );
      })}
    </>
  );
}

export default function DatenschutzPage() {
  const sections = useMemo(() => parseSections(RAW_CONTENT), []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between gap-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zur Startseite
          </a>
          <div className="inline-flex items-center gap-2 text-sm text-primary font-semibold tracking-wide">
            <Shield className="w-4 h-4" />
            Datenschutz
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-8 lg:gap-12">
          <aside className="lg:sticky lg:top-6 self-start rounded-2xl border border-border bg-card p-5">
            <h1 className="text-xl font-bold text-primary mb-1">Datenschutzerklärung</h1>
            <nav className="space-y-2 max-h-[60vh] overflow-auto pr-1">
              {sections.map((section) => (
                <a
                  key={section.anchor}
                  href={`#${section.anchor}`}
                  className="group flex items-start gap-2 rounded-lg px-2 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  <ChevronRight className="w-4 h-4 mt-0.5 text-primary/60 group-hover:text-primary transition-colors" />
                  <span>
                    <span className="font-semibold text-primary/90">{section.number}. </span>
                    {section.title}
                  </span>
                </a>
              ))}
            </nav>
          </aside>

          <article className="space-y-5">
            {sections.map((section) => (
              <section
                id={section.anchor}
                key={section.anchor}
                className="rounded-2xl border border-border bg-card p-5 sm:p-7"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mb-5">
                  <span className="mr-2">{section.number}.</span>
                  {section.title}
                </h2>

                <div className="space-y-4">
                  {section.blocks.map((block, index) => {
                    if (block.type === 'subheading') {
                      return (
                        <h3 key={index} className="text-base sm:text-lg font-semibold text-foreground pt-2">
                          <RichText text={block.text} />
                        </h3>
                      );
                    }

                    if (block.type === 'list') {
                      return (
                        <ul key={index} className="space-y-2 list-disc pl-6 text-muted-foreground leading-relaxed">
                          {block.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <RichText text={item} />
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    return (
                      <p key={index} className="text-muted-foreground leading-relaxed">
                        <RichText text={block.text} />
                      </p>
                    );
                  })}
                </div>
              </section>
            ))}
          </article>
        </div>
      </main>
    </div>
  );
}
