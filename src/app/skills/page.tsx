import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { skills } from "@/content/site";

export const metadata: Metadata = {
  title: "Skills",
};

export default function SkillsPage() {
  return (
    <div className="container py-14 sm:py-16">
      <SectionHeading title="Skills" />

      <div className="divide-y divide-line border-y border-line">
        {skills.map((group) => (
          <div
            key={group.group}
            className="grid gap-3 py-5 md:grid-cols-[14rem_1fr] md:gap-10"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">
              {group.group}
            </h2>
            <p className="text-base leading-relaxed text-ink-soft">
              {group.items.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
