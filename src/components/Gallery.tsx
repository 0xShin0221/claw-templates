"use client";

import { useState, useMemo } from "react";
import { templates, Template } from "@/data/templates";
import TemplateCard from "./TemplateCard";
import FilterBar from "./FilterBar";

export default function Gallery() {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

  const toggle = (filter: string) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(filter)) next.delete(filter);
      else next.add(filter);
      return next;
    });
  };

  const filtered = useMemo(() => {
    if (activeFilters.size === 0) return templates;
    const filters = Array.from(activeFilters);
    return templates.filter((t: Template) => {
      return filters.some(
        (f) =>
          t.channels.includes(f) ||
          t.model === f ||
          t.useCases.includes(f)
      );
    });
  }, [activeFilters]);

  return (
    <>
      <FilterBar activeFilters={activeFilters} onToggle={toggle} />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <TemplateCard key={t.slug} template={t} />
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-zinc-500 col-span-full text-center py-12">
            No templates match the selected filters.
          </p>
        )}
      </div>
    </>
  );
}
