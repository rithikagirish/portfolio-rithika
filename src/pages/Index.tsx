import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Categories as Projects } from "@/components/categories";
import { Support as Skills } from "@/components/support";
import { AIAssistant as Contact } from "@/components/ai-assistant";
import { DeepShieldCaseStudy } from "@/components/projects";
import { Footer } from "@/components/footer";
import { Seo } from "@/components/Seo";

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
        <DeepShieldCaseStudy />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
