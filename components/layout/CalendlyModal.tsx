import { useState, ReactNode } from "react";
import { XCircle } from "lucide-react";

interface CalendlyModalProps {
  children: ReactNode;
}

export default function CalendlyModal({ children }: CalendlyModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span onClick={() => setOpen(true)} style={{ display: "inline-block" }}>
        {children}
      </span>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-white/30">
          <div className="relative w-full h-full max-w-none max-h-none sm:w-[70vw] sm:h-[80vh] sm:rounded-lg bg-white/60 shadow-lg flex flex-col">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-black z-10"
              aria-label="Close Calendly"
            >
              <XCircle />
            </button>
            <iframe
              src="https://calendly.com/darkshipstudios/booking?embed_domain=darkship.studio&embed_type=Inline"
              className="w-full h-full rounded-b-lg border-0"
              title="Book a Session"
              allow="camera; microphone; fullscreen"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
} 