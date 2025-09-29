"use client";

import { useState } from "react";

export default function ContactSection() {
  const [mode, setMode] = useState("email"); // 'book' | 'email'

  return (
    <section id="contact" className="relative w-full bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 text-center">
          <p className="text-sm font-semibold text-[color:var(--brand-primary)] uppercase tracking-wider mb-4">
            Contact
          </p>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">Let's Talk</h2>
          <p className="mt-2 text-gray-600">Set up home-watching for your Oakland Township property.</p>
        </div>

        {/* Centered toggle under the heading */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex rounded-full bg-gray-100 p-1.5 text-sm">
            <button
              className={`rounded-full px-8 py-3 font-semibold transition ${
                mode === "email" ? "text-white [background:var(--btn-primary-gradient)]" : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setMode("email")}
              aria-pressed={mode === "email"}
            >
              Send an Email
            </button>
            <button
              className={`rounded-full px-8 py-3 font-semibold transition ${
                mode === "book" ? "text-white [background:var(--btn-primary-gradient)]" : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setMode("book")}
              aria-pressed={mode === "book"}
            >
              Book a Call
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl min-h-[360px]">

          {mode === "book" ? (
            <div className="fade-switch-enter rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-2">
                <img src="/images/contact-placeholder.jpg" alt="Book a call" className="h-48 w-full rounded-xl object-cover md:h-full" />
                <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold">Book a Call</h3>
              <p className="mt-2 text-gray-700">
                Pick a time that works for you. We’ll review your needs, set up your checklist, and schedule the first visit.
              </p>
                  <a
                    href="#book"
                    className="mt-5 inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black [background:var(--btn-primary-gradient)] hover:brightness-110 hover:shadow-lg"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <form
              className="fade-switch-enter rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We’ll get back to you shortly.");
              }}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">First name</label>
                  <input required type="text" name="firstName" autoComplete="given-name" className="w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/20" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Last name</label>
                  <input required type="text" name="lastName" autoComplete="family-name" className="w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/20" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                  <input required type="email" name="email" autoComplete="email" inputMode="email" className="w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/20" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Phone <span className="font-normal text-gray-500">(optional)</span>
                  </label>
                  <input type="tel" name="phone" autoComplete="tel" inputMode="tel" pattern="^[+0-9\-()\s]{7,}$" placeholder="(555) 123-4567" className="w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/20" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-gray-700">Message</label>
                  <textarea required name="message" rows={4} placeholder="Share travel dates, address (optional), and preferred visit frequency." className="w-full resize-none rounded-md border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/20" />
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-white [background:var(--btn-primary-gradient)] hover:brightness-110"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}


