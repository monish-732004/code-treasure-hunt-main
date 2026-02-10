import { CalendarDays, Clock, MapPin, Users, Trophy, Target } from "lucide-react";

const details = [
  { icon: CalendarDays, label: "Date", value: "20 March 2026" },
  { icon: Clock, label: "Coding Round", value: "9:00 – 11:00 AM" },
  { icon: Clock, label: "Lunch Break", value: "12:00 – 1:00 PM" },
  { icon: Clock, label: "Final Coding", value: "After Lunch" },
  { icon: MapPin, label: "Venue", value: "UB, TP & TP2 Buildings" },
  { icon: Trophy, label: "CTF Qualifiers", value: "Top 12 Teams" },
  { icon: Users, label: "Participation", value: "20 Teams" },
  { icon: Target, label: "Format", value: "CTF + Coding" },
];

const InfoSection = () => {
  return (
    <section id="details" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-2">
            Mark Your Calendar
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Important <span className="text-gradient-gold">Details</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {details.map((d) => {
            const Icon = d.icon;
            return (
              <div key={d.label} className="card-scroll text-center hover:-translate-y-1 transition-transform duration-300">
                <Icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                <p className="text-xs tracking-widest uppercase text-muted-foreground font-body mb-1">
                  {d.label}
                </p>
                <p className="font-display font-semibold text-foreground">{d.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
