// components/services/Section1.jsx
const Section1 = ({ data }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-8 lg:px-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-navy mb-6">{data.heading}</h2>
          <p className="text-gray-600 mb-8">{data.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Section1;
