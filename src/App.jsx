import React from 'react';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-background text-foreground">
      <Hero3D />
      <About />
      <Projects />
      <Contact />
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Full‑Stack Developer — Built with care.
      </footer>
    </div>
  );
}
