import CopyButton from "./CopyButton";

export default function TemplateDetail({
  markdown,
  json,
}: {
  name?: string;
  markdown: string;
  json: string;
}) {
  return (
    <article className="max-w-3xl mx-auto">
      <div className="prose prose-zinc dark:prose-invert prose-sm max-w-none">
        <MarkdownRenderer content={markdown} />
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
          openclaw.json
        </h2>
        <div className="relative rounded-lg bg-zinc-950 border border-zinc-800 overflow-hidden">
          <CopyButton text={json} />
          <pre className="p-4 pt-12 overflow-x-auto text-sm text-zinc-300 leading-relaxed">
            <code>{json}</code>
          </pre>
        </div>
      </div>
    </article>
  );
}

function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("# ")) {
      elements.push(
        <h1
          key={i}
          className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-6 mb-4"
        >
          {line.slice(2)}
        </h1>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-6 mb-3"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*\s*[—–-]\s*(.+)$/);
      if (match) {
        elements.push(
          <div key={i} className="flex gap-2 mb-1.5 ml-4">
            <span className="text-zinc-400 mt-0.5">&#8226;</span>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                {match[1]}
              </strong>{" "}
              — {match[2]}
            </p>
          </div>
        );
      } else {
        elements.push(
          <div key={i} className="flex gap-2 mb-1.5 ml-4">
            <span className="text-zinc-400 mt-0.5">&#8226;</span>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              <InlineMarkdown text={line.slice(2)} />
            </p>
          </div>
        );
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <div key={i} className="flex gap-2 mb-1.5 ml-4">
          <span className="text-zinc-400 mt-0.5">&#8226;</span>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            <InlineMarkdown text={line.slice(2)} />
          </p>
        </div>
      );
    } else if (/^\d+\.\s/.test(line)) {
      const num = line.match(/^(\d+)\.\s(.+)$/)!;
      elements.push(
        <div key={i} className="flex gap-2 mb-1.5 ml-4">
          <span className="text-zinc-400 font-mono text-sm min-w-[1.25rem]">
            {num[1]}.
          </span>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            <InlineMarkdown text={num[2]} />
          </p>
        </div>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="h-2" />);
    } else {
      elements.push(
        <p key={i} className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">
          <InlineMarkdown text={line} />
        </p>
      );
    }
    i++;
  }

  return <>{elements}</>;
}

function InlineMarkdown({ text }: { text: string }) {
  const parts = text.split(
    /(\*\*.+?\*\*|`.+?`|\[.+?\]\(.+?\))/g
  );
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-zinc-900 dark:text-zinc-100">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={i}
              className="rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-xs font-mono text-zinc-800 dark:text-zinc-200"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        const linkMatch = part.match(/^\[(.+?)\]\((.+?)\)$/);
        if (linkMatch) {
          return (
            <a
              key={i}
              href={linkMatch[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {linkMatch[1]}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
