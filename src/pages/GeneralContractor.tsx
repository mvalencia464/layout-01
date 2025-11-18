import React from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const GeneralContractor: React.FC = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">General Contractor Services in San Diego</h1>
        <p className="mb-4">
          We offer a wide range of general contractor services to meet your needs.
        </p>
        <div className="prose">
          <h2>Our General Contractor Services</h2>
          <ul>
            <li><Link to="/services/drywall-repair">Drywall Repair</Link></li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default GeneralContractor;
