"use client";

import { FormEvent, useState } from "react";

type ChatPanelProps = {
  draft: string;
  onDraftChange: (draft: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const emojis = [
  "😀", "😄", "😂", "🤣", "😊", "😍", "😘", "🥰",
  "😎", "🤔", "😅", "😭", "😤", "😴", "🥳", "🤩",
  "👍", "👎", "👏", "🙏", "💪", "🤝", "🙌", "👌",
  "🔥", "✨", "🎉", "✅", "❌", "⚠️", "💡", "📌",
  "🚀", "⭐", "❤️", "💛", "💚", "💙", "💜", "📝",
];

export function ChatPanel({
  draft,
  onDraftChange,
  onSubmit,
}: ChatPanelProps) {
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);

  function addEmoji(emoji: string) {
    onDraftChange(`${draft}${emoji}`);
  }

  return (
    <footer className="chatPanel">
      <div className="chatBadge">💬 คุยกับทีม</div>

      <form className="chatInput" onSubmit={onSubmit}>
        <input
          aria-label="พิมพ์ข้อความแชท"
          placeholder="พิมพ์ข้อความ..."
          value={draft}
          onChange={(event) => onDraftChange(event.target.value)}
        />
        <div className="emojiPicker">
          <button
            type="button"
            className="emojiToggle"
            aria-expanded={isEmojiOpen}
            aria-label="เลือก emoji"
            onClick={() => setIsEmojiOpen((open) => !open)}
          >
            <span>😊</span>
          </button>
          {isEmojiOpen && (
            <div className="emojiMenu" aria-label="Emoji list">
              {emojis.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => addEmoji(emoji)}
                  aria-label={`เพิ่ม ${emoji}`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}
        </div>
        <button type="submit" disabled={!draft.trim()}>
          ส่ง
        </button>
      </form>
    </footer>
  );
}
