const teamMembers = [
  { name: "Event Coordinator", role: "Overall Event Management" },
  { name: "Technical Lead", role: "Coding Platform & Challenges" },
  { name: "CTF Architect", role: "Treasure Hunt Design" },
  { name: "Logistics Head", role: "Venue & Operations" },
];

const OrganizingTeam = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-2">
            The Navigators
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Organizing <span className="text-gradient-gold">Team</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {teamMembers.map((m, i) => (
            <div key={i} className="card-scroll text-center py-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center">
                <span className="font-display font-bold text-primary text-lg">
                  {m.name.charAt(0)}
                </span>
              </div>
              <p className="font-display font-semibold text-sm text-foreground">{m.name}</p>
              <p className="text-xs text-muted-foreground font-body mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizingTeam;
