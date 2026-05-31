import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Blackpool Brew",
  description: "Blackpool Brew Privacy Policy — how we collect, use and protect your personal data in accordance with UK GDPR.",
};

export default function PrivacyPage() {
  return (
    <div className="page">
      <Navbar />
      <div className="page-top-spacer" />

      <PageHero
        tag="Legal"
        title="Privacy Policy"
        subtitle="Last updated: January 2025. This policy explains how Blackpool Brew collects, uses and protects your personal information."
      />

      <section className="section section--why">
        <div className="section-inner">
          <div className="legal-content">

            <div className="legal-section">
              <h2 className="legal-heading">1. Who We Are</h2>
              <p>Blackpool Brew is a trading name operated from 7 Topping Street, Blackpool, FY1 3AX, United Kingdom. We are the data controller for the personal information we collect about you.</p>
              <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us at <a href="mailto:info@blackpoolbrew.com" className="footer-credit-link">info@blackpoolbrew.com</a>.</p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">2. What Information We Collect</h2>
              <p>We may collect the following types of personal information:</p>
              <ul className="legal-list">
                <li><strong>Contact information:</strong> Your name, phone number, email address and postal address when you contact us or request a sample.</li>
                <li><strong>Communication data:</strong> Messages you send us via WhatsApp, email or other channels.</li>
                <li><strong>Usage data:</strong> Information about how you use our website, including pages visited, time spent and referring URLs (collected via analytics tools).</li>
                <li><strong>Device data:</strong> IP address, browser type, operating system and device identifiers.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">3. How We Use Your Information</h2>
              <p>We use your personal information for the following purposes:</p>
              <ul className="legal-list">
                <li>To respond to your enquiries and provide customer support.</li>
                <li>To process and fulfil free sample requests.</li>
                <li>To send you information about our products and promotions (only where you have consented).</li>
                <li>To improve our website and services through analytics.</li>
                <li>To comply with our legal obligations.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">4. Legal Basis for Processing</h2>
              <p>Under UK GDPR, we process your personal data on the following legal bases:</p>
              <ul className="legal-list">
                <li><strong>Consent:</strong> Where you have given us explicit consent to contact you for marketing purposes.</li>
                <li><strong>Legitimate interests:</strong> To respond to enquiries and improve our services.</li>
                <li><strong>Contract performance:</strong> To fulfil sample requests and orders.</li>
                <li><strong>Legal obligation:</strong> Where we are required to process data to comply with UK law.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">5. How We Share Your Information</h2>
              <p>We do not sell, rent or trade your personal information to third parties. We may share your data with:</p>
              <ul className="legal-list">
                <li><strong>Service providers:</strong> Third-party companies that help us operate our website and business (e.g. hosting providers, analytics services), who are bound by data processing agreements.</li>
                <li><strong>Legal authorities:</strong> Where required by law, court order or regulatory authority.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">6. Data Retention</h2>
              <p>We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Customer enquiry data is typically retained for up to 2 years. You may request deletion of your data at any time.</p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">7. Your Rights Under UK GDPR</h2>
              <p>You have the following rights regarding your personal data:</p>
              <ul className="legal-list">
                <li><strong>Right of access:</strong> To request a copy of the personal data we hold about you.</li>
                <li><strong>Right to rectification:</strong> To request correction of inaccurate or incomplete data.</li>
                <li><strong>Right to erasure:</strong> To request deletion of your personal data (&ldquo;right to be forgotten&rdquo;).</li>
                <li><strong>Right to restrict processing:</strong> To request that we limit how we use your data.</li>
                <li><strong>Right to data portability:</strong> To receive your data in a structured, machine-readable format.</li>
                <li><strong>Right to object:</strong> To object to processing based on legitimate interests or for direct marketing.</li>
                <li><strong>Right to withdraw consent:</strong> Where processing is based on consent, you may withdraw it at any time.</li>
              </ul>
              <p>To exercise any of these rights, contact us at <a href="mailto:info@blackpoolbrew.com" className="footer-credit-link">info@blackpoolbrew.com</a>. We will respond within 30 days.</p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">8. Cookies</h2>
              <p>Our website may use cookies and similar tracking technologies to improve your browsing experience and analyse website traffic. You can control cookie settings through your browser. By continuing to use our website, you consent to our use of cookies in accordance with this policy.</p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">9. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites (such as WhatsApp). We are not responsible for the privacy practices of those websites and encourage you to review their privacy policies.</p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">10. Security</h2>
              <p>We take appropriate technical and organisational measures to protect your personal data against unauthorised access, loss or destruction. However, no method of transmission over the internet is 100% secure.</p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">11. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on this page with a revised date. Your continued use of our website after changes constitutes acceptance of the updated policy.</p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">12. Complaints</h2>
              <p>If you are unhappy with how we handle your personal data, you have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) — the UK&apos;s data protection authority — at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="footer-credit-link">ico.org.uk</a> or by calling 0303 123 1113.</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
