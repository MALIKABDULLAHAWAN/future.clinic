import { useState } from 'react';
import { Star, Heart, Shield, Users, Award, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const PostOpAestheticFace = () => {
  const mldBenefits = [
    "Improves the functioning of the lymphatic system and return circulation",
    "It has a very sedative effect on the nervous system",
    "Improve the physical and psychological wellbeing of the patient by reducing postoperative discomfort",
    "Reduce the inflammatory period and edema",
    "Eliminate tissue adhesions and elasticize scars for optimal functional and aesthetic results",
    "Accelerate the recovery process of the skin and the musculoskeletal system"
  ];

  const indibaBenefits = [
    "Reduce edema",
    "Helps to prevent post-surgery fibrosis and reduces hematomas quickly",
    "Accelerate healing",
    "Increases the vascularization of tissues",
    "Reduces post-operative pain",
    "Provides elasticity to tissues",
    "Helps to reaffirm and restore the elasticity of the area",
    "Reduces bruising and prevents fibrosis and seroma",
    "Reduce scars and adhesions"
  ];

  const faceTreatments = [
    {
      service: "Medical Manual Lymphatic Drainage",
      duration: "45 min",
      price: "£190"
    },
    {
      service: "Medical Manual Lymphatic Drainage",
      duration: "60 min",
      price: "£240"
    },
    {
      service: "Direct or Indirect over gauze or bandages",
      duration: "",
      price: ""
    },
    {
      service: "INDIBA with Specialist Techniques",
      duration: "45 min",
      price: "£200"
    },
    {
      service: "Healite II add on",
      duration: "",
      price: "£50"
    },
    {
      service: "Healite II add on with Collagen Mask",
      duration: "",
      price: "£80"
    }
  ];

  const bodyTreatments = [
    {
      service: "Medical Manual Lymphatic Drainage",
      duration: "60 min",
      price: "£290"
    },
    {
      service: "INDIBA with Specialist Techniques",
      duration: "60 min",
      price: "£310"
    },
    {
      service: "INDIBA with Specialist Techniques",
      duration: "90 min",
      price: "£320"
    },
    {
      service: "Healite II add on",
      duration: "",
      price: "£50"
    }
  ];

  const indibaTreatments = [
    {
      service: "INDIBA with Specialist Techniques",
      duration: "30 min",
      price: "£190"
    },
    {
      service: "INDIBA with Specialist Techniques",
      duration: "60 min",
      price: "£350"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
              Post-Op Recovery
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Aiming to reduce inflammation, bruising, edema, pain and scar tissue following aesthetic and medical surgeries, 
              our specialist techniques will enhance the surgical results.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid">
              BOOK NOW
            </button>
          </div>
        </div>
      </section>

      {/* Manual Lymphatic Drainage Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-8 text-black">
                MANUAL LYMPHATIC DRAINAGE FACE AND BODY
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Vodder and Leduc MLD is indicated from the day following surgery to alleviate inflammation, edema and to accelerate recovery. 
                It is a specialized gentle medical massage technique characterized by very slow, rhythmic and repetitive manual movements 
                activating lymphatic circulation by stimulating the lymph nodes and vessels. It helps to promote fluid that is stagnant 
                in the extracellular space.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 text-black">
                The benefits of MLD are multiple:
              </h3>
              
              <div className="space-y-4 mb-8">
                {mldBenefits.map((benefit, index) => (
                  <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 font-semibold">
                  The Lymphatic Drainage will be performed direct and indirect with gauze and bandages on the face where necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDIBA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-8 text-black">
                INDIBA
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                INDIBA radio frequency treatments, administered both pre and post-surgery improve the quality and speed of the body's 
                recovery and reduces the likelihood of complications. INDIBA treated tissue is much more responsive to work with and 
                heals faster. INDIBA accelerates the body's natural repair mechanisms. Treatment can begin even in the acute phase, 
                speeding up the healing process, reducing pain, bruising and swelling while improving functionality and promoting 
                tissue oxygenation. It is designed to improve mobilization, enabling faster healing of the affected areas.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 text-black">
                The benefits of INDIBA Method in the post-operative period are:
              </h3>
              
              <div className="space-y-4">
                {indibaBenefits.map((benefit, index) => (
                  <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Op Therapy Price List Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-12 text-black text-center">
                POST-OP THERAPY PRICE LIST
              </h2>
              
              {/* General Information */}
              <div className="bg-gray-50 p-8 rounded-lg mb-12">
                <h3 className="text-2xl font-bold mb-6 text-black">General Information</h3>
                <div className="space-y-4 text-gray-700">
                  <p className="font-semibold">Complementary Consultation</p>
                  <p>Individual protocols will be customized depending on the patient's immediate needs.</p>
                  <p className="font-semibold">Treatments will be performed by two highly trained specialists:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Claudia Patroni, Cosmetologist/Cosmetician</li>
                    <li>Naila Inzun Lopez, Dermatofunctional Therapist, Spanish Physiotherapist</li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Face Treatments */}
                <div className="animate-fade-in-up">
                  <h3 className="text-2xl font-bold mb-6 text-black">FACE</h3>
                  <div className="space-y-4">
                    {faceTreatments.map((treatment, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-black">{treatment.service}</p>
                            {treatment.duration && <p className="text-sm text-gray-600">{treatment.duration}</p>}
                          </div>
                          {treatment.price && (
                            <div className="text-right">
                              <p className="font-bold text-black">{treatment.price}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Body Treatments */}
                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <h3 className="text-2xl font-bold mb-6 text-black">BODY</h3>
                  <div className="space-y-4">
                    {bodyTreatments.map((treatment, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-black">{treatment.service}</p>
                            {treatment.duration && <p className="text-sm text-gray-600">{treatment.duration}</p>}
                          </div>
                          {treatment.price && (
                            <div className="text-right">
                              <p className="font-bold text-black">{treatment.price}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* INDIBA, Bruising and Pain */}
              <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-2xl font-bold mb-6 text-black">INDIBA, Bruising and Pain</h3>
                <div className="space-y-4 mb-8">
                  {indibaTreatments.map((treatment, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-black">{treatment.service}</p>
                          <p className="text-sm text-gray-600">{treatment.duration}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-black">{treatment.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <p className="text-gray-700 mb-4">
                    Depending on the patient we might suggest two or three visits per week for the best outcome. 
                    We offer packages as follows:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">10% discount on 5 treatments of the same service</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">15% discount on 10 treatments of the same service</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    We would suggest to offer your patient a pricing option including the post-op treatment understanding 
                    the importance of post-treatment for an accelerated and successful recovery. We are grateful for the 
                    collaboration opportunity and look forward to working with you. It will be our pleasure to welcome your 
                    clients in confidence to Future Clinic and share our passion for optimal post-surgical outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">
            Ready to enhance your surgical results?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up-delay">
            Book your post-operative recovery treatment today
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid animate-fade-in-up-delay-2">
            BOOK YOUR CONSULTATION
          </button>
        </div>
      </section>
    </div>
  );
};

export default PostOpAestheticFace; 