import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'What areas can be treated with Ultraformer MPT?',
    answer: 'Ultraformer MPT can be used to treat various areas, including the face, neck, decolletage, and body. Common treatment areas include the forehead, cheeks, jawline, neck, abdomen, arms, and thighs.'
  },
  {
    question: 'Is Ultraformer MPT treatment painful?',
    answer: 'Ultraformer MPT treatments are designed to be comfortable with minimal discomfort. Most clients experience only mild sensations during the procedure.'
  },
  {
    question: 'How long does an Ultraformer MPT treatment session take?',
    answer: 'Treatment sessions typically last between 30-60 minutes, depending on the area being treated and the specific protocol used.'
  },
  {
    question: 'How many Ultraformer MPT sessions are needed to see results?',
    answer: 'Results can be visible after just one session, with optimal results typically achieved after 1-3 treatments depending on individual goals and skin condition.'
  },
  {
    question: 'How long do the results of Ultraformer MPT last?',
    answer: 'Results from Ultraformer MPT can last 1-2 years, with maintenance treatments recommended to maintain optimal results.'
  },
  {
    question: 'Are there any side effects or risks associated with Ultraformer MPT?',
    answer: 'Ultraformer MPT is a safe, non-invasive treatment with minimal side effects. Some clients may experience mild redness or swelling that typically resolves within a few hours.'
  },
  {
    question: 'How should I prepare for an Ultraformer MPT treatment?',
    answer: 'Preparation is minimal. Avoid sun exposure for 24 hours before treatment, arrive with clean skin, and avoid wearing makeup on the treatment area.'
  }
];

const UltraformerMpt: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            <p className="text-xl text-gray-500 mb-6">Ultraformer MPT</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-10" style={{ fontFamily: 'var(--font-monument)' }}>
              Firmer lifted skin
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
              onClick={() => window.open('https://www.fresha.com/a/future-clinic-modern-beauty-double-bay-4-cross-st-apd6jatz/booking?menu=true&dppub=true&_gl=1*tbuzlm*_gcl_au*MjAzNTM3MzA0MS4xNzU0MDQ4MTUz*_ga*MTM1NTUwNTQ2Ni4xNzU0MDQ4MTU0*_ga_Z9WC20429Y*czE3NTQzMTI3OTAkbzEzJGcxJHQxNzU0MzEzMjMwJGo0NyRsMCRoMA..', '_blank')}
              className="btn-responsive bg-black text-white hover:bg-gray-800 button-hover text-lg px-8 py-4"
            >
              BOOK NOW
            </button>
              <Link to="/contact" className="btn-responsive border-2 border-black text-black hover:bg-black hover:text-white button-hover text-lg px-8 py-4">CONTACT</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-800" style={{ fontFamily: 'var(--font-monument)' }}>
              Indulge in radiant skin with Ultraformer MPT: the premier non-surgical facelift!
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              The Ultraformer MPT is a game-changer in aesthetic treatments, offering state-of-the-art MMFU technology for facial lifting, skin tightening, and body contouring. This non-invasive device ensures precision and effectiveness with minimal discomfort, thanks to its advanced micro-pulsed energy delivery.
            </p>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              One highlight is the Ultra Booster handpiece, which infuses a unique ampoule to tighten, brighten, and moisturise the skin in one seamless step, enhancing anti-ageing effects and overall skin health.
            </p>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Efficiency is paramount, with treatment times more than 2.5 times faster than previous models. With three versatile handpieces and ten interchangeable cartridges, the Ultraformer MPT provides high peak power and precise application for swift, impressive results, making it an invaluable asset for modern aesthetic practices.
            </p>
            <div className="flex justify-center">
              <img src="/images/ultraformer-mpt-img.png.webp" alt="Ultraformer MPT Device" className="w-[500px] h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">What our clients say about Ultraformer MPT treatments</h3>
          <div className="max-w-5xl mx-auto bg-white p-10 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-6 italic text-xl leading-relaxed">
              "Thank you Wonder and thank you Claudia for my treatment for Ultraformer MPT and my beautiful Hollywood Lift & Booster Glow. My face looks much brighter, with a natural plump and glow. After the session l did not have any redness, no pain and was ready to out and party. After 2 days my skin kept on improving with a youthful glow and tightening. My fine lines had disappeared after one session. Everybody at work was commenting on how healthy and good my skin looked. I would definitely recommend this treatment to all my friends. Thank you Claudia for making me feel special and my skin youthful again."
            </p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-xl">- Marcelle M.</span>
              <div className="flex text-yellow-400 text-2xl">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Face Results Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Ultraformer MPT HIFU face treatment results</h3>
          <p className="text-gray-700 mb-10 text-center max-w-5xl mx-auto text-xl leading-relaxed">
            Ultraformer MPT facial treatments lift, tighten, and contour your skin, delivering immediate, noticeable results. Over the next six months, you will enjoy continued improvements, including reduced submental fat and a more defined facial structure, all with minimal discomfort and no downtime. Experience the ultimate in skin transformation and embrace a more youthful appearance.
          </p>
          <div className="flex flex-row justify-center items-center gap-x-8">
            <img src="/images/ultraformer-face-before-after1.png" alt="Face Before/After Result 1" className="w-72 h-56 object-contain rounded-lg bg-white mx-4" />
            <img src="/images/ultraformer-face-before-after2.png" alt="Face Before/After Result 2" className="w-72 h-56 object-contain rounded-lg bg-white mx-4" />
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h3 className="text-2xl font-bold mb-8">Book a free consultation</h3>
                    <button 
              onClick={() => window.open('https://www.fresha.com/a/future-clinic-modern-beauty-double-bay-4-cross-st-apd6jatz/booking?menu=true&dppub=true&_gl=1*tbuzlm*_gcl_au*MjAzNTM3MzA0MS4xNzU0MDQ4MTUz*_ga*MTM1NTUwNTQ2Ni4xNzU0MDQ4MTU0*_ga_Z9WC20429Y*czE3NTQzMTI3OTAkbzEzJGcxJHQxNzU0MzEzMjMwJGo0NyRsMCRoMA..', '_blank')}
              className="btn-responsive bg-black text-white hover:bg-gray-800 button-hover text-lg px-8 py-4"
            >
              BOOK NOW
            </button>
      </section>

      {/* Body Results Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Ultraformer MPT HIFU body treatment results</h3>
          <p className="text-gray-700 mb-10 text-center max-w-5xl mx-auto text-xl leading-relaxed">
            Utilising advanced ultrasound technology, Ultraformer MPT HIFU targets and destroys fat cells while stimulating collagen production, resulting in a firmer, more sculpted physique. You will notice visible improvements in body shape and skin texture after just one session, with continued enhancement over the following weeks. This treatment is ideal if you are seeking a safe, effective solution for body contouring without the downtime and risks associated with surgery.
          </p>
          <div className="flex flex-row justify-center items-center gap-x-8">
            <img src="/images/ultraformer-knees-before-after.png" alt="Knees Before/After Treatment" className="w-72 h-56 object-contain rounded-lg bg-white mx-4" />
            <img src="/images/ultraformer-armpit-before-after.png" alt="Armpit/Side Chest Before/After Treatment" className="w-72 h-56 object-contain rounded-lg bg-white mx-4" />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 bg-gray-50 text-center">
        <h3 className="text-xl font-bold mb-6">No more dull and uneven skin tone with Ultraformer MPT HIFU</h3>
        <div className="flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8-e2CqmTdeo" title="Ultraformer MPT - CLASSYS" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-lg w-full max-w-3xl h-80"></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions about Ultraformer MPT</h3>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border rounded-lg">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold focus:outline-none hover:bg-gray-50"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-lg">{faq.question}</span>
                  {openFaq === idx ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-gray-700 border-t text-lg">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UltraformerMpt; 