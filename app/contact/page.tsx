'use client';

import { useState } from 'react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore/lite';

export default function ContactPage() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    host: 'consuldent.com.au',
    type: 'contact',
    created: new Date(),
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      setErrorMessage('');
      setSuccessMessage('');

      const colRef = collection(db, 'webForms');
      await addDoc(colRef, {
        ...formData,
        created: new Date().toISOString(),
      });

      setSuccessMessage('Thank you! We will be in touch about the next steps.');

      setFormData({
        name: '',
        email: '',
        message: '',
        host: 'consuldent.com.au',
        type: 'contact',
        created: new Date(),
      });
    } catch (e) {
      console.error('Error adding document: ', e);
      setErrorMessage('This is a bit inconvenient. Could you please reach out to us at hello@consuldent.com.au instead ^_^');
    }
    setLoading(false);
  };

  return (
    <main className="bg-[#FAF4EC]">
      <div className="container mx-auto py-16 px-4">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-8xl font-bold text-[#0A3D91] mb-6">
            🦷 Contact
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
            Ready to transform your dental practice? Let&apos;s talk about what you need and how we can help.
          </p>
        </div>

        {/* Contact Info & Form */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#0A3D91] p-3 rounded-xl">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0A3D91] mb-1">Email</h3>
                <a href="mailto:hello@consuldent.com.au" className="text-gray-700 hover:text-[#0A3D91] transition-colors">
                  hello@consuldent.com.au
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#10B981] p-3 rounded-xl">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0A3D91] mb-1">Location</h3>
                <p className="text-gray-700">Melbourne, VIC, Australia</p>
                <p className="text-sm text-gray-500 mt-1">Serving dental practices across Victoria, with capability to work with NSW and QLD practices.</p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0A3D91] bg-white"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0A3D91] bg-white"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0A3D91] bg-white"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#0A3D91] text-white font-bold rounded-lg hover:bg-[#0A3D91]/90 transition-colors disabled:opacity-50"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
              {successMessage && (
                <p className="text-[#10B981] text-sm font-semibold">{successMessage}</p>
              )}
            </form>
          </div>

          {/* CTA Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg h-fit">
            <h2 className="text-2xl font-bold text-[#0A3D91] mb-4">Book a Free Call</h2>
            <p className="text-gray-600 mb-6">
              Schedule a complimentary 30-minute call to discuss your dental practice challenges and explore how we can help.
            </p>
            <a
              href="mailto:hello@consuldent.com.au?subject=Free%20Consultation%20Request&body=Hi%20Vrinda,%0A%0AI'd%20like%20to%20discuss%20how%20Consuldent%20can%20help%20my%20dental%20practice.%0A%0APractice%20Name:%0ALocation:%0ACurrent%20Challenges:%0A%0ALooking%20forward%20to%20hearing%20from%20you."
              className="flex items-center justify-center gap-2 bg-[#0A3D91] text-white p-4 rounded-xl font-semibold text-lg hover:bg-[#0A3D91]/90 transition-colors"
            >
              Request Free Consultation <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A3D91] mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#0A3D91] mb-2">How long until I see results?</h3>
              <p className="text-gray-600">Most dental practices see measurable results within 90 days. Technology implementations typically show immediate efficiency gains, while team training takes effect within the first few weeks.</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#0A3D91] mb-2">What size practice do you work with?</h3>
              <p className="text-gray-600">We work with dental practices of all sizes, from single-chair practices to multi-location operations. Our programs are tailored to your specific needs and growth goals.</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#0A3D91] mb-2">Do you offer remote consultations?</h3>
              <p className="text-gray-600">Yes! We offer virtual consultations and training for dental practices across Australia. On-site engagements are available for Melbourne-based practices.</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#0A3D91] mb-2">What&apos;s included in the initial audit?</h3>
              <p className="text-gray-600">Our comprehensive audit covers your PMS setup, workflows, patient journey, team performance, and technology stack. You&apos;ll receive a detailed report with actionable recommendations.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}