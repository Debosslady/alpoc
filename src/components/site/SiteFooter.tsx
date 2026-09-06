import Link from "next/link";
import { navLinks } from "./data";

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-brand-red bg-primary">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)_minmax(0,1fr)]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/alpoc-logo.png"
                alt="ALPOC company logo"
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-12 rounded-md bg-primary-foreground/95 object-contain p-0.5"
              />
              <span className="text-lg font-bold text-primary-foreground">ALPOC</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Asset-Link Petroleum Optimization Company delivers integrated petroleum optimization,
              asset development and crude marketing solutions across Nigeria and sub-Saharan Africa.
            </p>
          </div>
          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold text-primary-foreground">Navigate</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-brand-sky"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="text-sm font-semibold text-primary-foreground">Contact</h3>
            <address className="mt-4 flex flex-col gap-2.5 text-sm not-italic leading-relaxed text-primary-foreground/70">
              <p>6th Floor, Landmark Towers, 5B Water Corporation Road, Victoria Island, Lagos</p>
              <p>
                <a href="tel:+23414532661" className="hover:text-brand-sky">
                  +234-1-4532661
                </a>
              </p>
              <p>
                <a href="mailto:info@asset-linkpoc.com" className="hover:text-brand-sky">
                  info@asset-linkpoc.com
                </a>
              </p>
            </address>
          </div>
        </div>
        <p className="mt-12 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60">
          © 2026 Asset-Link Petroleum Optimization Company. RC 1393662. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
