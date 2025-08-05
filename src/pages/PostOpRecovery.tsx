import React from 'react';
import { Link } from 'react-router-dom';

const PostOpRecovery: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 text-gray-800" style={{ fontFamily: 'var(--font-monument)' }}>
              Post-Op Recovery
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Aiming to reduce inflammation, bruising, oedema, pain and scar tissue following aesthetic and medical surgeries, our specialist techniques will enhance the surgical results.
            </p>
            <Link to="/booking" className="btn-responsive bg-black text-white hover:bg-gray-800 button-hover">
              BOOK NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Manual Lymphatic Drainage Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 uppercase tracking-wide">
              MANUAL LYMPHATIC DRAINAGE FACE AND BODY
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Vodder and Leduc Method Indicated from the day following surgery to alleviate inflammation, edema and to accelerate recovery. It is a specialised gentle medical massage technique characterised by very soft, slow and repetitive manual movements activating lymphatic circulation by stimulating the lymph nodes and vessels. It helps to promote fluid that is stagnant in the extracellular space.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              The benefits of MLD are multiple:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Improves the functioning of the lymphatic system and return circulation</li>
              <li>It has a very sedative effect on the nervous system</li>
              <li>Improve the physical and psychological wellbeing of the patient by reducing postoperative discomfort</li>
              <li>Reduce the inflammatory period and edema.</li>
              <li>Eliminate tissue adhesions and elasticize scars for optimal functional and aesthetic results.</li>
              <li>Accelerate the recovery process of the skin and the musculoskeletal system</li>
              <li>The Lymphatic Drainage will be performed direct and Indirect with gauze and bandages on the face where necessary.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* INDIBA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 uppercase tracking-wide">
              INDIBA
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              INDIBA radio frequency treatments administered both pre and post-surgery improve the quality and speed of the body's recovery and reduces the likelihood of complications. INDIBA treated tissue is much easier to work with and heals faster. INDIBA accelerates the body's natural repair mechanisms. Treatment can begin even in the acute phase, speeding up the overall recovery process. It significantly reduces pain, bruising and swelling while improving functionality and promoting tissue oxygenation. It is designed to improve mobilisation, enabling faster healing of the affected areas.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              The benefits of INDIBA Method in the post-operative period are:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Reduce edema</li>
              <li>Helps prevent post-surgery fibrosis and reabsorb hepatomas quickly</li>
              <li>Accelerate healing</li>
              <li>Increases the vascularisation of tissues.</li>
              <li>Reduces post-operative pain</li>
              <li>Provides elasticity to tissues.</li>
              <li>Helps to reaffirm and recover the elasticity of the area.</li>
              <li>Reduces bruising and prevents fibrosis and seroma.</li>
              <li>Reduce scars and adhesions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 uppercase tracking-wide">
              POST-OP THERAPY PRICE LIST
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Complimentary Consultation</h3>
              <p className="text-gray-700 mb-6">
                Individual protocols will be customised depending on the patient's immediate needs.
              </p>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-2">Treatments will be performed by two highly trained specialists:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Claudia Fabiani, Cosmetologist/Cosmiatrist</li>
                  <li>Salia Insua Lopez, Dermotofunctional Therapist, Spanish Physiotherapist</li>
                </ul>
              </div>
            </div>

            {/* FACE Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">FACE</h3>
              <ul className="space-y-3 text-gray-700">
                <li>Medical Manual Lymphatic Drainage 45 min <span className="font-bold">$250</span></li>
                <li>Medical Manual Lymphatic Drainage 60 min <span className="font-bold">$290</span></li>
                <li>Direct or Indirect over gauze or bandages</li>
                <li>INDIBA with Specialist Techniques <span className="font-bold">$300</span></li>
                <li>45 min</li>
                <li>Healite II add on <span className="font-bold">$50</span></li>
                <li>Healite II add on with Collagen Mask <span className="font-bold">$80</span></li>
              </ul>
            </div>

            {/* BODY Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">BODY</h3>
              <ul className="space-y-3 text-gray-700">
                <li>Medical Manual Lymphatic Drainage 60 min <span className="font-bold">$290</span></li>
                <li>INDIBA with Specialist techniques <span className="font-bold">$350</span></li>
                <li>60 min</li>
                <li>INDIBA with Specialist techniques <span className="font-bold">$520</span></li>
                <li>90 min</li>
                <li>Healite II add on <span className="font-bold">$50</span></li>
              </ul>
            </div>

            {/* SCARS, BRUISING AND FIBROSIS Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">SCARS, BRUISING AND FIBROSIS</h3>
              <ul className="space-y-3 text-gray-700">
                <li>INDIBA with Specialist Techniques 30 min <span className="font-bold">$190</span></li>
                <li>INDIBA with Specialist Techniques 60 min <span className="font-bold">$350</span></li>
              </ul>
            </div>

            {/* Packages Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <p className="text-gray-700 mb-4">
                Depending on the patient we might suggest two or three visits per week for the best outcome. We offer packages as follows;
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>10% discount on 5 treatments of the same service</li>
                <li>15% discount on 10 treatments of the same service</li>
              </ul>
            </div>

            {/* Conclusion */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 leading-relaxed">
                We would suggest to offer your patient a pricing option including the post-op treatment understanding the importance of post-treatment for an accelerated and successful recovery. We are grateful for the collaboration opportunity and look forward to working with you. It will be our pleasure to welcome your clients in confidence to Future Clinic and share our professionalism for optimal post-surgical outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-monument)' }}>
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Book your complimentary consultation and begin your path to optimal post-surgical recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="btn-responsive bg-white text-black hover:bg-gray-100 button-hover">
                BOOK CONSULTATION
              </Link>
              <Link to="/contact" className="btn-responsive border-2 border-white text-white hover:bg-white hover:text-black button-hover">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostOpRecovery; 