import { Link } from "react-router-dom";
import { Compass, MapPin } from "lucide-react";
import heroMap from "@/assets/hero-map.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroMap}
          alt="Treasure map background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Center Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        {/* Tagline */}
        <p className="text-lg md:text-xl font-body font-bold text-blue-500 mb-6 tracking-widest">
           SRM ACM SIGCHI 
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Link
            to="/register"
            className="btn-adventure flex items-center gap-2"
          >
            <MapPin className="w-4 h-4" />
            Register Crew
          </Link>

          <button
            onClick={() =>
              document
                .querySelector("#rules")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-gold flex items-center gap-2"
          >
            <Compass className="w-4 h-4" />
            View Rules
          </button>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
