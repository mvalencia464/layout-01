import React from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const Remodeler: React.FC = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Remodeler Services in San Diego</h1>
        <p className="mb-4">
          We offer a wide range of remodeler services to meet your needs.
        </p>
        <div className="prose">
          <h2>Our Remodeler Services</h2>
          <ul>
            <li><Link to="/services/popcorn-ceiling-removal">Popcorn Ceiling Removal</Link></li>
            <li><Link to="/services/wallpaper-removal">Wallpaper Removal</Link></li>
            <li><Link to="/services/wallpaper-installation">Wallpaper Installation</Link></li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default Remodeler;
