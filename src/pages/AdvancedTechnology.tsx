import React, { useState } from 'react';

const faqs = [
  {
    question: 'Non-surgical butt lifting',
    answer: `Focusing on the butt and thighs this treatment contours, lifts, firms, reduces and improves cellulite and water retention. INDIBA® Deep Care uses monopolar radiofrequency at a specific frequency of 448 kHz. Research shows that the stable frequency of 448 kHz allows you to achieve three different treatment effects along with their associated results:

• Hyperactivation (hyperthermal) breaks down fat/fatty deposits, detoxifies and encourages toxin drainage, increases cell metabolism and encourages collagen production.
• Vascularisation (thermal) dilates blood vessels, increases blood flow, oxygenates tissues and cells, increases cell metabolism and encourages drainage.
• Biostimulation (sub-thermal) activates the cell metabolic rate, increases blood circulation and activates fibroblasts.

The non-surgical butt lifting treatment is 30 minutes and costs $250 AUD per session.`
  },
  {
    question: 'Non-surgical breast lifting and firming',
    answer: ''
  },
  {
    question: 'Non-surgical arm contouring',
    answer: ''
  },
  {
    question: 'Belly sculpting and tightening',
    answer: ''
  }
];

const treatments = [
  {
    title: 'INDIBA Body Contouring',
    video: '/images/indiba-therapy-img.png.webp',
    youtubeLink: 'https://www.youtube.com/watch?v=G7zJAJLmQgU',
    desc: `Experience a transformative journey as our INDIBA® Deep Beauty raises tissue temperature, ignites cellular vitality, and fosters the synthesis of collagen and elastin. Embrace the rejuvenating effects of improved blood flow, unveiling a radiant, youthful glow. This remarkable process not only tightens and lift your body, but also reduces unwanted fat and cellulite, allowing you to feel confident in your own skin.`,
    price: 'Price starts from $250 AUD per session.'
  },
  {
    title: 'truFlex Body Sculpting',
    video: '/images/trueFLEX-image-e1744780890387.jpg.webp',
    youtubeLink: 'https://www.youtube.com/watch?v=G7zJAJLmQgU',
    desc: `Cutera truFlex technology is designed to adapt to your fitness level, shape, and goals, delivering the equivalent of 54,000 crunches in just one session. With up to 16 hand pieces targeting small and large muscle groups, truFlex helps you strengthen, firm, and tone your body effortlessly. Experience incredible benefits, including a remarkable 24% reduction in body fat and a staggering 30% increase in muscle mass.`,
    price: 'Price is $350 AUD per session.'
  },
  {
    title: 'Body Contouring',
            video: '/images/body-contouring-treatment-mob_1.png.webp',
    desc: `Our innovative technique combines the power of Manual Lymphatic Drainage with Madero Therapy (Spanish Wood Therapy). Enhancing your natural contours, our Remodelling Massage improves blood circulation, reduces fluid retention, cellulite and localised fat, and enhances muscle firmness with a noticeable improvement in skin tone and puffiness.`,
    price: 'Price starts from $190 AUD per session.'
  }
];

const AdvancedTechnology = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto animate-fade3d">
            <p className="text-xs text-gray-500 mb-4 uppercase tracking-wide">SCULPTING & SHAPING</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-10 text-gray-900 text-3d hover-scale3d" style={{ fontFamily: 'var(--font-monument)' }}>
              Advanced Technology
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Cutting-edge science for refined, lasting beauty. Experience the future of non-surgical body contouring with our advanced technology treatments.
            </p>
            <button 
              onClick={() => window.open('https://www.fresha.com/a/future-clinic-modern-beauty-double-bay-4-cross-st-apd6jatz/booking?menu=true&dppub=true&_gl=1*tbuzlm*_gcl_au*MjAzNTM3MzA0MS4xNzU0MDQ4MTUz*_ga*MTM1NTUwNTQ2Ni4xNzU0MDQ4MTU0*_ga_Z9WC20429Y*czE3NTQzMTI3OTAkbzEzJGcxJHQxNzU0MzEzMjMwJGo0NyRsMCRoMA..', '_blank')}
              className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg shadow-lg hover:shadow-xl btn-3d animate-float3d"
            >
              BOOK YOUR TREATMENT
            </button>
          </div>
        </div>
      </section>

      {/* Two Column Info Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl animate-fade3d">
                              <img src="/images/body-contouring-treatment-mob_1.png.webp" alt="Body Contouring Treatment" className="w-full h-auto rounded-2xl object-contain max-h-96 img-3d" />
            </div>
            <div className="space-y-6 animate-fade3d" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-3d hover-scale3d">What does non-surgical body contouring do?</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Non-surgical body contouring improves blood and lymphatic circulation, revitalises and reactivates the nervous system, reactivates the production of elastin, collagen, and vitamin E, and improves muscle tone. Our treatments tighten the skin, stimulate collagen and elastin production, lift the buttocks, reduce fluid retention, and combat cellulite, leaving the skin smoother and more youthful-looking.
                </p>
                <p className="text-lg">
                  Experience visible results after just one session of body contouring treatments with our skilled therapists at FUTURE CLINIC Modern Beauty. Our combination of modalities, including strong and targeted movements, wood therapy, and Radio Frequency technology, stimulate the body to eliminate toxins and fat, encouraging lymphatic drainage and reducing cellulite. Our treatments reaffirm, tone, and shape the body while rejuvenating the skin.
                </p>
                <p className="text-lg font-medium">
                  We believe in enhancing your natural beauty, hence all our treatments are non-surgical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 text-gray-900" style={{ fontFamily: 'var(--font-monument)' }}>
              Choose the body contouring treatment that works for you
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our advanced technology treatments are designed to deliver exceptional results with minimal downtime
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((t, i) => (
                              <div key={i} className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
                  <img src={t.video} alt={t.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-300">
                      <div className="w-0 h-0 border-l-6 border-l-white border-t-3 border-t-transparent border-b-3 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-3xl mb-8 text-gray-900">{t.title}</h3>
                <p className="text-gray-700 mb-10 leading-relaxed flex-grow text-xl">{t.desc}</p>
                <p className="text-lg font-semibold text-black border-t pt-4">{t.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-12 rounded-3xl shadow-xl max-w-5xl mx-auto">
            <div className="text-center">
              <div className="mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-xl text-gray-700 leading-relaxed italic">
                  "I've just finished my body countour treatment with Truflex and Indiba and couldn't be any happier with the results. Not only my tummy and legs are firmer, but also slimmer and better shaped. I extremely enjoyed the sessions. Claudia is an outstanding professional who adapted each session and designed a specific protocol to my specific needs. Highly recommended!"
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-lg font-semibold text-gray-900">A GR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 mb-4">Not sure what treatment to choose?</p>
            <h2 className="text-3xl font-bold mb-8 text-white">Book a free body consultation</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Our experts will assess your needs and recommend the perfect treatment plan for your goals
            </p>
            <button 
              onClick={() => window.open('https://www.fresha.com/a/future-clinic-modern-beauty-double-bay-4-cross-st-apd6jatz/booking?menu=true&dppub=true&_gl=1*tbuzlm*_gcl_au*MjAzNTM3MzA0MS4xNzU0MDQ4MTUz*_ga*MTM1NTUwNTQ2Ni4xNzU0MDQ4MTU0*_ga_Z9WC20429Y*czE3NTQzMTI3OTAkbzEzJGcxJHQxNzU0MzEzMjMwJGo0NyRsMCRoMA..', '_blank')}
              className="bg-white text-black rounded-full px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'var(--font-monument)' }}>
              How Body Contouring can help?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our advanced body contouring treatments
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <button
                  className="w-full text-left px-8 py-6 font-semibold flex justify-between items-center focus:outline-none bg-white hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span className="text-lg text-gray-900">{faq.question}</span>
                  <span className="text-2xl text-gray-500">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-8 text-gray-700 text-base leading-relaxed bg-gray-50 whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'var(--font-monument)' }}>
              Ready to transform your body?
            </h2>
            <p className="text-lg text-gray-600 mb-8">Buy more and save with our treatment packages</p>
            <button 
              onClick={() => window.open('https://www.fresha.com/a/future-clinic-modern-beauty-double-bay-4-cross-st-apd6jatz/booking?menu=true&dppub=true&_gl=1*tbuzlm*_gcl_au*MjAzNTM3MzA0MS4xNzU0MDQ4MTUz*_ga*MTM1NTUwNTQ2Ni4xNzU0MDQ4MTU0*_ga_Z9WC20429Y*czE3NTQzMTI3OTAkbzEzJGcxJHQxNzU0MzEzMjMwJGo0NyRsMCRoMA..', '_blank')}
              className="border-2 border-black text-black rounded-full px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg hover:bg-black hover:text-white"
            >
              BUNDLE AND GET 15% OFF
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedTechnology;
