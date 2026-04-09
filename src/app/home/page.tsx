"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Photos for the slider (from Sridhar & Archana)
const sliderPhotos = [
  "/Sridhar%20%26%20Archana/DJI_0994-1.jpg",
  "/Sridhar%20%26%20Archana/SGR_1261-1.jpg",
  "/Sridhar%20%26%20Archana/SGR_1303-1.jpg",
  "/Sridhar%20%26%20Archana/SGR_1408-1.jpg",
  "/Sridhar%20%26%20Archana/SGR_7671-1.jpg",
];

// Grid photos (mix of Sridhar & Archana and photos folder)
const gridPhotos = [
  "/Sridhar%20%26%20Archana/DJI_0994-1.jpg",
  "/Sridhar%20%26%20Archana/SGR_1261-1.jpg",
  "/Sridhar%20%26%20Archana/SGR_1303-1.jpg",
  "/Sridhar%20%26%20Archana/SGR_1303-110.jpg",
  "/Sridhar%20%26%20Archana/SGR_1304-1.jpg",
  "/Sridhar%20%26%20Archana/SGR_1408-1.jpg",
  "/Sridhar%20%26%20Archana/SGR_695527.jpg",
  "/Sridhar%20%26%20Archana/SGR_7671-1.jpg",
  "/photos/1.jpg",
  "/photos/2.jpg",
  "/photos/3.jpg",
  "/photos/4.jpg",
  "/photos/5.jpg",
  "/photos/6.jpg",
  "/photos/7.jpg",
  "/photos/8.jpg",
  "/photos/9.jpg",
  "/photos/10.jpg",
  "/photos/11.jpg",
  "/photos/12.jpg",
  "/photos/13.jpg",
  "/photos/14.jpg",
  "/photos/15.jpg",
  "/Sridhar%20%26%20Archana/SGR_1304-1.jpg",
];

// Story cards
const storyCards = [
  { image: "/Sridhar%20%26%20Archana/SGR_695527.jpg", title: "SRIDHAR X ARCHANA", location: "BEACH" },
  { image: "/Sridhar%20%26%20Archana/SGR_1303-1.jpg", title: "SRIDHAR X ARCHANA", location: "BEACH" },
  { image: "/Sridhar%20%26%20Archana/SGR_1303-110.jpg", title: "SRIDHAR X ARCHANA", location: "BEACH" },
];

const navItems = [
  { name: "HOME", href: "/home" },
  { name: "GALLERIES", href: "/galleries" },
  { name: "STORIES", href: "/stories" },
  { name: "TESTIMONIALS", href: "/testimonials" },
  { name: "ABOUT", href: "/about" },
  { name: "ENQUIRE", href: "/enquire" },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gridSlide, setGridSlide] = useState(0);

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderPhotos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderPhotos.length) % sliderPhotos.length);
  };

  const nextGridSlide = () => {
    setGridSlide((prev) => (prev + 1) % 2);
  };

  const prevGridSlide = () => {
    setGridSlide((prev) => (prev - 1 + 2) % 2);
  };

  return (
    <main className="home-page">
      {/* Header */}
      <header className="header">
        {/* Logo */}
        <div className="header-logo">
          <Image
            src="/logo/2.svg"
            alt="StoryMaker wedding photography logo by Jaga Patro"
            width={120}
            height={150}
            className="logo-dark"
          />
        </div>

        {/* Navigation */}
        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="nav-link">
              {item.name}
            </Link>
          ))}
        </nav>
      </header>

      {/* Hero Slider */}
      <section className="hero-slider">
        <button className="slider-arrow slider-arrow-left" onClick={prevSlide}>
          <span>&#8249;</span>
        </button>

        <div className="slider-container">
          {sliderPhotos.map((photo, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
            >
              <Image
                src={photo}
                alt={`Wedding photography slide ${index + 1} - pre-wedding couple shoot by StoryMaker`}
                fill
                className="slide-image"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <button className="slider-arrow slider-arrow-right" onClick={nextSlide}>
          <span>&#8250;</span>
        </button>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <h1 className="quote-title">&quot;YOU FEEL. I FOCUS. WE FRAME&quot;</h1>
        <p className="quote-text">
          A wedding is a validation coupled with the showcase of Love inclusive of
          various events with exotic venues, food, guests, dresses, jewellery and so on -
          What if it could never be recorded?
        </p>
        <p className="quote-text">
          A chronology of a couple&apos;s journey where they vow together to be One.
        </p>
        <p className="quote-subtitle">WE ARE CREATING FICTION OUT OF REALITY.</p>
      </section>

      {/* Photo Grid Section */}
      <section className="photo-grid-section">
        <button className="grid-arrow grid-arrow-left" onClick={prevGridSlide}>
          <span>&#8249;</span>
        </button>

        <div className="photo-mosaic">
          {gridPhotos.map((photo, index) => (
            <div key={index} className="mosaic-item">
              <Image
                src={photo}
                alt={`Wedding photography gallery image ${index + 1} by StoryMaker`}
                fill
                className="mosaic-image"
              />
            </div>
          ))}
        </div>

        <button className="grid-arrow grid-arrow-right" onClick={nextGridSlide}>
          <span>&#8250;</span>
        </button>
      </section>

      {/* Real Love Stories Section */}
      <section className="stories-section">
        <h2 className="stories-title">REAL LOVE STORIES</h2>
        <p className="stories-subtitle">
          LIKE A RIVER FLOWS SURELY TO THE SEA. SO IT GOES SOME THINGS ARE MEANT TO BE.
        </p>

        <div className="stories-grid">
          {storyCards.map((story, index) => (
            <div key={index} className="story-card">
              <div className="story-image-container">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="story-image"
                />
              </div>
              <p className="story-info">
                {story.title} // {story.location} //
              </p>
            </div>
          ))}
        </div>
      </section>

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
