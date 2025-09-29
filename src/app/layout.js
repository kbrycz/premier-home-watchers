import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: "Premier Home Watchers — Oakland Township Home Watching",
  description: "Husband-and-wife team providing reliable home-watching services in Oakland Township and nearby areas. Photo reports after every visit, emergency alerts, and flexible plans.",
  icons: {
    icon: "/favicon.ico",
  },
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
      </body>
    </html>
  );
}
