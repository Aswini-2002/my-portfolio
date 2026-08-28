import Reveal from "../../../common/ui/Reveal";
import Eyebrow from "../../../common/ui/Eyebrow";

import shoppingMania from "../../../assets/shopping mania.png";
import weatherApp from "../../../assets/wheather app.png";
import netflixClone from "../../../assets/netflix clone.png";
import expenseTracker from "../../../assets/expense tracker.png";
import socialMediaDashboard from "../../../assets/social media dashboard.png";

const content = [
  {
    image: shoppingMania,
    title: "Shopping Mania",
    tag: "Web App / E-Commerce",
    content:
      "A shopping platform for browsing products, managing carts and handling orders, backed by a SQLite database for seamless order processing.",
    technologies: ["HTML", "CSS", "Python", "SQLite"],
  },
  {
    image: weatherApp,
    title: "Weather App",
    tag: "Web App / API Integration",
    content:
      "Real-time weather lookups by city with current conditions, temperature and forecasts in a responsive, intuitive interface.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    image: netflixClone,
    title: "Netflix Clone",
    tag: "Web App / UI Clone",
    content:
      "A pixel-close recreation of Netflix's browsing experience — movie/show grids, trailer previews and a sleek, responsive layout.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    image: expenseTracker,
    title: "Expense Tracker",
    tag: "Web App / Personal Finance",
    content:
      "Helps users log income and expenses, categorize spending and view summaries — a clean, responsive way to monitor financial habits.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    image: socialMediaDashboard,
    title: "Social Media Dashboard",
    tag: "Web App / Analytics",
    content:
      "A centralized dashboard for social engagement metrics — likes, shares and followers — with real-time insight in a polished UI.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
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
                  className={`overflow-hidden rounded-2xl border border-line bg-surface ${
                    index % 2 !== 0 ? "md:order-2" : ""
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
