"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Message = {
  sender: "bot" | "user";
  text: string;
};

type QuoteStep =
  | "idle"
  | "name"
  | "email"
  | "phone"
  | "service"
  | "description"
  | "sending"
  | "done";

type QuoteData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  description: string;
};

type ChatbotProps = {
  onOpenChange?: (open: boolean) => void;
};

export default function Chatbot({
  onOpenChange,
}: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [previousResponseId, setPreviousResponseId] = useState<string | null>(
    null
  );

  const [quoteStep, setQuoteStep] = useState<QuoteStep>("idle");

  const [quoteData, setQuoteData] = useState<QuoteData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
  });

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hoi! 👋 Welkom bij AMR IT Solutions. Waarmee kan ik je helpen?",
    },
  ]);

  const chatAreaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const chatArea = chatAreaRef.current;

    if (!chatArea) return;

    chatArea.scrollTop = chatArea.scrollHeight;
  }, [messages, loading, quoteStep]);

  function addBotMessage(text: string) {
    setMessages((current) => [
      ...current,
      {
        sender: "bot",
        text,
      },
    ]);
  }

  function addUserMessage(text: string) {
    setMessages((current) => [
      ...current,
      {
        sender: "user",
        text,
      },
    ]);
  }

  function startQuote() {
    setQuoteData({
      name: "",
      email: "",
      phone: "",
      service: "",
      description: "",
    });

    setQuoteStep("name");

    addUserMessage("Ik wil graag een offerte aanvragen");

    addBotMessage(
  "Natuurlijk! Ik stel je een paar korte vragen. Je gegevens worden alleen gebruikt om je aanvraag te behandelen. Wat is je naam?"
);
  }

  async function askAI(message: string) {
    addUserMessage(message);

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          previousResponseId,
        }),
      });

      const text = await response.text();

      let data;

      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("De server gaf een ongeldig antwoord.");
      }

      if (!response.ok) {
        throw new Error(data.error || "Er ging iets mis.");
      }

      if (!data.answer) {
        throw new Error("De AI gaf geen antwoord.");
      }

      addBotMessage(data.answer);

      if (data.responseId) {
        setPreviousResponseId(data.responseId);
      }
    } catch (error) {
      console.error("Chatfout:", error);

      addBotMessage(
        "Sorry, er ging iets mis met de AI-assistent. Probeer het straks opnieuw."
      );
    } finally {
      setLoading(false);
    }
  }

  async function sendQuote(data: QuoteData) {
    setQuoteStep("sending");

    addBotMessage("Momentje, ik verstuur je aanvraag...");

    try {
      const response = await fetch("/api/chat-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const text = await response.text();

      let result;

      try {
        result = JSON.parse(text);
      } catch {
        throw new Error("De server gaf een ongeldig antwoord.");
      }

      if (!response.ok) {
        throw new Error(
          result.message || "De aanvraag kon niet worden verzonden."
        );
      }

      setQuoteStep("done");

      addBotMessage(
        `Bedankt ${data.name}! ✅ Je offerteaanvraag is verzonden naar AMR IT Solutions. We nemen zo snel mogelijk contact met je op.`
      );
    } catch (error) {
      console.error("Offertefout:", error);

      setQuoteStep("description");

      addBotMessage(
        "Het verzenden is helaas niet gelukt. Probeer het nog een keer of neem rechtstreeks contact op met AMR IT Solutions."
      );
    }
  }

  async function handleQuoteAnswer(message: string) {
    addUserMessage(message);

    if (quoteStep === "name") {
      setQuoteData((current) => ({
        ...current,
        name: message,
      }));

      setQuoteStep("email");

      addBotMessage("Dank je. Wat is je e-mailadres?");

      return;
    }

    if (quoteStep === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(message)) {
        addBotMessage(
          "Dat lijkt geen geldig e-mailadres. Probeer bijvoorbeeld naam@voorbeeld.nl."
        );

        return;
      }

      setQuoteData((current) => ({
        ...current,
        email: message,
      }));

      setQuoteStep("phone");

      addBotMessage(
        "Wat is je telefoonnummer? Typ 'overslaan' als je dat liever niet opgeeft."
      );

      return;
    }

    if (quoteStep === "phone") {
      setQuoteData((current) => ({
        ...current,
        phone:
          message.toLowerCase() === "overslaan"
            ? ""
            : message,
      }));

      setQuoteStep("service");

      addBotMessage(
        "Waarvoor wil je een offerte? Bijvoorbeeld computerhulp, Microsoft 365 of een website."
      );

      return;
    }

    if (quoteStep === "service") {
      setQuoteData((current) => ({
        ...current,
        service: message,
      }));

      setQuoteStep("description");

      addBotMessage(
        "Kun je kort omschrijven wat je precies nodig hebt?"
      );

      return;
    }

    if (quoteStep === "description") {
      const completedData: QuoteData = {
        ...quoteData,
        description: message,
      };

      setQuoteData(completedData);

      await sendQuote(completedData);
    }
  }

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = input.trim();

    if (!message) return;
    if (loading) return;
    if (quoteStep === "sending") return;

    setInput("");

    if (
      quoteStep === "name" ||
      quoteStep === "email" ||
      quoteStep === "phone" ||
      quoteStep === "service" ||
      quoteStep === "description"
    ) {
      await handleQuoteAnswer(message);

      return;
    }

    await askAI(message);
  }

  async function quickQuestion(question: string) {
    if (loading) return;
    if (quoteStep === "sending") return;

    if (question === "offerte") {
      startQuote();

      return;
    }

    await askAI(question);
  }

  function resetChat() {
    setPreviousResponseId(null);
    setQuoteStep("idle");
    setInput("");
    setLoading(false);

    setQuoteData({
      name: "",
      email: "",
      phone: "",
      service: "",
      description: "",
    });

    setMessages([
      {
        sender: "bot",
        text: "Hoi! 👋 Welkom bij AMR IT Solutions. Waarmee kan ik je helpen?",
      },
    ]);
  }

  const inputPlaceholder = () => {
    if (quoteStep === "name") {
      return "Typ je naam...";
    }

    if (quoteStep === "email") {
      return "Typ je e-mailadres...";
    }

    if (quoteStep === "phone") {
      return "Typ je telefoonnummer...";
    }

    if (quoteStep === "service") {
      return "Welke dienst?";
    }

    if (quoteStep === "description") {
      return "Omschrijf je aanvraag...";
    }

    if (quoteStep === "sending") {
      return "Aanvraag wordt verzonden...";
    }

    return "Typ je vraag...";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 flex h-[520px] w-[360px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-slate-900 px-5 py-4 text-white">
            <div>
              <p className="font-semibold">
                AMR Assistent
              </p>

              <p className="text-xs text-gray-300">
                Online hulp van AMR IT Solutions
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={resetChat}
                className="text-xs text-gray-300 transition hover:text-white"
              >
                Nieuw
              </button>

              <button
                type="button"
                onClick={() => {
  setIsOpen(false);
  onOpenChange?.(false);
}}
                aria-label="Chat sluiten"
                className="text-2xl leading-none text-white"
              >
                ×
              </button>
            </div>
          </div>

          <div
            ref={chatAreaRef}
            className="flex-1 overflow-y-auto bg-gray-50 p-4"
          >
            <div className="space-y-3">
              {messages.map((message, index) => (
                <div
                  key={`${message.sender}-${index}`}
                  className={
                    message.sender === "user"
                      ? "ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-blue-600 px-4 py-3 text-sm leading-relaxed text-white"
                      : "mr-auto max-w-[85%] rounded-2xl rounded-bl-md bg-white px-4 py-3 text-sm leading-relaxed text-gray-800 shadow-sm"
                  }
                >
                  {message.text}
                </div>
              ))}

              {loading && (
                <div className="mr-auto flex w-fit items-center gap-1 rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />

                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />

                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                </div>
              )}
            </div>
          </div>

          <div className="border-t bg-white p-3">
            {quoteStep === "idle" && (
              <>
                <p className="mb-2 text-xs font-medium text-gray-500">
                  Kies een onderwerp:
                </p>

                <div className="mb-3 flex flex-wrap gap-2">
                  <button
                    type="button"
                    disabled={loading}
                    onClick={() =>
                      quickQuestion(
                        "Ik heb een computer- of laptopprobleem"
                      )
                    }
                    className="rounded-full border px-3 py-1.5 text-xs transition hover:bg-gray-100 disabled:opacity-50"
                  >
                    💻 Computerhulp
                  </button>

                  <button
                    type="button"
                    disabled={loading}
                    onClick={() =>
                      quickQuestion(
                        "Ik wil een website laten maken"
                      )
                    }
                    className="rounded-full border px-3 py-1.5 text-xs transition hover:bg-gray-100 disabled:opacity-50"
                  >
                    🌐 Website
                  </button>

                  <button
                    type="button"
                    disabled={loading}
                    onClick={() =>
                      quickQuestion(
                        "Ik heb hulp nodig met Microsoft 365"
                      )
                    }
                    className="rounded-full border px-3 py-1.5 text-xs transition hover:bg-gray-100 disabled:opacity-50"
                  >
                    ☁️ Microsoft 365
                  </button>

                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => quickQuestion("offerte")}
                    className="rounded-full border px-3 py-1.5 text-xs transition hover:bg-gray-100 disabled:opacity-50"
                  >
                    📩 Offerte
                  </button>
                </div>
              </>
            )}

            {quoteStep === "done" && (
              <div className="mb-3 rounded-xl bg-green-50 px-3 py-2 text-xs text-green-800">
                ✅ Offerteaanvraag verzonden
              </div>
            )}

            <form
              onSubmit={sendMessage}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                placeholder={inputPlaceholder()}
                disabled={
                  loading ||
                  quoteStep === "sending"
                }
                maxLength={500}
                autoComplete="off"
                className="min-w-0 flex-1 rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 disabled:bg-gray-100"
              />

              <button
                type="submit"
                disabled={
                  loading ||
                  !input.trim() ||
                  quoteStep === "sending"
                }
                className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Stuur
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => {
  setIsOpen((current) => {
    const next = !current;
    onOpenChange?.(next);
    return next;
  });
}}
        aria-label={
          isOpen ? "Chat sluiten" : "Chat openen"
        }
        className="ml-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl text-white shadow-xl transition hover:scale-105 hover:bg-blue-700"
      >
        {isOpen ? "×" : "💬"}
      </button>
    </div>
  );
}