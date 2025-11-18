import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="md:col-span-4 lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4">
              <img
                src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/6918272761d44db4879f4574.png"
                alt="Precision Painting Logo"
                className="h-10 w-auto"
              />
            </a>
            <p className="max-w-md mb-6">
              Founded by Mauricio Valencia, Precision Painting is your local, San Diego-born partner
              in home transformation. We believe in quality, honesty, and serving the community we
              grew up in.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Interior Painting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Exterior Painting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Cabinet Refinishing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Deck & Fence Staining
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Drywall Repair
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#quote-form-section" className="hover:text-white transition-colors">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>(555) 867-5309</li>
              <li>contact@precisionpainting.com</li>
              <li>1234 University Ave, San Diego, CA 92103</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-center">
          &copy; {currentYear} Precision Painting. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
