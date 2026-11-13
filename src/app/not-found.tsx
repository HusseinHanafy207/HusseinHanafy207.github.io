import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container py-16">
      <h1 className="text-2xl font-bold text-ink">Page not found</h1>
      <p className="mt-3 text-ink-soft">That page does not exist.</p>
      <p className="mt-4">
        <Link href="/">Back home</Link>
      </p>
    </div>
  );
}
