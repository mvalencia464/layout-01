import React from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const Painting: React.FC = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Painting Services in San Diego</h1>
        <p className="mb-4">
          We offer a wide range of painting services to meet your needs.
        </p>
        <div className="prose">
          <h2>Our Painting Services</h2>
          <ul>
            <li><Link to="/services/interior-painting">Interior Painting</Link></li>
            <li><Link to="/services/exterior-painting">Exterior Painting</Link></li>
            <li><Link to="/services/residential-painting">Residential Painting</Link></li>
            <li><Link to="/services/commercial-painting">Commercial Painting</Link></li>
            <li><Link to="/services/cabinet-painting">Cabinet Painting</Link></li>
            <li><Link to="/services/deck-staining">Deck Staining</Link></li>
            <li><Link to="/services/fence-painting">Fence Painting</Link></li>
            <li><Link to="/services/stucco-painting">Stucco Painting</Link></li>
            <li><Link to="/services/trim-and-molding-painting">Trim and Molding Painting</Link></li>
            <li><Link to="/services/ceiling-painting">Ceiling Painting</Link></li>
            <li><Link to="/services/fence-staining">Fence Staining</Link></li>
            <li><Link to="/services/paint-touch-ups">Paint Touch-ups</Link></li>
            <li><Link to="/services/wall-painting">Wall Painting</Link></li>
            <li><Link to="/services/office-painting">Office Painting</Link></li>
            <li><Link to="/services/faux-finishes">Faux Finishes</Link></li>
            <li><Link to="/services/wood-staining">Wood Staining</Link></li>
            <li><Link to="/services/metal-painting">Metal Painting</Link></li>
            <li><Link to="/services/door-painting">Door Painting</Link></li>
            <li><Link to="/services/paint-stripping">Paint Stripping</Link></li>
            <li><Link to="/services/crown-molding-painting">Crown Molding Painting</Link></li>
            <li><Link to="/services/accent-wall-painting">Accent Wall Painting</Link></li>
            <li><Link to="/services/texture-painting">Texture Painting</Link></li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default Painting;
