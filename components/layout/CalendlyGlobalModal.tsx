"use client"

import { XCircle } from "lucide-react";
import { useCalendlyModalStore } from "@/components/layout/calendlyModalStore";

function CalendlyModalGlobal() {
    const open = useCalendlyModalStore((state) => state.open);
    const closeModal = useCalendlyModalStore((state) => state.closeModal);
    if (!open) return null;
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-white/30">
        <div className="relative w-full h-full max-w-none max-h-none sm:w-[70vw] sm:h-[80vh] sm:rounded-lg bg-white/60 shadow-lg flex flex-col">
          <button
            onClick={closeModal}
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
    );
}

export default CalendlyModalGlobal;