// components/HeroForm.tsx
'use client';

import { useState } from 'react';

export default function HeroForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (
        e
    ) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Hero Form submitted:', formData);
        // Add your form submission logic here
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="glass-effect rounded-2xl p-6 shadow-xl w-full">
            <h3 className="text-2xl font-bold mb-4 text-center text-gradient">
                Get Your AI Chatbot Today
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        placeholder="Enter your name"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        placeholder="you@company.com"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        placeholder="(123) 456-7890"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Business Needs
                    </label>
                    <textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        placeholder="Tell us about your business..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:brightness-110 transition"
                >
                    Get Started
                </button>
            </form>
        </div>
    );
}