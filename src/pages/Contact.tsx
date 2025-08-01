import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Award } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container-custom relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to start your beauty transformation? Contact our expert team for personalized consultation and care.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up-delay">
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                <MessageSquare className="w-5 h-5" />
                <span>Expert Consultation</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Users className="w-5 h-5" />
                <span>Personalized Care</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Award className="w-5 h-5" />
                <span>Premium Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-8 gradient-text">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold mb-3">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold mb-3">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold mb-3">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-all duration-300"
                      placeholder="0415 588 449"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold mb-3">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="consultation">Book Consultation</option>
                      <option value="treatment">Treatment Inquiry</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="appointment">Appointment Change</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-3">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your beauty and wellness goals, any concerns, or how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 px-8 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 liquid flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in-up-delay">
              <h2 className="text-3xl font-bold mb-8 gradient-text">Contact Information</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Visit Us</h3>
                      <p className="text-gray-600">4 Cross Street, Double Bay</p>
                      <p className="text-gray-600">NSW 2028, Australia</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <p className="text-gray-600">0415 588 449</p>
                      <p className="text-sm text-gray-500">Available during business hours</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <p className="text-gray-600">welcome@future.clinic</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Opening Hours</h3>
                      <div className="space-y-1">
                        <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                        <p className="text-gray-600">Saturday: 9am - 4pm</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-white p-6 rounded-lg shadow-lg card-hover">
                <h3 className="font-semibold text-lg mb-4">Find Us</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">4 Cross Street, Double Bay, NSW 2028</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text animate-fade-in-up">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg card-hover animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-bold mb-4">How do I book an appointment?</h3>
              <p className="text-gray-600">You can book an appointment by calling us at 0415 588 449, emailing welcome@future.clinic, or using our online booking system.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg card-hover animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-4">What should I expect during my first visit?</h3>
              <p className="text-gray-600">Your first visit includes a comprehensive consultation where we discuss your goals, assess your skin, and create a personalized treatment plan.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg card-hover animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-bold mb-4">Do you offer payment plans?</h3>
              <p className="text-gray-600">Yes, we offer flexible payment options and can discuss financing plans during your consultation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg card-hover animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold mb-4">What is your cancellation policy?</h3>
              <p className="text-gray-600">We require 24 hours notice for appointment cancellations. Late cancellations may incur a fee.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;