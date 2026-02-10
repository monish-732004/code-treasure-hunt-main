import { Mail, Phone, Instagram, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-parchment-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-2">
            Need Help?
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="card-scroll text-center">
            <h3 className="font-display font-semibold text-foreground mb-3">Organizing Team</h3>
            <div className="space-y-2 text-sm text-muted-foreground font-body">
              <p className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                acmsigchi@srmist.edu.in
              </p>
              <p className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                +91 99999999999
              </p>
            </div>
          </div>
          <div className="card-scroll text-center">
            <h3 className="font-display font-semibold text-foreground mb-3">Follow Us</h3>
            <div className="flex items-center justify-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Globe className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
