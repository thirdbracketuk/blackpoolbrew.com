import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@thirdbracket/bracketui";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Benefits", href: "/benefits" },
  { label: "Ingredients", href: "/ingredients" },
  { label: "Science", href: "/science" },
  { label: "Learn", href: "/learn" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="footer-v2">
      <div className="footer-v2-top">
        <div className="footer-v2-inner">
          {/* Brand column */}
          <div className="footer-v2-brand">
            <div className="footer-v2-logo-wrap">
              <Image
                src="/logo.png"
                alt="Blackpool Brew"
                width={56}
                height={56}
                className="footer-v2-logo"
              />
              <div>
                <p className="footer-v2-brand-name">Blackpool Brew</p>
                <p className="footer-v2-brand-tag">Crafted in Blackpool, UK</p>
              </div>
            </div>
            <p className="footer-v2-brand-desc">
              A warming blend of 14 ancient herbs &amp; spices. Caffeine-free,
              vegan, and independently lab tested.
            </p>
            <a
              href="https://wa.me/447507155382?text=Hi%2C%20I%20want%20to%20know%20about%20Blackpool%20Brew!"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-v2-wa-btn"
            >
              <FaWhatsapp size={15} /> Send us a message
            </a>
          </div>

          {/* Nav column */}
          <div className="footer-v2-nav">
            <p className="footer-v2-col-heading">Explore</p>
            <ul className="footer-v2-nav-list">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="footer-v2-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="footer-v2-contact">
            <p className="footer-v2-col-heading">Get in Touch</p>
            <ul className="footer-v2-contact-list">
              <li>
                <FaPhone size={12} className="footer-v2-contact-icon" />
                <a href="tel:+447507155382" className="footer-v2-link">
                  +44 7507 155382
                </a>
              </li>
              <li>
                <FaEnvelope size={12} className="footer-v2-contact-icon" />
                <a
                  href="mailto:info@blackpoolbrew.com"
                  className="footer-v2-link"
                >
                  info@blackpoolbrew.com
                </a>
              </li>
              <li>
                <FaMapMarkerAlt size={12} className="footer-v2-contact-icon" />
                <span className="footer-v2-address">
                  7-9 Topping Street,
                  <br />
                  Blackpool, FY1 3AX
                </span>
              </li>
            </ul>
            <div className="footer-v2-lab-badge">
              <span className="footer-v2-lab-dot" />
              <span>UKAS Lab Tested · Cert No. 101669</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-v2-bottom">
        <div className="footer-v2-bottom-inner">
          <p className="footer-v2-copy">
            &copy; {new Date().getFullYear()} Blackpool Brew. All rights
            reserved.
          </p>
          <div className="footer-v2-legal">
            {LEGAL_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="footer-v2-link footer-v2-link--small"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="footer-v2-bottom-right">
            <ThemeToggle />
            <p className="footer-v2-credit">
              Built by{" "}
              <a
                href="https://thirdbracket.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-v2-credit-link"
              >
                Third Bracket Ltd
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
