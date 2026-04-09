import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Photo Galleries | Real Weddings by StoryMaker",
  description:
    "Browse stunning wedding galleries — Bikash & Lizarani, Sridhar & Archana, Sunil & Swetha. Photos, films & the story behind each wedding. Portfolio by Jaga Patro.",
  alternates: {
    canonical: "https://thestorymaker.in/galleries",
  },
  openGraph: {
    title: "Wedding Photo Galleries | StoryMaker",
    description: "Browse real wedding galleries with photos, films & stories by Jaga Patro.",
  },
};

export default function GalleriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
