import React from 'react';
import { ExternalLink, Layers, ShieldCheck, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collab Board',
    desc: 'WebSockets + optimistic UI for seamless multi-user sketching and notes.',
    tags: ['React', 'FastAPI', 'WebSockets'],
    link: '#',
    Icon: Layers,
  },
  {
    title: 'Shop API & Dashboard',
    desc: 'Headless commerce API with analytics and a slick admin dashboard.',
    tags: ['FastAPI', 'MongoDB', 'Tailwind'],
    link: '#',
    Icon: ShieldCheck,
  },
  {
    title: '3D Playground',
    desc: 'Interactive 3D experiments powered by Spline and smooth motion.',
    tags: ['Spline', 'Framer Motion'],
    link: '#',
    Icon: Sparkles,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A snapshot of work spanning product builds, platform engineering, and playful UI.
          </p>
        </div>
        <a
          className="hidden rounded-lg border bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent md:inline-flex"
          href="#contact"
        >
          Let’s build something
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, desc, tags, link, Icon }) => (
          <a
            key={title}
            href={link}
            className="group relative overflow-hidden rounded-2xl border bg-background p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-2 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 inline-flex items-center text-sm text-primary">
              View project
              <ExternalLink className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(99,102,241,0.15), transparent 40%)'}} />
          </a>
        ))}
      </div>
    </section>
  );
}
