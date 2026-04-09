import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Love Stories | Wedding Stories by StoryMaker",
  description:
    "Every love story deserves to be told beautifully. Read and view wedding stories captured by StoryMaker — from beach pre-weddings to heritage city celebrations across India.",
  alternates: {
    canonical: "https://thestorymaker.in/stories",
  },
  openGraph: {
    title: "Real Love Stories | StoryMaker Wedding Photography",
    description: "Read real wedding love stories captured by Jaga Patro across India.",
  },
};

export default function StoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
