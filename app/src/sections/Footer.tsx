import { MapPin, Mail } from 'lucide-react';

const footerLinks = {
  kontakt: [
    { label: 'info@greenvalleyclub.de', href: 'mailto:info@greenvalleyclub.de', icon: Mail },
  ],
  rechtliches: [
    { label: 'Impressum', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {/* Logo & Address */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/images/logo.svg"
              alt="Green Valley Club"
              className="h-20 w-auto object-contain mb-6"
            />
            <div className="flex items-start gap-3 text-muted-foreground mb-2">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p>Sonnenallee 14-30</p>
                <p>06766 Bitterfeld</p>
                <p>Vereinsregister Stendal: VR6882</p>
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
