import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Steps from "@/components/Steps";

export const metadata = {
  title: "General Contracting | Bullfrog Builders",
  description: "Versatile contracting services for projects that can be handled by small teams without major equipment.",
};

export default function GeneralContractingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />

      <PageHero
        title="General Contracting"
        subtitle="Versatile building services from small repairs to custom projects"
      />

      <section className="w-full py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold text-[color:var(--brand-primary)] uppercase tracking-wider mb-4">Overview</p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">We Can Build Anything</h2>
            <p className="mt-2 text-gray-600">Small teams, big results.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                We specialize in jobs that can be done by small groups of 1-3 people without major equipment. Our team excels at projects requiring skill, attention to detail, and craftsmanship rather than large crews or specialized machinery.
              </p>
              <p className="text-lg leading-relaxed">
                If you're not sure whether your project fits what we do, just contact us and we'll let you know. We're honest about our capabilities and will direct you to the right solution, building relationships through quality work and upfront communication.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/project-placeholder.jpg"
                alt="General contracting work"
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
        { step: "5", title: "Build & Install", desc: "Quality work with attention to detail and clean daily workflows." },
        { step: "6", title: "Final Touches & Walkthrough", desc: "Finishing touches, cleanup, and a final walkthrough." },
      ]} />

      <ContactSection />
      <Footer />
    </div>
  );
}
