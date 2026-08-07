"use client";

import { useState } from "react";

import Chatbot from "@/components/Chatbot";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function FloatingContact() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <WhatsAppButton hidden={chatOpen} />

      <Chatbot onOpenChange={setChatOpen} />
    </>
  );
}