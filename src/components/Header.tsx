"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="container flex items-center justify-between gap-4 py-3.5">
        <Link
          href="/#top"
          className="text-[0.95rem] font-bold tracking-tight text-ink no-underline hover:no-underline hover:text-link"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1">
            <span className="block h-px bg-ink" />
            <span className="block h-px bg-ink" />
            <span className="block h-px bg-ink" />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-white md:hidden"
          aria-label="Mobile"
        >
          <div className="container flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded px-2 py-2 text-sm"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
