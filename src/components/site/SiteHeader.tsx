"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "./data";

// `trailingSlash: true` in next.config makes pathnames come back as "/about/",
// so strip trailing slashes before comparing against nav hrefs.
function normalizePath(path: string) {
  return path.replace(/\/+$/, "") || "/";
}

function isActivePath(pathname: string, href: string) {
  const current = normalizePath(pathname);
  const target = normalizePath(href);
  if (target === "/") return current === "/";
  return current === target || current.startsWith(`${target}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 shadow-card backdrop-blur-md"
          : "bg-background/70 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <img
            src="/alpoc-logo.png"
            alt="ALPOC company logo"
            width={48}
            height={48}
            className="h-11 w-11 shrink-0 rounded-md object-contain"
          />
          <span className="min-w-0">
            <span className="block truncate text-base font-bold tracking-[0.3em] text-primary">
              ALPOC
            </span>
            <span className="hidden truncate text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Petroleum Optimization
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => {
              const active = isActivePath(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    "after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-brand-red after:transition-transform after:duration-300",
                    active
                      ? "text-primary after:scale-x-100"
                      : "text-foreground/80 after:scale-x-0 hover:bg-secondary hover:text-primary",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <Button asChild variant="accent" className="hidden sm:inline-flex">
            <Link href="/contact">Talk to Us</Link>
          </Button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-primary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-border bg-background px-5 pb-5 pt-2 lg:hidden"
        >
          {navLinks.map((l) => {
            const active = isActivePath(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-md border-l-2 px-3 py-3 text-sm font-medium transition-colors",
                  active
                    ? "border-brand-red bg-secondary text-primary"
                    : "border-transparent text-foreground/85 hover:bg-secondary hover:text-primary",
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <Button asChild variant="accent" className="mt-3 w-full">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Talk to Us
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
