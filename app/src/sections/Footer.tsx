import { Mail, Instagram } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const footerLinks = {
  kontakt: [
    { label: 'info@greenvalleyclub.de', href: 'mailto:info@greenvalleyclub.de', icon: Mail },
    { label: '@greenvalley.gvc', href: 'https://www.instagram.com/greenvalley.gvc/', icon: Instagram },
  ],
  rechtliches: [{ label: 'Datenschutz', href: '/datenschutz' }],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 gap-10 lg:gap-8">
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
