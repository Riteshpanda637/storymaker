import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Wedding Photographer | Contact StoryMaker",
  description:
    "Let's create magic together! Book Jaga Patro for your wedding. Fill the enquiry form, email Jagapatro73@gmail.com or call +91 7787874949. Available Pan-India.",
  alternates: {
    canonical: "https://thestorymaker.in/enquire",
  },
  openGraph: {
    title: "Book Your Wedding Photographer | StoryMaker",
    description: "Contact StoryMaker for wedding photography. Call +91 7787874949.",
  },
};

export default function EnquireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
