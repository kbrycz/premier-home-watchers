import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Steps from "@/components/Steps";

export const metadata = {
  title: "Pole Barns | Bullfrog Builders",
  description: "How we build versatile pole barns: planning, structure, and finishing options.",
};

export default function PoleBarnsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />

      <PageHero
        title="Pole Barns"
        subtitle="Versatile storage and agricultural buildings tailored to your property"
      />

      <section className="w-full py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold text-[color:var(--brand-primary)] uppercase tracking-wider mb-4">Overview</p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Designed For Your Use Case</h2>
            <p className="mt-2 text-gray-600">Flexible barns for work or storage.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                We build with engineered posts, trusses, and bracing systems designed for Michigan's weather conditions. Our construction uses pressure-treated posts with concrete footings and engineered truss systems that handle snow loads while providing maximum clear span.
              </p>
              <p className="text-lg leading-relaxed">
                Insulation, electrical rough‑in, concrete slabs, and interior walls are available to create comfortable workspace or storage areas. Custom door and window placement accommodates your specific needs, with exterior finishes matched to complement your property.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/project-placeholder.jpg"
                alt="Pole barn construction"
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
        { step: "5", title: "Build & Install", desc: "Post setting, framing, roofing, and siding installation." },
        { step: "6", title: "Final Touches & Walkthrough", desc: "Doors, windows, interior options, and a final walkthrough." },
      ]} />

      <ContactSection />
      <Footer />
    </div>
  );
}
