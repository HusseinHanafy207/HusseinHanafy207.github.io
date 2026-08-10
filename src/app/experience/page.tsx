import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { activities, experience } from "@/content/site";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <div className="container py-14 sm:py-16">
      <SectionHeading title="Experience" />

      <div className="timeline">
        {experience.map((job) => (
          <article key={`${job.org}-${job.title}`} className="timeline-item">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h2 className="display text-2xl text-ink sm:text-3xl">
                  {job.title}
                </h2>
                <p className="mt-1 font-medium text-accent">{job.org}</p>
              </div>
              <p className="text-sm text-muted">{job.dates}</p>
            </div>
            <ul className="mt-4 max-w-3xl space-y-2 text-ink-soft">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="mt-16 border-t border-line pt-10">
        <h3 className="display text-2xl text-ink">Activities</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {activities.map((item) => (
            <div key={`${item.title}-${item.role}`}>
              <p className="font-semibold text-ink">{item.title}</p>
              <p className="mt-1 text-sm text-accent">{item.role}</p>
              <p className="mt-1 text-sm text-muted">{item.dates}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
