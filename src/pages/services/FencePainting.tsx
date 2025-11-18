import React from 'react';
import PageLayout from '../../components/PageLayout';

const FencePainting: React.FC = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Fence painting Service in San Diego</h1>
        <div className="prose">
          <p>
            We offer professional Fence painting services in San Diego.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default FencePainting;
