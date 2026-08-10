import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-start justify-center py-16">
      <p className="mono-label">404</p>
      <h1 className="display mt-4 text-5xl text-ink">Page not found</h1>
      <p className="mt-4 text-ink-soft">That route doesn’t exist on this site.</p>
      <Link href="/" className="btn btn-primary mt-8">
        Back home
      </Link>
    </div>
  );
}
