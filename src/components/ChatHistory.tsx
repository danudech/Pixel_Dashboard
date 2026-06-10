import { useEffect, useRef } from "react";

type ChatHistoryProps = {
  messages: string[];
};

export function ChatHistory({ messages }: ChatHistoryProps) {
  const rowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    rowsRef.current?.scrollTo({
      top: rowsRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <aside className="chatHistoryPanel" aria-label="ประวัติข้อความ">
      <div className="chatHistoryTitle">ประวัติข้อความ</div>
      <div className="chatRows" ref={rowsRef} aria-live="polite">
        {messages.map((row) => (
          <div key={row}>{row}</div>
        ))}
      </div>
    </aside>
  );
}
