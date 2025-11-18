export default function Process() {
  const steps = [
    {
      number: 1,
      title: 'Personal Consultation',
      description:
        'Owner Mauricio Valencia visits your home for a free, no-obligation consultation, listens to your needs, and provides a detailed, transparent quote.'
    },
    {
      number: 2,
      title: 'Prep & Protect',
      description:
        'Our meticulous prep work is key. We protect your floors, furniture, and landscaping, and prepare all surfaces by cleaning, sanding, and priming as needed.'
    },
    {
      number: 3,
      title: 'Paint & Perfect',
      description:
        'Our skilled, professional painters apply premium-quality paints using expert techniques for a flawless, durable finish with crisp lines and even coats.'
    },
    {
      number: 4,
      title: 'Owner Walkthrough',
      description:
        'We conduct a thorough clean-up, removing all materials. Then, Mauricio walks you through the finished project to ensure you are 100% satisfied.'
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-brand tracking-wide uppercase">How We Work</h2>
          <p className="mt-2 text-4xl font-black text-gray-900 sm:text-5xl leading-[1.1] tracking-tight">
            Our Proven 4-Step Process
          </p>
          <p className="mt-4 text-xl text-gray-600">
            We make transforming your home simple, transparent, and hassle-free from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(step => (
            <div key={step.number} className="text-center">
              <div className="flex items-center justify-center bg-brand text-white w-16 h-16 rounded-full mx-auto shadow-lg">
                <span className="text-3xl font-bold">{step.number}</span>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">{step.title}</h3>
              <p className="mt-3 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
