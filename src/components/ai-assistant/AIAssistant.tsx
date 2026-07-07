import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import WaveText from "@/components/ui/wave-text";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "rithika.girish25@gmail.com",
    href: "mailto:rithika.girish25@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "G Rithika",
    href: "https://linkedin.com/in/g-rithika0512",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "rithikagirish",
    href: "https://github.com/rithikagirish",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, India",
    href: null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="px-4 md:px-8 py-10 md:py-14">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-[2rem] border border-border overflow-hidden p-8 md:p-12 bg-gradient-to-br from-secondary/50 via-card/50 to-background">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-heading">
              <WaveText text="Let's build something together" />
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              I'm open to internships, full-time roles, and interesting collaborations in AI/ML and full-stack development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactLinks.map((link) => (
                <div
                  key={link.label}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-background/60 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-secondary shrink-0">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground font-heading">{link.label}</p>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate block font-heading"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground font-heading">{link.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
