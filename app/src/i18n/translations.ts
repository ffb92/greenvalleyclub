export type Language = 'de' | 'en';

// Flat key-indexed translations for type safety
const de = {
  // ── Navbar ──
  'nav.locations': 'Standorte',
  'nav.pricing': 'Beiträge',
  'nav.contact': 'Kontakt',
  'nav.faq': 'FAQ',
  'nav.cta': 'Mitglied werden',

  // ── Age Gate ──
  'age.title': 'Bist du über 21?',
  'age.description':
    'GreenValleyClub richtet sich ausschließlich an Erwachsene und verpflichtet sich zu konsequentem Jugendschutz. Bitte bestätige dein Alter, bevor du fortfährst.',
  'age.confirm': 'Ja, ich bin über 21',
  'age.decline': 'Nein',
  'age.more': 'Mehr zu unseren',
  'age.guidelines': 'Jugendschutz-Richtlinien',

  // ── Hero ──
  'hero.eyebrow': 'Cannabis Social Club Berlin',
  'hero.welcome': 'Willkommen im',
  'hero.brand': 'Green Valley Club',
  'hero.tagline': 'Qualität. Gemeinschaft. Vertrauen.',
  'hero.subtitle':
    'Dein legaler Cannabis Social Club in Berlin. Wir bauen hochwertiges Cannabis an – kontrolliert, transparent und fair.',
  'hero.cta': 'Jetzt Mitglied werden',

  // ── Location ──
  'location.badge': 'Ausgabestelle',
  'location.title_line1': 'Mitten im',
  'location.title_line2': 'Herzen Berlins',
  'location.desc1':
    'Direkt in der Nähe des Hauptbahnhofs. Durch die perfekte Anbindung an den ÖPNV kommt ihr easy zu uns – egal aus welcher Richtung.',
  'location.desc2':
    'Nach deiner Registrierung erhältst du die genaue Adresse und kannst einen persönlichen Abholtermin reservieren.',
  'location.visit': 'Wir freuen uns auf euren Besuch! 🌿✨',
  'location.distance_label': 'Entfernung',
  'location.distance_value': '500m vom Hauptbahnhof',

  // ── Pricing ──
  'pricing.eyebrow': 'Mitgliedschaft',
  'pricing.title': 'Unsere Beitragsoptionen',
  'pricing.desc':
    'Bei uns erhältst du hochwertige Qualität zu einem fairen Preis von nur 5,95€ inklusive MwSt. pro Gramm. Transparente Beitragsoptionen, flexibel wählbar und ganz ohne versteckte Kosten – selbstverständlich ohne Anmeldegebühr.',
  'pricing.per_gram': 'Preis pro Gramm',
  'pricing.reg_fee': 'Anmeldegebühr',
  'pricing.per_month': 'pro Monat',
  'pricing.incl_vat': '(inkl. MwSt.)',

  // ── Cannanas ──
  // (no translatable text – iframe content is external)

  // ── Quality & Growth ──
  'quality.title_1': 'High-End Quality',
  'quality.title_2': 'Controlled Growth',
  'quality.desc':
    'Wir produzieren unter höchsten Qualitätsstandards nach GACP-Standard und pestizidfrei. Jede Blüte wird handgetrimmt, jede Charge zusätzlich in einem Analyselabor geprüft – für maximale Reinheit, Sicherheit und gleichbleibend hohe Qualität.',
  'quality.stat_area': 'ANBAUFLÄCHE',
  'quality.stat_climate': 'KLIMAKONTROLLE',
  'quality.stat_lab': 'ANALYSELABOR GEPRÜFT',

  // ── Stay Connected ──
  'stay.eyebrow': 'Stay Connected',
  'stay.title': 'Bleib nah dran.',
  'stay.subtitle':
    'Updates direkt in dein Postfach – und echte Einblicke hinter die Kulissen auf Instagram.',
  'stay.email_badge': 'E-Mail Kontakt',
  'stay.email_title': 'Schreib uns direkt',
  'stay.email_desc':
    'Ob Mitgliedschaft, Ablauf oder allgemeine Fragen – unser Team ist für dich da.',
  'stay.instagram_title': 'Folge @greenvalley.gvc',
  'stay.instagram_desc':
    'News, Behind the Scenes und Community-Momente aus dem Green Valley Club.',
  'stay.instagram_cta': 'Zu Instagram',

  // ── FAQ ──
  'faq.eyebrow': 'FAQ',
  'faq.title': 'Alles, was du wissen musst',
  // Q1
  'faq.q1': 'Kann jeder Mitglied werden?',
  'faq.a1':
    'Personen die 21 Jahre oder älter sind und einen Wohnsitz in Deutschland haben, können Mitglied werden. Die Aufnahme erfolgt nach sorgfältiger Prüfung deiner Anmeldedaten. Sobald alle Angaben verifiziert wurden, bestätigen wir deine Mitgliedschaft.',
  // Q2
  'faq.q2': 'Muss ich etwas zahlen, wenn ich auf Mitglied werden klicke?',
  'faq.a2':
    'Nein, das Klicken auf "Mitglied werden" ist kostenlos. Du erhältst zunächst alle Informationen und kannst dich dann entscheiden, ob du die Mitgliedschaft beginnen möchtest.',
  // Q3
  'faq.q3': 'Dürfen Social Clubs Cannabis versenden?',
  'faq.a3':
    'Nein, die Abgabe von Cannabis erfolgt ausschließlich persönlich an der dafür vorgesehenen Abgabestelle. Eine Zustellung per Post ist nicht erlaubt.',
  // Q4
  'faq.q4': 'Wie viel Cannabis bekomme ich als Mitglied von meinem Social Club?',
  'faq.a4':
    'Die Menge richtet sich nach deinem gewählten Paket. Wir bieten Staffelungen von 5g, 12,5g, 25g oder 50g pro Monat an. Die tatsächliche Abgabemenge kann durch zusätzliche Upgrades erhöht werden. Desweiteren schreibt das Gesetz vor 50g im Monat und 25g pro Tag.',
  // Q5
  'faq.q5': 'Wie viele Mitglieder dürfen wir aufnehmen?',
  'faq.a5':
    'Die maximale Mitgliederzahl ist auf 500 Mitglieder begrenzt. Wir achten darauf, eine ausgewogene Community aufzubauen und neue Mitglieder schrittweise aufzunehmen.',
  // Q6
  'faq.q6': 'Welche Strains bieten wir an?',
  'faq.a6':
    'Wir bieten eine vielfältige Auswahl an Strains aus allen Kategorien: Sativa, Indica, Hybrid und unsere Signature-Sorten. Das Sortiment wird regelmäßig erweitert. Unsere Sorten decken ein Spektrum von 15% bis über 25% THC ab.',
  // Q7
  'faq.q7': 'Wo ist die Anbau- und Abgabe-Location?',
  'faq.a7':
    'Unser Anbau findet in Bitterfeld statt. Die Abgabestelle ist in der Nähe des Berliner Hauptbahnhofs.',

  // ── Footer ──
  'footer.contact': 'Kontakt',
  'footer.legal': 'Rechtliches',
  'footer.privacy': 'Datenschutz',
  'footer.youth': 'Jugendschutz',
  'footer.imprint': 'Impressum',
  'footer.statutes': 'Vereinssatzung',
  'footer.fees': 'Beitragsordnung',
  'footer.copyright': '© 2026 Green Valley Club e.V. Alle Rechte vorbehalten.',
  'footer.tagline': 'Qualität. Gemeinschaft. Vertrauen.',
} as const;

const en: Record<keyof typeof de, string> = {
  // ── Navbar ──
  'nav.locations': 'Locations',
  'nav.pricing': 'Membership',
  'nav.contact': 'Contact',
  'nav.faq': 'FAQ',
  'nav.cta': 'Become a Member',

  // ── Age Gate ──
  'age.title': 'Are you over 21?',
  'age.description':
    'GreenValleyClub is exclusively for adults and is committed to responsible youth protection. Please confirm your age before continuing.',
  'age.confirm': "Yes, I'm over 21",
  'age.decline': 'No',
  'age.more': 'More about our',
  'age.guidelines': 'Youth Protection Guidelines',

  // ── Hero ──
  'hero.eyebrow': 'Cannabis Social Club Berlin',
  'hero.welcome': 'Welcome to',
  'hero.brand': 'Green Valley Club',
  'hero.tagline': 'Quality. Community. Trust.',
  'hero.subtitle':
    'Your legal Cannabis Social Club in Berlin. We grow premium cannabis – controlled, transparent, and fair.',
  'hero.cta': 'Become a Member',

  // ── Location ──
  'location.badge': 'Pickup Location',
  'location.title_line1': 'In the',
  'location.title_line2': 'Heart of Berlin',
  'location.desc1':
    'Right near Berlin Central Station. With perfect public transport connections, you can reach us easily – no matter which direction you come from.',
  'location.desc2':
    'After registering, you will receive the exact address and can reserve a personal pickup appointment.',
  'location.visit': 'We look forward to your visit! 🌿✨',
  'location.distance_label': 'Distance',
  'location.distance_value': '500m from Central Station',

  // ── Pricing ──
  'pricing.eyebrow': 'Membership',
  'pricing.title': 'Our Membership Options',
  'pricing.desc':
    'Enjoy premium quality at a fair price of just €5.95 including VAT per gram. Transparent membership options, flexible to choose, with no hidden costs – and absolutely no registration fee.',
  'pricing.per_gram': 'Price per Gram',
  'pricing.reg_fee': 'Registration Fee',
  'pricing.per_month': 'per month',
  'pricing.incl_vat': '(incl. VAT)',

  // ── Cannanas ──
  // (no translatable text)

  // ── Quality & Growth ──
  'quality.title_1': 'High-End Quality',
  'quality.title_2': 'Controlled Growth',
  'quality.desc':
    'We produce under the highest quality standards following GACP guidelines and are pesticide-free. Every flower is hand-trimmed, and each batch is additionally tested in a certified laboratory – for maximum purity, safety, and consistently high quality.',
  'quality.stat_area': 'GROW SPACE',
  'quality.stat_climate': 'CLIMATE CONTROL',
  'quality.stat_lab': 'LAB TESTED',

  // ── Stay Connected ──
  'stay.eyebrow': 'Stay Connected',
  'stay.title': 'Stay close.',
  'stay.subtitle':
    'Updates straight to your inbox – and real behind-the-scenes insights on Instagram.',
  'stay.email_badge': 'Email Contact',
  'stay.email_title': 'Write Us Directly',
  'stay.email_desc':
    'Whether it is about membership, the process, or general questions – our team is here for you.',
  'stay.instagram_title': 'Follow @greenvalley.gvc',
  'stay.instagram_desc':
    'News, behind the scenes, and community moments from Green Valley Club.',
  'stay.instagram_cta': 'Go to Instagram',

  // ── FAQ ──
  'faq.eyebrow': 'FAQ',
  'faq.title': 'Everything You Need to Know',
  'faq.q1': 'Can anyone become a member?',
  'faq.a1':
    'Anyone who is 21 years or older and has a residence in Germany can become a member. Admission is granted after careful review of your registration data. Once all details have been verified, we will confirm your membership.',
  'faq.q2': 'Do I have to pay anything when I click "Become a Member"?',
  'faq.a2':
    'No, clicking "Become a Member" is free of charge. You will first receive all the information and can then decide whether you want to start your membership.',
  'faq.q3': 'Are Social Clubs allowed to ship cannabis?',
  'faq.a3':
    'No, cannabis can only be collected in person at the designated pickup location. Delivery by mail is not permitted.',
  'faq.q4': 'How much cannabis do I get as a member of my Social Club?',
  'faq.a4':
    'The amount depends on your chosen package. We offer tiers of 5g, 12.5g, 25g, or 50g per month. The amount dispensed can be increased through additional upgrades. Please note that German law stipulates a maximum of 50g per month and 25g per day.',
  'faq.q5': 'How many members can you accept?',
  'faq.a5':
    'The maximum number of members is capped at 500. We take care to build a balanced community and admit new members gradually.',
  'faq.q6': 'Which strains do you offer?',
  'faq.a6':
    'We offer a diverse selection of strains from all categories: Sativa, Indica, Hybrid, and our Signature varieties. The range is regularly expanded. Our strains cover a spectrum from 15% to over 25% THC.',
  'faq.q7': 'Where is the cultivation and pickup location?',
  'faq.a7':
    'Our cultivation takes place in Bitterfeld. The pickup location is near Berlin Central Station.',

  // ── Footer ──
  'footer.contact': 'Contact',
  'footer.legal': 'Legal',
  'footer.privacy': 'Privacy Policy',
  'footer.youth': 'Youth Protection',
  'footer.imprint': 'Legal Notice',
  'footer.statutes': 'Club Statutes',
  'footer.fees': 'Fee Regulations',
  'footer.copyright': '© 2026 Green Valley Club e.V. All rights reserved.',
  'footer.tagline': 'Quality. Community. Trust.',
};

export function getTranslations(lang: Language): Record<string, string> {
  return lang === 'en' ? en : de;
}

export { de, en };
