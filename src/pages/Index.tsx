import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Categories as Projects } from "@/components/categories";
import { Support as Skills } from "@/components/support";
import { SkillsGrid} from "@/components/skills";
import { ExperienceTimeline as Experience } from "@/components/experience";
import { AIAssistant as Contact } from "@/components/ai-assistant";
import { DeepShieldCaseStudy } from "@/components/projects";
import { Footer } from "@/components/footer";
import { Seo } from "@/components/Seo";
import { experienceData } from "@/data/experience";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Seo
        title="Rithika Girish — AI/ML & Full-Stack Developer"
        description="Portfolio of G. Rithika: Computer Science Engineering student specializing in AI/ML, LLM integration, and full-stack web development."
        path="/"
      />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience items={experienceData} />
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
          <SkillsGrid />
        </div>
        <DeepShieldCaseStudy />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
