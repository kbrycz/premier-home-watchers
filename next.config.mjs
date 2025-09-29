/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/contact", destination: "/", permanent: true },
      { source: "/ad/chicken-coop", destination: "/ad/facebook", permanent: true },
      { source: "/chicken-coops", destination: "/", permanent: true },
      { source: "/concrete-foundations", destination: "/", permanent: true },
      { source: "/pole-barns", destination: "/", permanent: true },
      { source: "/sheds", destination: "/", permanent: true },
      { source: "/flooring", destination: "/", permanent: true },
      { source: "/general-contracting", destination: "/", permanent: true },
      { source: "/gallery", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
