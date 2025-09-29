import Image from "next/image";
import Link from "next/link";
import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon } from "@radix-ui/react-icons";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AnimatedLogo from "@/components/AnimatedLogo";
import { cn } from "@/lib/utils";

function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <a id="top" className="sr-only" aria-hidden="true" />
      <Navbar />
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-min.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero content */}
      <main className="relative z-10 h-screen w-full">
            <div className="mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center text-white">
              {/* Animated logo that transitions from navbar */}
              <AnimatedLogo className="fade-in-up w-44 h-44 sm:w-48 sm:h-48" width={180} height={180} />
          <h1 className="fade-in-up text-4xl font-extrabold tracking-tight leading-tight sm:text-5xl md:text-6xl sm:leading-tight md:leading-tight">
            Your Trusted Home Watchers in Oakland Township
          </h1>
          <p className="fade-in-up delay-150 mt-6 max-w-3xl text-base leading-relaxed sm:text-lg md:text-xl text-white/90 sm:leading-relaxed md:leading-relaxed">
            Husband-and-wife team providing reliable home-watching while you’re away. Photo reports after every visit. Emergency alerts if something’s wrong.
          </p>
          <div className="fade-in-up delay-300 mt-10 flex flex-col gap-4 w-full max-w-sm sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-[color:var(--brand-on-primary)] shadow-md transition-all focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [background:var(--btn-primary-gradient)] hover:brightness-110 hover:shadow-lg w-full sm:w-auto"
                >
                  Contact Us
                </a>
          <a
              href="#learn-more"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-all focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [background:color-mix(in_oklab,_var(--brand-primary)_22%,_transparent)] hover:[background:var(--btn-primary-gradient)] hover:shadow-lg w-full sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </main>

      {/* Subtle gradient edges for polish */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent" />
    </div>
  );
}

function ServiceBox({ icon, title, description }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--btn-primary-gradient)] text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      {description && (
        <p className="mt-2 text-gray-700 leading-relaxed">{description}</p>
      )}
    </div>
  );
}

function ProjectsSection() {
  const services = [
    {
      icon: <FileTextIcon className="h-5 w-5" />,
      title: "Photo Reports",
      description: "Detailed, time‑stamped photos and clear notes after every visit. We check the interior (leaks, HVAC, appliances, doors/windows) and the exterior (perimeter, packages, visible damage) and call out issues with next‑step recommendations.",
    },
    {
      icon: <BellIcon className="h-5 w-5" />,
      title: "Emergency Alerts & Coordination",
      description: "Immediate text or call if we detect a problem. With your approval, we coordinate with your preferred vendors (or ours), meet contractors, and provide access so issues get handled fast.",
    },
    {
      icon: <CalendarIcon className="h-5 w-5" />,
      title: "Flexible Plans",
      description: "Pay‑per‑visit or discounted membership with weekly, biweekly, or custom schedules. Add on‑demand storm checks anytime and pause or adjust whenever you need.",
    },
    {
      icon: <GlobeIcon className="h-5 w-5" />,
      title: "Local & Reliable",
      description: "We’re Oakland Township residents with a small service radius for quick response and consistent care—like having trusted neighbors on call. Respectful, discreet, and detail‑oriented.",
    },
  ];

  return (
    <section id="learn-more" className="relative w-full bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-[color:var(--brand-primary)] uppercase tracking-wider mb-4">
            What We Do
          </p>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">Home Watching Services</h2>
          <p className="mt-3 text-lg text-gray-600">Like having trusted neighbors on call while you’re away.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <ServiceBox key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section id="founder" className="relative w-full bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold text-[color:var(--brand-primary)] uppercase tracking-wider mb-4">
            Why Us
          </p>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            Meet Nick & Jenny
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Caring, reliable, and community‑focused. Small service radius so we treat your home like our own.
          </p>
        </div>
        <div className="grid gap-10 items-center md:grid-cols-2">
          <div className="order-2 md:order-1">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We’re Nick and Jenny—Oakland Township residents who run a small, family‑owned home‑watching service. We keep a tight service radius so we can respond quickly and treat your home like our own.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              Each visit includes an interior and exterior check with time‑stamped photo reports. If something needs attention, we alert you right away and can coordinate vendors. Flexible plans or pay‑per‑visit—always transparent pricing.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black [background:var(--btn-primary-gradient)] hover:brightness-110 hover:shadow-lg"
            >
              About Nick & Jenny
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/secondary.jpg"
                alt="Oakland Township residents Nick and Jenny"
                width={800}
                height={600}
                className="h-96 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="relative w-full bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-[color:var(--brand-primary)] uppercase tracking-wider mb-4">
            Pricing
          </p>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">Pricing & Membership</h2>
          <p className="mt-3 text-lg text-gray-600">Flexible plans or pay‑per‑visit — always transparent.</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--btn-primary-gradient)]">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Pay Per Visit</h3>
            <p className="mt-2 text-gray-600">Only pay when we visit. Choose weekly, biweekly, or ad‑hoc storm checks.</p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--btn-primary-gradient)]">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Flexible Membership</h3>
            <p className="mt-2 text-gray-600">Discounted recurring visits with easy auto‑pay. Pause or adjust anytime.</p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--btn-primary-gradient)]">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Transparent & Fair</h3>
            <p className="mt-2 text-gray-600">Clear per‑visit rates and add‑ons up front. No hidden fees.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProjectsSection />
      <FounderSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
