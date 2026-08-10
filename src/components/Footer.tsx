import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line/70 bg-[rgba(255,255,255,0.35)]">
      <div className="container flex flex-col gap-4 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="display text-2xl text-ink">{site.name}</p>
          <p className="mt-2 max-w-md text-sm text-muted">{site.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm font-medium text-ink-soft">
          <a
            className="link-underline"
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a
            className="link-underline"
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="link-underline"
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="link-underline" href={`mailto:${site.email}`}>
            Email
          </a>
        </div>
      </div>
      <div className="container pb-8 text-xs text-muted">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
