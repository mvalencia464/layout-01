import React from 'react';
import PageLayout from '../../components/PageLayout';

const WoodStaining: React.FC = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Wood staining Service in San Diego</h1>
        <div className="prose">
          <p>
            We offer professional Wood staining services in San Diego.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default WoodStaining;
