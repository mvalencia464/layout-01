export default function Gallery() {
  const projects = [
    {
      image: 'https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/69182c5b5d55fc416c469dd1.png',
      title: 'La Jolla Exterior',
      description: 'Complete repaint'
    },
    {
      image: 'https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/69182c5b61d44d2bfe9f8f94.png',
      title: 'Del Mar Kitchen',
      description: 'Cabinet refinishing'
    },
    {
      image: 'https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/69182c5b61d44d31ef9f8f96.png',
      title: 'Coronado Interior',
      description: 'Full interior painting'
    },
    {
      image: 'https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/69182c5b61d44d33ce9f8f93.png',
      title: 'Carlsbad Deck',
      description: 'Deck refinishing'
    },
    {
      image: 'https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/69182c5b61d44dfe489f8f95.png',
      title: 'Point Loma Living',
      description: 'Walls and trim'
    },
    {
      image: 'https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/69182c5b964b862fecc1309d.png',
      title: 'Rancho Santa Fe',
      description: 'Siding and trim'
    }
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-brand tracking-wide uppercase">
            Our Portfolio
          </h2>
          <p className="mt-2 text-4xl font-black text-gray-900 sm:text-5xl leading-[1.1] tracking-tight">
            Work We've Done in Your Neighborhood
          </p>
          <p className="mt-4 text-xl text-gray-600">
            See the quality of our work for yourself. Here are just a few of the transformations
            we've completed around San Diego County.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href="#"
              className="group block relative rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                alt={project.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                <h3 className="text-lg sm:text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-200">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
