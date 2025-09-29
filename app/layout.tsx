import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { BsWhatsapp } from "react-icons/bs";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const siteConfig = {
  name: "Proofsan",
  url: "https://proofsan.so",
  ogImage: "https://proofsan.so/og-image.png",
  description:
    "Complete range of high-performance waterproofing systems engineered to deliver lasting protection in demanding environments. From residential to industrial applications.",
  links: {
    twitter: "https://twitter.com/proofsan",
    facebook: "https://web.facebook.com/ProofSan?_rdc=1&_rdr",
  },
  keywords: [
    "Waterproofing",
    "Waterproofing solutions",
    "Waterproofing systems",
    "Waterproofing products",
    "Waterproofing services",
    "Waterproofing company",
    "Waterproofing contractors",
    "Waterproofing specialists",
    "Waterproofing experts",
    "Waterproofing company in Somalia",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "Proofsan",
      url: siteConfig.url,
    },
  ],
  creator: "Proofsan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@proofsan",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Proofsan",
    url: "https://proofsan.so",
    logo: "https://proofsan.so/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254-719-543-569",
      contactType: "Customer Service",
    },
    sameAs: [
      "https://web.facebook.com/ProofSan?_rdc=1&_rdr",
      "https://twitter.com/proofsan",
    ],
  };

  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/254719543569"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Contact us on WhatsApp"
        >
          <BsWhatsapp className="w-7 h-7 text-white" />
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat on WhatsApp
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-y-2 border-y-transparent"></div>
          </div>
        </a>
      </body>
    </html>
  );
}

