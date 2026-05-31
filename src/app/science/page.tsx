import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title:
    "The Science | Blackpool Brew — Molecular Chemistry & Botanical Synergy",
  description:
    "Explore the science behind Blackpool Brew — from the Piperine Pathway to the Shikimate Antiviral Pathway and the Nrf2 antioxidant response.",
};

const CHEMICAL_PROFILE = [
  {
    ingredient: "Star Anise",
    compound: "Shikimic Acid",
    impact: "Immunity: Viral Defence",
  },
  {
    ingredient: "Cinnamon",
    compound: "Cinnamaldehyde",
    impact: "Energy: Blood Sugar Stability",
  },
  {
    ingredient: "Nutmeg / Mace",
    compound: "Myristicin",
    impact: "Clarity / Mood: Neuro-protection",
  },
  {
    ingredient: "Cloves",
    compound: "Eugenol",
    impact: "Immunity: Anti-microbial",
  },
  {
    ingredient: "Fennel Seeds",
    compound: "Anethole",
    impact: "Gut: Anti-spasmodic (No bloat)",
  },
  {
    ingredient: "Black Cumin",
    compound: "Thymoquinone",
    impact: "Systemic: Total Body Inflammation",
  },
  {
    ingredient: "Black / White Pepper",
    compound: "Piperine",
    impact: "Absorption: Bioavailability Engine",
  },
  {
    ingredient: "Ginger",
    compound: "Gingerol",
    impact: "Gut / Energy: Gastric Motility",
  },
  {
    ingredient: "Green Cardamom",
    compound: "Linalool",
    impact: "Mood: Nervous System Calm",
  },
  {
    ingredient: "Black Cardamom / Bay Leaves",
    compound: "Cineole",
    impact: "Energy: Respiratory Oxygenation",
  },
];

const SYNERGY_TABLE = [
  {
    category: "The Catalysts",
    compounds: "Piperine, Gingerol",
    action: "Opens the cellular doors for absorption.",
  },
  {
    category: "The Protectors",
    compounds: "Shikimic Acid, Eugenol",
    action: "Blocks viral/bacterial entry and reduces inflammation.",
  },
  {
    category: "The Regulators",
    compounds: "Cinnamaldehyde, Anethole",
    action: "Manages blood sugar and prevents gut spasms/bloat.",
  },
  {
    category: "The Clarifiers",
    compounds: "Myristicin, Cineole",
    action: "Sharpens neurotransmitter response and oxygen flow.",
  },
];

export default function SciencePage() {
  return (
    <div className="page">
      <Navbar />
      <div className="page-top-spacer" />

      <PageHero
        tag="The Science"
        title="Ancient Wisdom. Modern Chemistry."
        subtitle="At just 0.4g per serving, Blackpool Brew operates as a precision botanical formulation — not just a drink. Here's the molecular science behind every sip."
      />

      {/* ── The Micro-Dose Strategy ── */}
      <section id="microdose" className="section section--brew">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">The Precision</span>
            <h2 className="section-title">Why 0.4g Is the Golden Ratio</h2>
            <p className="section-sub">
              Most people think more is better. In botanical chemistry,
              precision is everything.
            </p>
          </div>
          <div className="brew-steps">
            {[
              {
                n: "01",
                title: "Rapid Absorption",
                body: "The hot water extraction pulls out essential oils (terpenes) immediately. Because there is very little bulk fibre, the bioactive compounds hit your sublingual receptors and stomach lining almost instantly.",
              },
              {
                n: "02",
                title: "Hormetic Stress",
                body: "Spices like Clove and Black Cumin provide a tiny spark to the system that triggers your body's own antioxidant production — a process called hormesis. A small stressor activates your survival genes (Sirtuins).",
              },
              {
                n: "03",
                title: "Steam Distillation",
                body: "When you pour boiling water, you perform a steam distillation in your cup. The heat (100°C) breaks the cell walls of Black Seed and Star Anise, releasing Thymoquinone and Shikimic Acid into a bio-available liquid.",
              },
              {
                n: "04",
                title: "A Catalytic Dose",
                body: "At 0.4g, this brew is not food — it is a signal. It tells your cells to produce more internal antioxidants (Glutathione), strengthen gut tight junctions, and increase mitochondrial biogenesis.",
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

      {/* ── Key Pathways ── */}
      <section id="pathways" className="section section--why">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Molecular Pathways</span>
            <h2 className="section-title">How the Chemistry Works</h2>
            <p className="section-sub">
              Five distinct molecular mechanisms working in concert to deliver
              the five wellness pillars.
            </p>
          </div>
          <div className="why-grid">
            {[
              {
                icon: "🔑",
                color: "gold",
                title: "The Piperine Pathway",
                body: "Piperine (from Black/White Pepper) inhibits the CYP3A4 enzyme in the liver — responsible for breaking down over 50% of all botanical compounds. By temporarily quieting this enzyme, the brew ensures Myristicin from Nutmeg and Mace stays in your system long enough to boost dopamine levels.",
              },
              {
                icon: "🛡️",
                color: "red",
                title: "The Shikimate Pathway",
                body: "Star Anise is the world's primary source of Shikimic Acid. This molecule prevents viruses from budding or releasing themselves from an infected cell. Combined with Clove (highest antioxidant ORAC score of any botanical) and Black Cumin, you provide the raw chemical precursors the body uses to block viral replication.",
              },
              {
                icon: "🧠",
                color: "teal",
                title: "Glycemic Control & Brain Energy",
                body: "Cinnamon mimics insulin and improves glucose uptake in cells. Fennel's Anethole slows gastric emptying. Together, they prevent a glucose spike — forcing the body to release energy slowly and steadily, ensuring the brain has a constant supply of fuel and preventing the mid-day crash.",
              },
              {
                icon: "🧘",
                color: "green",
                title: "The MAO Inhibition",
                body: "Nutmeg and Mace contain Myristicin and Licarin-A. At the 0.4g dose, these act as selective, reversible inhibitors of Monoamine Oxidase (MAO) — the enzyme that mops up feel-good hormones. By gently slowing this process, the brew allows Dopamine and Norepinephrine to stay in the synapse longer.",
              },
              {
                icon: "⚡",
                color: "gold",
                title: "The Nrf2 Antioxidant Response",
                body: "Thymoquinone in Black Cumin is an Nrf2 Activator. Nrf2 is a protein inside your cells that, when activated, travels to the cell nucleus and turns on the genes that produce your body's own master antioxidants — Superoxide Dismutase and Glutathione. You aren't just drinking antioxidants; you're programming your cells to create their own.",
              },
              {
                icon: "🫁",
                color: "teal",
                title: "The Terpene Inhalation Effect",
                body: "Green Cardamom, Bay Leaves and Black Cardamom are loaded with Cineole and Linalool — volatile molecules that turn to gas at 100°C. As you wait for the brew to cool, you inhale these terpenes. They pass through the Olfactory Bulb directly into the Limbic System, providing an immediate mood effect before the liquid even touches your tongue.",
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

      {/* ── Chemical Profile Table ── */}
      <section className="section section--brew">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Chemical Profile</span>
            <h2 className="section-title">Active Compounds at a Glance</h2>
            <p className="section-sub">
              The primary molecular drivers behind each ingredient&apos;s
              wellness action.
            </p>
          </div>
          <div className="science-table-wrap">
            <table className="science-table">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Active Compound</th>
                  <th>Primary System Impact</th>
                </tr>
              </thead>
              <tbody>
                {CHEMICAL_PROFILE.map((row) => (
                  <tr key={row.ingredient}>
                    <td>
                      <strong>{row.ingredient}</strong>
                    </td>
                    <td>
                      <em>{row.compound}</em>
                    </td>
                    <td>{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Synergy Table ── */}
      <section className="section section--possibilities">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Molecular Synergy</span>
            <h2 className="section-title">The Unified System</h2>
            <p className="section-sub">
              Why these 14 ingredients work as a single, interconnected
              metabolic circuit.
            </p>
          </div>
          <div className="poss-grid">
            {SYNERGY_TABLE.map((row, i) => (
              <div
                key={row.category}
                className="poss-card"
                style={{ "--i": i } as React.CSSProperties}
              >
                <h3 className="poss-card-title">{row.category}</h3>
                <p
                  className="poss-card-body"
                  style={{ fontStyle: "italic", marginBottom: "0.5rem" }}
                >
                  {row.compounds}
                </p>
                <p className="poss-card-body">{row.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Liposomal Delivery ── */}
      <section className="section section--why">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Delivery Mechanism</span>
            <h2 className="section-title">Liposomal Delivery in Your Cup</h2>
            <p className="section-sub">
              The final secret behind why such a small dose can have such a
              profound impact.
            </p>
          </div>
          <div
            className="brew-note"
            style={{ maxWidth: "56rem", margin: "0 auto" }}
          >
            <span className="brew-note-icon">🔬</span>
            <div>
              <p style={{ marginBottom: "0.75rem" }}>
                Because this is a Loose Brew Mix, the 0.4g of powder has a
                massive surface area. When you add boiling water, the kinetic
                energy causes the essential oils to undergo emulsification.
              </p>
              <p style={{ marginBottom: "0.75rem" }}>
                The fats naturally present in Black Cumin and Nutmeg act as{" "}
                <strong>Liposomes</strong> — tiny fat bubbles that wrap around
                the other herbs. This Liposomal Delivery is the reason such a
                tiny dose can have such a profound impact; the medicine is
                wrapped in fat-bubbles that slide right through your cell
                membranes.
              </p>
              <p>
                <strong>In short:</strong> This brew is a Biological Logic Gate.
                It uses 14 ancient inputs to force a High Performance output in
                your Gut, Brain, and Immune system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--cta">
        <div className="cta-banner">
          <div className="cta-banner-content">
            <span className="cta-banner-tag">🎁 Limited Time Offer</span>
            <h2 className="cta-banner-title">Experience the Science</h2>
            <p className="cta-banner-sub">
              The chemistry is compelling. The taste is extraordinary. Claim
              your free sample and let the science speak for itself.
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
          Meet the Ingredients →
        </Link>
        <Link href="/benefits" className="inner-page-nav-link">
          View Benefits →
        </Link>
        <Link href="/quality" className="inner-page-nav-link">
          Quality & Testing →
        </Link>
      </div>

      <Footer />
    </div>
  );
}
