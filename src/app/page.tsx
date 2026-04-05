// import Image from "next/image";
// import { FaLeaf, FaHeartbeat, FaGift } from "react-icons/fa";

// export default function BrewPage() {
//   return (
//     <div className="page">
//       {/* ── Hero ─────────────────────────────────────────── */}
//       <header className="hero">
//         <Image
//           src="/sky-cropped.svg"
//           alt=""
//           aria-hidden="true"
//           width={3820}
//           height={1080}
//           className="hero-skyline-wrapper"
//         />

//         <div className="hero-content">
//           <Image
//             src="/logo.webp"
//             alt="Blackpool Brew"
//             width={1800}
//             height={1800}
//             className="hero-logo "
//           />
//           <h1 className="hero-title ">
//             The&nbsp;&apos;Blackpool&nbsp;Brew!&apos;
//           </h1>
//           <p className="hero-subtitle">
//             A natural aromatic blend of ancient herbs &amp; spices
//           </p>
//         </div>
//       </header>

//       {/* ── Main content ─────────────────────────────────── */}
//       <main className="content animate-stagger">
//         {/* Introduction */}
//         <section className="card card-intro animate-fade-up">
//           <p>
//             Fragrant, warming and pungent. Specially crafted to nourish your
//             body and instantly delight your senses — adding a slightly spicy
//             kick.
//           </p>
//         </section>

//         {/* Features */}
//         <section className="features-grid animate-stagger">
//           <div className="feature-card animate-fade-up">
//             <div className="feature-icon feature-icon--green">
//               <FaLeaf />
//             </div>
//             <p className="feature-text">
//               No caffeine, added sugars, artificial colouring, or preservatives.
//               Pure as nature intended.
//             </p>
//           </div>
//           <div className="feature-card animate-fade-up">
//             <div className="feature-icon feature-icon--red">
//               <FaHeartbeat />
//             </div>
//             <p className="feature-text">
//               Fully vegan and vegetarian friendly. Thoughtfully crafted for
//               every lifestyle.
//             </p>
//           </div>
//         </section>

//         {/* Instructions */}
//         <section className="card animate-fade-up">
//           <h2 className="section-title">For the Perfect Cup…</h2>
//           <div className="instructions animate-stagger">
//             <div className="instruction-step">
//               <span className="step-number">1</span>
//               <p className="instruction-text">
//                 Measure <strong>¼ teaspoon</strong> of the blend into your
//                 favourite mug or cup.
//               </p>
//             </div>
//             <div className="instruction-step">
//               <span className="step-number">2</span>
//               <p className="instruction-text">
//                 Pour over <strong>freshly boiled water</strong> and allow the
//                 blend to infuse for a moment.
//               </p>
//             </div>
//             <div className="instruction-step">
//               <span className="step-number">3</span>
//               <p className="instruction-text">
//                 Add <strong>sugar or honey</strong> to taste. Stir gently and
//                 let most of the blend settle to the bottom. Enjoy!
//               </p>
//             </div>
//             <div className="instruction-step">
//               <span className="step-number">+</span>
//               <p className="instruction-text">
//                 <strong>Smoother finish:</strong> Follow the steps above then
//                 strain the mixture entirely to remove all loose blend.
//               </p>
//             </div>
//             <div className="instruction-note">
//               <strong>Note:</strong> Fragments of the blend are safe to consume.
//               Discard any build-up left at the bottom of the cup.
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <div className="cta-section animate-fade-up">
//           <p className="cta-label">
//             🎁 Free samples available for a limited time
//           </p>
//           <a
//             href="https://wa.me/447507155382?text=Hi%2C%20I%27d%20like%20to%20claim%20my%20free%20Blackpool%20Brew%20sample!"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="cta-button"
//           >
//             <FaGift size={16} />
//             Claim Your Free Sample
//           </a>
//         </div>

//         <hr className="divider" />

//         {/* Options */}
//         <section className="options-section animate-fade-up">
//           <h2 className="section-title">Endless Possibilities</h2>
//           <div className="options-track animate-stagger">
//             <div className="option-card">
//               <span className="option-icon">🧊</span>
//               <h3 className="option-title">Enjoy Chilled</h3>
//               <p className="option-desc">
//                 Follow the brewing steps above, let the mixture cool, then
//                 refrigerate for a refreshing cold experience.
//               </p>
//             </div>
//             <div className="option-card">
//               <span className="option-icon">☕</span>
//               <h3 className="option-title">Enhance Beverages</h3>
//               <p className="option-desc">
//                 Mix the blend into your usual tea, coffee, or warm drink for a
//                 surprising aromatic twist.
//               </p>
//             </div>
//             <div className="option-card">
//               <span className="option-icon">🍲</span>
//               <h3 className="option-title">Flavour Your Dishes</h3>
//               <p className="option-desc">
//                 Add the blend into your cooking to introduce a unique depth of
//                 aroma and warmth to any recipe.
//               </p>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="footer">
//         <p>
//           &copy; {new Date().getFullYear()} Blackpool Brew. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// }

// import Image from "next/image";
// import { FaWhatsapp, FaLeaf, FaHeartbeat, FaGift } from "react-icons/fa";

// const INGREDIENTS = [
//   "Fennel Seeds",
//   "Nutmeg",
//   "Cinnamon",
//   "Peppercorn",
//   "Black Cumin Seeds",
//   "Nigella Seeds",
//   "Clove",
//   "Cardamom",
//   "Star Anise",
//   "Black Onion Seeds",
//   "Bay Leaves",
//   "Ginger",
// ];

// export default function BrewPage() {
//   return (
//     <div className="page">
//       {/* ── Hero ──────────────────────────────────────────────────── */}
//       <header className="hero">
//         {/* Skyline — untouched, sits at very top */}
//         <Image
//           src="/sky-cropped.svg"
//           alt=""
//           aria-hidden="true"
//           width={3820}
//           height={1080}
//           className="hero-skyline-wrapper"
//         />

//         {/* Dark hero panel — split layout */}
//         <div className="hero-panel">
//           {/* Left — logo */}
//           <div className="hero-logo-side">
//             <Image
//               src="/logo.png"
//               alt="Blackpool Brew logo"
//               width={1600}
//               height={1600}
//               className="hero-logo"
//               priority
//             />
//           </div>

//           {/* Right — content */}
//           <div className="hero-copy-side">
//             <span className="hero-origin">
//               <span className="hero-origin-dot" />
//               Handcrafted in Blackpool, UK
//             </span>

//             <h1 className="hero-headline">
//               Brew Your Way
//               <br />
//               to Wellness.
//             </h1>

//             <p className="hero-desc">
//               A warming aromatic blend of{" "}
//               <strong>12 ancient herbs &amp; spices</strong>, crafted to nourish
//               your body and awaken your senses — with a naturally spicy kick and
//               zero caffeine.
//             </p>

//             {/* Ingredient pills */}
//             <div className="hero-ingredients">
//               <p className="hero-ingredients-label">12 Natural Ingredients</p>
//               <div className="hero-pills">
//                 {INGREDIENTS.map((ing) => (
//                   <span key={ing} className="hero-pill">
//                     {ing}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Attribute badges */}
//             <div className="hero-badges">
//               <span className="hero-badge">✓ Caffeine-Free</span>
//               <span className="hero-badge">✓ Vegan &amp; Vegetarian</span>
//               <span className="hero-badge">✓ No Added Sugar</span>
//               <span className="hero-badge">✓ No Preservatives</span>
//             </div>

//             {/* CTA */}
//             <div className="hero-cta-row">
//               <a
//                 href="https://wa.me/447507155382?text=Hi%2C%20I%27d%20like%20to%20claim%20my%20free%20Blackpool%20Brew%20sample!"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hero-cta-btn"
//               >
//                 <FaWhatsapp size={18} />
//                 Claim Your Free Sample
//               </a>
//               <span className="hero-cta-note">Free samples · Limited time</span>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* ── Main content ──────────────────────────────────────────── */}
//       <main className="content animate-stagger">
//         {/* Instructions */}
//         <section className="card animate-fade-up">
//           <h2 className="section-title">For the Perfect Cup</h2>
//           <div className="instructions animate-stagger">
//             <div className="instruction-step">
//               <span className="step-number">1</span>
//               <p className="instruction-text">
//                 Measure <strong>⅛ to ¼ teaspoon</strong> of the blend — start
//                 light, then add more to your preferred strength.
//               </p>
//             </div>
//             <div className="instruction-step">
//               <span className="step-number">2</span>
//               <p className="instruction-text">
//                 Pour over <strong>freshly boiled water</strong> and allow the
//                 blend to infuse for a moment.
//               </p>
//             </div>
//             <div className="instruction-step">
//               <span className="step-number">3</span>
//               <p className="instruction-text">
//                 Add <strong>sugar or honey</strong> to taste. Stir gently and
//                 let the blend gradually settle to the bottom. Enjoy!
//               </p>
//             </div>
//             <div className="instruction-step">
//               <span className="step-number">+</span>
//               <p className="instruction-text">
//                 <strong>Smoother finish:</strong> Strain the mixture entirely
//                 after brewing to remove all loose blend.
//               </p>
//             </div>
//             <div className="instruction-note">
//               <strong>Note:</strong> Fragments of the blend are safe to consume.
//               Discard any build-up left at the bottom of your cup.
//             </div>
//           </div>
//         </section>

//         {/* Features */}
//         <section className="features-grid animate-stagger">
//           <div className="feature-card animate-fade-up">
//             <div className="feature-icon feature-icon--green">
//               <FaLeaf />
//             </div>
//             <p className="feature-text">
//               No caffeine, added sugars, artificial colouring, or preservatives.
//               Pure as nature intended.
//             </p>
//           </div>
//           <div className="feature-card animate-fade-up">
//             <div className="feature-icon feature-icon--red">
//               <FaHeartbeat />
//             </div>
//             <p className="feature-text">
//               Fully vegan and vegetarian friendly. Thoughtfully crafted for
//               every lifestyle.
//             </p>
//           </div>
//         </section>

//         {/* CTA */}
//         <div className="cta-section animate-fade-up">
//           <p className="cta-label">
//             🎁 Free samples available for a limited time
//           </p>
//           <a
//             href="https://wa.me/447507155382?text=Hi%2C%20I%27d%20like%20to%20claim%20my%20free%20Blackpool%20Brew%20sample!"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="cta-button"
//           >
//             <FaGift size={16} />
//             Claim Your Free Sample
//           </a>
//         </div>

//         <hr className="divider" />

//         {/* Options */}
//         <section className="options-section animate-fade-up">
//           <h2 className="section-title">Endless Possibilities</h2>
//           <div className="options-track animate-stagger">
//             <div className="option-card">
//               <span className="option-icon">🧊</span>
//               <h3 className="option-title">Enjoy Chilled</h3>
//               <p className="option-desc">
//                 Brew as normal, let cool, then refrigerate for a refreshing cold
//                 experience.
//               </p>
//             </div>
//             <div className="option-card">
//               <span className="option-icon">☕</span>
//               <h3 className="option-title">Enhance Beverages</h3>
//               <p className="option-desc">
//                 Mix the blend into your usual tea, coffee, or warm drink for a
//                 surprising aromatic twist.
//               </p>
//             </div>
//             <div className="option-card">
//               <span className="option-icon">🍲</span>
//               <h3 className="option-title">Flavour Your Dishes</h3>
//               <p className="option-desc">
//                 Add the blend to your cooking for a unique depth of aroma and
//                 warmth in any recipe.
//               </p>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="footer">
//         <p>
//           &copy; {new Date().getFullYear()} Blackpool Brew. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@thirdbracket/bracketui";
import {
  FaWhatsapp,
  FaLeaf,
  FaHeartbeat,
  FaSnowflake,
  FaMugHot,
  FaUtensils,
  FaBars,
  FaTimes,
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
  "Nigella Seeds",
  "Ginger",
];

const INGREDIENT_CARDS = [
  {
    name: "Fennel Seeds",
    icon: "🌿",
    color: "#4a9e6b",
    benefit: "Aids Digestion",
    desc: "Soothes the digestive tract, reduces bloating and supports gut health naturally.",
  },
  {
    name: "Nutmeg",
    icon: "🟤",
    color: "#b88820",
    benefit: "Calms the Mind",
    desc: "A natural relaxant that eases stress, supports sleep and lifts mood.",
  },
  {
    name: "White Peppercorn",
    icon: "⚪",
    color: "#9a8a70",
    benefit: "Gentle Heat",
    desc: "Milder than black pepper, adds gentle warmth and aids digestion subtly.",
  },
  {
    name: "Black Peppercorn",
    icon: "⚫",
    color: "#555",
    benefit: "Boosts Absorption",
    desc: "Enhances the bioavailability of all other nutrients in the blend.",
  },
  {
    name: "Cinnamon",
    icon: "🪵",
    color: "#C04030",
    benefit: "Balances Blood Sugar",
    desc: "Helps regulate blood sugar levels and improves insulin sensitivity.",
  },
  {
    name: "Black Cumin Seeds",
    icon: "🌱",
    color: "#2a7a5a",
    benefit: "Immune Support",
    desc: "Powerful anti-inflammatory properties that strengthen the immune system.",
  },
  {
    name: "Cloves",
    icon: "🌰",
    color: "#8B3A62",
    benefit: "Natural Antiseptic",
    desc: "Contains eugenol — a powerful antiseptic that supports oral and gut health.",
  },
  {
    name: "Green Cardamom",
    icon: "🫛",
    color: "#3a8a5a",
    benefit: "Freshens Breath",
    desc: "Detoxifies the body and naturally freshens breath with every sip.",
  },
  {
    name: "Black Cardamom",
    icon: "🫘",
    color: "#4a3a2a",
    benefit: "Respiratory Health",
    desc: "Traditionally used to support respiratory health and ease congestion.",
  },
  {
    name: "Star Anise",
    icon: "⭐",
    color: "#c09020",
    benefit: "Anti-Viral Properties",
    desc: "Contains shikimic acid — a key compound used in antiviral medicines.",
  },
  {
    name: "Mace",
    icon: "🌺",
    color: "#d4720a",
    benefit: "Brain Function",
    desc: "Supports cognitive function and memory with its natural active compounds.",
  },
  {
    name: "Bay Leaves",
    icon: "🍃",
    color: "#5a8a30",
    benefit: "Anti-Inflammatory",
    desc: "Rich in compounds that reduce inflammation and support joint health.",
  },
  {
    name: "Nigella Seeds",
    icon: "🌚",
    color: "#6b4fa0",
    benefit: "Antioxidant Rich",
    desc: "Packed with thymoquinone, a potent antioxidant that fights free radicals.",
  },
  {
    name: "Ginger",
    icon: "🫚",
    color: "#d4820a",
    benefit: "Warms & Energises",
    desc: "Stimulates circulation, eases nausea and delivers a warming natural energy boost.",
  },
];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "How to Brew", href: "#brew" },
  { label: "Get Sample", href: "#sample" },
];

export default function BrewPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="page">
      {/* ── Floating Navbar ──────────────────────────────────── */}
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar-inner">
          <a href="#" className="navbar-brand">
            <div className="navbar-logo-wrap">
              <Image
                src="/logo.png"
                alt="Blackpool Brew"
                width={80}
                height={80}
                className="navbar-logo-img"
              />
            </div>
            <span className="navbar-brand-text">Blackpool Brew</span>
          </a>
          <div className="navbar-links">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="navbar-link">
                {l.label}
              </a>
            ))}
          </div>
          <div className="navbar-actions">
            <ThemeToggle />
            <a
              href="https://wa.me/447507155382?text=Hi%2C%20I%27d%20like%20to%20claim%20my%20free%20Blackpool%20Brew%20sample!"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-cta"
            >
              Free Sample
            </a>
            <button
              className="navbar-burger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`navbar-mobile ${menuOpen ? "navbar-mobile--open" : ""}`}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="navbar-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/447507155382?text=Hi%2C%20I%27d%20like%20to%20claim%20my%20free%20Blackpool%20Brew%20sample!"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            <FaWhatsapp /> Claim Free Sample
          </a>
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <header className="hero" id="about">
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
              Handcrafted in Blackpool, UK
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

            {/* Ingredient pills — auto-scrolling marquee */}
            <div className="hero-ingredients" id="ingredients">
              <p className="hero-ingredients-label">14 Natural Ingredients</p>
              <div className="hero-pills-wrap">
                <div className="hero-pills" aria-hidden="false">
                  {/* Duplicated for seamless infinite loop */}
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

      {/* ── Ingredients Benefits ─────────────────────────────── */}
      <section
        className="section section--ingredients-benefits"
        id="ingredients"
      >
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">The Secret</span>
            <h2 className="section-title">
              14 Ingredients.
              <br />
              14 Reasons to Brew.
            </h2>
            <p className="section-sub">
              Every spice in our blend was chosen for a purpose. Ancient wisdom,
              modern wellness.
            </p>
          </div>
          <div className="ingredients-grid">
            {INGREDIENT_CARDS.map((ing, i) => (
              <div
                key={ing.name}
                className="ing-card"
                style={
                  { "--ing-color": ing.color, "--i": i } as React.CSSProperties
                }
              >
                <div className="ing-card-icon-wrap">
                  <span className="ing-card-icon">{ing.icon}</span>
                  <div className="ing-card-ring" />
                </div>
                <div className="ing-card-body">
                  <p className="ing-card-benefit">{ing.benefit}</p>
                  <h3 className="ing-card-name">{ing.name}</h3>
                  <p className="ing-card-desc">{ing.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Brew ───────────────────────────────────────── */}
      <section className="section section--brew" id="brew">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">The Ritual</span>
            <h2 className="section-title">For the Perfect Cup</h2>
            <p className="section-sub">Simple steps, extraordinary results.</p>
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
          <div className="brew-note">
            <span className="brew-note-icon">💡</span>
            <p>
              Fragments of the blend are safe to consume. Discard any build-up
              left at the bottom of your cup.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Blackpool Brew ────────────────────────────────── */}
      <section className="section section--why">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Pure. Natural. Powerful.</h2>
            <p className="section-sub">
              Everything your body deserves. Nothing it doesn&apos;t.
            </p>
          </div>
          <div className="why-grid">
            {[
              {
                icon: <FaLeaf />,
                color: "green",
                title: "100% Natural",
                body: "No artificial colours, no preservatives, no added sugars. Just pure handpicked herbs and spices as nature intended.",
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
        </div>
      </section>

      {/* ── Possibilities ─────────────────────────────────────── */}
      <section className="section section--possibilities">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Versatility</span>
            <h2 className="section-title">Endless Possibilities</h2>
            <p className="section-sub">One blend. Infinite ways to enjoy it.</p>
          </div>
          <div className="poss-grid">
            {[
              {
                icon: <FaMugHot size={28} />,
                title: "Hot Brew",
                body: "The classic. Pour over boiling water, stir, and let the blend work its magic in your favourite mug.",
              },
              {
                icon: <FaSnowflake size={28} />,
                title: "Enjoy Chilled",
                body: "Brew as normal, allow to cool, then refrigerate for a refreshing cold spiced drink.",
              },
              {
                icon: <FaMugHot size={28} />,
                title: "Enhance Beverages",
                body: "Add a pinch to your usual tea, coffee or warm drink for an unexpected aromatic twist.",
              },
              {
                icon: <FaUtensils size={28} />,
                title: "Flavour Your Dishes",
                body: "Use as a cooking spice blend to add depth, warmth and aroma to savoury and sweet recipes.",
              },
            ].map((p, i) => (
              <div
                key={p.title}
                className="poss-card"
                style={{ "--i": i } as React.CSSProperties}
              >
                <div className="poss-card-icon">{p.icon}</div>
                <h3 className="poss-card-title">{p.title}</h3>
                <p className="poss-card-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="section section--cta" id="sample">
        <div className="cta-banner">
          <div className="cta-banner-content">
            <span className="cta-banner-tag">🎁 Limited Time Offer</span>
            <h2 className="cta-banner-title">Try It Free Today</h2>
            <p className="cta-banner-sub">
              We&apos;re offering free samples of the Blackpool Brew to new
              customers. Reach out on WhatsApp and we&apos;ll get one sent to
              you.
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

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Image
              src="/logo.png"
              alt="Blackpool Brew"
              width={56}
              height={56}
              className="footer-logo"
            />
            <div>
              <p className="footer-brand-name"> +44 7432 654441</p>
              <p className="footer-brand-name">info@blackpoolbrew.com</p>
              <p className="footer-brand-name">
                7 topping street, Blackpool, FY1 3AX
              </p>
            </div>
          </div>

          <div className="footer-links">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="footer-link">
                {l.label}
              </a>
            ))}
          </div>
          <div className="footer-right">
            <ThemeToggle />
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Blackpool Brew. All rights
              reserved.
            </p>
            <p className="footer-credit">
              Built by{" "}
              <a
                href="https://thirdbracket.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-credit-link"
              >
                Third Bracket Ltd
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
