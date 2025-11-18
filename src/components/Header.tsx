import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contentOutline } from '../content/outline';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.split('#')[1];
      const targetElement = document.getElementById(targetId);
      if (window.location.pathname !== '/') {
        window.location.href = `/#${targetId}`;
      } else if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white/90 sticky top-0 z-40 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/69182654286c47e40ef6b218.png"
            alt="Precision Painting Logo"
            className="h-12 w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          {contentOutline.pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              className="text-gray-600 hover:text-brand font-medium transition-colors"
            >
              {page.name}
            </Link>
          ))}
          {contentOutline.externalLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-gray-600 hover:text-brand font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center">
          <a href="tel:5558675309" className="text-sm font-semibold text-gray-800">
            Call for a FREE estimate:
            <span className="text-base text-brand font-bold ml-1">(555) 867-5309</span>
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-gray-700 hover:text-brand"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col space-y-4 p-5">
            {contentOutline.pages.map((page) => (
              <Link
                key={page.name}
                to={page.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-brand font-medium"
              >
                {page.name}
              </Link>
            ))}
            {contentOutline.externalLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-brand font-medium"
              >
                {link.name}
              </a>
            ))}
            <a href="tel:5558675309" className="block text-brand font-bold pt-2">
              Call (555) 867-5309
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
