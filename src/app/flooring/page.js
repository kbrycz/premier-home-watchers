import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Steps from "@/components/Steps";

export const metadata = {
  title: "Flooring & More | Bullfrog Builders",
  description: "Professional flooring installs and interior improvements with meticulous detail.",
};

export default function FlooringPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />

      <PageHero
        title="Flooring"
        subtitle="Clean installs and careful finishes to refresh your living spaces"
      />

      <section className="w-full py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold text-[color:var(--brand-primary)] uppercase tracking-wider mb-4">Overview</p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Details That Make A Difference</h2>
            <p className="mt-2 text-gray-600">Clean installs, careful finishes.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                We handle comprehensive subfloor prep, checking for squeaks, level issues, and moisture concerns before beginning any flooring installation. Our accurate layout process ensures patterns align perfectly and cuts are precise, minimizing waste and maximizing the beauty of your new floors.
              </p>
              <p className="text-lg leading-relaxed">
                Beyond flooring, we install baseboards, casing, doors, and built‑in storage solutions. Our careful site protection includes dust barriers and daily cleanup to ensure minimal disruption in lived‑in homes, with clear communication about each day's progress.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/project-placeholder.jpg"
                alt="Flooring installation"
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
        { step: "5", title: "Build & Install", desc: "Subfloor prep, precise installation, and quality finishes." },
        { step: "6", title: "Final Touches & Walkthrough", desc: "Baseboards, trim work, cleanup, and a final walkthrough." },
      ]} />

      <ContactSection />
      <Footer />
    </div>
  );
}
