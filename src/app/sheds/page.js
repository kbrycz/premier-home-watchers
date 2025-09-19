import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Steps from "@/components/Steps";

export const metadata = {
  title: "Custom Sheds | Bullfrog Builders",
  description: "Custom sheds that look great and maximize storage and usability.",
};

export default function ShedsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />

      <PageHero
        title="Custom Sheds"
        subtitle="Attractive, functional storage built to complement your property"
      />

      <section className="w-full py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold text-[color:var(--brand-primary)] uppercase tracking-wider mb-4">Overview</p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Storage Done Right</h2>
            <p className="mt-2 text-gray-600">Beautiful sheds built to last.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                We build with solid framing and weatherproof cladding designed for Michigan's seasons. Each shed features custom doors, windows, and rooflines designed to match your property's architecture and complement your home's style.
              </p>
              <p className="text-lg leading-relaxed">
                Interior options include custom shelving, workbenches, lighting, and electrical power. We design layouts to maximize functionality with built-in storage solutions that keep everything accessible and organized.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/project-placeholder.jpg"
                alt="Custom backyard shed"
                width={600}
                height={400}
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Steps steps={[
        { step: "1", title: "Quick Call", desc: "We discuss your project, goals, and timeline." },
        { step: "2", title: "Site Visit & Measurements", desc: "Chris visits your property, measures, and talks through inspiration, layout, and options." },
        { step: "3", title: "Design & Quote", desc: "You receive a clear quote with a proposed start date." },
        { step: "4", title: "Schedule", desc: "We lock in the date and review simple prep steps." },
        { step: "5", title: "Build & Install", desc: "Foundation, framing, roofing, and siding installation." },
        { step: "6", title: "Final Touches & Walkthrough", desc: "Interior options, shelving, finishing touches, and a final walkthrough." },
      ]} />

      <ContactSection />
      <Footer />
    </div>
  );
}
