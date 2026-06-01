"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@thirdbracket/bracketui";
import { FaBars, FaTimes } from "react-icons/fa";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Benefits", href: "/benefits" },
  { label: "Ingredients", href: "/ingredients" },
  { label: "Science", href: "/science" },
  { label: "Learn", href: "/learn" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-inner">
        <Link href="/" className="navbar-brand">
          <div className="navbar-logo-wrap">
            <Image
              src="/logo-small.svg"
              alt="Blackpool Brew"
              width={80}
              height={80}
              className="navbar-logo-img"
            />
          </div>
          <span className="navbar-brand-text">Blackpool Brew</span>
        </Link>

        <div className="navbar-links">
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href} className="navbar-link">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="navbar-actions">
          <ThemeToggle />
          <Link href="/contact" className="navbar-cta">
            Contact Us
          </Link>
          <button
            className="navbar-burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div className={`navbar-mobile ${menuOpen ? "navbar-mobile--open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="navbar-mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="navbar-mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
