export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/31612345678"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-xl transition hover:scale-110 hover:bg-green-600"
      aria-label="WhatsApp"
    >
      💬
    </a>
  );
}