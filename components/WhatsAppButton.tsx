import { MessageCircle } from "lucide-react";

const whatsappUrl =
  "https://wa.me/31649718684?text=Hallo%20AMR%20IT%20Solutions%2C%20ik%20heb%20een%20vraag%20over%20jullie%20diensten.";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat met AMR IT Solutions via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:shadow-2xl"
    >
      <MessageCircle className="h-8 w-8" strokeWidth={2.4} />
    </a>
  );
}