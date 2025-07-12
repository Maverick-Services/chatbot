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

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (
        e
    ) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    source: 'Hero Form'
                }),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus({
                    success: true,
                    message: 'Thank you! We will contact you shortly.'
                });
                setFormData({ name: '', email: '', phone: '', message: '' });

                // Clear success message after 5 seconds
                setTimeout(() => {
                    setSubmitStatus(null);
                }, 5000);
            } else {
                throw new Error(result.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setSubmitStatus({
                success: false,
                message: error.message || 'An error occurred. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="glass-effect rounded-2xl p-6 shadow-xl w-full">
            <h3 className="text-2xl font-bold mb-4 text-center text-gradient">
                Get Your AI Chatbot Today
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        placeholder="Enter your name"
                        disabled={isSubmitting}
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        placeholder="you@company.com"
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Business Needs <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        rows={3}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        placeholder="Tell us about your business..."
                        disabled={isSubmitting}
                    ></textarea>
                </div>

                {submitStatus && (
                    <div className={`p-3 rounded-md ${submitStatus.success
                        ? 'bg-green-900/50 text-green-300'
                        : 'bg-red-900/50 text-red-300'
                        }`}>
                        {submitStatus.message}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        </div>
                    ) : (
                        'Get Started'
                    )}
                </button>
            </form>
        </div>
    );
}