import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Jaga Patro | Wedding Photographer Behind StoryMaker",
  description:
    "Meet Jaga Patro — the artist behind StoryMaker. Moment. Memory. Miracle. A photographer who sees what the naked eye cannot and captures what words cannot say.",
  alternates: {
    canonical: "https://thestorymaker.in/about",
  },
  openGraph: {
    title: "About Jaga Patro | StoryMaker",
    description: "Meet the wedding photographer behind StoryMaker — Jaga Patro.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
