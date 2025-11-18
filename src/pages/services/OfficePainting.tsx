import React from 'react';
import PageLayout from '../../components/PageLayout';

const OfficePainting: React.FC = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Office painting Service in San Diego</h1>
        <div className="prose">
          <p>
            We offer professional Office painting services in San Diego.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default OfficePainting;
