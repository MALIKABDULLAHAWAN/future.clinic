import { useState } from 'react';
import { Calendar, Clock, Phone, Mail, MapPin, CheckCircle, Star, Shield, Zap } from 'lucide-react';

const Appointments = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    { id: 'consultation', name: 'Free Consultation', duration: '30 min', price: 'FREE' },
    { id: 'facial', name: 'Luxury Facial Treatment', duration: '60 min', price: '$150' },
    { id: 'peel', name: 'Chemical Peel', duration: '45 min', price: '$200' },
    { id: 'microdermabrasion', name: 'Microdermabrasion', duration: '30 min', price: '$120' },
    { id: 'botox', name: 'Botox Treatment', duration: '30 min', price: '$350' },
    { id: 'filler', name: 'Dermal Filler', duration: '45 min', price: '$450' },
    { id: 'laser', name: 'Laser Treatment', duration: '60 min', price: '$300' },
    { id: 'body', name: 'Body Contouring', duration: '90 min', price: '$250' },
    { id: 'spa', name: 'Future Spa Experience', duration: '120 min', price: '$400' }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container-custom relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
              Book Your Appointment
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the future of beauty and wellness. Book your consultation with our world-class experts.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up-delay">
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Calendar className="w-5 h-5" />
                <span>Flexible Scheduling</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                <CheckCircle className="w-5 h-5" />
                <span>Expert Consultation</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Star className="w-5 h-5" />
                <span>Premium Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-8 gradient-text">Schedule Your Visit</h2>
              <form className="space-y-6">
                {/* Service Selection */}
                <div>
                  <label className="block text-lg font-semibold mb-4">Select Service</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <div
                        key={service.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 card-hover ${
                          selectedService === service.id
                            ? 'border-black bg-black text-white'
                            : 'border-gray-200 bg-white hover:border-black'
                        }`}
                        onClick={() => setSelectedService(service.id)}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <h3 className="font-semibold text-lg">{service.name}</h3>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm opacity-75">{service.duration}</span>
                          <span className="font-bold">{service.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-lg font-semibold mb-4">Select Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-all duration-300"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-lg font-semibold mb-4">Select Time</label>
                  <div className="grid grid-cols-4 gap-3">
                    {timeSlots.map((time, index) => (
                      <button
                        key={time}
                        type="button"
                        className={`p-3 border-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                          selectedTime === time
                            ? 'border-black bg-black text-white'
                            : 'border-gray-200 bg-white hover:border-black'
                        }`}
                        onClick={() => setSelectedTime(time)}
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 px-8 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 liquid"
                >
                  Book Appointment
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
                      <h3 className="font-semibold text-lg">Location</h3>
                      <p className="text-gray-600">4 Cross Street, Double Bay, NSW 2028</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-gray-600">0415 588 449</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600">welcome@future.clinic</p>
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
                      <p className="text-gray-600">Mon-Fri: 9am-5pm</p>
                      <p className="text-gray-600">Sat: 9am-4pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text animate-fade-in-up">
            Why Choose Future Clinic?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Care</h3>
              <p className="text-gray-600">Our team of certified professionals ensures the highest quality treatments.</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Advanced Technology</h3>
              <p className="text-gray-600">State-of-the-art equipment and cutting-edge treatments for optimal results.</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Premium Experience</h3>
              <p className="text-gray-600">Luxurious environment designed for your comfort and relaxation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointments;