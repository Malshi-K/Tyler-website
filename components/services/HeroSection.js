// components/services/HeroSection.jsx
import "@/app/pageTitle.css";

const HeroSection = ({ data }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[calc(100vh-80px)] min-h-[600px] w-full">
        <div className="the-long-way">
          <img className="pageImage" src={data.backgroundImage} alt={data.title} />
          <h1 data-title={data.title}>
            {data.title}
            <span className="wrap" aria-hidden="true">
              <span className="split" data-letters={data.title}>
                {data.title}
              </span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
