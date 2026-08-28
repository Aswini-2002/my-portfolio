import { motion } from "framer-motion";
import Reveal from "../../../common/ui/Reveal";
import Eyebrow from "../../../common/ui/Eyebrow";

const groups = [
  {
    index: "01",
    title: "Frontend Development",
    description:
      "Building responsive, component-driven interfaces that feel fast and behave predictably.",
    stack: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    index: "02",
    title: "UI Motion & Tooling",
    description:
      "Bringing interfaces to life with purposeful animation, backed by a clean dev workflow.",
    stack: ["Framer Motion", "Vite", "Git & GitHub", "REST APIs", "Figma to Code"],
  },
  {
    index: "03",
    title: "Backend Fundamentals",
    description:
      "Comfortable working a layer deeper — wiring up data and simple services behind the UI.",
    stack: ["Python", "SQLite", "API Integration", "Data Handling"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 md:py-36 border-t border-line">
      <div className="container-x">
        <Reveal className="mb-16 md:mb-20">
          <Eyebrow>What I Work With</Eyebrow>
          <h2 className="mt-4 font-sans font-medium uppercase tracking-tighter text-4xl md:text-6xl text-balance">
            Skills &amp; tech stack
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="h-full flex flex-col rounded-2xl border border-line bg-surface p-8"
              >
                <span className="font-mono text-xs text-accent">{g.index}</span>
                <h3 className="mt-6 font-sans font-medium uppercase tracking-tighter text-2xl">
                  {g.title}
                </h3>
                <p className="mt-4 text-sm text-muted leading-relaxed">{g.description}</p>

                <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-line mt-auto">
                  {g.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-pill border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-widish text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
