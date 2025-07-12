import React from 'react'

function Testimonials() {
    return (
        <section className="py-20 px-6 md:px-16 fade-in">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
                    Trusted by Businesses Worldwide
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Rajesh Sharma",
                            company: "TechSolutions India",
                            role: "CEO",
                            quote: "AVA transformed our customer support. Response times went from hours to seconds, and we've seen a 40% increase in conversions. The multilingual capability is perfect for our diverse customer base.",
                            country: "🇮🇳 India"
                        },
                        {
                            name: "Emily Johnson",
                            company: "Global Retail Inc",
                            role: "Operations Director",
                            quote: "Implementing AVA was the best decision we made this year. It handles 85% of our customer inquiries flawlessly. The booking and payment integration has significantly boosted our sales.",
                            country: "🇺🇸 USA"
                        },
                        {
                            name: "Priya Patel",
                            company: "MediCare Hospitals",
                            role: "Patient Services Manager",
                            quote: "AVA's voice-to-text feature has been revolutionary for our elderly patients. Appointment bookings increased by 60% and our staff can now focus on critical cases instead of routine queries.",
                            country: "🇮🇳 India"
                        },
                        {
                            name: "Michael Thompson",
                            company: "TravelEase",
                            role: "Customer Experience Lead",
                            quote: "The omnichannel support is incredible. Whether customers reach us via WhatsApp, Instagram, or our website, AVA provides consistent, instant responses. Our customer satisfaction scores are at an all-time high.",
                            country: "🇺🇸 USA"
                        },
                        {
                            name: "Arun Kumar",
                            company: "FoodExpress",
                            role: "Founder",
                            quote: "As a small business, AVA gave us enterprise-level capabilities without the cost. The no-code setup was so easy, and we were live in just 2 days. Highly recommended for startups!",
                            country: "🇮🇳 India"
                        },
                        {
                            name: "Sarah Williams",
                            company: "Luxury Realty Group",
                            role: "Sales Director",
                            quote: "AVA books more appointments than our entire sales team combined. The natural conversations and multilingual support help us connect with international clients seamlessly.",
                            country: "🇺🇸 USA"
                        }
                    ].map((testimonial, index) => (
                        <div
                            key={index}
                            className="glass-effect p-6 rounded-xl hover:scale-[1.02] transition"
                        >
                            <div className="flex items-start mb-4">
                                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                    <p className="text-cyan-300 text-sm">{testimonial.role}, {testimonial.company}</p>
                                    <p className="text-gray-400 text-xs mt-1">{testimonial.country}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 italic">&quot;{testimonial.quote}&quot;</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials