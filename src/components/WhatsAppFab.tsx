import { waLink } from "@/lib/site";

export default function WhatsAppFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book via WhatsApp"
      className="animate-pulse-ring fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3.5 text-sm font-semibold text-white shadow-lift transition-transform duration-300 hover:scale-105 sm:bottom-8 sm:right-8 sm:px-5"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16-.35.22-.65.07a8.2 8.2 0 0 1-2.4-1.48 9 9 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
        <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.84 9.84 0 0 0 4.69 1.19h.01c5.43 0 9.85-4.42 9.85-9.86A9.79 9.79 0 0 0 12.04 2zm0 17.96h-.01a8.18 8.18 0 0 1-4.16-1.14l-.3-.18-3.17.83.85-3.1-.2-.32a8.14 8.14 0 0 1-1.25-4.35 8.2 8.2 0 0 1 8.24-8.18c2.2 0 4.26.86 5.82 2.42a8.13 8.13 0 0 1 2.41 5.79 8.2 8.2 0 0 1-8.23 8.23z" />
      </svg>
      <span className="hidden sm:inline">Book via WhatsApp</span>
    </a>
  );
}
