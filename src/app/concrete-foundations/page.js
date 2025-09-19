import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Steps from "@/components/Steps";

export const metadata = {
  title: "Concrete Foundations | Bullfrog Builders",
  description: "A detailed look at our foundation work: site prep, forms, pour, and finish.",
};

export default function ConcreteFoundationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />

      <PageHero
        title="Concrete Foundations"
        subtitle="Level, durable, and built to last—done right from the ground up"
      />

      <section className="w-full py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold text-[color:var(--brand-primary)] uppercase tracking-wider mb-4">Overview</p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Solid Starts For Every Structure</h2>
            <p className="mt-2 text-gray-600">Level, durable, clean foundation work.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                We start with thorough site prep and grading for proper drainage and stability. Our team plans form layout, rebar placement, and coordinates inspections to meet building codes and engineering requirements.
              </p>
              <p className="text-lg leading-relaxed">
                Our precision pour process focuses on level surfaces, clean edges, and properly placed control joints. We monitor conditions for optimal curing and finish with textures for durability and clean appearance.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/project-placeholder.jpg"
                alt="Concrete foundation pour"
                width={600}
                height={400}
                className="h-80 w-full object-cover"
              />
            </div>
          </div>

          {/* Process */}
          <div className="mt-14">
            <Steps steps={[
              { step: "1", title: "Quick Call", desc: "We discuss your project, goals, and timeline." },
              { step: "2", title: "Site Visit & Measurements", desc: "Chris visits your property, measures, and talks through inspiration, layout, and options." },
              { step: "3", title: "Design & Quote", desc: "You receive a clear quote with a proposed start date." },
              { step: "4", title: "Schedule", desc: "We lock in the date and review simple prep steps." },
              { step: "5", title: "Build & Install", desc: "Site prep, forms, precision pour, and finishing work." },
              { step: "6", title: "Final Touches & Walkthrough", desc: "Clean edges, surface finishing, and a final walkthrough." },
            ]} />
          </div>

        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
