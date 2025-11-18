import React from 'react';
import PageLayout from '../../components/PageLayout';

const ColorConsultation: React.FC = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Color consultation Service in San Diego</h1>
        <div className="prose">
          <p>
            We offer professional Color consultation services in San Diego.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default ColorConsultation;
