import { WHATSAPP_URL } from "@/lib/whatsapp";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="h-9 w-9"
      fill="currentColor"
    >
      <path d="M16.02 3C8.84 3 3 8.71 3 15.74c0 2.45.72 4.84 2.08 6.88L3 29l6.6-2.04a13.16 13.16 0 0 0 6.41 1.65h.01C23.2 28.61 29 22.9 29 15.87 29 8.84 23.2 3 16.02 3Zm0 23.45h-.01a10.9 10.9 0 0 1-5.54-1.49l-.4-.24-3.92 1.21 1.05-3.75-.26-.39a10.56 10.56 0 0 1-1.67-5.72c0-5.85 4.83-10.61 10.77-10.61 5.94 0 10.77 4.76 10.77 10.61 0 5.85-4.83 10.38-10.79 10.38Zm5.9-7.78c-.32-.16-1.91-.93-2.21-1.04-.3-.1-.52-.16-.74.16-.22.32-.85 1.04-1.04 1.25-.19.21-.38.24-.71.08-.32-.16-1.36-.49-2.59-1.57-.96-.83-1.61-1.86-1.8-2.18-.19-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.19.22-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.74-1.76-1.01-2.41-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.4-.3.32-1.14 1.1-1.14 2.68 0 1.58 1.17 3.11 1.33 3.32.16.21 2.3 3.45 5.57 4.84.78.33 1.39.53 1.86.68.78.24 1.49.21 2.05.13.63-.09 1.91-.77 2.18-1.51.27-.74.27-1.38.19-1.51-.08-.13-.3-.21-.62-.37Z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat met AMR IT Solutions via WhatsApp"
      title="Chat via WhatsApp"
      className="
        fixed bottom-5 right-5 z-50
        flex h-16 w-16 items-center justify-center
        rounded-full bg-[#25D366] text-white
        shadow-[0_14px_35px_rgba(37,211,102,0.38)]
        transition duration-300
        hover:-translate-y-1 hover:scale-105
        hover:bg-[#20bd5a]
        hover:shadow-[0_18px_42px_rgba(37,211,102,0.48)]
        focus-visible:outline-none
        focus-visible:ring-4
        focus-visible:ring-green-300
        active:scale-95
        sm:bottom-6 sm:right-6
      "
    >
      <WhatsAppIcon />
    </a>
  );
}