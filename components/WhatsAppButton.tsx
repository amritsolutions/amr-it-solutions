import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat met AMR IT Solutions via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:shadow-2xl"
    >
      <MessageCircle className="h-8 w-8" strokeWidth={2.4} />
    </a>
  );
}