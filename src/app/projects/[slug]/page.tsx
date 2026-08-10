import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.filter((p) => p.detail).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.detail) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project?.detail) notFound();

  return (
    <article className="container py-14 sm:py-16">
      <Link
        href="/#projects"
        className="link-underline text-sm font-semibold text-accent"
      >
        ← Projects
      </Link>

      <p className="mono-label mt-10">{project.category}</p>
      <h1 className="display mt-4 max-w-4xl text-4xl text-ink sm:text-5xl md:text-6xl">
        {project.title}
      </h1>
      <p className="mt-3 text-muted">{project.subtitle}</p>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
        {project.summary}
      </p>

      <div className="mt-7 flex flex-wrap gap-4 text-sm font-semibold">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-ink"
          >
            {link.label} ↗
          </a>
        ))}
      </div>

      <div className="mt-12 grid gap-12 border-t border-line pt-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="display text-3xl text-ink">Overview</h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            {project.detail.overview}
          </p>

          <h2 className="display mt-12 text-3xl text-ink">Key findings</h2>
          <ul className="mt-5 space-y-4">
            {project.detail.findings.map((finding, i) => (
              <li key={finding} className="grid grid-cols-[auto_1fr] gap-4">
                <span className="display text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="leading-relaxed text-ink-soft">{finding}</p>
              </li>
            ))}
          </ul>
        </div>

        <aside className="space-y-8">
          <div className="border-t border-ink pt-5">
            <h2 className="mono-label">Highlights</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {project.detail.methods ? (
            <div className="border-t border-line pt-5">
              <h2 className="mono-label">Methods</h2>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                {project.detail.methods.map((method) => (
                  <li key={method}>• {method}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </div>
    </article>
  );
}
