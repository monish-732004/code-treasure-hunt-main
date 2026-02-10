import { Link } from "react-router-dom";
import { MapPin, Compass } from "lucide-react";
import onePieceBg from "@/assets/One Piece.jpg";

const RegisterCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={onePieceBg}
          alt="One Piece background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <Compass className="w-12 h-12 text-yellow-500 mx-auto mb-6 animate-float" />

        <h2 className="font-display text-3xl md:text-5xl font-bold text-yellow-500 mb-4">
          Assemble Your <span className="text-yellow-600">Crew</span>
        </h2>

        <p className="text-yellow-400 font-body max-w-lg mx-auto mb-8">
          Form your team, sharpen your code, and prepare for the ultimate campus treasure hunt.
          Only 20 crews can enter — secure your spot now.
        </p>

        <Link
          to="/register"
          className="btn-adventure inline-flex items-center gap-2 text-base px-10 py-4"
        >
          <MapPin className="w-5 h-5" />
          Register Your Team
        </Link>
      </div>

    </section>
  );
};

export default RegisterCTA;
