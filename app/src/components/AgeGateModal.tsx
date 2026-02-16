import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';

const AGE_VERIFIED_KEY = 'greenvalleyclub-age-verified';

function shouldShowAgeGate() {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    return localStorage.getItem(AGE_VERIFIED_KEY) !== 'true';
  } catch {
    return true;
  }
}

export default function AgeGateModal() {
  const [open, setOpen] = useState(shouldShowAgeGate);

  const handleConfirm = () => {
    try {
      localStorage.setItem(AGE_VERIFIED_KEY, 'true');
    } catch {
      // Ignore storage failures and still let the user continue.
    }
    setOpen(false);
  };

  const handleDecline = () => {
    window.location.assign('https://www.bioeg.de/');
  };

  return (
    <Dialog open={open}>
      <DialogContent
        showCloseButton={false}
        className="w-[min(92vw,560px)] border-primary/25 bg-gradient-to-b from-[#f8f4eb] via-[#f6f0e3] to-[#eee6d6] p-0 text-foreground shadow-2xl"
        onEscapeKeyDown={(event) => event.preventDefault()}
        onPointerDownOutside={(event) => event.preventDefault()}
      >
        <div className="px-6 py-8 text-center sm:px-10 sm:py-10">
          <div className="mx-auto mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/25">
            <ShieldCheck className="h-8 w-8 text-primary" aria-hidden="true" />
          </div>

          <DialogTitle className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-[48px]">
            Bist du über 21?
          </DialogTitle>

          <DialogDescription className="mx-auto mt-5 max-w-[460px] text-lg leading-relaxed text-muted-foreground sm:text-xl">
            GreenValleyClub richtet sich ausschließlich an Erwachsene und verpflichtet
            sich zu konsequentem Jugendschutz. Bitte bestätige dein Alter,
            bevor du fortfährst.
          </DialogDescription>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              type="button"
              onClick={handleConfirm}
              className="h-12 min-w-[220px] rounded-full bg-primary px-8 text-base font-bold tracking-wide text-primary-foreground uppercase hover:bg-primary/90"
            >
              Ja, ich bin über 21
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleDecline}
              className="h-12 min-w-[220px] rounded-full border-primary/35 bg-transparent px-8 text-base font-bold tracking-wide text-primary uppercase hover:bg-primary/10"
            >
              Nein
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Mehr zu unseren{' '}
            <a
              href="https://www.bzga.de/jugendschutz/"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline underline-offset-2 transition-colors hover:text-primary"
            >
              Jugendschutz-Richtlinien
            </a>
            .
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
