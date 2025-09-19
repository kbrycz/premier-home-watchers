"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: "/images/project-placeholder.jpg",
      alt: "Custom Chicken Coop Build"
    },
    {
      src: "/images/project-placeholder.jpg", 
      alt: "Concrete Foundation Project"
    },
    {
      src: "/images/project-placeholder.jpg",
      alt: "Pole Barn Construction"
    },
    {
      src: "/images/project-placeholder.jpg",
      alt: "Custom Shed Build"
    },
    {
      src: "/images/project-placeholder.jpg",
      alt: "Flooring Installation"
    },
    {
      src: "/images/project-placeholder.jpg",
      alt: "General Contracting Project"
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />
      
      <PageHero 
        title="Our Work"
        subtitle="Quality craftsmanship across every project we complete"
      />

      {/* Gallery Section */}
      <section className="w-full py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold text-[color:var(--brand-primary)] uppercase tracking-wider mb-4">
              Previous Projects
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Showcasing Our Craftsmanship
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              From custom coops to complete builds, see the quality that sets us apart.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openModal(image)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  {/* Click indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="rounded-full bg-white/90 p-3">
                      <svg className="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-h-[80vh] max-w-[80vw] w-full h-full flex items-center justify-center p-4">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
              aria-label="Close modal"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image */}
            <div 
              className="relative max-h-full max-w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-h-[80vh] max-w-[80vw] object-contain rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
