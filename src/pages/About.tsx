import React from 'react';
import PageLayout from '../components/PageLayout';

const About: React.FC = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4">This is the About Us page.</p>
      </div>
    </PageLayout>
  );
};

export default About;
