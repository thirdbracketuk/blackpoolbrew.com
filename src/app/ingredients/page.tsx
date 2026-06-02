import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Ingredients | Blackpool Brew - 14 Ancient Herbs & Spices",
  description:
    "Explore all 14 ingredients in Blackpool Brew - from Fennel Seeds to Ginger - and discover the unique wellness role each one plays.",
};

const INGREDIENTS = [
  {
    num: "01",
    name: "Fennel Seeds",
    icon: "🥖",
    color: "#D4A37380",
    pillar: "Gut Health",
    compound: "Anethole",
    role: "The Digestive Gold Standard",
    desc: "Fennel Seeds are the cornerstone of gut health in this blend. They relax the smooth muscles of the digestive tract, stopping cramping and bloating. Anethole, their primary compound, acts as an anti-spasmodic - preventing the fermentation that causes gas and discomfort.",
    tier: "Modulator",
  },
  {
    num: "02",
    name: "Nutmeg",
    icon: "🟤",
    color: "#b76d5480",
    pillar: "Mental Clarity & Mood",
    compound: "Myristicin",
    role: "The Neuro-Modulator",
    desc: "Nutmeg and Mace both come from the same fruit (Myristica fragrans). In micro-doses, Myristicin acts as a mild MAO inhibitor - keeping your natural feel-good chemicals (Dopamine and Serotonin) active in your brain for longer. It also has neuroprotective qualities that sharpen memory and concentration.",
    tier: "Modulator",
  },
  {
    num: "03",
    name: "White Peppercorn",
    icon: "⚪",
    color: "#e0e0e080",
    pillar: "Focus & Energy",
    compound: "Piperine",
    role: "The Upper Digestive Catalyst",
    desc: "Milder than Black Pepper, White Peppercorn focuses on the upper digestive tract. Its Piperine content inhibits the CYP3A4 enzyme in the liver - the enzyme responsible for breaking down over 50% of all botanical compounds. This ensures the other 13 ingredients actually reach your bloodstream.",
    tier: "Driver",
  },
  {
    num: "04",
    name: "Cinnamon",
    icon: "🪵",
    color: "#b1745680",
    pillar: "Mental Clarity & Energy",
    compound: "Cinnamaldehyde",
    role: "The Blood Sugar Regulator",
    desc: "Cinnamon contains Type-A polymers that increase insulin receptor sensitivity, mimicking insulin and improving glucose uptake in cells. By smoothing out the glucose curve, it provides a steady stream of fuel to the brain - preventing the afternoon slump and keeping focus sharp.",
    tier: "Driver",
  },
  {
    num: "05",
    name: "Black Peppercorn",
    icon: "⚫",
    color: "#42424280",
    pillar: "Focus & Energy",
    compound: "Piperine",
    role: "The Bioavailability Engine",
    desc: "The most critical ingredient in the blend. Black Pepper's Piperine can increase the absorption (bioavailability) of other nutrients by up to 2000%. It inhibits glucuronidation in the liver - the process that flushes out beneficial compounds before they reach your bloodstream. Without it, the rest of the blend is significantly less effective.",
    tier: "Driver",
  },
  {
    num: "06",
    name: "Black Cumin Seeds",
    icon: "🖤",
    color: "#42424280",
    pillar: "Immunity",
    compound: "Thymoquinone",
    role: "The Seed of Blessing",
    desc: 'Often called "the seed of blessing," Black Cumin Seeds (Nigella Sativa) are legendary for immunity and respiratory health. Thymoquinone is a potent Nrf2 activator - it doesn\'t just neutralise free radicals, it programmes your cells to produce their own master antioxidants (Glutathione and Superoxide Dismutase).',
    tier: "Sentinel",
  },
  {
    num: "07",
    name: "Cloves",
    icon: "👃🏿",
    color: "#70534a80",
    pillar: "Immunity",
    compound: "Eugenol",
    role: "The Natural Antiseptic",
    desc: "Cloves have the highest antioxidant ORAC score of any botanical. Eugenol is one of the most powerful natural antiseptics known - it cleanses the mouth and upper GI tract of bad bacteria. It also inhibits NF-κB, the master switch protein that triggers systemic inflammation throughout the body.",
    tier: "Sentinel",
  },
  {
    num: "08",
    name: "Green Cardamom",
    icon: "💚",
    color: "#7cb34280",
    pillar: "Mood & Gut Health",
    compound: "Linalool",
    role: "The Cooling Nervine",
    desc: "Known in Ayurveda as a cooling spice, Green Cardamom balances the heat of the peppers and acts as a mild antidepressant by clearing toxins that affect mood. Its volatile Linalool is released as steam when you pour boiling water - reaching the limbic system via inhalation before the first sip.",
    tier: "Modulator",
  },
  {
    num: "09",
    name: "Star Anise",
    icon: "⭐️",
    color: "#f77e0080",
    pillar: "Immunity",
    compound: "Shikimic Acid",
    role: "The Antiviral Star",
    desc: "Star Anise is the world's primary source of Shikimic Acid - the molecular precursor used to manufacture Tamiflu. This molecule prevents viruses from budding or releasing themselves from an infected cell to spread to others. It also interacts with the Electron Transport Chain in your mitochondria, optimising cellular energy production.",
    tier: "Sentinel",
  },
  {
    num: "10",
    name: "Mace",
    icon: "🩸",
    color: "#e63f3880",
    pillar: "Mental Clarity & Mood",
    compound: "Myristicin",
    role: "The Brain Harmoniser",
    desc: "Mace is the outer covering of the Nutmeg seed - both from Myristica fragrans. It offers a gentle sedative effect on the nervous system, helping to manage anxiety and promote groundedness. In micro-doses, Myristicin acts as a selective MAO inhibitor, extending the life of dopamine and norepinephrine in the brain.",
    tier: "Modulator",
  },
  {
    num: "11",
    name: "Black Onion Seeds",
    icon: "♠️",
    color: "#464c4f80",
    pillar: "Immunity & Detox",
    compound: "Thymoquinone",
    role: "The Liver Protector",
    desc: "Black Onion Seeds (also Nigella Sativa) contain Thymoquinone, which has been shown in studies to protect the liver from toxins. A clean liver means cleaner blood, which results in clearer skin and more consistent energy. They also act as signal jammers against bacterial quorum sensing - disrupting pathogen communication.",
    tier: "Sentinel",
  },
  {
    num: "12",
    name: "Bay Leaves",
    icon: "🍂",
    color: "#c2653980",
    pillar: "Energy & Gut Health",
    compound: "Cineole",
    role: "The Lung Herb",
    desc: "Bay Leaves are lung herbs - they contain Cineole, which helps open the bronchioles (airways). More oxygen in your breath equals more ATP (energy) in your cells. They also contain enzymes that break down complex proteins, reducing the digestive burden on your gut and freeing energy for your brain.",
    tier: "Sentinel",
  },
  {
    num: "13",
    name: "Black Cardamom",
    icon: "🤎",
    color: "#b76d5480",
    pillar: "Respiratory & Energy",
    compound: "Cineole",
    role: "The Deep Detoxifier",
    desc: "Unlike Green Cardamom, Black Cardamom pods are smoked and contain higher concentrations of Cineole. This focuses on respiratory health and deep detox - clearing the bronchial pathways and improving blood oxygenation. Better oxygenation is a deep requirement for both Mental Clarity and sustained Energy.",
    tier: "Sentinel",
  },
  {
    num: "14",
    name: "Ginger",
    icon: "🫚",
    color: "#d59f6980",
    pillar: "Gut Health & Energy",
    compound: "Gingerol",
    role: "The Metabolic Fire",
    desc: "Ginger's Gingerols increase gastric emptying - moving the brew quickly from your stomach to your small intestine where nutrient absorption is highest. Combined with the peppers, it creates the thermogenic heat trio that physically warms the stomach, stimulates digestive enzymes, and boosts metabolism.",
    tier: "Driver",
  },
];

const TIER_COLORS: Record<string, string> = {
  Driver: "#C0403080",
  Modulator: "#4a9e6b99",
  Sentinel: "#6b4fa099",
};

export default function IngredientsPage() {
  return (
    <div className="page">
      <Navbar />
      <div className="page-top-spacer" />

      <PageHero
        tag="The Blend"
        title="14 Ingredients. 14 Reasons to Brew."
        subtitle="Every spice in our blend was chosen with purpose. Ancient wisdom, modern wellness - each one playing a unique and irreplaceable role."
      />

      {/* ── Architecture Overview ── */}
      <section className="section section--brew">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">The Architecture</span>
            <h2 className="section-title">A 3-Tiered Botanical System</h2>
            <p className="section-sub">
              The 14 ingredients are arranged in a Fibonacci-like balance of
              actions - each tier supporting the others.
            </p>
          </div>
          <div className="brew-steps">
            {[
              {
                n: "I",
                title: "The Drivers",
                body: "Ginger, Black Pepper, White Pepper, Cinnamon - force blood flow and absorption, opening the cellular doors so every other ingredient can enter your bloodstream.",
                color: "#C040301a",
              },
              {
                n: "II",
                title: "The Modulators",
                body: "Fennel, Nutmeg, Mace, Green Cardamom, Black Cardamom - balance the nervous system and gut, regulating mood, digestion and cognitive function.",
                color: "#4a9e6b1a",
              },
              {
                n: "III",
                title: "The Sentinels",
                body: "Star Anise, Clove, Black Cumin, Black Onion Seeds, Bay Leaves - protect against pathogens and cellular decay, your body's botanical defence system.",
                color: "#6b4fa01a",
              },
            ].map((s) => (
              <div key={s.n} className="brew-step">
                <span className="brew-step-num" style={{ color: s.color }}>
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

      {/* ── All 14 Ingredients ── */}
      <section className="section section--why">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">All 14 Ingredients</span>
            <h2 className="section-title">Meet the Blend</h2>
            <p className="section-sub">
              Each ingredient, its active compound, and its unique role in the
              formulation.
            </p>
          </div>
          <div className="ing-full-grid">
            {INGREDIENTS.map((ing) => (
              <div
                key={ing.name}
                id={ing.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^a-z0-9-]/g, "")}
                className="ing-full-card"
                style={{ "--ing-color": ing.color } as React.CSSProperties}
              >
                <div className="ing-full-card-top">
                  <span className="ing-full-num">{ing.num}</span>
                  <span className="ing-full-icon">{ing.icon}</span>
                  <span
                    className="ing-full-tier"
                    style={{
                      color: TIER_COLORS[ing.tier],
                      borderColor: TIER_COLORS[ing.tier] + "40",
                      background: TIER_COLORS[ing.tier] + "10",
                    }}
                  >
                    {ing.tier}
                  </span>
                </div>
                <h3 className="ing-full-name">{ing.name}</h3>
                <p className="ing-full-role">{ing.role}</p>
                <p className="ing-full-desc">{ing.desc}</p>
                <div className="ing-full-meta">
                  <span className="ing-full-pillar">✨ {ing.pillar}</span>
                  <span className="ing-full-compound">✨ {ing.compound}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Spectrum Coverage ── */}
      <section className="section section--possibilities">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Full Spectrum</span>
            <h2 className="section-title">Why the Doubles?</h2>
            <p className="section-sub">
              The inclusion of both types of pepper and both types of cardamom
              is intentional - for complete spectrum coverage.
            </p>
          </div>
          <div className="poss-grid">
            {[
              {
                icon: "⚫",
                title: "Black Peppercorn",
                body: "Full-bodied heat. Focuses on systemic inflammation and absorption throughout the entire body.",
              },
              {
                icon: "⚪",
                title: "White Peppercorn",
                body: "Sharper, ferment-like heat. Focuses specifically on the upper digestive tract.",
              },
              {
                icon: "🫘",
                title: "Black Cardamom",
                body: "Smoky, earthy. Better for respiratory health and deep detox via higher Cineole concentration.",
              },
              {
                icon: "🫛",
                title: "Green Cardamom",
                body: "Sweet, floral. Better for cooling the stomach, freshening breath and mood support.",
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
      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="section section--cta">
        <div className="cta-banner">
          <div className="cta-banner-content">
            <span className="cta-banner-tag">
              💚 Real Ingredients, Real Benefits
            </span>
            <h2 className="cta-banner-title">
              See What These Ingredients Do For You
            </h2>
            <p className="cta-banner-sub">
              Every ingredient in Blackpool Brew is there for a reason. Explore
              the full range of health benefits each one brings to your daily
              cup.
            </p>
            <div className="cta-banner-actions">
              <Link href="/benefits" className="cta-banner-btn">
                Explore The Benefits
              </Link>
              <p className="cta-banner-note">Natural · Purposeful · Powerful</p>
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
        <Link href="/benefits" className="inner-page-nav-link">
          View Benefits →
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
