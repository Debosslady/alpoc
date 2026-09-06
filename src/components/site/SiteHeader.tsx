"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks } from "./data";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md shadow-card"
          : "bg-background/70 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8">
        {/* Logo → Home */}
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <img
            src="/alpoc-logo.png"
            alt="ALPOC company logo"
            width={48}
            height={48}
            className="h-11 w-11 shrink-0 rounded-md object-contain"
          />
          <span className="min-w-0">
            <span className="block truncate text-base font-bold tracking-tight text-primary">
              A L P O C
            </span>
            <span className="hidden truncate text-[6px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Petroleum Optimization
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Button asChild variant="accent" className="hidden sm:inline-flex">
            <Link href="#contact">Talk to Us</Link>
          </Button>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-primary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="border-t border-border bg-background px-5 pb-5 pt-2 lg:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-secondary hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <Button asChild variant="accent" className="mt-3 w-full">
            <Link href="?contact" onClick={() => setOpen(false)}>
              Talk to Us
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}


// "use client";

// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import logo from "@/assets/alpoc-logo.png";
// import { navLinks } from "./data";

// export function SiteHeader() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 16);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={cn(
//         "fixed inset-x-0 top-0 z-50 transition-all duration-300",
//         scrolled
//           ? "border-b border-border bg-background/90 backdrop-blur-md shadow-card"
//           : "bg-background/70 backdrop-blur-sm",
//       )}
//     >
//       <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8">
//         <a href="#home" className="flex min-w-0 items-center gap-3">
//           <img
//             src= "/alpoc-logo.png"
//             alt="ALPOC company logo"
//             width={48}
//             height={48}
//             className="h-11 w-11 shrink-0 rounded-md object-contain"
//           />
//           <span className="min-w-0">
//             <span className="block truncate text-base font-bold tracking-tight text-primary">
//               ALPOC
//             </span>
//             <span className="hidden truncate text-[6px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
//               Petroleum Optimization
//             </span>
//           </span>
//         </a>

//         <div className="flex items-center gap-2">
//           <nav className="hidden items-center gap-1 lg:flex">
//             {navLinks.map((l) => (
//               <a
//                 key={l.href}
//                 href={l.href}
//                 className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
//               >
//                 {l.label}
//               </a>
//             ))}
//           </nav>
//           <Button asChild variant="accent" className="hidden sm:inline-flex">
//             <a href="#contact">Talk to Us</a>
//           </Button>
//           <button
//             type="button"
//             aria-label={open ? "Close menu" : "Open menu"}
//             aria-expanded={open}
//             onClick={() => setOpen((v) => !v)}
//             className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-primary lg:hidden"
//           >
//             {open ? <X className="size-5" /> : <Menu className="size-5" />}
//           </button>
//         </div>
//       </div>

//       {open && (
//         <nav className="border-t border-border bg-background px-5 pb-5 pt-2 lg:hidden">
//           {navLinks.map((l) => (
//             <a
//               key={l.href}
//               href={l.href}
//               onClick={() => setOpen(false)}
//               className="block rounded-md px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-secondary hover:text-primary"
//             >
//               {l.label}
//             </a>
//           ))}
//           <Button asChild variant="accent" className="mt-3 w-full">
//             <a href="#contact" onClick={() => setOpen(false)}>
//               Talk to Us
//             </a>
//           </Button>
//         </nav>
//       )}
//     </header>
//   );
// }
