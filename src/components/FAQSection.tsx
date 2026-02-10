import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How many members can be in a team?",
    a: "Each team should have 3–4 members. Only the team leader needs to complete the registration.",
  },
  {
    q: "Do I need to be a coder to participate?",
    a: "While coding skills help in the first rounds, the CTF treasure hunt also requires problem-solving, navigation, and teamwork — so mixed-skill teams are welcome!",
  },
  {
    q: "What languages are supported in the coding round?",
    a: "You can use C, C++, Java, or Python for the coding rounds. The platform will be announced before the event.",
  },
  {
    q: "What happens if there's a tie?",
    a: "Tie-breaker questions will be used to determine the final standings if teams have equal scores.",
  },
  {
    q: "Can I use my phone during the CTF?",
    a: "No. Phones are strictly prohibited during the CTF treasure hunt round to ensure fair play.",
  },
  {
    q: "Is there a registration fee?",
    a: "Details about the registration fee will be announced by the organizing committee. Follow our socials for updates.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-parchment-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-2">
            Got Questions?
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Frequently <span className="text-gradient-gold">Asked</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="card-scroll border-none"
              >
                <AccordionTrigger className="text-sm font-body font-medium text-foreground hover:no-underline text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm font-body text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
