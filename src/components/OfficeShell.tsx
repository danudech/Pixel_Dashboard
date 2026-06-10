"use client";

import { FormEvent, useState } from "react";
import { chatRows } from "../data/office";
import { AppHeader } from "./AppHeader";
import { ChatPanel } from "./ChatPanel";
import { OfficeStage } from "./OfficeStage";

export function OfficeShell() {
  const [messages, setMessages] = useState(chatRows);
  const [draft, setDraft] = useState("");

  function handleChatSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = draft.trim();
    if (!message) {
      return;
    }

    const time = new Intl.DateTimeFormat("th-TH", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());

    setMessages((currentMessages) => [
      ...currentMessages,
      `${time} คุณ: ${message}`,
    ]);
    setDraft("");
  }

  return (
    <div className="page">
      <AppHeader />
      <OfficeStage messages={messages} />
      <ChatPanel
        draft={draft}
        onDraftChange={setDraft}
        onSubmit={handleChatSubmit}
      />
    </div>
  );
}
