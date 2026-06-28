import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carbon-tech-hub.com"),

  title: {
    default: "CarbonTech Hub",
    template: "%s | CarbonTech Hub",
  },

  description:
    "CarbonTech Hub is a professional platform covering carbon technologies, methane management, MRV, carbon capture, industrial decarbonization, and environmental regulations.",

  keywords: [
    "Carbon Technology",
    "MRV",
    "Methane",
    "EU Methane Regulation",
    "Carbon Capture",
    "CCUS",
    "Industrial Decarbonization",
    "Emissions Monitoring",
    "OGMP",
    "Satellite Methane",
  ],

  authors: [
    {
      name: "CarbonTech Hub",
    },
  ],

  creator: "CarbonTech Hub",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://carbon-tech-hub.com",
    siteName: "CarbonTech Hub",
    title: "CarbonTech Hub",
    description:
      "Connecting Carbon Technologies, MRV Solutions, and Industrial Decarbonization.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "CarbonTech Hub",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CarbonTech Hub",
    description:
      "Connecting Carbon Technologies, MRV Solutions, and Industrial Decarbonization.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <footer className="bg-emerald-950 px-6 py-14 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-6">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="CarbonTech Hub logo"
                  width={42}
                  height={42}
                />
                <span className="text-xl font-bold text-emerald-400">
                  CarbonTech Hub
                </span>
              </div>

              <p className="mt-4 max-w-sm text-sm leading-7 text-emerald-50/75">
                Connecting carbon technologies and MRV solutions for a
                sustainable future.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Explore</h3>
              <p className="mt-4 text-sm text-emerald-50/70">Insights</p>
              <p className="mt-3 text-sm text-emerald-50/70">Solutions</p>
              <p className="mt-3 text-sm text-emerald-50/70">Submit</p>
              <p className="mt-3 text-sm text-emerald-50/70">About</p>
            </div>

            <div>
              <h3 className="font-bold">Resources</h3>
              <p className="mt-4 text-sm text-emerald-50/70">News</p>
              <p className="mt-3 text-sm text-emerald-50/70">Reports</p>
              <p className="mt-3 text-sm text-emerald-50/70">Events</p>
              <p className="mt-3 text-sm text-emerald-50/70">Glossary</p>
            </div>

            <div>
              <h3 className="font-bold">Company</h3>
              <p className="mt-4 text-sm text-emerald-50/70">Our Mission</p>
              <p className="mt-3 text-sm text-emerald-50/70">Team</p>
              <p className="mt-3 text-sm text-emerald-50/70">Contact</p>
              <p className="mt-3 text-sm text-emerald-50/70">LinkedIn</p>
            </div>

            <div>
              <h3 className="font-bold">Legal</h3>
              <p className="mt-4 text-sm text-emerald-50/70">Privacy Policy</p>
              <p className="mt-3 text-sm text-emerald-50/70">Terms of Use</p>
              <p className="mt-3 text-sm text-emerald-50/70">Cookie Policy</p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-7xl border-t border-emerald-800 pt-6 text-sm text-emerald-50/60">
            © 2026 CarbonTech Hub. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}