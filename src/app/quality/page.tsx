import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Quality & Testing | Blackpool Brew — Lab Tested, Compliance Verified",
  description:
    "Blackpool Brew is independently lab tested for purity, potency and safety. Learn about our quality standards, compliance and testing protocols.",
};

const NUTRITIONAL_DATA = [
  {
    parameter: "Energy",
    result: "270 Kcal / 1130 KJ",
    per: "per 100g",
    sub: false,
  },
  {
    parameter: "Protein (N x 6.25)",
    result: "9.69 g",
    per: "per 100g",
    sub: false,
  },
  { parameter: "Fat", result: "1.89 g", per: "per 100g", sub: false },
  {
    parameter: "of which Saturates",
    result: "0.76 g",
    per: "per 100g",
    sub: true,
  },
  {
    parameter: "of which Monounsaturates",
    result: "0.63 g",
    per: "per 100g",
    sub: true,
  },
  {
    parameter: "of which Polyunsaturates",
    result: "0.42 g",
    per: "per 100g",
    sub: true,
  },
  {
    parameter: "Available Carbohydrate",
    result: "37.18 g",
    per: "per 100g",
    sub: false,
  },
  {
    parameter: "of which Total Sugars",
    result: "2.28 g",
    per: "per 100g",
    sub: true,
  },
  {
    parameter: "Dietary Fibre",
    result: "32.92 g",
    per: "per 100g",
    sub: false,
  },
  { parameter: "Ash", result: "4.40 g", per: "per 100g", sub: false },
  { parameter: "Moisture", result: "13.92 g", per: "per 100g", sub: false },
  { parameter: "Sodium", result: "38 mg", per: "per 100g", sub: false },
];

const LAB_RESULTS = [
  {
    test: "Energy",
    result: "270 Kcal / 1130 KJ per 100g",
    detail:
      "Calculated via validated method (07L.1.19), fully accredited to ISO 17025:2017 by UKAS.",
  },
  {
    test: "Protein",
    result: "9.69 g per 100g",
    detail:
      "Determined by Dumas combustion analysis (method 07L.1.23), an internationally recognised nitrogen-based method.",
  },
  {
    test: "Total Fat",
    result: "1.89 g per 100g",
    detail:
      "Analysed by solvent extraction (method 07L.1.17). Fatty acid profile further broken down into saturates, monounsaturates and polyunsaturates.",
  },
  {
    test: "Available Carbohydrate",
    result: "37.18 g per 100g",
    detail:
      "Calculated by difference (method 07L.1.19), accounting for all other measured components.",
  },
  {
    test: "Dietary Fibre",
    result: "32.92 g per 100g",
    detail:
      "Measured by enzymatic gravimetric method (07L.1.20), confirming the blend's substantial fibre content.",
  },
  {
    test: "Total Sugars",
    result: "2.28 g per 100g",
    detail:
      "Naturally occurring sugars only, with no added sugar in the formulation (method 07L.1.31).",
  },
  {
    test: "Sodium",
    result: "38 mg per 100g",
    detail:
      "Determined by ICP-OES (Inductively Coupled Plasma Optical Emission Spectrometry), method 07L.1.26 — a highly precise mineral analysis technique.",
  },
  {
    test: "Moisture Content",
    result: "13.92 g per 100g",
    detail:
      "Moisture measured by drying method (07L.1.15). This level indicates the blend is well-preserved, with volatile essential oils intact.",
  },
];

const COMPLIANCE = [
  {
    icon: "🇬🇧",
    title: "UK Food Safety Act 1990",
    body: "Blackpool Brew is produced in full compliance with the UK Food Safety Act 1990, ensuring all ingredients are safe for human consumption and free from contamination.",
  },
  {
    icon: "📋",
    title: "Food Information Regulations 2014",
    body: "All labelling meets the requirements of the Food Information to Consumers (FIC) Regulations, including allergen declarations, ingredient listings and nutritional information.",
  },
  {
    icon: "🏭",
    title: "Food Hygiene Regulations 2006",
    body: "Our production facility adheres to the Food Hygiene (England) Regulations 2006, with regular hygiene audits and documented HACCP procedures in place.",
  },
  {
    icon: "🌿",
    title: "Botanical Product Standards",
    body: "Ingredients are sourced from suppliers who meet European Pharmacopoeia (Ph. Eur.) standards for botanical raw materials, ensuring purity and authenticity.",
  },
];

export default function QualityPage() {
  return (
    <div className="page">
      <Navbar />
      <div className="page-top-spacer" />

      <PageHero
        tag="Quality Assurance"
        title="Lab Tested. Compliance Verified. Trusted."
        subtitle="Every batch of Blackpool Brew is independently tested by a UKAS-accredited laboratory. We hold ourselves to the highest standards so you can drink with complete confidence."
      />

      {/* ── Our Commitment ── */}
      <section className="section section--brew">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Our Commitment</span>
            <h2 className="section-title">Quality at Every Step</h2>
            <p className="section-sub">
              From raw material sourcing to the finished product in your hands,
              quality is built into every stage of our process.
            </p>
          </div>
          <div className="brew-steps">
            {[
              {
                n: "01",
                title: "Ingredient Sourcing",
                body: "All 14 ingredients are sourced from verified, trusted suppliers. Each incoming batch of raw material is accompanied by a Certificate of Analysis confirming identity, purity and the absence of contaminants.",
              },
              {
                n: "02",
                title: "Small-Batch Production",
                body: "Blackpool Brew is produced in small batches to maintain tight quality control. This approach allows us to inspect every blend and ensure consistency in aroma, colour and potency from batch to batch.",
              },
              {
                n: "03",
                title: "Independent Lab Testing",
                body: "Every production batch is submitted to an accredited third-party laboratory for independent analysis. Results are reviewed against specification before any product is approved for distribution.",
              },
              {
                n: "04",
                title: "Packaging and Storage",
                body: "Products are packaged in airtight, food-grade containers to preserve the volatile essential oils that carry the therapeutic value of the spices. All stock is stored in a cool, dry environment, away from direct light and heat.",
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

      {/* ── Lab Results ── */}
      <section className="section section--why">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Certificate of Analysis</span>
            <h2 className="section-title">Independent Laboratory Results</h2>
            <p className="section-sub">
              Results from our most recent independent nutritional analysis,
              conducted by AS International Corporation Limited (trading as Alex
              Stewart Agriculture) — UKAS Accredited Testing Laboratory No.
              4352, Liverpool, UK.
            </p>
          </div>

          {/* Lab credentials note */}
          <div className="brew-note" style={{ marginBottom: "2rem" }}>
            <span className="brew-note-icon">🏛️</span>
            <p>
              <strong>Certificate No. 101669</strong> — Sample received 13 April
              2026, analysis completed and reported 28 April 2026. Sample
              description: A blend of herbs and spices in powdered form. All
              analyses are accredited to <strong>ISO 17025:2017</strong> (code
              U), the international standard for testing laboratory competence.
            </p>
          </div>

          <div className="quality-results-grid">
            {LAB_RESULTS.map((r) => (
              <div key={r.test} className="quality-result-card">
                <div className="quality-result-header">
                  <FaCheckCircle className="quality-result-icon" />
                  <div>
                    <h3 className="quality-result-test">{r.test}</h3>
                    <span className="quality-result-badge">{r.result}</span>
                  </div>
                </div>
                <p className="quality-result-detail">{r.detail}</p>
              </div>
            ))}
          </div>

          {/* Full nutritional table */}
          <div style={{ marginTop: "2.5rem" }}>
            <div className="section-header" style={{ marginBottom: "1.5rem" }}>
              <span className="section-tag">Full Nutritional Profile</span>
              <h3
                className="section-title"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
              >
                Group 2 Nutritional Analysis
              </h3>
              <p className="section-sub">
                All values per 100g of product as tested.
              </p>
            </div>
            <div className="quality-nutrition-table-wrap">
              <table className="quality-nutrition-table">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Result</th>
                    <th>Accreditation</th>
                  </tr>
                </thead>
                <tbody>
                  {NUTRITIONAL_DATA.map((row) => (
                    <tr key={row.parameter}>
                      <td className={row.sub ? "indent" : ""}>
                        {row.parameter}
                      </td>
                      <td className="result-value">{row.result}</td>
                      <td>ISO 17025:2017</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="brew-note" style={{ marginTop: "2rem" }}>
            <span className="brew-note-icon">📄</span>
            <p>
              Full Certificates of Analysis are available upon request. Contact
              us at <strong>info@blackpoolbrew.com</strong> to request
              documentation for any specific batch. Results relate only to the
              sample received and tested at the accredited laboratory.
            </p>
          </div>
        </div>
      </section>

      {/* ── Compliance ── */}
      <section className="section section--possibilities">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Regulatory Compliance</span>
            <h2 className="section-title">UK Compliance Standards</h2>
            <p className="section-sub">
              Blackpool Brew is produced in full compliance with all applicable
              UK food safety and labelling regulations.
            </p>
          </div>
          <div className="poss-grid">
            {COMPLIANCE.map((c, i) => (
              <div
                key={c.title}
                className="poss-card"
                style={{ "--i": i } as React.CSSProperties}
              >
                <div className="poss-card-icon">
                  <span style={{ fontSize: "1.5rem" }}>{c.icon}</span>
                </div>
                <h3 className="poss-card-title">{c.title}</h3>
                <p className="poss-card-body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Transparency ── */}
      <section className="section section--brew">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Transparency</span>
            <h2 className="section-title">Nothing to Hide</h2>
            <p className="section-sub">
              We believe in complete openness about what goes into our blend and
              how it is made.
            </p>
          </div>
          <div className="why-grid">
            {[
              {
                icon: "✅",
                color: "green",
                title: "Full Ingredient Disclosure",
                body: "Every ingredient is listed on the label. No proprietary blends, no hidden additives, no mystery compounds. What you see is precisely what you get.",
              },
              {
                icon: "🔬",
                color: "red",
                title: "Batch Traceability",
                body: "Every batch carries a unique reference number. This enables full traceability from raw ingredient sourcing through to the finished product in your hands.",
              },
              {
                icon: "📦",
                color: "teal",
                title: "No Fillers or Bulking Agents",
                body: "We never add fillers, anti-caking agents or bulking agents. The 0.4g serving is 100% pure botanical blend — nothing more, nothing less.",
              },
              {
                icon: "🌿",
                color: "gold",
                title: "Allergen Transparency",
                body: "All allergen information is clearly declared. Our production environment is regularly assessed to manage the risk of cross-contamination.",
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

      {/* ── CTA ── */}
      <section className="section section--cta">
        <div className="cta-banner">
          <div className="cta-banner-content">
            <span className="cta-banner-tag">🎁 Limited Time Offer</span>
            <h2 className="cta-banner-title">Tested. Trusted. Free to Try.</h2>
            <p className="cta-banner-sub">
              You have seen the results. Now taste the difference. Claim your
              free sample with no commitment required.
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
        <Link href="/science" className="inner-page-nav-link">
          The Science →
        </Link>
        <Link href="/ingredients" className="inner-page-nav-link">
          Meet the Ingredients →
        </Link>
        <Link href="/contact" className="inner-page-nav-link">
          Contact Us →
        </Link>
      </div>

      <Footer />
    </div>
  );
}
