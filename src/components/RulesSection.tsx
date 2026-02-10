import { Shield, Smartphone, Zap, MapPin, HelpCircle, Users } from "lucide-react";

const rules = [
  { icon: Users, text: "This is a team-based event — register as a crew" },
  { icon: Smartphone, text: "Phones are NOT allowed during the CTF treasure hunt" },
  { icon: Zap, text: "Accuracy and speed both matter in scoring" },
  { icon: MapPin, text: "Correct coordinate and building identification is required" },
  { icon: HelpCircle, text: "Tie-breaker questions will be used if needed" },
  { icon: Shield, text: "Fair play is enforced — violations lead to disqualification" },
];

const RulesSection = () => {
  return (
    <section id="rules" className="py-20 bg-parchment-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-2">
            The Code of the Hunt
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Rules & <span className="text-gradient-gold">Guidelines</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {rules.map((rule, i) => {
            const Icon = rule.icon;
            return (
              <div
                key={i}
                className="flex items-start gap-4 card-scroll hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-body text-foreground leading-relaxed pt-2">
                  {rule.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
