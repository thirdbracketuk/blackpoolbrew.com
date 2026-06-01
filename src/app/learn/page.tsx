import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import {
  FaMugHot,
  FaSnowflake,
  FaUtensils,
  FaGlassWhiskey,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Learn | Blackpool Brew — How to Brew, Serve & Enjoy",
  description:
    "Master the art of brewing Blackpool Brew. Learn how to brew the perfect cup, serving variations, tips for strength, and culinary uses.",
};

export default function LearnPage() {
  return (
    <div className="page">
      <Navbar />
      <div className="page-top-spacer" />

      <PageHero
        tag="The Ritual"
        title="How to Brew the Perfect Cup"
        subtitle="Simple steps, extraordinary results. Master the ritual in minutes and discover every way to enjoy your Blackpool Brew."
      />

      {/* ── Core Brewing Steps ── */}
      <section className="section section--brew">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">The Classic Brew</span>
            <h2 className="section-title">For the Perfect Cup</h2>
            <p className="section-sub">
              The foundational method. Four steps to an extraordinary brew.
            </p>
          </div>
          <div className="brew-steps">
            {[
              {
                n: "01",
                title: "Measure",
                body: "Add ⅛ to ¼ teaspoon (approximately 0.4g) of the blend to your favourite mug or cup. Start light — you can always add more to build to your preferred strength.",
              },
              {
                n: "02",
                title: "Infuse",
                body: "Pour freshly boiled water (100°C) directly over the blend. The heat is essential — it breaks the cell walls of the spices, releasing the essential oils and active compounds into the water. Watch the spices bloom as they infuse.",
              },
              {
                n: "03",
                title: "Sweeten",
                body: "Add sugar or honey to taste. Stir gently and let the blend gradually settle to the bottom of the cup. Allow 1–2 minutes for full infusion.",
              },
              {
                n: "04",
                title: "Enjoy",
                body: "Sip and savour. For a smoother finish, strain the mixture entirely through a fine mesh strainer before drinking. The blend fragments are safe to consume — discard any build-up left at the bottom.",
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
          <div className="brew-note">
            <span className="brew-note-icon">💡</span>
            <p>
              <strong>Pro Tip:</strong> Adding a splash of milk or a plant-based
              fat (like oat milk) enhances the brew. Many of the active
              compounds — including Nutmeg, Mace and Cinnamon — are fat-soluble.
              Fats help transport these nutrients across the gut barrier and
              into the bloodstream for maximum benefit.
            </p>
          </div>
        </div>
      </section>

      {/* ── Strength Guide ── */}
      <section className="section section--why">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Strength Guide</span>
            <h2 className="section-title">Find Your Perfect Strength</h2>
            <p className="section-sub">
              Blackpool Brew is highly concentrated. A little goes a long way.
            </p>
          </div>
          <div className="why-grid">
            {[
              {
                icon: "🌸",
                color: "green",
                title: "Gentle (⅛ tsp)",
                body: "A subtle, warming introduction. Ideal for first-time brewers or those who prefer a lighter, more delicate flavour profile. Perfect for evenings.",
              },
              {
                icon: "☕",
                color: "red",
                title: "Classic (¼ tsp)",
                body: "The recommended serving. A balanced, aromatic brew with a satisfying spicy warmth. The sweet spot for most people.",
              },
              {
                icon: "🔥",
                color: "gold",
                title: "Bold (½ tsp)",
                body: "For experienced brewers who want the full intensity of all 14 spices. A powerful, deeply aromatic cup with a pronounced kick.",
              },
              {
                icon: "💊",
                color: "teal",
                title: "Wellness Shot",
                body: "Simmer ½ tsp in a small amount of water with honey for a concentrated wellness shot. A potent, quick-absorbing botanical boost.",
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

      {/* ── Serving Variations ── */}
      <section className="section section--possibilities">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Serving Variations</span>
            <h2 className="section-title">Endless Possibilities</h2>
            <p className="section-sub">
              One blend. Infinite ways to enjoy it. Explore every serving style.
            </p>
          </div>
          <div className="poss-grid">
            {[
              {
                icon: <FaMugHot size={28} />,
                title: "Classic Hot Brew",
                body: "The timeless way. Pour over boiling water, stir, sweeten to taste, and let the blend work its magic in your favourite mug. Best enjoyed in the morning or after a meal.",
              },
              {
                icon: <FaSnowflake size={28} />,
                title: "Chilled & Iced",
                body: "Brew as normal using the classic method, allow to cool to room temperature, then refrigerate for 1–2 hours. Serve over ice for a refreshing cold spiced drink. Perfect for summer.",
              },
              {
                icon: <FaMugHot size={28} />,
                title: "Enhanced Beverages",
                body: "Add a pinch of the blend to your usual tea, coffee, hot chocolate or warm milk for an unexpected aromatic twist. Pairs beautifully with chai, masala tea or golden milk.",
              },
              {
                icon: <FaGlassWhiskey size={28} />,
                title: "Spiced Latte",
                body: "Brew a strong cup, strain, then top with steamed milk or a plant-based alternative. Add honey and a pinch of cinnamon on top for a warming spiced latte experience.",
              },
              {
                icon: <FaUtensils size={28} />,
                title: "Culinary Use",
                body: "Use as a cooking spice blend to add depth, warmth and aroma to savoury and sweet recipes. Excellent as a dry rub for roasted root vegetables, proteins, or stirred into rice dishes.",
              },
              {
                icon: "🍯",
                title: "Honey Infusion",
                body: "Mix a small amount of the blend into raw honey and allow to infuse for 24 hours. Use the spiced honey in teas, on toast, or as a natural sweetener with added botanical benefits.",
              },
            ].map((p, i) => (
              <div
                key={p.title}
                className="poss-card"
                style={{ "--i": i } as React.CSSProperties}
              >
                <div className="poss-card-icon">
                  {typeof p.icon === "string" ? (
                    <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                  ) : (
                    p.icon
                  )}
                </div>
                <h3 className="poss-card-title">{p.title}</h3>
                <p className="poss-card-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sweetener Guide ── */}
      <section className="section section--brew">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Sweetener Guide</span>
            <h2 className="section-title">What to Add</h2>
            <p className="section-sub">
              The right sweetener can enhance both the flavour and the wellness
              benefits of your brew.
            </p>
          </div>
          <div className="brew-steps">
            {[
              {
                n: "🍯",
                title: "Raw Honey",
                body: "The best choice. Honey contains enzymes that work synergistically with Ginger to soothe the throat. It also adds a natural sweetness that complements the spice profile without overpowering it.",
              },
              {
                n: "🌿",
                title: "Coconut Sugar",
                body: "A lower-glycaemic alternative with a subtle caramel note. Works well with the warming spices and doesn't spike blood sugar as sharply as refined sugar.",
              },
              {
                n: "🍬",
                title: "White or Brown Sugar",
                body: "The classic choice. Dissolves easily and lets the spice flavours take centre stage. Brown sugar adds a slight molasses depth that pairs well with the blend.",
              },
              {
                n: "🌱",
                title: "Stevia or Sweetener",
                body: "For those monitoring sugar intake. Use sparingly — the blend has natural warmth that can stand on its own without much sweetening.",
              },
            ].map((s) => (
              <div key={s.title} className="brew-step">
                <span className="brew-step-num" style={{ fontSize: "1.2rem" }}>
                  {s.n}
                </span>
                <div className="brew-step-body">
                  <h3 className="brew-step-title">{s.title}</h3>
                  <p className="brew-step-text">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section--why">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Common Questions</span>
            <h2 className="section-title">Brewing FAQ</h2>
            <p className="section-sub">
              Everything you need to know to get the most from your brew.
            </p>
          </div>
          <div className="faq-list">
            {[
              {
                q: "Is it safe to drink the blend fragments?",
                a: "Yes. Fragments of the blend are safe to consume. If you prefer a completely smooth drink, simply strain the mixture through a fine mesh strainer before drinking. Discard any build-up left at the bottom of the cup.",
              },
              {
                q: "How many cups can I have per day?",
                a: "We recommend 1–2 cups per day. Because the blend is highly concentrated and bio-active, there is no need to exceed this. The 0.4g serving is a precision dose — more is not necessarily better.",
              },
              {
                q: "Can I drink it on an empty stomach?",
                a: "Yes, though some people find the warming spices (particularly Ginger and Pepper) more comfortable after a light meal. If you experience any discomfort, try having it with food or reducing the amount slightly.",
              },
              {
                q: "Can I add milk?",
                a: "Absolutely. Adding a splash of milk or a plant-based fat (oat milk, almond milk) actually enhances the brew. Many active compounds — including Nutmeg, Mace and Cinnamon — are fat-soluble, meaning fats help transport them into your bloodstream.",
              },
              {
                q: "How should I store the blend?",
                a: "Store in a cool, dry place away from direct sunlight. Keep the container tightly sealed to preserve the volatile oils that carry the medicinal value of the spices. Do not store near heat sources.",
              },
              {
                q: "Is it suitable during pregnancy?",
                a: "We recommend consulting your healthcare provider before consuming any herbal blend during pregnancy or while breastfeeding, as some spices (particularly Nutmeg and Mace in larger quantities) may not be suitable.",
              },
            ].map((item) => (
              <div key={item.q} className="faq-item">
                <h3 className="faq-q">{item.q}</h3>
                <p className="faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="section section--cta">
        <div className="cta-banner">
          <div className="cta-banner-content">
            <span className="cta-banner-tag">🏅 Quality You Can Trust</span>
            <h2 className="cta-banner-title">
              We Don&apos;t Just Talk About Quality
            </h2>
            <p className="cta-banner-sub">
              Everything you&apos;ve learned about Blackpool Brew is backed by
              rigorous quality standards. See exactly how we ensure every batch
              meets our promise.
            </p>
            <div className="cta-banner-actions">
              <Link href="/quality" className="cta-banner-btn">
                Our Quality Standards
              </Link>
              <p className="cta-banner-note">Tested · Verified · Trusted</p>
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
          Meet the Ingredients →
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
