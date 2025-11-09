import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const social = [
  { href: 'https://github.com/', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn', Icon: Linkedin },
  { href: 'mailto:hello@example.com', label: 'Email', Icon: Mail },
];

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-background/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center px-6 py-8">
        {/* Top nav */}
        <header className="mt-2 flex w-full items-center justify-between">
          <a href="#home" className="text-xl font-semibold tracking-tight text-white">
            <span className="rounded-md bg-white/10 px-2 py-1 backdrop-blur-sm">FD</span>
            <span className="ml-2 opacity-80">Full‑Stack Dev</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            <a href="#about" className="text-white/80 transition hover:text-white">About</a>
            <a href="#projects" className="text-white/80 transition hover:text-white">Projects</a>
            <a href="#contact" className="text-white/80 transition hover:text-white">Contact</a>
          </nav>
        </header>

        {/* Hero copy */}
        <div className="mt-auto grid w-full items-center gap-8 pb-16 pt-24 md:grid-cols-2">
          <div className="max-w-xl text-white">
            <p className="mb-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
              Available for freelance
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Building delightful products with clean code and playful 3D
            </h1>
            <p className="mt-4 text-white/80 md:text-lg">
              I craft robust backends, polished frontends, and interactive experiences.
              Let’s turn ideas into scalable, user‑first software.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 font-medium text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-4 py-2 font-medium text-white backdrop-blur transition hover:bg-white/20"
              >
                Get in touch
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4">
              {social.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          {/* Spacer for layout balance over the 3D scene */}
          <div className="h-[320px] md:h-[420px]" />
        </div>
      </div>
    </section>
  );
}
