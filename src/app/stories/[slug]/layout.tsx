import type { Metadata } from "next";

const storyMeta: Record<string, { title: string; description: string; image: string }> = {
  "bikash-lizarani": {
    title: "Bikash & Lizarani Wedding Story | StoryMaker Photography",
    description:
      "A Love Written in the Stars — Bikash & Lizarani's traditional Indian wedding. Temple corridors, vibrant sarees & timeless moments. Watch teaser & view full gallery by Jaga Patro.",
    image: "/BIKASH%20%26%20LIZARANI/Cover.jpg",
  },
  "sridhar-archana": {
    title: "Sridhar & Archana Pre-Wedding | Beach Photography by StoryMaker",
    description:
      "Where the Ocean Meets Forever — Sridhar & Archana's beach pre-wedding shoot. Drone photography, golden sands & endless love. Photos & teaser by Jaga Patro.",
    image: "/Sridhar%20%26%20Archana/DJI_0994-1.jpg",
  },
  "sunil-swetha": {
    title: "Sunil & Swetha Pre-Wedding | Heritage City Photography by StoryMaker",
    description:
      "Love in the City of Heritage — Sunil & Swetha's pre-wedding in the old city. Stone arches, long exposures & timeless romance. Photos & reel by StoryMaker.",
    image: "/SUNIL%20X%20SWETHA/DSC_8742-1.jpg",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = storyMeta[slug];

  if (!meta) {
    return {
      title: "Story Not Found",
      description: "The wedding story you are looking for does not exist.",
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://thestorymaker.in/stories/${slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [{ url: meta.image, width: 1200, height: 630, alt: meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [meta.image],
    },
  };
}

export default function StorySlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
