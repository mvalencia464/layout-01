export default function Services() {
  const services = [
    {
      title: 'Interior Painting',
      description: 'Fresh coats in living rooms, complete color overhauls in Del Mar kitchens, or delicate trim work in historic homes. We cover your floors, protect your furniture, and deliver crisp, clean lines every time.',
      image: 'https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/69182c5b5d55fc416c469dd1.png'
    },
    {
      title: 'Exterior Painting',
      description: 'Boost your curb appeal and protect your home from Southern California weather. We meticulously prep every surface, from siding to trim, ensuring a durable, beautiful finish that lasts for years.',
      image: 'https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/69182c5b61d44d31ef9f8f96.png'
    },
    {
      title: 'Cabinet Refinishing',
      description: 'Why replace when you can refinish? We can give your kitchen or bathroom cabinets a factory-smooth, modern finish for a fraction of the cost of a full remodel. A stunning update for any San Diego home.',
      image: 'https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/69182c5b61d44d2bfe9f8f94.png'
    },
    {
      title: 'Deck & Fence Staining',
      description: 'Protect your outdoor living spaces. We properly clean, prep, and stain your deck and fences to guard against moisture and sun, enhancing their natural beauty and extending their life.',
      image: 'https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/69182c5b61d44d33ce9f8f93.png'
    },
    {
      title: 'Drywall Repair',
      description: 'From small nail pops to larger holes, our team makes drywall damage disappear. We create a seamless, smooth surface that is perfectly prepped and ready for a fresh coat of paint.',
      image: 'https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/69182c5b61d44dfe489f8f95.png'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-brand tracking-wide uppercase">
            Our Services
          </h2>
          <p className="mt-2 text-4xl font-black text-gray-900 sm:text-5xl leading-[1.1] tracking-tight">
            San Diego's Full-Service Painting Experts
          </p>
          <p className="mt-4 text-xl text-gray-600">
            From luxury estates in La Jolla to family homes in Coronado, we provide a complete range
            of painting services to beautify and protect your property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-90"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
