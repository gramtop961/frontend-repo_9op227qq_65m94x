import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');

    if (!name || !email || !message) {
      setStatus('Please fill in all fields.');
      return;
    }

    setStatus('Thanks! Your message has been queued.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Have a project in mind or just want to say hi? Let’s connect.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border bg-background p-6 shadow-sm">
          <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
            <Mail className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold">Let’s build together</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            I’m open to freelance work, full‑time roles, and collaborations. I reply within 24–48 hours.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Email: hello@example.com</li>
            <li>• Location: Remote / Worldwide</li>
            <li>• Timezone: UTC</li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border bg-background p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm font-medium">Name</label>
              <input
                name="name"
                type="text"
                className="w-full rounded-lg border bg-background px-3 py-2 outline-none ring-offset-background focus:ring-2 focus:ring-primary"
                placeholder="Jane Doe"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                className="w-full rounded-lg border bg-background px-3 py-2 outline-none ring-offset-background focus:ring-2 focus:ring-primary"
                placeholder="jane@email.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-lg border bg-background px-3 py-2 outline-none ring-offset-background focus:ring-2 focus:ring-primary"
                placeholder="Tell me about your project..."
              />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between gap-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Send message
              <Send className="ml-2 h-4 w-4" />
            </button>
            <p className="text-sm text-muted-foreground">{status}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
