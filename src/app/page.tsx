'use client';

import { useState, useEffect } from 'react';
import ContactModal from './components/ContactModal';
import Navbar from './components/Navbar';
import HeroForm from './components/HeroForm';
import Testimonials from './components/Testimonials';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('show');
        }
      });
    });

    document.querySelectorAll('.fade-in').forEach(el => {
      (el as HTMLElement).classList.remove('show');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen gradient-bg text-white pt-16">
      <Navbar onOpenContact={openModal} />
      {/* Hero */}
      {/* Hero Section with Form */}
      <section className="py-20 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden max-w-7xl mx-auto">
        <div className="lg:w-1/2 fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Transform Your Business with <span className="text-gradient">AVA</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Automate 90% of customer conversations across WhatsApp, Instagram, and your Website.
            From missed leads to 24/7 smart replies, from repetitive queries to instant bookings — AVA does it all.
            No monthly fees. Just one powerful multilingual assistant for life.
          </p>
          <button
            onClick={openModal}
            className="pulse-glow px-6 py-3 rounded-full shadow-lg hover:scale-105 transition cursor-pointer font-bold text-2xl"
          >
            Launch Your AI Chatbot
          </button>
        </div>

        <div className="lg:w-1/2 w-full fade-in">
          <HeroForm />
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto fade-in">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            See AVA in Action
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Watch how AVA transforms customer interactions into seamless, automated conversations
            across all your business channels.
          </p>
        </div>

        <div className="relative rounded-2xl border-4 border-cyan-400 shadow-2xl overflow-hidden max-w-4xl mx-auto">
          <video
            src="/Ai video.mp4"
            autoPlay
            muted
            loop
            className="w-full h-auto object-cover"
          />
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/30 rounded-full p-4 pulse-glow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div> */}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 md:px-16 gradient-bg fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Why AVA – Multilingual AI That Works
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "🧠 Smart from Day One",
              desc: "Trained on your business FAQs and workflows, AVA handles 80–90% of queries—instantly.",
            },
            {
              title: "🗣️ Voice + Multilingual",
              desc: "Speaks English, Arabic, Hindi, Tagalog & more. Includes voice-to-text for low-literacy users.",
            },
            {
              title: "🌐 One Assistant, Every Channel",
              desc: "Website, WhatsApp, Instagram—AVA integrates seamlessly so you never miss a lead.",
            },
            {
              title: "🛒 Not Just Chat, It Converts",
              desc: "Books appointments, collects leads, takes payments—all in one smooth conversation.",
            },
            {
              title: "🔧 No Code Setup",
              desc: "Easy drag-and-drop dashboard. Customize everything without a single line of code.",
            },
            {
              title: "🔒 Private, Secure, One-Time Fee",
              desc: "Includes white-label, SLA guarantee & full data compliance. No hidden charges.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="glass-effect p-6 hover:scale-[1.02] transition"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 md:px-16 gradient-bg fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Flexible Pricing for Every Business
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "🚀 AI Starter Pack",
              price: "799 USD/month",
              original: "2,799 USD",
              tag: "Best for: Startups",
              features: [
                "Website chatbot",
                "Basic FAQ/contact automation",
                "Single channel",
                "1 update/month",
                "48h setup",
              ],
            },
            {
              title: "📈 AI Business Pro",
              price: "1,999 USD/month",
              original: "4,799 USD",
              tag: "Best for: Growing businesses",
              features: [
                "Chatbot + WhatsApp",
                "Dynamic lead forms",
                "CRM integration",
                "Analytics dashboard",
                "Priority support",
              ],
            },
            {
              title: "🤖 AI Customer Care+",
              price: "2,399 USD/month",
              original: "5,999 USD",
              tag: "Best for: E-commerce, healthcare",
              features: [
                "AI ticketing & triage",
                "Helpdesk integrations",
                "Human handoff",
                "Monthly reports",
              ],
            },
            {
              title: "🚀 AI Full Growth Suite",
              price: "4,399 USD/month",
              original: "9,999 USD",
              tag: "Best for: Enterprises",
              features: [
                "Omnichannel AI",
                "ERP/API + voice",
                "3 upgrades/month",
                "Strategy sessions",
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:scale-105 transition"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <div className="text-cyan-300 text-lg mb-3">
                  {plan.price} <span className="line-through text-sm text-gray-400">{plan.original}</span>
                </div>
                <ul className="text-gray-300 text-sm space-y-2 mb-4">
                  {plan.features.map((f, i) => (
                    <li key={i}>✔ {f}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={openModal}
                className="bg-cyan-500 hover:bg-cyan-400 text-white mt-auto px-4 py-2 rounded-full transition cursor-pointer"
              >
                Get Started
              </button>
              <span className="text-xs text-gray-400 mt-2">{plan.tag}</span>
            </div>
          ))}
        </div>

        {/* VIP Enterprise */}
        <div className="mt-16 glass-effect p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-4">✨ VIP Enterprise AI</h3>
          <p className="text-gray-300 mb-6">Custom AI for complex operations & full compliance</p>
          <ul className="text-gray-300 text-sm mb-6 space-y-2">
            <li>✔ Custom AI (call center, APIs, multilingual)</li>
            <li>✔ Dedicated project manager + SLA</li>
            <li>✔ White-label, privacy & compliance</li>
          </ul>
          <button
            onClick={openModal}
            className="pulse-glow px-6 py-3 rounded-full hover:scale-105 transition cursor-pointer"
          >
            Book a Consultation
          </button>
        </div>
      </section>

      <Testimonials />

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
