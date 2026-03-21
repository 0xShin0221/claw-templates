import Link from "next/link";
import { Template } from "@/data/templates";

const channelColors: Record<string, string> = {
  Telegram: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  Discord: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  WhatsApp: "bg-green-500/10 text-green-400 border-green-500/20",
};

const modelColors: Record<string, string> = {
  "Claude Sonnet": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Claude Haiku": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Ollama (Local)": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

export default function TemplateCard({ template }: { template: Template }) {
  return (
    <Link
      href={`/templates/${template.slug}`}
      className="group block rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 transition-all hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg"
    >
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {template.name}
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
        {template.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {template.channels.map((ch) => (
          <span
            key={ch}
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${channelColors[ch] || "bg-zinc-500/10 text-zinc-400 border-zinc-500/20"}`}
          >
            {ch}
          </span>
        ))}
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${modelColors[template.model] || "bg-zinc-500/10 text-zinc-400 border-zinc-500/20"}`}
        >
          {template.model}
        </span>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {template.useCases.map((uc) => (
          <span
            key={uc}
            className="text-xs text-zinc-500 dark:text-zinc-500"
          >
            #{uc}
          </span>
        ))}
      </div>
    </Link>
  );
}
