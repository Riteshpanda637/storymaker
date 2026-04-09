"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const navItems = [
  { name: "HOME", href: "/home" },
  { name: "GALLERIES", href: "/galleries" },
  { name: "STORIES", href: "/stories" },
  { name: "TESTIMONIALS", href: "/testimonials" },
  { name: "ABOUT", href: "/about" },
  { name: "ENQUIRE", href: "/enquire" },
];

const storiesData: Record<string, {
  title: string;
  date: string;
  cover: string;
  video: string;
  story: string[];
  photos: string[];
}> = {
  "bikash-lizarani": {
    title: "BIKASH & LIZARANI",
    date: "November 15, 2024",
    cover: "/BIKASH%20%26%20LIZARANI/Cover.jpg",
    video: "/BIKASH%20%26%20LIZARANI/Teaser.mp4",
    story: [
      "A Love Written in the Stars.",
      "Some love stories begin with a glance, others with a word — but theirs began with a feeling that neither could explain. Bikash and Lizarani found each other in the most unexpected of moments, and from that day forward, everything just made sense.",
      "Their wedding was a celebration of traditions passed down through generations — the warmth of family, the glow of evening lamps, the sound of laughter echoing through temple corridors.",
      "From the vibrant red of her saree to the quiet confidence in his eyes, their day unfolded like a poem. Not rushed, not performed — simply lived.",
      "This is their story — not of a perfect day, but of a real one. One filled with love, laughter, and the beautiful chaos of two families becoming one.",
    ],
    photos: [
      "/BIKASH%20%26%20LIZARANI/DSC_5612-1.jpg",
      "/BIKASH%20%26%20LIZARANI/DSC_5618-1.jpg",
      "/BIKASH%20%26%20LIZARANI/DSC_5623-1.jpg",
      "/BIKASH%20%26%20LIZARANI/DSC_5649-1.jpg",
      "/BIKASH%20%26%20LIZARANI/DSC_5664-1.jpg",
      "/BIKASH%20%26%20LIZARANI/06.jpg",
      "/BIKASH%20%26%20LIZARANI/07.jpg",
      "/BIKASH%20%26%20LIZARANI/08.jpg",
      "/BIKASH%20%26%20LIZARANI/DSC_7604-1.jpg",
      "/BIKASH%20%26%20LIZARANI/DSC_7608-1.jpg",
      "/BIKASH%20%26%20LIZARANI/DSC_8201-1.jpg",
      "/BIKASH%20%26%20LIZARANI/DSC_8432-1.jpg",
      "/BIKASH%20%26%20LIZARANI/DSC_8434-1.jpg",
      "/BIKASH%20%26%20LIZARANI/DSC_8438-1.jpg",
      "/BIKASH%20%26%20LIZARANI/DSC_8440-1.jpg",
      "/BIKASH%20%26%20LIZARANI/DSC_8462-1.jpg",
      "/BIKASH%20%26%20LIZARANI/DSC_8491-1.jpg",
    ],
  },
  "sridhar-archana": {
    title: "SRIDHAR & ARCHANA",
    date: "January 24, 2025",
    cover: "/Sridhar%20%26%20Archana/DJI_0994-1.jpg",
    video: "/Sridhar%20%26%20Archana/Sridhar%20X%20Archaba%20Teaser.mp4",
    story: [
      "Where the Ocean Meets Forever.",
      "Sridhar and Archana chose the sea as their witness — and the sea did not disappoint. With waves crashing at their feet and the sky painted in shades of silver and blue, their pre-wedding shoot felt less like a session and more like a chapter from a love story.",
      "There is something about the way they move together — effortless, natural, as though they have been walking side by side for lifetimes.",
      "From the golden sands to the quiet green gardens, every frame tells you the same thing: these two were made for each other.",
      "For Sridhar and Archana — for a love as vast and endless as the ocean they stood beside.",
    ],
    photos: [
      "/Sridhar%20%26%20Archana/SGR_1261-1.jpg",
      "/Sridhar%20%26%20Archana/SGR_1303-1.jpg",
      "/Sridhar%20%26%20Archana/SGR_1303-110.jpg",
      "/Sridhar%20%26%20Archana/SGR_1304-1.jpg",
      "/Sridhar%20%26%20Archana/SGR_1408-1.jpg",
      "/Sridhar%20%26%20Archana/SGR_695527.jpg",
      "/Sridhar%20%26%20Archana/SGR_7671-1.jpg",
    ],
  },
  "sunil-swetha": {
    title: "SUNIL & SWETHA",
    date: "January 24, 2025",
    cover: "/SUNIL%20X%20SWETHA/DSC_8742-1.jpg",
    video: "/SUNIL%20X%20SWETHA/SUNIL%20X%20SWETHA%20REEL.mp4",
    story: [
      "Love in the City of Heritage.",
      "Sunil and Swetha chose the old city as their backdrop — stone arches, colonial windows, and streets that have seen centuries of stories unfold. And yet, among all that history, theirs felt brand new.",
      "There is an ease to them that the camera loves. The way they walk together through crowded streets, the way the world blurs around them while they stay perfectly in focus.",
      "He in his earthy browns, she in her elegant white — they brought a warmth to every stone wall and cobbled path they stood against.",
      "For Sunil and Swetha — for a love that stands still even when the world rushes by.",
    ],
    photos: [
      "/SUNIL%20X%20SWETHA/DSC_1614-1.jpg.jpeg",
      "/SUNIL%20X%20SWETHA/DSC_1720-1.jpg.jpeg",
      "/SUNIL%20X%20SWETHA/DSC_1830-1.jpg.jpeg",
      "/SUNIL%20X%20SWETHA/DSC_1833-1.jpg.jpeg",
      "/SUNIL%20X%20SWETHA/DSC_1929-1.jpg",
      "/SUNIL%20X%20SWETHA/DSC_1979-1.jpg.jpeg",
      "/SUNIL%20X%20SWETHA/DSC_2346-1.jpg",
      "/SUNIL%20X%20SWETHA/DSC_2346-103.jpg",
      "/SUNIL%20X%20SWETHA/DSC_2346-115.jpg",
      "/SUNIL%20X%20SWETHA/DSC_2346-14.jpg",
    ],
  },
};

function AutoPlayVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video ref={videoRef} controls muted playsInline preload="auto">
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default function StoryDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const story = storiesData[slug];

  if (!story) {
    return (
      <main className="home-page">
        <header className="header">
          <div className="header-logo">
            <Image src="/logo/2.svg" alt="StoryMaker wedding photography logo by Jaga Patro" width={120} height={80} className="logo-dark" />
          </div>
          <nav className="nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="nav-link">{item.name}</Link>
            ))}
          </nav>
        </header>
        <div className="stories-content" style={{ textAlign: "center", padding: "100px 20px" }}>
          <h2 className="gallery-title">Story Not Found</h2>
          <Link href="/stories" className="story-read-more">Back to Stories</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="home-page">
      {/* Header */}
      <header className="header">
        <div className="header-logo">
          <Image src="/logo/2.svg" alt="StoryMaker wedding photography logo by Jaga Patro" width={120} height={80} className="logo-dark" />
        </div>
        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="nav-link">{item.name}</Link>
          ))}
        </nav>
      </header>

      {/* Story Detail */}
      <div className="stories-content">
        {/* Cover */}
        <div className="story-cover">
          <Image src={story.cover} alt={story.title} width={1100} height={500} className="story-cover-image" />
          <div className="story-cover-overlay">
            <h2 className="story-cover-title">{story.title}</h2>
          </div>
        </div>

        {/* Title & Date */}
        <div className="story-detail-header">
          <h1 className="story-info-title">{story.title}</h1>
          <p className="story-info-date">{story.date}</p>
        </div>

        {/* Story Text */}
        <div className="story-detail-text">
          {story.story.map((paragraph, index) => (
            <p key={index} className={index === 0 ? "gallery-story-lead" : "gallery-story-text"}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Video */}
        <div className="story-detail-video">
          <AutoPlayVideo src={story.video} />
        </div>

        {/* Photo Grid */}
        <div className="story-expanded-grid">
          {story.photos.map((photo, index) => (
            <div key={index} className="story-expanded-photo">
              <Image src={photo} alt={`${story.title} wedding photography by StoryMaker - photo ${index + 1}`} fill className="story-expanded-image" />
            </div>
          ))}
        </div>

        {/* Back Link */}
        <div className="story-detail-back">
          <Link href="/stories" className="story-read-more">Back to Stories</Link>
        </div>
      </div>

      {/* Call Button */}
      <a href="tel:+917787874949" className="call-btn" aria-label="Call us">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <a href="https://www.instagram.com/thestorymaker.in/" target="_blank" rel="noopener noreferrer" className="instagram-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <span className="footer-brand">STORYMAKER</span>
        </div>
      </footer>
    </main>
  );
}
