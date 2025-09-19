import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Steps from "@/components/Steps";

export const metadata = {
  title: "Chicken Coops | Bullfrog Builders",
  description: "Deep dive into our custom chicken coops: design, materials, process, and what to expect.",
};

export default function ChickenCoopsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />

      <PageHero
        title="Custom Chicken Coops"
        subtitle="Safe, comfortable, easy-to-clean coops tailored to your flock and property"
      />

      <section className="w-full py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold text-[color:var(--brand-primary)] uppercase tracking-wider mb-4">Overview</p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Built For Happy, Healthy Chickens</h2>
            <p className="mt-2 text-gray-600">Durable, safe, easy‑to‑clean coops.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Our chicken coops feature weather-resistant framing, secure hardware cloth, and predator-resistant construction to keep your flock safe. We include smart ventilation, natural light placement, and easy-access doors for optimal health and maintenance.
              </p>
              <p className="text-lg leading-relaxed">
                Every build is customized with runs, nesting boxes, and finishes that complement your property. We design proper spacing, roosting areas, and efficient egg collection systems sized perfectly for your flock.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/coop.jpeg"
                alt="Custom chicken coop build"
                width={600}
                height={400}
                className="h-80 w-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      <Steps />

      <ContactSection />
      <Footer />
    </div>
  );
}
