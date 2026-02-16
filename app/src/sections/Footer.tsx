import { useState } from 'react';
import { Leaf, MapPin, Mail, MessageCircle, Copy, Check } from 'lucide-react';

const footerLinks = {
  kontakt: [
    { label: 'info@greenvalley.club', href: 'mailto:info@greenvalley.club', icon: Mail },
    { label: 'WhatsApp Community', href: '#', icon: MessageCircle },
  ],
  entdecken: [
    { label: 'Unsere Beiträge', href: '#pricing' },
    { label: 'Unser Team', href: '#team' },
    { label: 'Standorte', href: '#location' },
  ],
  rechtliches: [
    { label: 'Jugendschutz', href: '#' },
    { label: 'Satzung', href: '#' },
    { label: 'Beitragsordnung', href: '#' },
    { label: 'Impressum', href: '#' },
    { label: 'Datenschutz', href: '#' },
  ],
};

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const bankDetails = 'DE56 4306 0967 1345 6779 00';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bankDetails);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & Address */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Leaf className="w-6 h-6 text-[#F8F3DF]" />
              </div>
              <span className="text-xl font-bold text-foreground">GREEN VALLEY CLUB</span>
            </div>
            <div className="flex items-start gap-3 text-muted-foreground mb-2">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p>Alexanderplatz 1</p>
                <p>10178 Berlin</p>
                <p className="text-sm mt-1">Amtsgericht Berlin VR 25753</p>
              </div>
            </div>
          </div>

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
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <link.icon className="w-4 h-4" />
                    <span className="text-sm">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mitgliedschaft / Bank Details */}
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 mt-8">
              Mitgliedschaft
            </h4>
            <div className="space-y-2">
              <p className="text-sm font-mono text-muted-foreground tracking-wider">
                {bankDetails.match(/.{1,4}/g)?.join(' ')}
              </p>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Kopiert!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
              <p className="text-xs text-muted-foreground">
                Tippe zum Kopieren
              </p>
            </div>
          </div>

          {/* Entdecken */}
          <div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Entdecken
            </h4>
            <ul className="space-y-3">
              {footerLinks.entdecken.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Rechtliches
            </h4>
            <ul className="space-y-3">
              {footerLinks.rechtliches.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Green Valley Club Berlin</span>
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
