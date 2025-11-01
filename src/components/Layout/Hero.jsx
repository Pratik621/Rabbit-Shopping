import heroImg from "../../assets/rabbit-hero.webp";
import { Link } from "react-router-dom"; 
const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Hero Image"
        className="w-full h-[400px] md:h-[600px] lg:h-[700px] object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase">
            Vacation <br/> Ready

          </h1>
          <p className="text-sm tracking-tighter md:text-lg md-6">
            Explore our exclusive Vacation collection and get ready for your next adventure!
          </p>
          <Link to="#" className="mt-4 inline-block bg-white hover:bg-red-700 text-black font-semibold py-2 px-4 rounded-lg transition">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
