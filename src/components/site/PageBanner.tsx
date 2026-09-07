export function PageBanner({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-primary">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary to-brand-navy" />
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-32 lg:px-8 lg:pb-20 lg:pt-40">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-sky">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
          {intro}
        </p>
      </div>
      <div className="h-1.5 w-full bg-gradient-to-r from-brand-red via-brand-blue to-brand-green" />
    </section>
  );
}
