import { Linkedin, FileText, ArrowUpRight } from "lucide-react";
import Reveal from "../../../common/ui/Reveal";
import Eyebrow from "../../../common/ui/Eyebrow";
import pic from "../../../assets/pic1.jpg";

const stats = [
  { value: "2+", label: "Years of\nExperience" },
  { value: "8+", label: "Projects\nDelivered" },
  { value: "4+", label: "Tech\nStacks" },
];

const links = [
  {
    title: "Connect on LinkedIn",
    link: "https://www.linkedin.com/in/aswini-prabha-rath-6133a5235/",
    icon: Linkedin,
  },
  {
    title: "View my Resume",
    link: "https://drive.google.com/file/d/1XTNl8YvyWrBaLPFE-ySLmd676JKD0uO9/view?usp=drive_link",
    icon: FileText,
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-36 border-t border-line">
      <div className="container-x">
        <Reveal>
          <Eyebrow>About</Eyebrow>
        </Reveal>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-3 gap-4 md:gap-8 border-y border-line py-10 md:py-14">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.08} className="text-center md:text-left">
              <p className="font-sans font-medium tracking-tighter text-4xl sm:text-6xl md:text-7xl">
                {s.value}
              </p>
              <p className="mt-2 whitespace-pre-line font-mono text-[10px] md:text-xs uppercase tracking-widish text-muted">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal className="order-2 md:order-1">
            <h2 className="font-sans font-medium uppercase tracking-tighter text-3xl md:text-5xl text-balance">
              My name is Aswini Prabha Rath, and I&apos;m a frontend developer
              who tailors interactive digital experiences.
            </h2>
            <p className="mt-6 text-muted leading-relaxed max-w-lg">
              I specialize in building dynamic, responsive interfaces with
              React — turning complex ideas into clean, user-centric products.
              I care about the details: smooth interactions, thoughtful
              layout and code that&apos;s easy to build on.
            </p>

            <div className="mt-8 space-y-4">
              {links.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-paper hover:text-accent transition-colors duration-300 w-fit"
                >
                  <item.icon size={18} />
                  <span className="font-mono text-xs uppercase tracking-widish flex items-center">
                    {item.title}
                    <ArrowUpRight
                      size={14}
                      className="ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute -inset-4 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-line bg-surface">
                <img
                  src={pic}
                  alt="Aswini Prabha Rath"
                  className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
