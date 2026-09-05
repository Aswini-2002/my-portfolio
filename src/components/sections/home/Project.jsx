import Reveal from "../../../common/ui/Reveal";
import Eyebrow from "../../../common/ui/Eyebrow";

import macroChef from "../../../assets/MacroChef.ai.png";
import nexusReach from "../../../assets/NexusReach.png";
import vaultView from "../../../assets/VaultView.png";
import Ingetra from "../../../assets/Ingetra.png";
// import socialMediaDashboard from "../../../assets/social media dashboard.png";

const content = [
  {
    image: macroChef,
    title: "MacroChef.ai",
    tag: "Web App / AI Health",
    content:
      "An AI-powered nutrition application that generates custom meal plans based on available ingredients while calculating precise macronutrient and calorie metrics.",
    technologies: ["React.js", "Next.js", "Python", "FastAPI", "PostgreSQL"],
  },
  {
    image: nexusReach,
    title: "Nexus Reach",
    tag: "SaaS / CRM Automation",
    content:
      "An intelligent workflow automation platform enabling teams to manage automated cold email sequences, extract leads, and execute digital document sign-offs.",
    technologies: ["Next.js", "Redux-Saga", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    image: vaultView,
    title: "VaultView Analytics",
    tag: "FinTech / Admin Dashboard",
    content:
      "A high-concurrency financial administration dashboard designed to monitor real-time payment gateways, track user transactions, and manage security compliance.",
    technologies: ["React.js", "Redux-Saga", "Node.js", "PostgreSQL", "AWS S3", "AWS EC2"],
  },
  {
    image: Ingetra,
    title: "Ingetra",
    tag: "Data Engineering / Analytics",
    content:
      "A scalable data ingestion pipeline that automatically collects, structures, and visualizes large volumes of unstructured data from multiple web feeds.",
    technologies: ["Python", "FastAPI", "Next.js", "PostgreSQL", "AWS", "Docker"],
  },
];

const Project = () => {
  return (
    <section id="work" className="relative py-28 md:py-36">
      <div className="container-x">
        <Reveal className="flex items-end justify-between flex-wrap gap-6 mb-16 md:mb-24">
          <div>
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="mt-4 font-sans font-medium uppercase tracking-tighter text-4xl md:text-6xl">
              Projects I&apos;ve built
            </h2>
          </div>
          <p className="max-w-xs font-mono text-xs uppercase tracking-widish text-muted">
            A handful of things I&apos;ve designed &amp; shipped end-to-end.
          </p>
        </Reveal>

        <div className="flex flex-col">
          {content.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <div className="group grid md:grid-cols-2 gap-8 md:gap-16 items-center border-t border-line py-12 md:py-16">
                <div
                  className={`overflow-hidden rounded-2xl border border-line bg-surface ${index % 2 !== 0 ? "md:order-2" : ""
                    }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className={index % 2 !== 0 ? "md:order-1" : ""}>
                  <span className="font-mono text-[11px] uppercase tracking-widish text-accent">
                    {String(index + 1).padStart(2, "0")} — {project.tag}
                  </span>
                  <h3 className="mt-4 font-sans font-medium uppercase tracking-tighter text-3xl md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-muted leading-relaxed max-w-md">
                    {project.content}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-pill border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-widish text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
