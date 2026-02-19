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
