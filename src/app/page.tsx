import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          OpenClaw Config Templates
        </h1>
        <p className="mt-2 text-zinc-500 max-w-2xl">
          Ready-to-use openclaw.json configurations for common use cases. Pick a
          template, replace the placeholder keys, and deploy.
        </p>
      </div>
      <Gallery />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "OpenClaw Config Templates",
            description:
              "A curated library of ready-to-use openclaw.json configuration templates.",
            url: "https://claw-templates.vercel.app",
          }),
        }}
      />
    </>
  );
}
