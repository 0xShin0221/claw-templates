import { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { templates } from "@/data/templates";
import TemplateDetail from "@/components/TemplateDetail";

const dataDir = path.join(process.cwd(), "src/data/templates");

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const template = templates.find((t) => t.slug === params.slug);
  if (!template) return {};
  return {
    title: template.name,
    description: template.description,
    openGraph: {
      title: `${template.name} — OpenClaw Config Templates`,
      description: template.description,
    },
  };
}

export default function TemplatePage({
  params,
}: {
  params: { slug: string };
}) {
  const template = templates.find((t) => t.slug === params.slug);
  if (!template) notFound();

  const jsonPath = path.join(dataDir, `${params.slug}.json`);
  const mdPath = path.join(dataDir, `${params.slug}.md`);

  const json = fs.readFileSync(jsonPath, "utf-8");
  const markdown = fs.readFileSync(mdPath, "utf-8");

  return (
    <>
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-6"
      >
        &larr; Back to all templates
      </Link>
      <TemplateDetail
        name={template.name}
        markdown={markdown}
        json={json}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            name: template.name,
            description: template.description,
            programmingLanguage: "JSON",
            codeRepository:
              "https://github.com/digdatech/claw-templates",
          }),
        }}
      />
    </>
  );
}
