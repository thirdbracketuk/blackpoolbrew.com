"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  FaWhatsapp,
  FaLeaf,
  FaHeartbeat,
  FaFlask,
  FaBookOpen,
  FaArrowRight,
} from "react-icons/fa";

const INGREDIENTS = [
  "Fennel Seeds",
  "Nutmeg",
  "White Peppercorn",
  "Black Peppercorn",
  "Cinnamon",
  "Black Cumin Seeds",
  "Cloves",
  "Green Cardamom",
  "Black Cardamom",
  "Star Anise",
  "Mace",
  "Bay Leaves",
  "Black Onion Seeds",
  "Ginger",
];

export default function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="page">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <header className="hero">
        <Image
          src="/sky-cropped.svg"
          alt=""
          aria-hidden="true"
          width={3820}
          height={1080}
          className="hero-skyline-wrapper"
        />
        <div className="hero-panel">
          <div className="hero-logo-side">
            <div className="hero-logo-circle">
              <Image
                src="/logo.png"
                alt="Blackpool Brew"
                width={1600}
                height={1600}
                className="hero-logo"
                priority
              />
            </div>
          </div>
          <div className="hero-copy-side">
            <span className="hero-origin">
              <span className="hero-origin-dot" />
              100% Plant-Based, Handcrafted in Blackpool, UK
            </span>
            <h1 className="hero-headline">
              Brew Your Way
              <br />
              to Wellness.
            </h1>
            <p className="hero-desc">
              A warming aromatic blend of{" "}
              <strong>14 ancient herbs &amp; spices</strong>, crafted to nourish
              your body and awaken your senses — with a naturally spicy kick and
              zero caffeine.
            </p>
            <div className="hero-ingredients">
              <p className="hero-ingredients-label">14 Natural Ingredients</p>
              <div className="hero-pills-wrap">
                <div className="hero-pills" aria-hidden="false">
                  {[...INGREDIENTS, ...INGREDIENTS].map((ing, i) => (
                    <span
                      key={i}
                      className="hero-pill"
                      aria-hidden={i >= INGREDIENTS.length ? "true" : "false"}
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="hero-badges">
              <span className="hero-badge">✓ Caffeine-Free</span>
              <span className="hero-badge">✓ Vegan &amp; Vegetarian</span>
              <span className="hero-badge">✓ No Added Sugar</span>
              <span className="hero-badge">✓ No Preservatives</span>
            </div>
            <div className="hero-cta-row">
              <a
                href="https://wa.me/447507155382?text=Hi%2C%20I%27d%20like%20to%20claim%20my%20free%20Blackpool%20Brew%20sample!"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-btn"
              >
                <FaWhatsapp size={18} /> Claim Your Free Sample
              </a>
              <span className="hero-cta-note">Free samples · Limited time</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── About Preview ─────────────────────────────────────── */}
      <section className="section section--why">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Our Story</span>
            <h2 className="section-title">
              Born in Blackpool.
              <br />
              Built for Wellness.
            </h2>
            <p className="section-sub">
              Blackpool Brew is a handcrafted herbal blend rooted in ancient
              Ayurvedic tradition, made with care in the heart of Blackpool, UK.
            </p>
          </div>
          <div className="why-grid">
            {[
              {
                icon: <FaLeaf />,
                color: "green",
                title: "100% Natural",
                body: "No artificial colours, preservatives, or added sugars. Pure handpicked herbs and spices as nature intended.",
              },
              {
                icon: <FaHeartbeat />,
                color: "red",
                title: "Caffeine-Free",
                body: "All the ritual, none of the jitters. Enjoy a warming cup any time of day — morning, afternoon or evening.",
              },
              {
                icon: "🌱",
                color: "teal",
                title: "Vegan Friendly",
                body: "Thoughtfully crafted for every lifestyle. Fully vegan and vegetarian friendly — enjoyed by all.",
              },
              {
                icon: "🏆",
                color: "gold",
                title: "Handcrafted in Blackpool",
                body: "Born and crafted in Blackpool, UK. A local blend with a legacy, inspired by ancient spice traditions.",
              },
            ].map((w) => (
              <div key={w.title} className="why-card">
                <div className={`why-icon why-icon--${w.color}`}>
                  {typeof w.icon === "string" ? <span>{w.icon}</span> : w.icon}
                </div>
                <h3 className="why-title">{w.title}</h3>
                <p className="why-body">{w.body}</p>
              </div>
            ))}
          </div>
          <div className="section-cta-row">
            <Link href="/about" className="section-cta-btn">
              Our Full Story <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Benefits Preview ──────────────────────────────────── */}
      <section className="section section--possibilities">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Wellness Pillars</span>
            <h2 className="section-title">5 Reasons Every Sip Matters</h2>
            <p className="section-sub">
              Each cup delivers targeted support across five key areas of daily
              wellness.
            </p>
          </div>
          <div className="poss-grid">
            {[
              {
                icon: "🍃",
                title: "Gut Health",
                body: "Fennel, Ginger and Black Pepper work as carminatives — soothing the digestive tract and reducing bloating.",
              },
              {
                icon: "🧠",
                title: "Mental Clarity",
                body: "Cinnamon stabilises blood sugar while Nutmeg and Mace provide neuroprotective support to clear brain fog.",
              },
              {
                icon: "🛡️",
                title: "Immunity Support",
                body: "Star Anise contains Shikimic Acid — the same compound used in antiviral medicines. Clove and Black Cumin reinforce the shield.",
              },
              {
                icon: "🧘",
                title: "Mood Support",
                body: "Green Cardamom and Mace act as natural nervines, calming the nervous system and supporting emotional balance.",
              },
              {
                icon: "⚡",
                title: "Focus & Energy",
                body: "Black Pepper's Piperine boosts nutrient absorption by up to 2000%, while Bay Leaves and Black Cardamom improve oxygenation.",
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
          <div className="section-cta-row">
            <Link href="/benefits" className="section-cta-btn">
              Explore All Benefits <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Ingredients Preview ───────────────────────────────── */}
      <section className="section section--brew">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">The Blend</span>
            <h2 className="section-title">
              14 Ingredients.
              <br />
              14 Reasons to Brew.
            </h2>
            <p className="section-sub">
              Every spice was chosen with purpose. Ancient wisdom, modern
              wellness.
            </p>
          </div>
          <div className="preview-ing-grid">
            {[
              "Fennel Seeds",
              "Cinnamon",
              "Star Anise",
              "Ginger",
              "Cloves",
              "Black Cumin Seeds",
            ].map((name) => (
              <div key={name} className="preview-ing-pill">
                {name}
              </div>
            ))}
            <div className="preview-ing-pill preview-ing-pill--more">
              +8 more
            </div>
          </div>
          <div className="section-cta-row">
            <Link href="/ingredients" className="section-cta-btn">
              Meet All 14 Ingredients <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Science Preview ───────────────────────────────────── */}
      <section className="section section--why">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">The Science</span>
            <h2 className="section-title">
              Ancient Wisdom.
              <br />
              Modern Chemistry.
            </h2>
            <p className="section-sub">
              At just 0.4g per serving, Blackpool Brew operates as a precision
              botanical formulation — not just a drink.
            </p>
          </div>
          <div className="why-grid">
            {[
              {
                icon: <FaFlask />,
                color: "red",
                title: "The Piperine Pathway",
                body: "Black Pepper's Piperine inhibits liver enzymes that flush out beneficial compounds, increasing absorption of all 14 ingredients by up to 2000%.",
              },
              {
                icon: "🧬",
                color: "teal",
                title: "The Shikimate Pathway",
                body: "Star Anise provides Shikimic Acid — the molecular precursor used to manufacture Tamiflu — directly blocking viral replication.",
              },
              {
                icon: "🔬",
                color: "gold",
                title: "The Micro-Dose Strategy",
                body: "At 0.4g, this isn't food — it's a signal. A catalytic dose that triggers your body's own antioxidant production via the Nrf2 pathway.",
              },
            ].map((w) => (
              <div key={w.title} className="why-card">
                <div className={`why-icon why-icon--${w.color}`}>
                  {typeof w.icon === "string" ? <span>{w.icon}</span> : w.icon}
                </div>
                <h3 className="why-title">{w.title}</h3>
                <p className="why-body">{w.body}</p>
              </div>
            ))}
          </div>
          <div className="section-cta-row">
            <Link href="/science" className="section-cta-btn">
              Explore the Science <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Learn Preview ─────────────────────────────────────── */}
      <section className="section section--possibilities">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">How to Brew</span>
            <h2 className="section-title">
              Simple Steps.
              <br />
              Extraordinary Results.
            </h2>
            <p className="section-sub">
              Master the ritual in minutes. Discover every way to enjoy your
              brew.
            </p>
          </div>
          <div className="brew-steps">
            {[
              {
                n: "01",
                title: "Measure",
                body: "Add ⅛ to ¼ teaspoon of the blend to your cup — start light and build to your preferred strength.",
              },
              {
                n: "02",
                title: "Infuse",
                body: "Pour freshly boiled water directly over the blend. Watch the spices bloom as they infuse.",
              },
              {
                n: "03",
                title: "Sweeten",
                body: "Add sugar or honey to taste. Stir gently and let the blend gradually settle to the bottom.",
              },
              {
                n: "04",
                title: "Enjoy",
                body: "Sip and savour. For a smoother finish, strain the mixture entirely before drinking.",
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
          <div className="section-cta-row">
            <Link href="/learn" className="section-cta-btn">
              <FaBookOpen size={14} /> Full Brewing Guide{" "}
              <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="section section--cta">
        <div className="cta-banner">
          <div className="cta-banner-content">
            <span className="cta-banner-tag">🎁 Limited Time Offer</span>
            <h2 className="cta-banner-title">Try It Free Today</h2>
            <p className="cta-banner-sub">
              We&apos;re offering free samples to new customers. Reach out on
              WhatsApp and we&apos;ll get one sent to you.
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

      <Footer />
    </div>
  );
}
