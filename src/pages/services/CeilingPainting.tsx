import React from 'react';
import PageLayout from '../../components/PageLayout';
import Hero from '../../components/Hero';

const CeilingPainting: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-white text-gray-800 antialiased">
        <main>
          <Hero
            title="Ceiling Painting Services"
            subtitle="Transform Your Home with a Fresh Coat of Paint"
            backgroundImage="https://images.unsplash.com/photo-1607613009820-4291137a64a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Professional Ceiling Painting in San Diego</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A freshly painted ceiling can brighten up any room, making it feel more spacious and clean. At our company, we specialize in providing high-quality ceiling painting services that leave your home looking its best. Whether you're dealing with stains, discoloration, or just want a change, our team of experienced painters has the skills and equipment to deliver a flawless finish.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We understand that painting ceilings can be a challenging task. That's why we take care of everything, from preparing the room and protecting your furniture to applying the final coat of paint. We use premium paints and materials to ensure a long-lasting and durable result that you'll love for years to come.
              </p>
              <div className="bg-gray-100 p-8 rounded-lg mt-10">
                <h3 className="text-2xl font-bold text-center mb-6">Our Ceiling Painting Process</h3>
                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                  <li><span className="font-semibold">Consultation:</span> We start with a free consultation to discuss your needs, assess your ceilings, and provide a detailed estimate.</li>
                  <li><span className="font-semibold">Preparation:</span> Our team carefully prepares the area by covering furniture, floors, and fixtures to protect them from paint.</li>
                  <li><span className="font-semibold">Priming:</span> We apply a high-quality primer to ensure even paint adhesion and cover any existing stains or imperfections.</li>
                  <li><span className="font-semibold">Painting:</span> Using professional techniques and equipment, we apply two coats of premium ceiling paint for a smooth, uniform finish.</li>
                  <li><span className="font-semibold">Clean-up:</span> After the painting is complete, we conduct a thorough clean-up, leaving your space tidy and spotless.</li>
                  <li><span className="font-semibold">Final Inspection:</span> We walk you through the finished project to ensure you are completely satisfied with the results.</li>
                </ol>
              </div>
            </div>
          </div>
        </main>
      </div>
    </PageLayout>
  );
};

export default CeilingPainting;