"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/content/site";

function isCurrent(pathname: string, match: string) {
  if (match === "/") return pathname === "/";
  return pathname === match || pathname.startsWith(`${match}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[rgba(246,247,249,0.78)] backdrop-blur-xl">
      <div className="container flex items-center justify-between gap-4 py-4">
        <Link
          href="/"
          className="display text-[1.35rem] text-ink transition-colors hover:text-accent"
          onClick={() => setOpen(false)}
        >
          {site.shortName}
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const current = isCurrent(pathname, item.match);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className="link-underline text-[0.84rem] font-medium text-ink-soft"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/70 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1.5">
            <span
              className={`block h-px bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px bg-ink transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-white/95 md:hidden"
          aria-label="Mobile"
        >
          <div className="container flex flex-col gap-1 py-3">
            {nav.map((item) => {
              const current = isCurrent(pathname, item.match);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-accent-soft hover:text-accent-deep"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
