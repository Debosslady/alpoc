"use client";

import { useState, type FormEvent } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "./data";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  company: z.string().trim().min(2, "Please enter your company name").max(120),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  interest: z.string().trim().min(1, "Select an area of interest"),
  message: z.string().trim().min(10, "Tell us a little more (min. 10 characters)").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fieldClass =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-blue focus:ring-2 focus:ring-ring/40";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSent(true);
    form.reset();
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-card">
        <CheckCircle2 className="mx-auto size-12 text-brand-green" />
        <h3 className="mt-4 text-xl font-bold text-primary">Enquiry received</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thank you for contacting Asset-Link Petroleum Optimization Company. Our team will review
          your enquiry and respond within one business day.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setSent(false)}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="fullName" error={errors.fullName}>
          <input id="fullName" name="fullName" className={fieldClass} placeholder="Jane Okoro" />
        </Field>
        <Field label="Company Name" name="company" error={errors.company}>
          <input id="company" name="company" className={fieldClass} placeholder="Your company" />
        </Field>
        <Field label="Email Address" name="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            className={fieldClass}
            placeholder="you@company.com"
          />
        </Field>
        <Field label="Phone Number" name="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={fieldClass}
            placeholder="+234 800 000 0000"
          />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Service / Area of Interest" name="interest" error={errors.interest}>
            <select id="interest" name="interest" defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Select an area of interest
              </option>
              {services.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="General Enquiry">General Enquiry</option>
            </select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Message" name="message" error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={fieldClass}
              placeholder="Tell us about your asset, project or requirement."
            />
          </Field>
        </div>
      </div>
      <Button type="submit" variant="accent" size="lg" className="mt-6 w-full sm:w-auto">
        Submit Enquiry
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-primary">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}
