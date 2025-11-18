import { Star } from 'lucide-react';
import QuoteForm from './QuoteForm';

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-gray-600 font-medium">Rated 5.0 (210 Google Reviews)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight mb-6">
            San Diego Painting, Straight from Your Neighbor—No BS, Just Beautiful Results
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-0">
            We're not a big franchise. We're your San Diego-born experts dedicated to transforming
            homes from La Jolla to Coronado with a personal, old-fashioned touch.
          </p>
        </div>

        <div id="quote-form-section" className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <div className="bg-gray-200 rounded-xl shadow-lg overflow-visible relative mb-12">
              <img
                src="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="After photo of a professionally painted living room in San Diego"
                className="w-full h-auto object-cover rounded-xl"
              />

              <div className="absolute top-4 right-4 bg-white/90 text-brand text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                After
              </div>

              <div className="absolute -top-4 left-4 sm:-top-2 sm:left-6 transform -rotate-6 transition-transform duration-300 hover:scale-105 hover:-rotate-3 group z-10">
                <img
                  src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/69182c5b5d55fc09ac469dd0.png"
                  alt="Before photo of the same room"
                  className="w-32 h-24 sm:w-48 sm:h-36 object-cover rounded-lg shadow-xl border-4 border-white"
                />
                <div className="absolute bottom-0 left-0 -mb-3 -ml-3 bg-gray-900/70 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transform rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  Before
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Quality & Honesty. The Old-Fashioned Way.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We don't just paint walls; we transform spaces. Our meticulous process, premium
                materials, and dedicated local team ensure a stunning, long-lasting finish you'll
                love.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-brand flex-shrink-0 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong className="font-semibold text-gray-800">No Pushy Sales Reps:</strong>{' '}
                    Owner Mauricio Valencia personally handles your consultation and quote, ensuring
                    an honest price without the runaround.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-brand flex-shrink-0 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong className="font-semibold text-gray-800">Done in 3 Days:</strong> We
                    prep, paint, and perfect your interior (up to 1,500 sq ft) in just 3 days,
                    minimizing disruption to your San Diego home.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-brand flex-shrink-0 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong className="font-semibold text-gray-800">
                      5-Year "No-Peel" Guarantee:
                    </strong>{' '}
                    We stand by our work. If it peels, we fix it. Simple as that.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-brand flex-shrink-0 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="text-gray-700">
                    <strong className="font-semibold text-gray-800">
                      Free Color Consultation:
                    </strong>{' '}
                    Our experts will help you find the perfect shade for your space, for free.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
