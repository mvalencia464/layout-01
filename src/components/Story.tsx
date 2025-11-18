export default function Story() {
  return (
    <section id="story" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <img
              src="https://storage.googleapis.com/msgsndr/BK5WOlszHMZB0udM7qC1/media/6918150e964b86d18fbf9d64.webp"
              alt="Mauricio Valencia, owner of Precision Painting"
              className="w-full h-auto rounded-xl shadow-2xl object-cover"
            />
          </div>

          <div>
            <h2 className="text-base font-semibold text-brand tracking-wide uppercase">
              Our Story
            </h2>
            <p className="mt-2 text-4xl font-black text-gray-900 sm:text-5xl leading-[1.1] tracking-tight">
              Your Neighbor, Your Painter
            </p>
            <p className="mt-4 text-xl text-gray-600">
              Hi, I'm <strong className="text-gray-900">Mauricio Valencia</strong>, and I was born
              and raised right here in our San Diego community. Precision Painting isn't just a
              business to me—it's my way of serving the neighbors I've known my whole life.
            </p>
            <p className="mt-6 text-lg text-gray-600">
              I started this company to do things the old-fashioned way. In a world of big sales
              teams, fancy offices, and endless middlemen designed to make you overpay, we stand for
              something different.
            </p>
            <p className="mt-6 text-lg text-gray-600">
              We believe in honest work, quality materials, and affordable prices. When you call us,
              you get <strong className="text-gray-900">me</strong>. Not a pushy sales rep, just a
              local expert who will listen to your needs and give you a fair, transparent quote
              personally. Our crew is 100% local, and we treat every home like it's our own.
            </p>
            <p className="mt-6 text-lg text-gray-600">
              We're proud to be your local, trustworthy choice for painting.
            </p>
            <div className="mt-8">
              <a
                href="#quote-form-section"
                className="inline-block bg-brand hover:bg-brand-dark text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg transition-colors"
              >
                Get a Quote from Mauricio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
