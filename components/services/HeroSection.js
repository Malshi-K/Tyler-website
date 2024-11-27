// components/services/HeroSection.jsx
import Image from 'next/image';

const HeroSection = ({ data }) => {
  return (
    <div className="relative h-[calc(100vh-80px)] min-h-[600px] w-full">
      <div className="absolute inset-0">
        <Image
          src={data.backgroundImage}
          alt={data.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex flex-col justify-center h-full max-w-3xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-navy leading-tight">
            {data.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;