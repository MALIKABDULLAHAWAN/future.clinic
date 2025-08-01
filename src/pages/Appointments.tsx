import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const Appointments = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    service: '',
    consultationType: 'in-person',
    message: ''
  });

  const services = [
    { id: 'consultation', name: 'Free Consultation', duration: '30 mins', price: 'Free' },
    { id: 'facial', name: 'Custom Facial', duration: '60 mins', price: 'From $120' },
    { id: 'skin-booster', name: 'Skin Booster', duration: '90 mins', price: 'From $150' },
    { id: 'ultraformer', name: 'Ultraformer MPT', duration: '90 mins', price: 'From $500' },
    { id: 'indiba', name: 'INDIBA Therapy', duration: '60 mins', price: 'From $300' },
    { id: 'truflex', name: 'truFlex Muscle', duration: '45 mins', price: 'From $400' },
    { id: 'lymphatic', name: 'Lymphatic Drainage', duration: '60 mins', price: 'From $180' },
    { id: 'body-contouring', name: 'Body Contouring', duration: '120 mins', price: 'From $250' }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment booked:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Book Your Appointment
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Start your beauty and wellness journey today. Book your free consultation or treatment appointment with our expert team.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Schedule Your Appointment</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300"
                        placeholder="0415 588 449"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Select Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300"
                    >
                      <option value="">Choose a service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name} - {service.duration} - {service.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Consultation Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Consultation Type
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="consultationType"
                          value="in-person"
                          checked={formData.consultationType === 'in-person'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span>In-Person Consultation</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="consultationType"
                          value="virtual"
                          checked={formData.consultationType === 'virtual'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span>Virtual Consultation</span>
                      </label>
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300 resize-none"
                      placeholder="Tell us about your beauty and wellness goals, any concerns, or special requests..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4"
                  >
                    Book Appointment
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-gray-50 p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">0415 588 449</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">welcome@future.clinic</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                    <div className="text-gray-700">
                      <p>4 Cross Street</p>
                      <p>Double Bay, NSW 2028</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-gray-50 p-6">
                <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9am - 5pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9am - 4pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-gray-50 p-6">
                <h3 className="text-xl font-bold mb-4">What to Expect</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm text-gray-700">Free consultation to discuss your goals</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm text-gray-700">Personalized treatment plan</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm text-gray-700">Expert care from our specialists</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm text-gray-700">Follow-up care and support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Discover our range of beauty and wellness treatments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-6 shadow-lg text-center">
                <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{service.duration}</p>
                <p className="text-lg font-bold text-black">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Beauty Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Book your free consultation today and discover how our expert team can help you achieve your beauty and wellness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0415588449" className="btn-outline text-lg px-8 py-4">
              CALL US NOW
            </a>
            <a href="mailto:welcome@future.clinic" className="btn-secondary text-lg px-8 py-4">
              SEND EMAIL
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointments;