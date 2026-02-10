const SponsorsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-2">
            Backed By
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Our <span className="text-gradient-gold">Sponsors</span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 max-w-3xl mx-auto">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className="w-40 h-20 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground text-sm font-body"
            >
              Sponsor {s}
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6 font-body">
          Interested in sponsoring? Reach out to us!
        </p>
      </div>
    </section>
  );
};

export default SponsorsSection;
