import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions | Blackpool Brew",
  description: "Blackpool Brew Terms & Conditions — the terms governing your use of our website and products.",
};

export default function TermsPage() {
  return (
    <div className="page">
      <Navbar />
      <div className="page-top-spacer" />

      <PageHero
        tag="Legal"
        title="Terms & Conditions"
        subtitle="Last updated: January 2025. Please read these terms carefully before using our website or ordering our products."
      />

      <section className="section section--why">
        <div className="section-inner">
          <div className="legal-content">

            <div className="legal-section">
              <h2 className="legal-heading">1. Introduction</h2>
              <p>These Terms and Conditions govern your use of the Blackpool Brew website (blackpoolbrew.com) and the purchase of our products. By accessing our website or placing an order, you agree to be bound by these terms.</p>
              <p>Blackpool Brew is operated from 7 Topping Street, Blackpool, FY1 3AX, United Kingdom. Contact: <a href="mailto:info@blackpoolbrew.com" className="footer-credit-link">info@blackpoolbrew.com</a></p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">2. Use of Our Website</h2>
              <p>You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</p>
              <ul className="legal-list">
                <li>Use the website in any way that violates applicable UK or international laws or regulations.</li>
                <li>Transmit any unsolicited or unauthorised advertising or promotional material.</li>
                <li>Attempt to gain unauthorised access to any part of our website or systems.</li>
                <li>Reproduce, duplicate, copy or resell any part of our website without express written permission.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">3. Products & Free Samples</h2>
              <p>Free samples are offered at our discretion and are subject to availability. We reserve the right to withdraw the free sample offer at any time without notice. One free sample per household. Free samples are for personal use only and may not be resold.</p>
              <p>Product descriptions, images and information on our website are provided in good faith. We reserve the right to modify product formulations, packaging or availability without prior notice.</p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">4. Health & Medical Disclaimer</h2>
              <p>Blackpool Brew is a food product and is not intended to diagnose, treat, cure or prevent any disease or medical condition. The information on our website regarding the potential health benefits of our ingredients is provided for educational purposes only and is not medical advice.</p>
              <p>You should consult a qualified healthcare professional before consuming Blackpool Brew if you:</p>
              <ul className="legal-list">
                <li>Are pregnant or breastfeeding.</li>
                <li>Have a known medical condition or are taking prescription medication.</li>
                <li>Have known allergies to any of the listed ingredients.</li>
                <li>Are giving the product to children under 12 years of age.</li>
              </ul>
              <p>We do not accept liability for any adverse reactions arising from consumption of our products where the above guidance has not been followed.</p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">5. Intellectual Property</h2>
              <p>All content on this website — including text, images, logos, graphics and design — is the intellectual property of Blackpool Brew or its licensors and is protected by UK copyright law. You may not reproduce, distribute or create derivative works without our express written permission.</p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">6. Limitation of Liability</h2>
              <p>To the fullest extent permitted by UK law, Blackpool Brew shall not be liable for any indirect, incidental, special or consequential damages arising from your use of our website or products. Our total liability to you shall not exceed the value of the product purchased.</p>
              <p>We do not warrant that our website will be uninterrupted, error-free or free from viruses or other harmful components.</p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">7. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites (including WhatsApp and social media platforms). These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">8. Consumer Rights</h2>
              <p>Nothing in these Terms and Conditions affects your statutory rights as a consumer under UK law, including rights under the Consumer Rights Act 2015 and the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013.</p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">9. Governing Law</h2>
              <p>These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">10. Changes to These Terms</h2>
              <p>We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with a revised date. Your continued use of our website after changes are posted constitutes your acceptance of the updated terms.</p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">11. Contact</h2>
              <p>If you have any questions about these Terms and Conditions, please contact us:</p>
              <ul className="legal-list">
                <li>Email: <a href="mailto:info@blackpoolbrew.com" className="footer-credit-link">info@blackpoolbrew.com</a></li>
                <li>Phone: +44 7432 654441</li>
                <li>Address: 7 Topping Street, Blackpool, FY1 3AX, United Kingdom</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
