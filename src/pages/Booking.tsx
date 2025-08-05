import React from 'react';

const Booking = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Booking</h1>
          <p className="text-lg text-gray-600 mb-8">
            Book your appointment with Future Clinic
          </p>
          <button 
            className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
            onClick={() => window.open('https://www.fresha.com/a/future-clinic-modern-beauty-double-bay-4-cross-st-apd6jatz/booking?menu=true&dppub=true&_gl=1*tbuzlm*_gcl_au*MjAzNTM3MzA0MS4xNzU0MDQ4MTUz*_ga*MTM1NTUwNTQ2Ni4xNzU0MDQ4MTU0*_ga_Z9WC20429Y*czE3NTQzMTI3OTAkbzEzJGcxJHQxNzU0MzEzMjMwJGo0NyRsMCRoMA..', '_blank')}
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking; 