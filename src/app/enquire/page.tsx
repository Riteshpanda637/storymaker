"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "HOME", href: "/home" },
  { name: "GALLERIES", href: "/galleries" },
  { name: "STORIES", href: "/stories" },
  { name: "TESTIMONIALS", href: "/testimonials" },
  { name: "ABOUT", href: "/about" },
  { name: "ENQUIRE", href: "/enquire" },
];

function FormWithMailto() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const detailsRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const firstName = firstNameRef.current?.value || "";
    const lastName = lastNameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const subject = subjectRef.current?.value || "";
    const details = detailsRef.current?.value || "";

    const phone = phoneRef.current?.value || "";

    const body = `Name: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\n\nEvent Details:\n${details}`;
    const mailtoLink = `mailto:Jagapatro73@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <form className="enquire-form" onSubmit={handleSubmit}>
      <div className="enquire-form-row">
        <div className="enquire-form-group">
          <label className="enquire-label">Name</label>
          <div className="enquire-name-row">
            <div className="enquire-name-field">
              <span className="enquire-hint">First Name <em>(required)</em></span>
              <input ref={firstNameRef} type="text" className="enquire-input" required />
            </div>
            <div className="enquire-name-field">
              <span className="enquire-hint">Last Name <em>(required)</em></span>
              <input ref={lastNameRef} type="text" className="enquire-input" required />
            </div>
          </div>
        </div>
      </div>

      <div className="enquire-form-group">
        <label className="enquire-label">Phone Number <em>(required)</em></label>
        <input ref={phoneRef} type="tel" className="enquire-input" required />
      </div>

      <div className="enquire-form-group">
        <label className="enquire-label">Email Address <em>(required)</em></label>
        <input ref={emailRef} type="email" className="enquire-input" required />
      </div>

      <div className="enquire-form-group">
        <label className="enquire-label">Subject <em>(required)</em></label>
        <input ref={subjectRef} type="text" className="enquire-input" required />
      </div>

      <div className="enquire-form-group">
        <label className="enquire-label">Event Dates / Details <em>(required)</em></label>
        <textarea ref={detailsRef} className="enquire-textarea" rows={5} required></textarea>
      </div>

      <div className="enquire-form-submit">
        <button type="submit" className="enquire-submit-btn">SUBMIT</button>
      </div>
    </form>
  );
}

export default function EnquirePage() {
  return (
    <main className="home-page">
      {/* Header */}
      <header className="header">
        <div className="header-logo">
          <Image
            src="/logo/2.svg"
            alt="StoryMaker wedding photography logo by Jaga Patro"
            width={120}
            height={80}
            className="logo-dark"
          />
        </div>

        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="nav-link">
              {item.name}
            </Link>
          ))}
        </nav>
      </header>

      {/* Hero Image */}
      <div className="enquire-hero">
        <Image
          src="/BIKASH%20%26%20LIZARANI/DSC_5649-1.jpg"
          alt="Wedding couple photo - book StoryMaker wedding photographer Jaga Patro"
          width={900}
          height={400}
          className="enquire-hero-image"
        />
        <div className="enquire-hero-overlay">
          <p className="enquire-hero-sub">LET&apos;S CREATE</p>
          <h1 className="enquire-hero-title">MAGIC</h1>
        </div>
      </div>

      {/* Contact Info */}
      <div className="enquire-content">
        <p className="enquire-email">EMAIL: JAGAPATRO73@GMAIL.COM</p>
        <p className="enquire-text">
          You can draft an email to us on the above mentioned address,
          <br />
          or can send us the details by filling the form below.
        </p>
        <p className="enquire-thankyou">Thank you!</p>

        {/* Form */}
        <FormWithMailto />
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
