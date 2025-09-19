import Image from "next/image";
import Link from "next/link";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import PageHero from "./PageHero";
import Navbar from "./Navbar";

export default function ProjectPage({ 
  title, 
  description, 
  heroImage, 
  features = [], 
  gallery = [], 
  testimonial = null 
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />

      <PageHero 
        title={title}
        subtitle={description}
        backgroundImage={heroImage}
        height="h-[60vh]"
      />

      {/* Features Section */}
      {features.length > 0 && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                What We Deliver
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Professional craftsmanship with attention to every detail.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                  <div className="mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--btn-primary-gradient)]">
                      <span className="text-lg font-bold text-white">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {gallery.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Work
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                See examples of our quality craftsmanship.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {gallery.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-2xl shadow-sm">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-64 w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial Section */}
      {testimonial && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <blockquote className="text-2xl font-medium text-gray-900 sm:text-3xl">
              "{testimonial.quote}"
            </blockquote>
            <div className="mt-6">
              <div className="font-semibold text-gray-900">{testimonial.author}</div>
              <div className="text-gray-600">{testimonial.location}</div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <ContactSection />
      <Footer />
    </div>
  );
}
