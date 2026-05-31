import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Blackpool Brew | Handcrafted Herbal Blend, Blackpool UK",
  description:
    "Learn the story behind Blackpool Brew — a handcrafted, caffeine-free herbal blend born in Blackpool, UK, rooted in ancient Ayurvedic tradition.",
};

export default function AboutPage() {
  return (
    <div className="page">
      <Navbar />

      <div className="page-top-spacer" />

      <PageHero
        tag="Our Story"
        title="Born in Blackpool. Built for Wellness."
        subtitle="A handcrafted herbal blend rooted in ancient tradition, made with care in the heart of Blackpool, UK."
      />

      {/* ── The Origin ── */}
      <section className="section section--why">
        <div className="section-inner">
          <div className="about-split">
            <div className="about-split-text">
              <span className="section-tag">The Origin</span>
              <h2 className="section-title" style={{ textAlign: "left" }}>
                Where Ancient Meets Modern
              </h2>
              <p className="about-body">
                Blackpool Brew was born from a simple belief: that the most
                powerful wellness tools aren&apos;t found in a pharmacy —
                they&apos;re found in nature. Drawing on centuries of Ayurvedic
                and Unani-Tibb tradition, our blend brings together 14 of the
                most potent herbs and spices ever used in botanical medicine.
              </p>
              <p className="about-body">
                While the ingredients are ancient, our approach is modern.
                Handcrafted in Blackpool, UK — a city with a long history of
                botanical trade — each small batch is prepared with precision to
                preserve the volatile oils that carry the real medicinal value
                of every spice.
              </p>
              <p className="about-body">
                Processing in a temperate climate like Blackpool&apos;s helps
                preserve these volatile oils that would otherwise evaporate in
                the high heat of the countries where the spices are grown — like
                India or Indonesia. The result is a brew that delivers the full
                spectrum of botanical benefit in every cup.
              </p>
            </div>
            <div className="about-split-visual">
              <div className="about-logo-wrap">
                <Image
                  src="/logo.png"
                  alt="Blackpool Brew"
                  width={400}
                  height={400}
                  className="about-logo-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Philosophy ── */}
      <section className="section section--brew">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Our Philosophy</span>
            <h2 className="section-title">A Polyherbal Formulation</h2>
            <p className="section-sub">
              In herbalism, we look at &ldquo;synergy&rdquo; — how ingredients
              work together to be more effective than any single one alone.
            </p>
          </div>
          <div className="brew-steps">
            {[
              {
                n: "I",
                title: "The Drivers",
                body: "Ginger, Black Pepper, White Pepper and Cinnamon force blood flow and absorption — opening the cellular doors so every other ingredient can enter your bloodstream.",
              },
              {
                n: "II",
                title: "The Modulators",
                body: "Fennel, Nutmeg, Mace and both Cardamoms balance the nervous system and gut — regulating mood, digestion and cognitive function.",
              },
              {
                n: "III",
                title: "The Sentinels",
                body: "Star Anise, Clove, Black Cumin, Black Onion Seeds and Bay Leaves protect against pathogens and cellular decay — your body&apos;s botanical defence system.",
              },
            ].map((s) => (
              <div key={s.n} className="brew-step">
                <span className="brew-step-num">{s.n}</span>
                <div className="brew-step-body">
                  <h3 className="brew-step-title">{s.title}</h3>
                  <p className="brew-step-text">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Values ── */}
      <section className="section section--why">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">What We Stand For</span>
            <h2 className="section-title">Pure. Natural. Powerful.</h2>
            <p className="section-sub">
              Everything your body deserves. Nothing it doesn&apos;t.
            </p>
          </div>
          <div className="why-grid">
            {[
              {
                icon: "🚫",
                color: "green",
                title: "Caffeine-Free",
                body: "All the ritual, none of the jitters. Enjoy a warming cup any time of day — morning, afternoon or evening — without disrupting your sleep.",
              },
              {
                icon: "❌",
                color: "green",
                title: "No Added Sugars",
                body: "We let the natural sweetness of the spices speak for themselves. Add honey or sugar to taste — the choice is always yours.",
              },
              {
                icon: "🧪",
                color: "green",
                title: "No Artificial Additives",
                body: "No artificial colouring, no preservatives, no fillers. Just 14 pure, handpicked herbs and spices — nothing more.",
              },
              {
                icon: "💚",
                color: "green",
                title: "Vegan & Vegetarian",
                body: "Thoughtfully crafted for every lifestyle. Fully plant-based and enjoyed by people of all dietary preferences.",
              },
              {
                icon: "🏡",
                color: "gold",
                title: "Handcrafted in Blackpool",
                body: "Small-batch production in Blackpool, UK ensures quality control and freshness that large-scale manufacturing simply cannot match.",
              },
              {
                icon: "🌍",
                color: "teal",
                title: "Sustainably Sourced",
                body: "Our ingredients are sourced from trusted suppliers who share our commitment to quality, purity and responsible farming practices.",
              },
            ].map((w) => (
              <div key={w.title} className="why-card">
                <div className={`why-icon why-icon--${w.color}`}>
                  <span>{w.icon}</span>
                </div>
                <h3 className="why-title">{w.title}</h3>
                <p className="why-body">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Micro-Dose ── */}
      <section className="section section--possibilities">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">The Precision</span>
            <h2 className="section-title">Why 0.4g?</h2>
            <p className="section-sub">
              Most people think &ldquo;more is better.&rdquo; In botanical
              chemistry, precision is everything.
            </p>
          </div>
          <div className="poss-grid">
            {[
              {
                icon: "🔬",
                title: "Rapid Absorption",
                body: "The hot water extraction pulls out essential oils immediately. With very little bulk fibre, bioactive compounds reach your system almost instantly.",
              },
              {
                icon: "⚗️",
                title: "Hormetic Stress",
                body: "Spices like Clove and Black Cumin provide a tiny spark that triggers your body&apos;s own antioxidant production — a process called hormesis.",
              },
              {
                icon: "💧",
                title: "Steam Distillation",
                body: "When you pour boiling water, you perform a steam distillation in your cup — releasing 14 chemical compounds into a bio-available liquid.",
              },
              {
                icon: "🧬",
                title: "A Catalytic Dose",
                body: "At 0.4g, this brew is not food — it is a signal. It tells your cells to produce antioxidants, strengthen gut junctions and increase mitochondrial energy.",
              },
            ].map((p, i) => (
              <div
                key={p.title}
                className="poss-card"
                style={{ "--i": i } as React.CSSProperties}
              >
                <div className="poss-card-icon">
                  <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                </div>
                <h3 className="poss-card-title">{p.title}</h3>
                <p className="poss-card-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--cta">
        <div className="cta-banner">
          <div className="cta-banner-content">
            <span className="cta-banner-tag">🎁 Limited Time Offer</span>
            <h2 className="cta-banner-title">Experience It Yourself</h2>
            <p className="cta-banner-sub">
              The best way to understand Blackpool Brew is to taste it. Claim
              your free sample today — no commitment required.
            </p>
            <div className="cta-banner-actions">
              <a
                href="https://wa.me/447507155382?text=Hi%2C%20I%27d%20like%20to%20claim%20my%20free%20Blackpool%20Brew%20sample!"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-banner-btn"
              >
                <FaWhatsapp size={20} /> Claim Your Free Sample
              </a>
              <p className="cta-banner-note">
                No commitment · Free delivery · While stocks last
              </p>
            </div>
          </div>
          <div className="cta-banner-logo">
            <Image
              src="/icon.png"
              alt=""
              aria-hidden="true"
              width={600}
              height={600}
              className="cta-banner-logo-img"
            />
          </div>
        </div>
      </section>

      <div className="inner-page-nav">
        <Link href="/ingredients" className="inner-page-nav-link">
          Explore Ingredients →
        </Link>
        <Link href="/benefits" className="inner-page-nav-link">
          View Benefits →
        </Link>
        <Link href="/science" className="inner-page-nav-link">
          The Science →
        </Link>
      </div>

      <Footer />
    </div>
  );
}
