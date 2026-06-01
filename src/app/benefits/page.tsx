import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Benefits | Blackpool Brew — 5 Wellness Pillars",
  description:
    "Discover how Blackpool Brew supports gut health, mental clarity, immunity, mood and focus through 14 ancient herbs and spices.",
};

const BENEFITS = [
  {
    icon: "🍃",
    pillar: "Gut Health",
    tag: "The Digestive Fire",
    headline: "Your Gut Is Your Second Brain",
    body: 'Often called the "second brain," your gut is home to trillions of microbes that influence everything from digestion to mood. Nearly every ingredient in Blackpool Brew is a carminative (gas-reliever) or digestive stimulant.',
    keyIngredients: [
      "Fennel Seeds",
      "Ginger",
      "Black Peppercorn",
      "White Peppercorn",
      "Green Cardamom",
    ],
    mechanism:
      "Fennel Seeds are the gold standard for gut health — they relax the smooth muscles of the digestive tract to stop cramping and bloating. Ginger and both Peppercorns create thermogenesis, physically warming the stomach and stimulating the production of hydrochloric acid and enzymes needed to break down heavy proteins and fats.",
    benefit:
      "Better nutrient absorption, reduced bloating, and a calmer, more efficient digestive system.",
    compound: "Anethole (Fennel) · Gingerol (Ginger) · Piperine (Pepper)",
  },
  {
    icon: "🧠",
    pillar: "Mental Clarity",
    tag: "The Brain Boosters",
    headline: "Clear the Fog. Sharpen the Mind.",
    body: "Mental clarity refers to the ability to think clearly, remember information, and stay sharp without brain fog. These spices help by improving blood flow and regulating blood sugar — the brain's primary fuel source.",
    keyIngredients: [
      "Cinnamon",
      "Nutmeg",
      "Mace",
      "Black Cardamom",
      "Bay Leaves",
    ],
    mechanism:
      "Cinnamon stabilises blood sugar levels — when your blood sugar is stable, you avoid the mental crash and fatigue that kills focus. Nutmeg and Mace both come from the same fruit (Myristica fragrans) and contain Myristicin, which has neuroprotective qualities and is traditionally used to sharpen memory and concentration.",
    benefit:
      "Faster processing speed, improved short-term memory, and sustained mental focus throughout the day.",
    compound:
      "Cinnamaldehyde (Cinnamon) · Myristicin (Nutmeg/Mace) · Cineole (Black Cardamom)",
  },
  {
    icon: "🛡️",
    pillar: "Immunity Support",
    tag: "The Antiviral Shield",
    headline: "Your Body's Botanical Defence System",
    body: "Your body's defence system against pathogens like viruses and bacteria. This blend is exceptionally rich in antimicrobial and antiviral compounds — some of the most potent found in the natural world.",
    keyIngredients: [
      "Star Anise",
      "Cloves",
      "Black Cumin Seeds",
      "Black Onion Seeds",
    ],
    mechanism:
      "Star Anise contains Shikimic Acid — the primary precursor used globally to manufacture Tamiflu. It prevents viruses from budding and spreading between cells. Clove contains Eugenol, one of the most powerful natural antiseptics known. Black Cumin and Black Onion Seeds are both high in Thymoquinone, which modulates the immune system and helps fight respiratory infections.",
    benefit:
      "Resilience against seasonal illnesses, faster recovery times, and a stronger innate immune response.",
    compound:
      "Shikimic Acid (Star Anise) · Eugenol (Clove) · Thymoquinone (Black Cumin/Onion)",
  },
  {
    icon: "🧘",
    pillar: "Mood Support",
    tag: "The Nervous System Calmers",
    headline: "Grounded. Balanced. Calm.",
    body: "Emotional regulation and the management of daily stress levels. While some spices energise, others soothe the nervous system to prevent stress-induced burnout. The aroma alone begins working before the first sip.",
    keyIngredients: ["Green Cardamom", "Mace", "Nutmeg", "Bay Leaves"],
    mechanism:
      "Green Cardamom is known in Ayurveda as a cooling spice — it helps balance the heat of the peppers and acts as a mild antidepressant by clearing toxins that affect mood. Mace offers a gentle sedative effect on the nervous system, helping to manage anxiety and promote a sense of groundedness. When you pour boiling water, volatile terpenes from Cardamom and Bay Leaves are inhaled directly, reaching the limbic system before the liquid even touches your tongue.",
    benefit:
      "Reduced feelings of anxiety, a more stable emotional baseline, and a natural sense of calm.",
    compound:
      "Linalool (Cardamom) · Myristicin (Mace/Nutmeg) · Cineole (Bay Leaves)",
  },
  {
    icon: "⚡",
    pillar: "Focus & Energy",
    tag: "The Bioavailability Key",
    headline: "Sustained Energy. No Crash.",
    body: "The ability to maintain attention on a task and the physical vitality to get through the day — without the crash associated with high caffeine. This blend uses metabolic heat rather than stimulants.",
    keyIngredients: [
      "Black Peppercorn",
      "White Peppercorn",
      "Ginger",
      "Cinnamon",
      "Black Cardamom",
    ],
    mechanism:
      "The most important secret in this blend is Black Pepper. Piperine can increase the bioavailability of other nutrients by up to 2000% — it inhibits the liver enzymes that would normally flush out beneficial compounds. Black Cardamom and Bay Leaves contain Cineole, which opens the bronchioles (airways), meaning more oxygen reaches your cells — the literal fuel for ATP energy production.",
    benefit:
      "Consistent productivity, physical stamina, and clean energy without the jitters or afternoon slump.",
    compound:
      "Piperine (Black/White Pepper) · Gingerol (Ginger) · Cineole (Black Cardamom)",
  },
];

export default function BenefitsPage() {
  return (
    <div className="page">
      <Navbar />
      <div className="page-top-spacer" />

      <PageHero
        tag="Wellness Pillars"
        title="5 Benefits. 14 Ingredients. One Brew."
        subtitle="Blackpool Brew targets five interconnected areas of daily wellness — each supported by specific compounds found in our 14-ingredient blend."
      />

      {/* ── Gut-Brain Axis Intro ── */}
      <section className="section section--brew">
        <div className="section-inner">
          <div className="brew-note" style={{ marginBottom: "2rem" }}>
            <span className="brew-note-icon">🔗</span>
            <p>
              <strong>The Gut-Brain Axis:</strong> These five pillars are deeply
              interconnected. About 90% of your body&apos;s serotonin (the
              &ldquo;feel-good&rdquo; hormone) is produced in the gut. Improving
              Gut Health often leads to natural improvements in Mood Support and
              Mental Clarity — which is why a holistic blend like this is more
              effective than targeting a single system.
            </p>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      {BENEFITS.map((b, i) => (
        <section
          key={b.pillar}
          id={b.pillar
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "")}
          className={`section ${i % 2 === 0 ? "section--why" : "section--possibilities"}`}
        >
          <div className="section-inner">
            <div className="benefit-block">
              <div className="benefit-block-header">
                <span className="benefit-icon">{b.icon}</span>
                <div>
                  <span className="section-tag">{b.tag}</span>
                  <h2 className="benefit-title">{b.pillar}</h2>
                  <p className="benefit-headline">{b.headline}</p>
                </div>
              </div>
              <div className="benefit-block-body">
                <div className="benefit-text-col">
                  <p className="about-body">{b.body}</p>
                  <p className="about-body">{b.mechanism}</p>
                  <div className="brew-note">
                    <span className="brew-note-icon">✔️</span>
                    <p>
                      <strong>Key Benefit:</strong> {b.benefit}
                    </p>
                  </div>
                  <div className="benefit-compound-row">
                    <span className="benefit-compound-label">
                      Active Compounds:
                    </span>
                    <span className="benefit-compound-value">{b.compound}</span>
                  </div>
                </div>
                <div className="benefit-ing-col">
                  <p className="benefit-ing-label">Key Ingredients</p>
                  <div className="benefit-ing-pills">
                    {b.keyIngredients.map((ing) => (
                      <span key={ing} className="hero-pill">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="section section--cta">
        <div className="cta-banner">
          <div className="cta-banner-content">
            <span className="cta-banner-tag">🔬 The Science Behind It</span>
            <h2 className="cta-banner-title">Want to Know Why It Works?</h2>
            <p className="cta-banner-sub">
              The benefits don&apos;t happen by accident. Dive into the science
              behind every ingredient and understand the research that backs
              Blackpool Brew.
            </p>
            <div className="cta-banner-actions">
              <Link href="/science" className="cta-banner-btn">
                Know The Science
              </Link>
              <p className="cta-banner-note">
                Research-backed · Evidence-based · Transparently brewed
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
          Meet the Ingredients →
        </Link>
        <Link href="/science" className="inner-page-nav-link">
          The Science →
        </Link>
        <Link href="/learn" className="inner-page-nav-link">
          How to Brew →
        </Link>
      </div>

      <Footer />
    </div>
  );
}
