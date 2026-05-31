import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Quality & Testing | Blackpool Brew — Lab Tested, Compliance Verified",
  description: "Blackpool Brew is independently lab tested for purity, potency and safety. Learn about our quality standards, compliance and testing protocols.",
};

const LAB_RESULTS = [
  { test: "Heavy Metals Screening", result: "Pass", detail: "All 14 ingredients tested below EU maximum limits for Lead, Cadmium, Mercury and Arsenic." },
  { test: "Microbial Contamination", result: "Pass", detail: "Total Plate Count, Yeast & Mould, E. coli and Salmonella all within safe limits per UK food safety standards." },
  { test: "Pesticide Residue Analysis", result: "Pass", detail: "No detectable pesticide residues above the EU MRL (Maximum Residue Level) thresholds." },
  { test: "Allergen Screening", result: "Pass", detail: "No cross-contamination with the 14 major allergens as defined by UK Food Information Regulations." },
  { test: "Moisture Content", result: "Pass", detail: "Moisture content within optimal range to preserve volatile oils and prevent microbial growth during storage." },
  { test: "Adulteration Testing", result: "Pass", detail: "All ingredients verified as authentic botanical species with no fillers, bulking agents or synthetic additives detected." },
];

const COMPLIANCE = [
  { icon: "🇬🇧", title: "UK Food Safety Act 1990", body: "Blackpool Brew is produced in full compliance with the UK Food Safety Act 1990, ensuring all ingredients are safe for human consumption." },
  { icon: "📋", title: "Food Information Regulations 2014", body: "All labelling meets the requirements of the Food Information to Consumers (FIC) Regulations, including allergen declarations and ingredient listings." },
  { icon: "🏭", title: "Food Hygiene Regulations 2006", body: "Our production facility adheres to the Food Hygiene (England) Regulations 2006, with regular hygiene audits and documented HACCP procedures." },
  { icon: "🌿", title: "Botanical Product Standards", body: "Ingredients are sourced from suppliers who meet the European Pharmacopoeia (Ph. Eur.) standards for botanical raw materials where applicable." },
];

export default function QualityPage() {
  return (
    <div className="page">
      <Navbar />
      <div className="page-top-spacer" />

      <PageHero
        tag="Quality Assurance"
        title="Lab Tested. Compliance Verified. Trusted."
        subtitle="Every batch of Blackpool Brew is independently tested for purity, potency and safety. We hold ourselves to the highest standards so you don't have to worry."
      />

      {/* ── Our Commitment ── */}
      <section className="section section--brew">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Our Commitment</span>
            <h2 className="section-title">Quality at Every Step</h2>
            <p className="section-sub">From sourcing to packaging, quality is built into every stage of our process.</p>
          </div>
          <div className="brew-steps">
            {[
              { n: "01", title: "Ingredient Sourcing", body: "We source all 14 ingredients from trusted, verified suppliers. Each batch of raw material is accompanied by a Certificate of Analysis (CoA) confirming identity, purity and absence of contaminants." },
              { n: "02", title: "Small-Batch Production", body: "Blackpool Brew is produced in small batches to maintain quality control. Small-batch production allows us to inspect every blend and ensure consistency in aroma, colour and potency." },
              { n: "03", title: "Independent Lab Testing", body: "Every production batch is sent to an accredited third-party laboratory for independent testing. Results are reviewed before any product is released for distribution." },
              { n: "04", title: "Packaging & Storage", body: "Products are packaged in airtight, food-grade containers to preserve the volatile oils that carry the medicinal value of the spices. Stored in a cool, dry environment away from light and heat." },
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
            <span className="section-tag">Lab Results</span>
            <h2 className="section-title">Independent Testing Results</h2>
            <p className="section-sub">Results from our most recent independent laboratory analysis. All tests conducted by accredited UK laboratories.</p>
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
          <div className="brew-note" style={{ marginTop: "2rem" }}>
            <span className="brew-note-icon">📄</span>
            <p>Full Certificates of Analysis are available upon request. Contact us at <strong>info@blackpoolbrew.com</strong> to request documentation for any specific batch.</p>
          </div>
        </div>
      </section>

      {/* ── Compliance ── */}
      <section className="section section--possibilities">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Regulatory Compliance</span>
            <h2 className="section-title">UK Compliance Standards</h2>
            <p className="section-sub">Blackpool Brew is produced in full compliance with all applicable UK food safety and labelling regulations.</p>
          </div>
          <div className="poss-grid">
            {COMPLIANCE.map((c, i) => (
              <div key={c.title} className="poss-card" style={{ "--i": i } as React.CSSProperties}>
                <div className="poss-card-icon"><span style={{ fontSize: "1.5rem" }}>{c.icon}</span></div>
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
            <p className="section-sub">We believe in complete transparency about what goes into our blend and how it is made.</p>
          </div>
          <div className="why-grid">
            {[
              { icon: "✅", color: "green", title: "Full Ingredient Disclosure", body: "Every ingredient is listed on the label. No proprietary blends, no hidden additives, no mystery compounds. What you see is exactly what you get." },
              { icon: "🔬", color: "red", title: "Batch Traceability", body: "Every batch carries a unique batch number. This allows full traceability from raw ingredient sourcing through to the finished product in your hands." },
              { icon: "📦", color: "teal", title: "No Fillers or Bulking Agents", body: "We never add fillers, anti-caking agents or bulking agents. The 0.4g serving is 100% pure botanical blend — nothing more, nothing less." },
              { icon: "🌿", color: "gold", title: "Allergen Transparency", body: "All potential allergen information is clearly declared. Our production environment is regularly tested for cross-contamination." },
            ].map((w) => (
              <div key={w.title} className="why-card">
                <div className={`why-icon why-icon--${w.color}`}><span>{w.icon}</span></div>
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
              You&apos;ve seen the results. Now taste the difference. Claim your free sample — no commitment required.
            </p>
            <div className="cta-banner-actions">
              <a href="https://wa.me/447507155382?text=Hi%2C%20I%27d%20like%20to%20claim%20my%20free%20Blackpool%20Brew%20sample!" target="_blank" rel="noopener noreferrer" className="cta-banner-btn">
                <FaWhatsapp size={20} /> Claim Your Free Sample
              </a>
              <p className="cta-banner-note">No commitment · Free delivery · While stocks last</p>
            </div>
          </div>
          <div className="cta-banner-logo">
            <Image src="/icon.png" alt="" aria-hidden="true" width={600} height={600} className="cta-banner-logo-img" />
          </div>
        </div>
      </section>

      <div className="inner-page-nav">
        <Link href="/science" className="inner-page-nav-link">The Science →</Link>
        <Link href="/ingredients" className="inner-page-nav-link">Meet the Ingredients →</Link>
        <Link href="/contact" className="inner-page-nav-link">Contact Us →</Link>
      </div>

      <Footer />
    </div>
  );
}
