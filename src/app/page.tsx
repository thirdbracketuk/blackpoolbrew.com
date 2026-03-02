import Image from "next/image";
import { FaLeaf, FaHeartbeat, FaGift } from "react-icons/fa";

export default function BrewPage() {
  return (
    <div className="page">
      {/* ── Hero ─────────────────────────────────────────── */}
      <header className="hero">
        <Image
          src="/sky-cropped.svg"
          alt=""
          aria-hidden="true"
          width={3820}
          height={1080}
          className="hero-skyline-wrapper"
        />

        <div className="hero-content">
          <Image
            src="/logo.png"
            alt="Blackpool Brew"
            width={500}
            height={500}
            className="hero-logo "
          />
          <h1 className="hero-title ">
            The&nbsp;&apos;Blackpool&nbsp;Brew!&apos;
          </h1>
          <p className="hero-subtitle">
            A natural aromatic blend of ancient herbs &amp; spices
          </p>
        </div>
      </header>

      {/* ── Main content ─────────────────────────────────── */}
      <main className="content animate-stagger">
        {/* Introduction */}
        <section className="card card-intro animate-fade-up">
          <p>
            Fragrant, warming and pungent. Specially crafted to nourish your
            body and instantly delight your senses — adding a slightly spicy
            kick.
          </p>
        </section>

        {/* Features */}
        <section className="features-grid animate-stagger">
          <div className="feature-card animate-fade-up">
            <div className="feature-icon feature-icon--green">
              <FaLeaf />
            </div>
            <p className="feature-text">
              No caffeine, added sugars, artificial colouring, or preservatives.
              Pure as nature intended.
            </p>
          </div>
          <div className="feature-card animate-fade-up">
            <div className="feature-icon feature-icon--red">
              <FaHeartbeat />
            </div>
            <p className="feature-text">
              Fully vegan and vegetarian friendly. Thoughtfully crafted for
              every lifestyle.
            </p>
          </div>
        </section>

        {/* Instructions */}
        <section className="card animate-fade-up">
          <h2 className="section-title">For the Perfect Cup…</h2>
          <div className="instructions animate-stagger">
            <div className="instruction-step">
              <span className="step-number">1</span>
              <p className="instruction-text">
                Measure <strong>¼ teaspoon</strong> of the blend into your
                favourite mug or cup.
              </p>
            </div>
            <div className="instruction-step">
              <span className="step-number">2</span>
              <p className="instruction-text">
                Pour over <strong>freshly boiled water</strong> and allow the
                blend to infuse for a moment.
              </p>
            </div>
            <div className="instruction-step">
              <span className="step-number">3</span>
              <p className="instruction-text">
                Add <strong>sugar or honey</strong> to taste. Stir gently and
                let most of the blend settle to the bottom. Enjoy!
              </p>
            </div>
            <div className="instruction-step">
              <span className="step-number">+</span>
              <p className="instruction-text">
                <strong>Smoother finish:</strong> Follow the steps above then
                strain the mixture entirely to remove all loose blend.
              </p>
            </div>
            <div className="instruction-note">
              <strong>Note:</strong> Fragments of the blend are safe to consume.
              Discard any build-up left at the bottom of the cup.
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="cta-section animate-fade-up">
          <p className="cta-label">
            🎁 Free samples available for a limited time
          </p>
          <a
            href="https://wa.me/447507155382?text=Hi%2C%20I%27d%20like%20to%20claim%20my%20free%20Blackpool%20Brew%20sample!"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            <FaGift size={16} />
            Claim Your Free Sample
          </a>
        </div>

        <hr className="divider" />

        {/* Options */}
        <section className="options-section animate-fade-up">
          <h2 className="section-title">Endless Possibilities</h2>
          <div className="options-track animate-stagger">
            <div className="option-card">
              <span className="option-icon">🧊</span>
              <h3 className="option-title">Enjoy Chilled</h3>
              <p className="option-desc">
                Follow the brewing steps above, let the mixture cool, then
                refrigerate for a refreshing cold experience.
              </p>
            </div>
            <div className="option-card">
              <span className="option-icon">☕</span>
              <h3 className="option-title">Enhance Beverages</h3>
              <p className="option-desc">
                Mix the blend into your usual tea, coffee, or warm drink for a
                surprising aromatic twist.
              </p>
            </div>
            <div className="option-card">
              <span className="option-icon">🍲</span>
              <h3 className="option-title">Flavour Your Dishes</h3>
              <p className="option-desc">
                Add the blend into your cooking to introduce a unique depth of
                aroma and warmth to any recipe.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Blackpool Brew. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
