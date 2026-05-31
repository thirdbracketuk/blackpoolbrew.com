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
  FaChevronDown,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

const INGREDIENTS_MARQUEE = [
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

// Ingredient cards for the Blend section
const BLEND_CARDS = [
  {
    name: "Fennel Seeds",
    icon: "🌿",
    color: "#4a9e6b",
    role: "Gut Health",
    slug: "fennel-seeds",
  },
  {
    name: "Nutmeg",
    icon: "🟤",
    color: "#b88820",
    role: "Clarity",
    slug: "nutmeg",
  },
  {
    name: "White Peppercorn",
    icon: "⚪",
    color: "#9a8a70",
    role: "Energy",
    slug: "white-peppercorn",
  },
  {
    name: "Cinnamon",
    icon: "🪵",
    color: "#C04030",
    role: "Focus",
    slug: "cinnamon",
  },
  {
    name: "Black Peppercorn",
    icon: "⚫",
    color: "#555555",
    role: "Absorption",
    slug: "black-peppercorn",
  },
  {
    name: "Black Cumin",
    icon: "🌱",
    color: "#2a7a5a",
    role: "Immunity",
    slug: "black-cumin-seeds",
  },
  {
    name: "Cloves",
    icon: "🌰",
    color: "#8B3A62",
    role: "Antiviral",
    slug: "cloves",
  },
  {
    name: "Green Cardamom",
    icon: "💚",
    color: "#4CAF50",
    role: "Mood",
    slug: "green-cardamom",
  },
  {
    name: "Black Cardamom",
    icon: "🫛",
    color: "#3d5a3e",
    role: "Oxygenation",
    slug: "black-cardamom",
  },
  {
    name: "Star Anise",
    icon: "⭐",
    color: "#d4a017",
    role: "Immunity",
    slug: "star-anise",
  },
  { name: "Mace", icon: "🧡", color: "#c07820", role: "Mood", slug: "mace" },
  {
    name: "Bay Leaves",
    icon: "🍃",
    color: "#5a8a5a",
    role: "Detox",
    slug: "bay-leaves",
  },
  {
    name: "Black Onion Seeds",
    icon: "🖤",
    color: "#6a5a8a",
    role: "Immunity",
    slug: "black-onion-seeds",
  },
  {
    name: "Ginger",
    icon: "🫚",
    color: "#d4903a",
    role: "Digestion",
    slug: "ginger",
  },
];

// Wellness pillar cards — link to exact anchors in /benefits
const WELLNESS_PILLARS = [
  {
    icon: "🍃",
    title: "Gut Health",
    body: "Fennel, Ginger and both Peppercorns act as carminatives, soothing the digestive tract and stimulating the enzymes needed to break down heavy proteins and fats.",
    anchor: "gut-health",
  },
  {
    icon: "🧠",
    title: "Mental Clarity",
    body: "Cinnamon stabilises blood sugar to prevent the afternoon slump, while Nutmeg and Mace deliver neuroprotective Myristicin to clear brain fog and sharpen memory.",
    anchor: "mental-clarity",
  },
  {
    icon: "🛡️",
    title: "Immunity Support",
    body: "Star Anise provides Shikimic Acid, the molecular precursor used to manufacture Tamiflu. Clove and Black Cumin reinforce the body's natural antiviral defences.",
    anchor: "immunity-support",
  },
  {
    icon: "🧘",
    title: "Mood Support",
    body: "Green Cardamom and Mace act as natural nervines, calming the nervous system and supporting emotional balance. The aroma begins working before the first sip.",
    anchor: "mood-support",
  },
  {
    icon: "⚡",
    title: "Focus and Energy",
    body: "Black Pepper's Piperine increases nutrient absorption by up to 2000%, while Bay Leaves and Black Cardamom contain Cineole to open airways and improve oxygenation.",
    anchor: "focus-energy",
  },
];

// Science cards — link to exact anchors in /science
const SCIENCE_CARDS = [
  {
    icon: <FaFlask />,
    color: "red",
    title: "The Piperine Pathway",
    body: "Black Pepper's Piperine inhibits the liver enzymes that flush out beneficial botanical compounds, increasing the absorption of all 14 ingredients by up to 2000%.",
    anchor: "pathways",
  },
  {
    icon: "🧬",
    color: "teal",
    title: "The Shikimate Pathway",
    body: "Star Anise provides Shikimic Acid — the molecular precursor used to manufacture Tamiflu — directly blocking viral replication at the cellular level.",
    anchor: "pathways",
  },
  {
    icon: "🔬",
    color: "gold",
    title: "The Micro-Dose Strategy",
    body: "At just 0.4g, this is not food — it is a signal. A catalytic dose that triggers your body's own antioxidant production through the Nrf2 pathway.",
    anchor: "microdose",
  },
];

const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Manchester",
    stars: 5,
    body: "I was sceptical at first but after two weeks of having this every morning I genuinely feel more alert and my digestion has been so much better. The taste is warming and complex — nothing like I expected.",
  },
  {
    name: "James T.",
    location: "Preston",
    stars: 5,
    body: "Replaced my morning coffee with this and I haven't looked back. No jitters, no crash — just a steady, calm energy throughout the day. The spice blend is incredible.",
  },
  {
    name: "Priya K.",
    location: "Blackpool",
    stars: 5,
    body: "I grew up drinking spiced teas and this blend is absolutely beautiful. You can tell it's handcrafted with care. The star anise and cardamom come through perfectly.",
  },
  {
    name: "Tom W.",
    location: "Leeds",
    stars: 5,
    body: "Bought a sample on a whim and ended up ordering a full bag within three days. The aroma alone is worth it. My focus in the mornings has been noticeably sharper.",
  },
  {
    name: "Fiona D.",
    location: "Liverpool",
    stars: 4,
    body: "Lovely product. I add a small splash of oat milk and a teaspoon of honey and it's absolutely perfect. Great to find something natural that actually does what it claims.",
  },
  {
    name: "Amir H.",
    location: "Birmingham",
    stars: 5,
    body: "The quality is immediately obvious — the smell when you open the pack is outstanding. I've been recommending it to everyone in my family. A genuinely unique product.",
  },
];

const FAQS = [
  {
    q: "What exactly is Blackpool Brew?",
    a: "Blackpool Brew is a handcrafted herbal blend of 14 ancient herbs and spices, crafted in Blackpool, UK. It is designed to be brewed as a hot drink — similar to tea — and delivers targeted support across five wellness pillars: gut health, mental clarity, immunity, mood, and energy. It contains no caffeine, no added sugar, and no artificial additives.",
  },
  {
    q: "How do I make it?",
    a: "Add ⅛ to ¼ teaspoon (approximately 0.4g) to your cup. Pour freshly boiled water directly over the blend and allow it to steep for 2–3 minutes. Add honey or sugar to taste. For a smoother finish, strain before drinking. You can also add a splash of milk or a plant-based alternative — the fat helps absorb some of the more powerful compounds in the blend.",
  },
  {
    q: "Has Blackpool Brew been independently lab tested?",
    a: "Yes. Our blend is independently tested by AS International Corporation Ltd (trading as Alex Stewart Agriculture), a UKAS-accredited laboratory (No. 4352). The most recent Certificate of Analysis (ref: AL10869-1, April 2026) covers full nutritional analysis including energy, protein, fat, carbohydrates, dietary fibre, sugars, and sodium — all performed to ISO 17025:2017 accreditation standards. You can view full details on our Quality page.",
  },
  {
    q: "Is it vegan and vegetarian friendly?",
    a: "Yes, completely. Blackpool Brew contains only whole plant ingredients — herbs and spices in their natural, dried form. There are no animal products, no gelatine capsules, no dairy, and no honey in the blend itself.",
  },
  {
    q: "How much caffeine does it contain?",
    a: "Blackpool Brew is 100% caffeine-free. None of the 14 ingredients contain caffeine. This makes it suitable to drink any time of day — including in the evening — without affecting your sleep.",
  },
  {
    q: "How long does a bag last?",
    a: "At the recommended serving size of approximately 0.4g (⅛ to ¼ teaspoon), a standard 50g bag provides around 125 servings. Most customers find a bag lasts between 2–4 months depending on daily usage.",
  },
  {
    q: "Can I drink it if I am pregnant or on medication?",
    a: "While all 14 ingredients are natural culinary herbs and spices used in food for centuries, we recommend consulting your GP or healthcare provider before introducing any new herbal product if you are pregnant, breastfeeding, or taking prescribed medication. Some of the ingredients — such as nutmeg and star anise — are potent botanicals and are intended to be used in small, measured doses.",
  },
];

export default function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const pills = document.querySelector(".hero-pills") as HTMLElement;
    if (!pills) return;
    const stripWidth = pills.scrollWidth / 2;
    const speed = 80;
    pills.style.setProperty("--marquee-duration", `${stripWidth / speed}s`);
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
              100% Plant-Based · Handcrafted in Blackpool, UK
            </span>
            <h1 className="hero-headline">
              Ancient Spices.
              <br />
              Modern Wellness.
            </h1>
            <p className="hero-desc">
              A warming aromatic blend of{" "}
              <strong>14 ancient herbs and spices</strong>, crafted to nourish
              your body and awaken your senses. Rich in flavour, naturally
              caffeine-free, and rooted in centuries of Ayurvedic tradition.
            </p>
            <div className="hero-ingredients">
              <p className="hero-ingredients-label">14 Natural Ingredients</p>
              <div className="hero-pills-wrap">
                <div className="hero-pills" aria-hidden="false">
                  {[...INGREDIENTS_MARQUEE, ...INGREDIENTS_MARQUEE].map(
                    (ing, i) => (
                      <span
                        key={i}
                        className="hero-pill"
                        aria-hidden={
                          i >= INGREDIENTS_MARQUEE.length ? "true" : "false"
                        }
                      >
                        {ing}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
            <div className="hero-badges">
              <span className="hero-badge">✓ Caffeine-Free</span>
              <span className="hero-badge">✓ Vegan and Vegetarian</span>
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

      {/* ── Lab Trust Strip ───────────────────────────────────── */}
      <section className="lab-trust-strip">
        <div className="lab-trust-inner">
          <div className="lab-trust-badge">
            <span className="lab-trust-icon">🔬</span>
            <div>
              <p className="lab-trust-label">UKAS Accredited Lab</p>
              <p className="lab-trust-sub">
                Certificate No. 101669 · April 2026
              </p>
            </div>
          </div>
          <div className="lab-trust-divider" />
          <div className="lab-trust-stats">
            <div className="lab-trust-stat">
              <span className="lab-trust-stat-val">✓</span>
              <span className="lab-trust-stat-text">Nutritional Analysis</span>
            </div>
            <div className="lab-trust-stat">
              <span className="lab-trust-stat-val">✓</span>
              <span className="lab-trust-stat-text">ISO 17025:2017</span>
            </div>
            <div className="lab-trust-stat">
              <span className="lab-trust-stat-val">✓</span>
              <span className="lab-trust-stat-text">Independent Testing</span>
            </div>
            <div className="lab-trust-stat">
              <span className="lab-trust-stat-val">✓</span>
              <span className="lab-trust-stat-text">Batch Verified</span>
            </div>
          </div>
          <div className="lab-trust-divider" />
          <Link href="/quality" className="lab-trust-cta">
            View Lab Results <FaArrowRight size={11} />
          </Link>
        </div>
      </section>

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
                body: "No artificial colours, preservatives or added sugars. Pure handpicked herbs and spices, exactly as nature intended.",
              },
              {
                icon: <FaHeartbeat />,
                color: "red",
                title: "Caffeine-Free",
                body: "All the ritual, none of the jitters. Enjoy a warming cup any time of day — morning, afternoon or evening, without disrupting your sleep.",
              },
              {
                icon: "🌱",
                color: "teal",
                title: "Vegan Friendly",
                body: "Thoughtfully crafted for every lifestyle. Fully plant-based, vegan and vegetarian friendly, enjoyed by all.",
              },
              {
                icon: "🏆",
                color: "gold",
                title: "Handcrafted in Blackpool",
                body: "Born and crafted in Blackpool, UK. A local blend with a legacy, inspired by ancient spice traditions from across the world.",
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

      {/* ── Wellness Pillars ──────────────────────────────────── */}
      <section className="section section--possibilities">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Wellness Pillars</span>
            <h2 className="section-title">Five Reasons Every Sip Matters</h2>
            <p className="section-sub">
              Each cup delivers targeted support across five key areas of daily
              wellness. Click a pillar to learn more.
            </p>
          </div>
          <div className="poss-grid">
            {WELLNESS_PILLARS.map((p, i) => (
              <Link
                key={p.title}
                href={`/benefits#${p.anchor}`}
                className="poss-card poss-card--link"
                style={{ "--i": i } as React.CSSProperties}
              >
                <div className="poss-card-icon">
                  <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                </div>
                <h3 className="poss-card-title">{p.title}</h3>
                <p className="poss-card-body">{p.body}</p>
              </Link>
            ))}
          </div>
          <div className="section-cta-row">
            <Link href="/benefits" className="section-cta-btn">
              Explore All Benefits <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── The Blend — Ingredient Cards ──────────────────────── */}
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
              wellness. Click any ingredient to learn its role.
            </p>
          </div>
          <div className="blend-grid">
            {BLEND_CARDS.map((card) => (
              <Link
                key={card.name}
                href={`/ingredients#${card.slug}`}
                className="blend-card"
                style={{ "--blend-color": card.color } as React.CSSProperties}
                title={`Learn about ${card.name}`}
              >
                <span className="blend-card-icon">{card.icon}</span>
                <span className="blend-card-name">{card.name}</span>
                <span className="blend-card-role">{card.role}</span>
              </Link>
            ))}
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
              botanical formulation, not simply a drink. Click a card to explore
              the science.
            </p>
          </div>
          <div className="why-grid">
            {SCIENCE_CARDS.map((w) => (
              <Link
                key={w.title}
                href={`/science#${w.anchor}`}
                className="why-card why-card--link"
              >
                <div className={`why-icon why-icon--${w.color}`}>
                  {typeof w.icon === "string" ? <span>{w.icon}</span> : w.icon}
                </div>
                <h3 className="why-title">{w.title}</h3>
                <p className="why-body">{w.body}</p>
              </Link>
            ))}
          </div>
          <div className="section-cta-row">
            <Link href="/science" className="section-cta-btn">
              Explore the Science <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── How to Brew ───────────────────────────────────────── */}
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
                body: "Add one eighth to one quarter of a teaspoon of the blend to your cup. Start light and build to your preferred strength over time.",
              },
              {
                n: "02",
                title: "Infuse",
                body: "Pour freshly boiled water directly over the blend. Watch the spices bloom as the heat draws out the essential oils and bioactive compounds.",
              },
              {
                n: "03",
                title: "Sweeten",
                body: "Add sugar or honey to taste. Stir gently and allow the blend to gradually settle to the bottom of the cup.",
              },
              {
                n: "04",
                title: "Enjoy",
                body: "Sip and savour slowly. For a smoother finish, strain the mixture before drinking. Try it with a splash of milk to unlock the fat-soluble compounds.",
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

      {/* ── Reviews ───────────────────────────────────────────── */}
      <section className="section section--why">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Customer Reviews</span>
            <h2 className="section-title">What People Are Saying</h2>
            <p className="section-sub">
              Real customers, real results. Here&apos;s what our community
              thinks of Blackpool Brew.
            </p>
          </div>
          <div className="reviews-grid">
            {REVIEWS.map((r) => (
              <div key={r.name} className="review-card">
                <FaQuoteLeft className="review-quote-icon" />
                <p className="review-body">{r.body}</p>
                <div className="review-footer">
                  <div className="review-stars">
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <FaStar key={i} className="review-star" />
                    ))}
                  </div>
                  <div className="review-author">
                    <span className="review-name">{r.name}</span>
                    <span className="review-location">{r.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="section section--possibilities">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Questions &amp; Answers</span>
            <h2 className="section-title">Everything You Need to Know</h2>
            <p className="section-sub">
              Common questions about Blackpool Brew, answered honestly.
            </p>
          </div>
          <div className="hp-faq-list">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`hp-faq-item${openFaq === i ? " hp-faq-item--open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="hp-faq-q">
                  <span>{faq.q}</span>
                  <FaChevronDown className="hp-faq-chevron" />
                </div>
                {openFaq === i && <p className="hp-faq-a">{faq.a}</p>}
              </div>
            ))}
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
              We are offering free samples to new customers. Reach out on
              WhatsApp and we will get one sent to you — no commitment, no fuss,
              just good brew.
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
