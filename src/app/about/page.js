import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About Chris Brycz | Bullfrog Builders",
  description: "Learn about Chris Brycz, founder of Bullfrog Builders. From zookeeper to craftsman, bringing precision and passion to every build.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />
      
      <PageHero 
        title="About"
        subtitle="The story behind Bullfrog Builders and our commitment to quality"
      />

      {/* Chris's Story Section */}
      <section className="w-full py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold text-[color:var(--brand-primary)] uppercase tracking-wider mb-4">
              Founder's Story
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              From Zookeeper to Craftsman
            </h2>
            <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">
              A craftsman's journey: precision, care, and pride in every build.
            </p>
            <div className="mt-6" />
            
            {/* Centered image */}
            <div className="mb-12 flex justify-center">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/founder-placeholder.jpg"
                  alt="Chris Brycz working on a construction project"
                  width={600}
                  height={400}
                  className="h-80 w-full max-w-2xl object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
            <div className="space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Chris Brycz spent over 8 years at Binder Park Zoo, where he developed an incredible attention to detail and a deep appreciation for precision work. His days were filled with caring for animals, maintaining habitats, and ensuring every detail was perfect for the creatures under his care. This experience taught him that quality work isn't just about the end result—it's about the care and dedication you put into every single step of the process.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                When Chris became a new father, he faced a difficult but necessary decision. Despite his love for zookeeping and the animals he cared for, the financial realities of supporting a growing family meant he needed to pivot his career. Rather than see this as a setback, Chris embraced it as an opportunity to follow another passion that had been growing alongside his zoo work—building and craftsmanship. For years, he had been the go-to person among friends and family for DIY projects, home improvements, and custom builds around his own house.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                What started as weekend projects and favors for loved ones revealed Chris's natural talent for construction and design. Born into a family of skilled general contractors, the craftsmanship was already in his blood, but his unique background in animal care brought something special to his building approach. The same meticulous attention to detail that kept animals safe and comfortable now ensures that every chicken coop, shed, and foundation he builds exceeds expectations. Chris approaches each project with the heart of someone who truly cares about the outcome, whether he's building for a new client or a longtime friend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Mission Section */}
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold text-[color:var(--brand-primary)] uppercase tracking-wider mb-4">
              Our Mission
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Building Relationships, Not Just Structures
            </h2>
            <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
              At Bullfrog Builders, we believe that every project is an opportunity to build lasting relationships with our clients and community.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--btn-primary-gradient)]">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer-First Approach</h3>
              <p className="text-gray-600">
                We prioritize building long-term relationships over quick profits. Every client becomes part of our extended family, and we're committed to earning your trust through honest communication and exceptional craftsmanship.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--btn-primary-gradient)]">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                We believe that quality work speaks for itself. Every project, no matter the size, receives the same meticulous attention to detail and commitment to excellence that has become our signature.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:col-span-2 lg:col-span-1">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--btn-primary-gradient)]">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Connection</h3>
              <p className="text-gray-600">
                As a local Jackson, MI business, we're invested in our community's success. We source materials locally when possible and believe in supporting the neighbors and families that make our area special.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
