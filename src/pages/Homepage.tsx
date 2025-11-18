import React, { useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Story from '../components/Story';
import Services from '../components/Services';
import Process from '../components/Process';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

const Homepage: React.FC = () => {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
  }, []);

  return (
    <PageLayout>
      <div className="bg-white text-gray-800 antialiased">
        <main>
          <Hero />
          <Story />
          <Services />
          <Process />
          <Gallery />
          <Testimonials />
          <FinalCTA />
        </main>
      </div>
    </PageLayout>
  );
};

export default Homepage;
