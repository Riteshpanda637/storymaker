import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5c4033",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thestorymaker.in"),
  title: {
    default: "StoryMaker | Wedding Photography & Cinematography in India",
    template: "%s | StoryMaker — Wedding Photography by Jaga Patro",
  },
  description:
    "StoryMaker by Jaga Patro — premium wedding photography & cinematography across India. Candid photos, pre-wedding shoots & cinematic wedding films. Call +91 7787874949",
  keywords: [
    "wedding photography india",
    "wedding photographer",
    "pre-wedding shoot",
    "candid wedding photography",
    "wedding cinematography",
    "wedding films",
    "destination wedding photographer",
    "Jaga Patro",
    "StoryMaker",
    "best wedding photographer india",
    "wedding videography",
    "couple photography",
  ],
  authors: [{ name: "Jaga Patro", url: "https://www.instagram.com/thestorymaker.in/" }],
  creator: "Jaga Patro",
  publisher: "StoryMaker",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  icons: {
    icon: "/logo/logo.png",
    apple: "/logo/logo.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    siteName: "StoryMaker",
    locale: "en_IN",
    title: "StoryMaker | Wedding Photography & Cinematography in India",
    description:
      "Premium wedding photography & cinematography by Jaga Patro. We freeze your memories — candid photos, pre-wedding shoots & cinematic films across India.",
    images: [
      {
        url: "/BIKASH%20%26%20LIZARANI/Cover.jpg",
        width: 1200,
        height: 630,
        alt: "StoryMaker Wedding Photography by Jaga Patro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StoryMaker | Wedding Photography & Cinematography in India",
    description:
      "Premium wedding photography & cinematography by Jaga Patro across India.",
    images: ["/BIKASH%20%26%20LIZARANI/Cover.jpg"],
  },
  alternates: {
    canonical: "https://thestorymaker.in",
  },
  category: "Photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "StoryMaker",
              alternateName: "The StoryMaker",
              description:
                "Premium wedding photography and cinematography in India by Jaga Patro",
              url: "https://thestorymaker.in",
              telephone: "+917787874949",
              email: "Jagapatro73@gmail.com",
              image: "https://thestorymaker.in/logo/2.svg",
              founder: {
                "@type": "Person",
                name: "Jaga Patro",
                jobTitle: "Wedding Photographer & Cinematographer",
                sameAs: "https://www.instagram.com/thestorymaker.in/",
              },
              sameAs: ["https://www.instagram.com/thestorymaker.in/"],
              priceRange: "$$",
              serviceType: [
                "Wedding Photography",
                "Pre-Wedding Photography",
                "Wedding Cinematography",
                "Candid Photography",
                "Destination Wedding Photography",
              ],
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                bestRating: "5",
                ratingCount: "6",
              },
            }),
          }}
        />
      </head>
      <body className={`${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
