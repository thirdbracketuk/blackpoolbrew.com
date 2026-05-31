import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@thirdbracket/bracketui";

const HEADER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Benefits", href: "/benefits" },
  { label: "Ingredients", href: "/ingredients" },
  { label: "Science", href: "/science" },
  { label: "Learn", href: "/learn" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

const FOOTER_EXTRA = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Image src="/logo.png" alt="Blackpool Brew" width={56} height={56} className="footer-logo" />
          <div>
            <p className="footer-brand-name">+44 7432 654441</p>
            <p className="footer-brand-name">info@blackpoolbrew.com</p>
            <p className="footer-brand-name">7 Topping Street, Blackpool, FY1 3AX</p>
          </div>
        </div>
        <div className="footer-links">
          {HEADER_LINKS.map((l) => (
            <Link key={l.label} href={l.href} className="footer-link">{l.label}</Link>
          ))}
          {FOOTER_EXTRA.map((l) => (
            <Link key={l.label} href={l.href} className="footer-link">{l.label}</Link>
          ))}
        </div>
        <div className="footer-right">
          <ThemeToggle />
          <p className="footer-copy">&copy; {new Date().getFullYear()} Blackpool Brew. All rights reserved.</p>
          <p className="footer-credit">
            Built by{" "}
            <a href="https://thirdbracket.co.uk" target="_blank" rel="noopener noreferrer" className="footer-credit-link">
              Third Bracket Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
