import { ReactNode } from "react";
import { useCalendlyModalStore } from "./calendlyModalStore";

interface CalendlyModalProps {
  children: ReactNode;
}

export default function CalendlyModal({ children }: CalendlyModalProps) {
  const openModal = useCalendlyModalStore((state) => state.openModal);
  return (
    <span onClick={openModal} style={{ display: "inline-block" }}>
      {children}
    </span>
  );
} 