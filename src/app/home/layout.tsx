import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | StoryMaker — Wedding Photography Portfolio",
  description:
    "You Feel. I Focus. We Frame. StoryMaker captures your love story through cinematic wedding photography and films. View real weddings across India. Book Jaga Patro today.",
  alternates: {
    canonical: "https://thestorymaker.in/home",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
