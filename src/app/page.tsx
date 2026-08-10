import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  activities,
  education,
  experience,
  getFeaturedProject,
  projects,
  site,
  skills,
} from "@/content/site";

const findings = [
  {
    value: "+7.6 dB",
    label: "Protocol recovery",
    detail: "Full-T sampling vs truncated reverse chain",
  },
  {
    value: "−2.7 dB",
    label: "Conditioned resampling",
    detail: "Higher r can hurt mask-conditioned models",
  },
  {
    value: "+2.2 dB",
    label: "Unconditional resampling",
    detail: "Same hyperparameter helps the other regime",
  },
] as const;

export default function HomePage() {
  const featured = getFeaturedProject();
  const more = projects.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container grid min-h-[calc(100vh-4.5rem)] items-end gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-20">
          <div>
            <p className="mono-label fade-up">Portfolio</p>
            <h1 className="display fade-up fade-up-delay-1 mt-5 text-[clamp(3.8rem,12vw,7.5rem)] text-ink">
              <span className="block">Hussein</span>
              <span className="block">Hamouda</span>
            </h1>
            <div className="hero-line mt-8 h-px w-28 bg-accent" />
          </div>

          <div className="fade-up fade-up-delay-2 max-w-md lg:justify-self-end">
            <p className="text-lg leading-relaxed text-ink-soft sm:text-xl">
              {site.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="btn btn-primary"
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <a
                className="btn btn-ghost"
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="btn btn-ghost"
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a className="btn btn-ghost" href={`mailto:${site.email}`}>
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-block container">
        <SectionHeading
          title="Projects"
          action={
            <Link
              href="/projects/"
              className="link-underline text-sm font-semibold text-accent"
            >
              All projects →
            </Link>
          }
        />

        <article className="project-row !border-t-ink">
          <p className="mono-label pt-1 text-[0.68rem]">{featured.category}</p>
          <div>
            <h3 className="display text-[1.55rem] leading-tight text-ink sm:text-[1.9rem]">
              <Link
                href={`/projects/${featured.slug}/`}
                className="transition-colors hover:text-accent"
              >
                {featured.title}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-muted">{featured.subtitle}</p>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-ink-soft">
            {featured.summary}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold md:justify-end">
            <Link
              href={`/projects/${featured.slug}/`}
              className="link-underline text-accent"
            >
              Details
            </Link>
            {featured.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-ink-soft"
              >
                {link.label}
              </a>
            ))}
          </div>
        </article>

        <div className="mt-2 grid gap-6 border-b border-line py-8 sm:grid-cols-3">
          {findings.map((item) => (
            <div key={item.label}>
              <p className="display text-3xl text-ink">{item.value}</p>
              <p className="mt-2 text-sm font-semibold text-accent">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <div>
          {more.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="experience" className="section-block container">
        <SectionHeading title="Experience" />

        <div className="timeline">
          {experience.map((job) => (
            <article key={`${job.org}-${job.title}`} className="timeline-item">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="display text-2xl text-ink sm:text-3xl">
                    {job.title}
                  </h3>
                  <p className="mt-1 font-medium text-accent">{job.org}</p>
                </div>
                <p className="mono-label !normal-case !tracking-normal text-muted">
                  {job.dates}
                </p>
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

        <div className="mt-14 border-t border-line pt-10">
          <h3 className="display text-2xl text-ink">Activities</h3>
          <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {activities.map((item) => (
              <div key={`${item.title}-${item.role}`}>
                <p className="font-semibold text-ink">{item.title}</p>
                <p className="mt-1 text-sm text-accent">{item.role}</p>
                <p className="mt-1 text-sm text-muted">{item.dates}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section-block container">
        <SectionHeading title="Education" />

        <div className="grid gap-10 lg:grid-cols-2">
          {education.map((edu) => (
            <article key={edu.school} className="border-t border-ink pt-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="display text-3xl text-ink">{edu.school}</h3>
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
      </section>

      <section id="skills" className="section-block container pb-24">
        <SectionHeading title="Skills" />

        <div className="divide-y divide-line border-y border-line">
          {skills.map((group) => (
            <div
              key={group.group}
              className="grid gap-3 py-5 md:grid-cols-[14rem_1fr] md:gap-10"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">
                {group.group}
              </h3>
              <p className="text-base leading-relaxed text-ink-soft">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
