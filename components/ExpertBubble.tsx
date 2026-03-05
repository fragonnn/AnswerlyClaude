interface ExpertBubbleProps {
  /** One or two chat messages displayed as speech bubbles */
  messages: string[];
  /** Background gradient style object for the avatar circle (fallback) */
  avatarStyle: React.CSSProperties;
  /** Image URL for the avatar photo */
  avatar?: string;
  /** If true, avatar appears on the right side */
  flip?: boolean;
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

function Avatar({ avatar, style }: { avatar?: string; style: React.CSSProperties }) {
  if (avatar) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={avatar}
        alt=""
        className="w-11 h-11 rounded-full object-cover shadow-lg shrink-0"
      />
    );
  }

  return (
    <div
      style={style}
      className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg shrink-0"
    >
      <svg
        className="w-6 h-6 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
  );
}

export default function ExpertBubble({
  messages,
  avatarStyle,
  avatar,
  flip = false,
  className = "",
  onClick,
}: ExpertBubbleProps) {
  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === "Enter" || e.key === " ") onClick(); } : undefined}
      className={`flex items-start gap-2.5 ${flip ? "flex-row-reverse" : "flex-row"} ${onClick ? "cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200" : ""} ${className}`}
    >
      <Avatar avatar={avatar} style={avatarStyle} />

      <div
        className={`flex flex-col gap-1.5 ${flip ? "items-end" : "items-start"}`}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl px-4 py-2 text-xs text-gray-700 shadow-md leading-relaxed max-w-[220px]"
          >
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}
