export default function PrivacyPage() {
  return (
    <main className="bg-[#FAF4EC]">
      <div className="container mx-auto py-16 px-4">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-8xl font-bold text-[#0A3D91] mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="max-w-3xl space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#0A3D91] mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Consuldent ("we," "our," or "us") collects information to provide consulting services for dental practices. This includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and business details when you contact us or use our services.</li>
              <li><strong>Business Information:</strong> Details about your dental practice including size, location, systems used, and operational challenges.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website and services, including IP addresses, browser type, and cookies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3D91] mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use collected information to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Provide and deliver dental practice consulting services</li>
              <li>Communicate with you regarding inquiries, service proposals, and project updates</li>
              <li>Improve our website functionality and user experience</li>
              <li>Send relevant updates about dental practice growth, technology, and training (you can opt out at any time)</li>
              <li>Fulfill our contractual and legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3D91] mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, rent, or share your personal information with third parties except:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>With your explicit consent</li>
              <li>With trusted service providers assisting us with hosting, email delivery, or analytics (bound by confidentiality agreements)</li>
              <li>To comply with legal obligations, court orders, or governmental requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3D91] mb-4">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We take reasonable measures to protect your personal information from unauthorized access, misuse, alteration, or destruction. This includes secure storage, encryption for sensitive data, and access controls. While we strive for complete security, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3D91] mb-4">5. Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us analyze web traffic and personalize content. You can control cookie preferences through your browser settings. Disabling cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3D91] mb-4">6. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate personal information</li>
              <li>Request deletion of your personal information (subject to legal obligations)</li>
              <li>Withdraw consent for marketing communications at any time</li>
              <li>Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3D91] mb-4">7. External Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. Consuldent is not responsible for the privacy practices or content of these external sites. We recommend reviewing their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3D91] mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated "Last modified" date. Continued use of our website and services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A3D91] mb-4">9. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:<br />
              <strong>Email:</strong> vrinda@consuldent.com.au<br />
              <strong>Location:</strong> Melbourne, VIC, Australia
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}