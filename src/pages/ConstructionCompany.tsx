import React from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const ConstructionCompany: React.FC = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Construction Company Services in San Diego</h1>
        <p className="mb-4">
          We offer a wide range of construction company services to meet your needs.
        </p>
        <div className="prose">
          <h2>Our Construction Company Services</h2>
          <ul>
            <li><Link to="/services/epoxy-floor-coating">Epoxy Floor Coating</Link></li>
            <li><Link to="/services/pressure-washing">Pressure Washing</Link></li>
            <li><Link to="/services/power-washing">Power Washing</Link></li>
            <li><Link to="/services/color-consultation">Color Consultation</Link></li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default ConstructionCompany;
