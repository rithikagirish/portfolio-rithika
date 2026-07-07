import { GraduationCap, Award, Users } from "lucide-react";
import WaveText from "@/components/ui/wave-text";
import { SkillsGrid } from "@/components/skills";
import { ExperienceTimeline } from "@/components/experience";
import { experienceData } from "@/data/experience";

const education = [
  {
    degree: "B.Tech, Computer Science Engineering",
    school: "Bharati Vidyapeeth (DU) College of Engineering, Pune",
    period: "2023 – 2027",
    note: "CGPA: 9.29/10",
  },
  {
    degree: "Class XII — Science (PCM+Biology)",
    school: "DAV Public School, Aundh, Pune",
    period: "2021 – 2023",
    note: "Percentage: 81.8%",
  },
];

const certifications = [
  "Intel Unnati Industrial Training 2025",
  "NPTEL — Design and Analysis of Algorithms",
  "NPTEL — DBMS",
  "IIT Bombay Spoken Tutorial — Java",
];

const leadership = [
  "Design Head — GeeksforGeeks Campus Body",
  "Social Media Head — Null Student Chapter",
  "Student HR — CSESA",
];

const Skills = () => {
  return (
    <section id="about" className="px-4 md:px-8 py-10 md:py-14">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* About / Skills */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-heading">
            <WaveText text="About me" />
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            I'm a Computer Science Engineering student at Bharati Vidyapeeth, Pune, with a CGPA of 9.29/10. 
            Over the past year I've shipped production-ready AI systems, full-stack applications, and enterprise 
            automation tools. I enjoy bridging research-grade ML with usable products — whether that's a 
            deepfake detector, an LLM chatbot, or a tool that saves hours of manual work.
          </p>

          <SkillsGrid />
        </div>

        {/* Experience */}
        <div id="experience">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-heading">
            <WaveText text="Experience" />
          </h2>
          <ExperienceTimeline items={experienceData} />
        </div>

        {/* Education & Certifications */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-heading">
            <WaveText text="Education & certifications" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <div key={edu.degree} className="p-6 rounded-[2rem] border border-border bg-card/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-secondary">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground font-heading">{edu.degree}</h3>
                    <p className="text-xs text-muted-foreground">{edu.school}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground font-heading">
                  <span>{edu.period}</span>
                  <span className="text-primary">{edu.note}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 rounded-[2rem] border border-border bg-card/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-secondary">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground font-heading">Certifications</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-[2rem] border border-border bg-card/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-secondary">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground font-heading">Leadership</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {leadership.map((role) => (
                  <li key={role} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
