import Image from "next/image";
import Link from "next/link";
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
              <AnimatedLogo className="fade-in-up w-48 h-48 sm:w-[260px] sm:h-[260px]" width={260} height={260} />
          <h1 className="fade-in-up text-4xl font-extrabold tracking-tight leading-tight sm:text-5xl md:text-6xl sm:leading-tight md:leading-tight">
            Leap Into Quality Construction.
          </h1>
          <p className="fade-in-up delay-150 mt-6 max-w-3xl text-base leading-relaxed sm:text-lg md:text-xl text-white/90 sm:leading-relaxed md:leading-relaxed">
            Proudly serving the Jackson, Michigan area with modern contracting solutions.
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

function ServiceCard({ title, description, href }) {
  return (
    <Link href={href} className="block group">
      <div
        className={cn(
          "relative h-40 overflow-hidden rounded-2xl border bg-white text-left shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
          "border-black/10 group-hover:border-[color:var(--brand-primary)]/20"
        )}
      >
        <div className="flex h-full flex-col justify-center p-6">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[color:var(--brand-primary)] transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="h-5 w-5 text-[color:var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

function ProjectsSection() {
  const services = [
    { 
      title: "Chicken Coops", 
      description: "Custom coops designed for your flock's comfort and safety with weather-resistant materials.",
      href: "/chicken-coops" 
    },
    { 
      title: "Concrete Foundations", 
      description: "Durable, level foundations built to last with proper drainage and code compliance.",
      href: "/concrete-foundations" 
    },
    { 
      title: "Pole Barns", 
      description: "Versatile agricultural and storage buildings designed for your specific needs and budget.",
      href: "/pole-barns" 
    },
    { 
      title: "Custom Sheds", 
      description: "Beautiful storage solutions that complement your property while maximizing functionality.",
      href: "/sheds" 
    },
    { 
      title: "Flooring", 
      description: "Professional flooring installation and interior improvements with meticulous attention to detail.",
      href: "/flooring" 
    },
    { 
      title: "General Contracting", 
      description: "Comprehensive building services from planning to completion with quality craftsmanship.",
      href: "/general-contracting" 
    },
  ];

  return (
    <section id="learn-more" className="relative w-full bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-[color:var(--brand-primary)] uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            What We Build
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            From concept to completion, quality craftsmanship across projects.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
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
            Meet the Founder
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            The passion and expertise behind every Bullfrog Builders project.
          </p>
        </div>
        <div className="grid gap-10 items-center md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Chris Brycz</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With over 8 years at Binder Park Zoo and a family background in construction, Chris brings a unique blend of animal care precision and craftsmanship expertise to every build. As a new father who transitioned from zookeeping to follow his passion for building, he approaches each project with the same dedication and attention to detail that made him successful in animal care.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black [background:var(--btn-primary-gradient)] hover:brightness-110 hover:shadow-lg"
            >
              Learn More About Him
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/founder-placeholder.jpg"
                alt="Chris Brycz, Founder of Bullfrog Builders"
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
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            Fair & Transparent Pricing
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Quality craftsmanship at unbeatable prices with no hidden fees.
          </p>
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
            <h3 className="text-xl font-bold text-gray-900">Material + Labor</h3>
            <p className="mt-2 text-gray-600">
              Transparent estimates based on actual material costs plus fair labor rates. No markup on materials, no surprises.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--btn-primary-gradient)]">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Lowest Prices Guaranteed</h3>
            <p className="mt-2 text-gray-600">
              We're confident we offer the best value in Jackson, MI. Find a lower quote? We'll match it and beat it by 5%.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--btn-primary-gradient)]">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Customer First</h3>
            <p className="mt-2 text-gray-600">
              We want to do right by you and earn your trust as a returning customer. Fair pricing, quality work, honest service.
            </p>
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
