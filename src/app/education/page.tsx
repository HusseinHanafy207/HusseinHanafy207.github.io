import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { education } from "@/content/site";

export const metadata: Metadata = {
  title: "Education",
};

export default function EducationPage() {
  return (
    <div className="container py-14 sm:py-16">
      <SectionHeading title="Education" />

      <div className="grid gap-10 lg:grid-cols-2">
        {education.map((edu) => (
          <article key={edu.school} className="border-t border-ink pt-6">
            <div className="flex items-start justify-between gap-4">
              <h2 className="display text-3xl text-ink">{edu.school}</h2>
              <p className="display text-3xl text-accent">
                {edu.gpa.split(" ")[0]}
              </p>
            </div>
            <p className="mt-3 text-ink-soft">{edu.degree}</p>
            <p className="mt-2 text-sm text-muted">{edu.dates}</p>
            <p className="mt-4 text-sm font-medium text-ink">
              {edu.honors.join(" · ")}
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-muted">
              Coursework
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {edu.coursework.join(" · ")}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
