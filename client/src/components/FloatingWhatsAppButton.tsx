import { MessageCircle } from "lucide-react";
import { useWhatsApp } from "@/hooks/useWhatsApp";

/**
 * Floating WhatsApp Chat Button
 * Appears in the bottom-right corner of the page
 */
export default function FloatingWhatsAppButton() {
  const { sendQuickInquiry } = useWhatsApp();

  return (
    <button
      onClick={sendQuickInquiry}
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 animate-bounce"
      title="Chat with us on WhatsApp"
      aria-label="Open WhatsApp chat"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
