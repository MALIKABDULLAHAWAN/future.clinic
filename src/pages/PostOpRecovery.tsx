import { useState } from 'react';
import { CheckCircle, Clock, DollarSign, Users, Award, Heart, Shield, Zap } from 'lucide-react';

const PostOpRecovery = () => {
  const mldBenefits = [
    "Improve the functioning of the lymphatic system and micro circulation",
    "Has a very sedative effect on the nervous system",
    "Reduces pain and spasms",
    "Improves the physical and psychological wellbeing of the patient by reducing postoperative discomfort",
    "Reduces the edema",
    "Reduces pain and edema",
    "Eliminate tissue adhesions and sclerosis scars for optimal functional and aesthetic results",
    "Accelerate the recovery process of the affected the musculoskeletal system"
  ];

  const indibaBenefits = [
    "Reduce edema",
    "Helps prevent post-surgery fibrosis and reduces lumps/pain quickly",
    "Accelerates healing",
    "Increases the vascularization of tissues",
    "Reduces post-operative pain",
    "Possible scarring is lessen",
    "Helps to reaffirm and recover the elasticity of the area",
    "Reduces bruising and prevents fibrosis and seroma",
    "Reduces scars and adhesions"
  ];

  const faceTreatments = [
    { name: "Medical/Manual Lymphatic Drainage", duration: "45 min", price: "$250" },
    { name: "Medical/Manual Lymphatic Drainage", duration: "60 min", price: "$290" },
    { name: "Direct or Indirect over gauze or bandages", duration: "", price: "" },
    { name: "INDIBA with Especialite Techniques", duration: "45 min", price: "$250" },
    { name: "INDIBA with Especialite Techniques", duration: "60 min", price: "$290" },
    { name: "Healite II add-on", duration: "", price: "$80" },
    { name: "Healite II add-on with Collagen Mask", duration: "", price: "$100" }
  ];

  const bodyTreatments = [
    { name: "Medical/Manual Lymphatic Drainage", duration: "60 min", price: "$290" },
    { name: "INDIBA with Especialite Techniques", duration: "45 min", price: "$250" },
    { name: "INDIBA with Especialite Techniques", duration: "60 min", price: "$290" }
  ];

  const indibaPackages = [
    { name: "INDIBA with Especialite Techniques", duration: "45 min", price: "$250" },
    { name: "INDIBA with Especialite Techniques", duration: "60 min", price: "$290" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
                Post-Op Recovery
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl leading-relaxed">
                Aiming to reduce inflammation, bruising, edema, pain and scar tissue following aesthetic and medical surgery, 
                our specialized techniques will enhance the surgical results.
              </p>
            </div>
            <div className="animate-fade-in-up-delay">
              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Manual Lymphatic Drainage Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-black animate-fade-in-up">
              MANUAL LYMPHATIC DRAINAGE FACE AND BODY
            </h2>
            
            <div className="animate-fade-in-up-delay">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Manual Lymphatic Drainage (MLD) is a specialized medical massage technique that helps reduce inflammation, 
                swelling, and promotes fluid movement throughout the body. This gentle, rhythmic treatment is essential 
                for post-operative recovery and healing.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 text-black">The benefits of MLD are multiple</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {mldBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                The Lymphatic Drainage will be performed direct and indirect with gauze and bandages on the face where necessary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDIBA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-black animate-fade-in-up">
              INDIBA
            </h2>
            
            <div className="animate-fade-in-up-delay">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                INDIBA technology plays a crucial role in post-surgery recovery by improving quality, speed, and reducing 
                complications. This advanced treatment accelerates the body's natural repair processes, effectively 
                addressing acute pain, swelling, and overall recovery time.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 text-black">
                The benefits of INDIBA Method in the post-operation period are
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {indibaBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-black animate-fade-in-up">
            POST-OP THERAPY PRICE LIST
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* General Information */}
            <div className="bg-gray-50 p-8 rounded-lg mb-12 animate-fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-black">General Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Complimentary Consultation</span>
                    </div>
                    <p className="text-gray-700">
                      Individual protocols will be customized depending on the patient's immediate needs.
                    </p>
                    <p className="text-gray-700">
                      Treatments will be performed by two highly trained specialists:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                      <li>Claudia Falconi, Cosmetologist/Correctionist</li>
                      <li>Stella Ines Lopez, Dermofunctional Therapist, Spanish Physiotherapist</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Face Treatments */}
            <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6 text-black">FACE</h3>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Treatment</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Duration</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {faceTreatments.map((treatment, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-sm text-gray-700">{treatment.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-700">{treatment.duration}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900">{treatment.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Body Treatments */}
            <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold mb-6 text-black">BODY</h3>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Treatment</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Duration</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {bodyTreatments.map((treatment, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-sm text-gray-700">{treatment.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-700">{treatment.duration}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900">{treatment.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* INDIBA Pricing and Packages */}
            <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold mb-6 text-black">INDIBA PRICING AND PACKAGES</h3>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Treatment</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Duration</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {indibaPackages.map((treatment, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-sm text-gray-700">{treatment.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-700">{treatment.duration}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900">{treatment.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-4 text-black">Package Discounts</h4>
                <p className="text-gray-700 mb-4">
                  Depending on the patient we might suggest two or three visits per week for the best outcome. 
                  We offer packages as follows:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 font-semibold">10% Discount on 5 treatments of the same service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 font-semibold">20% Discount on 10 treatments of the same service</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Message */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We would suggest to offer your patient a pricing option including the post-op treatment 
                  understanding the importance of post treatment for an accelerated successful recovery. 
                  We are grateful for the collaborative opportunity and look forward to working with you. 
                  It will be our pleasure to educate your clients in confidence to Future Clinic and share 
                  our professionalism for optimal post-surgical outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">
            Ready to start your recovery journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up-delay">
            Book your complimentary consultation with our post-op recovery specialists
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid animate-fade-in-up-delay-2">
            BOOK YOUR CONSULTATION
          </button>
        </div>
      </section>
    </div>
  );
};

export default PostOpRecovery; 