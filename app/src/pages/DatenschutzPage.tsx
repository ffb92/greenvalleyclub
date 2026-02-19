import { ArrowLeft, Download, ExternalLink, Shield } from 'lucide-react';

const PDF_URL = '/pdf/Datenschutzerkl%C3%A4rung.pdf';

export default function DatenschutzPage() {
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            PDF im neuen Tab öffnen
          </a>
          <a
            href={PDF_URL}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            <Download className="w-4 h-4" />
            PDF herunterladen
          </a>
        </div>

        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <iframe
            src={PDF_URL}
            title="Datenschutzerklärung PDF"
            className="w-full h-[78vh] min-h-[600px]"
          />
        </div>
      </main>
    </div>
  );
}
