import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact | Blackpool Brew — Get in Touch",
  description:
    "Contact Blackpool Brew. Reach us via WhatsApp, email or phone. Based in Blackpool, UK.",
};

export default function ContactPage() {
  return (
    <div className="page">
      <Navbar />
      <div className="page-top-spacer" />

      <PageHero
        tag="Get in Touch"
        title="We'd Love to Hear From You"
        subtitle="Whether you have a question about the blend, want to claim your free sample, or just want to say hello — we're here."
      />

      {/* ── Contact Details ── */}
      <section className="section section--why">
        <div className="section-inner">
          <div className="contact-grid">
            <div className="contact-details">
              <span className="section-tag">Contact Details</span>
              <h2
                className="section-title"
                style={{ textAlign: "left", marginTop: "0.5rem" }}
              >
                Reach Us Directly
              </h2>
              <p className="about-body" style={{ marginBottom: "2rem" }}>
                We&apos;re a small, crafted brand based in Blackpool, UK. We
                respond to all enquiries personally — usually within a few
                hours.
              </p>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="contact-item-label">WhatsApp (Preferred)</p>
                  <a
                    href="https://wa.me/447507155382"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item-value contact-item-link"
                  >
                    +44 7507 155382
                  </a>
                  <p className="contact-item-note">
                    Fastest response — usually within the hour
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <FaPhone />
                </div>
                <div>
                  <p className="contact-item-label">Phone</p>
                  <a
                    href="tel:+447432654441"
                    className="contact-item-value contact-item-link"
                  >
                    +44 7432 654441
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="contact-item-label">Email</p>
                  <a
                    href="mailto:info@blackpoolbrew.com"
                    className="contact-item-value contact-item-link"
                  >
                    info@blackpoolbrew.com
                  </a>
                  <p className="contact-item-note">
                    We aim to respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="contact-item-label">Address</p>
                  <p className="contact-item-value">7 Topping Street</p>
                  <p className="contact-item-value">Blackpool, FY1 3AX</p>
                  <p className="contact-item-value">United Kingdom</p>
                </div>
              </div>
            </div>

            <div className="contact-cta-panel">
              <div className="contact-cta-card">
                <span className="contact-cta-tag">🎁 Free Sample</span>
                <h3 className="contact-cta-title">Claim Your Free Sample</h3>
                <p className="contact-cta-body">
                  We&apos;re offering free samples of Blackpool Brew to new
                  customers. Message us on WhatsApp and we&apos;ll get one sent
                  to you — completely free, no commitment required.
                </p>
                <a
                  href="https://wa.me/447507155382?text=Hi%2C%20I%27d%20like%20to%20claim%20my%20free%20Blackpool%20Brew%20sample!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-banner-btn"
                  style={{ display: "inline-flex", marginTop: "0.5rem" }}
                >
                  <FaWhatsapp size={18} /> Message Us on WhatsApp
                </a>
                <p className="cta-banner-note" style={{ marginTop: "0.75rem" }}>
                  No commitment · Free delivery · While stocks last
                </p>
              </div>

              <div
                className="contact-cta-card"
                style={{ marginTop: "1.25rem" }}
              >
                <span className="contact-cta-tag">💬 General Enquiries</span>
                <h3 className="contact-cta-title">
                  Questions About the Blend?
                </h3>
                <p className="contact-cta-body">
                  Curious about the ingredients, brewing methods, or the science
                  behind the blend? We love talking about Blackpool Brew. Drop
                  us a message and we&apos;ll be happy to help.
                </p>
                <a
                  href="mailto:info@blackpoolbrew.com"
                  className="cta-banner-btn"
                  style={{
                    display: "inline-flex",
                    marginTop: "0.5rem",
                    background: "var(--surface-inset)",
                    color: "var(--text-primary)",
                    boxShadow: "none",
                    border: "1px solid var(--border)",
                  }}
                >
                  <FaEnvelope size={16} /> Send an Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Business Hours ── */}
      <section className="section section--brew">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Availability</span>
            <h2 className="section-title">When We&apos;re Available</h2>
            <p className="section-sub">
              We&apos;re a small team — but we&apos;re always happy to help.
            </p>
          </div>
          <div
            className="brew-note"
            style={{ maxWidth: "44rem", margin: "0 auto" }}
          >
            <span className="brew-note-icon">🕐</span>
            <div>
              <p>
                <strong>WhatsApp & Phone:</strong> Monday – Saturday, 9am – 7pm
                (GMT)
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                <strong>Email:</strong> Monitored daily. We aim to respond
                within 24 hours on business days.
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                For urgent enquiries, WhatsApp is always the fastest way to
                reach us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
