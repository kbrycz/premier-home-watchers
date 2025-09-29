import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: {
    default: "Premier Home Watchers — Oakland Township Home Watching",
    template: "%s | Premier Home Watchers",
  },
  description:
    "Husband-and-wife team providing reliable home-watching in Oakland Township. Photo reports after every visit, fast alerts, and flexible membership or pay‑per‑visit pricing.",
  keywords: [
    "home watching",
    "home watch",
    "vacant home checks",
    "Oakland Township",
    "snowbird home watch",
    "storm checks",
    "house sitting",
    "vendor coordination",
  ],
  openGraph: {
    title: "Premier Home Watchers — Oakland Township Home Watching",
    description:
      "Local, reliable home-watching with photo reports after every visit. Serving Oakland Township and nearby.",
    url: "/",
    siteName: "Premier Home Watchers",
    images: [{ url: "/images/main.jpg", width: 1200, height: 630, alt: "Premier Home Watchers" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premier Home Watchers — Oakland Township Home Watching",
    description:
      "Local, reliable home-watching with photo reports after every visit. Serving Oakland Township and nearby.",
    images: ["/images/main.jpg"],
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://premierhomewatchers.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Premier Home Watchers",
              url: "https://premierhomewatchers.com/",
              image: "https://premierhomewatchers.com/images/main.jpg",
              description:
                "Husband-and-wife team providing reliable home-watching in Oakland Township with photo reports after every visit.",
              areaServed: "Oakland Township, Michigan",
              sameAs: [],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Oakland Township",
                addressRegion: "MI",
                addressCountry: "US",
              },
              openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" }],
            }),
          }}
        />
      </body>
    </html>
  );
}
