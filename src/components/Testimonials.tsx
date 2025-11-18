import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: 'So refreshing to deal directly with the owner, Mauricio. He was honest, fair, and checked in on the job every day. The work was incredible, and they finished our interior in 3 days as promised!',
      author: 'Sarah K., La Jolla'
    },
    {
      text: 'We hired them to paint our exterior in Coronado, and the difference is night and day. No middlemen, just honest work. Our neighbors have already asked for their card. Highly recommend.',
      author: 'David L., Coronado'
    },
    {
      text: 'Our kitchen cabinets look like they came from a magazine. We saved so much money refinishing instead of replacing. The team was fantastic to work with. 10/10.',
      author: 'Michael & Jen, Del Mar'
    }
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-blue-200 tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-4xl font-black text-white sm:text-5xl leading-[1.1] tracking-tight">
            What Your San Diego Neighbors Say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-brand text-white rounded-xl shadow-lg p-8">
              <div className="flex text-yellow-300 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg italic text-blue-100">"{testimonial.text}"</blockquote>
              <p className="mt-4 font-bold text-white">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
