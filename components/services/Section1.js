const Section1 = ({ data }) => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4 sm:mb-5 md:mb-6 tracking-tight">
            {data.heading}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-7 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section1;