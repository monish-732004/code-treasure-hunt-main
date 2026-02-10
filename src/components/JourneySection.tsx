import { Code, Coffee, Trophy, Flag, Swords, Play } from "lucide-react";
import journeyBg from "@/assets/journey.jpg";

const stages = [
  { icon: Play, title: "Start", time: "9:00 AM", desc: "Teams check in and receive their coding challenges" },
  { icon: Code, title: "Coding Round", time: "9:00 – 11:00 AM", desc: "Solve algorithmic puzzles and coding problems" },
  { icon: Coffee, title: "Lunch Break", time: "12:00 – 1:00 PM", desc: "Refuel and strategize with your team" },
  { icon: Code, title: "Final Coding", time: "1:00 – 3:00 PM", desc: "Final round — push for the highest score" },
  { icon: Swords, title: "Elimination", time: "3:30 PM", desc: "Top 12 teams advance to the treasure hunt" },
  { icon: Flag, title: "CTF Hunt", time: "4:00 PM", desc: "Navigate campus, find flags, decode clues" },
  { icon: Trophy, title: "Winners", time: "6:00 PM", desc: "Champions are crowned with glory and prizes" },
];

const JourneySection = () => {
  return (
    <section id="journey" className="relative py-20 bg-parchment-texture">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={journeyBg}
          alt="Journey background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl tracking-[0.3em] uppercase text-foreground font-display font-black mb-2">
            The Path Awaits
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Event <span className="text-black">Journey</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto relative">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <div key={stage.title} className="relative flex items-start gap-6 mb-8 last:mb-0">

                {/* Line */}
                {i < stages.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 journey-line" />
                )}

                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-card border-2 border-accent flex items-center justify-center shadow-md">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="card-scroll flex-1 py-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display font-semibold text-lg text-foreground">
                      {stage.title}
                    </h3>
                    <span className="text-xs font-body font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                      {stage.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground font-body">
                    {stage.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
