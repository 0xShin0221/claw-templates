"use client";

const channels = ["Telegram", "Discord", "WhatsApp"];
const models = ["Claude Sonnet", "Claude Haiku", "Ollama (Local)"];
const useCases = [
  "chatbot",
  "assistant",
  "development",
  "business",
  "smart-home",
  "privacy",
];

export default function FilterBar({
  activeFilters,
  onToggle,
}: {
  activeFilters: Set<string>;
  onToggle: (filter: string) => void;
}) {
  const pill = (label: string) => {
    const active = activeFilters.has(label);
    return (
      <button
        key={label}
        onClick={() => onToggle(label)}
        className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
          active
            ? "border-blue-500 bg-blue-500/10 text-blue-400"
            : "border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-500"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 self-center mr-1">
          Channel
        </span>
        {channels.map(pill)}
        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 self-center ml-3 mr-1">
          Model
        </span>
        {models.map(pill)}
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 self-center mr-1">
          Use case
        </span>
        {useCases.map(pill)}
      </div>
    </div>
  );
}
