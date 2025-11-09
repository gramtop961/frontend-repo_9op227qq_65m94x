import React from 'react';
import { Code2, Server, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          I’m a full‑stack developer focused on shipping fast, maintainable software.
          I design APIs, craft resilient services, and deliver pixel‑perfect interfaces.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border bg-background p-6 shadow-sm">
          <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
            <Code2 className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold">Frontend</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            React, TypeScript, Tailwind, animations, accessibility, and design systems.
          </p>
        </div>
        <div className="rounded-2xl border bg-background p-6 shadow-sm">
          <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
            <Server className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold">Backend</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            FastAPI, Node, databases, authentication, testing, and observability.
          </p>
        </div>
        <div className="rounded-2xl border bg-background p-6 shadow-sm">
          <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold">Values</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Clean code, thoughtful UX, performance, and a playful, modern feel.
          </p>
        </div>
      </div>
    </section>
  );
}
