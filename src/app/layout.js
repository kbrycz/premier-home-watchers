import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: "Bullfrog Builders — Modern Contracting in Jackson, MI",
  description: "Building dreams and crafting quality. Bullfrog Builders offers modern contracting solutions in Jackson, Michigan.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://bullfrogbuilders.com"),
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
