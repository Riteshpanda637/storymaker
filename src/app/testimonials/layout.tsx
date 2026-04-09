import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews | StoryMaker Wedding Photography",
  description:
    "See what our couples say about StoryMaker. Real testimonials from real weddings — trusted wedding photography across India by Jaga Patro. 5-star rated.",
  alternates: {
    canonical: "https://thestorymaker.in/testimonials",
  },
  openGraph: {
    title: "Client Testimonials | StoryMaker",
    description: "Real reviews from real couples — StoryMaker wedding photography.",
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
