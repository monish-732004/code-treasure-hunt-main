import { Link } from "react-router-dom";
import { MapPin, Compass } from "lucide-react";
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

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-4 max-w-4xl mx-auto">

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl font-body font-light text-muted-foreground mb-6 tracking-widest">
          Solve · Hunt · Conquer
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          
          <Link
            to="/register"
            className="btn-adventure flex items-center justify-center gap-2 w-full sm:w-auto"
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
            className="btn-gold flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Compass className="w-4 h-4" />
            View Rules
          </button>

        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          
          <div className="text-center">
            <p className="font-display font-bold text-xl text-foreground">
              20
            </p>
            <p>March 2026</p>
          </div>

          <div className="hidden sm:block w-px h-8 bg-border" />

          <div className="text-center">
            <p className="font-display font-bold text-xl text-foreground">
              20
            </p>
            <p>Teams</p>
          </div>

          <div className="hidden sm:block w-px h-8 bg-border" />

          <div className="text-center">
            <p className="font-display font-bold text-xl text-foreground">
              12
            </p>
            <p>Qualify for CTF</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
