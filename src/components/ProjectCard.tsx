import Link from "next/link";
import type { Project } from "@/content/site";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const hasDetail = Boolean(project.detail);

  return (
    <article className="project-row">
      <p className="mono-label pt-1 text-[0.68rem]">{project.category}</p>

      <div>
        <h3 className="display text-[1.55rem] leading-tight text-ink sm:text-[1.75rem]">
          {hasDetail ? (
            <Link
              href={`/projects/${project.slug}/`}
              className="transition-colors hover:text-accent"
            >
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
      </div>

      <p className="max-w-xl text-sm leading-relaxed text-ink-soft">
        {project.summary}
      </p>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold md:justify-end">
        {hasDetail ? (
          <Link
            href={`/projects/${project.slug}/`}
            className="link-underline text-accent"
          >
            Details
          </Link>
        ) : null}
        {project.links.map((link) => (
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
  );
}
