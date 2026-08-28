import { Linkedin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line py-14">
      <div className="container-x flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
        <div>
          <p className="font-sans font-medium uppercase tracking-tighter text-2xl md:text-3xl">
            Get in touch
          </p>
          <a
            href="mailto:aswini.pr.rath@gmail.com"
            className="mt-2 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widish text-muted hover:text-accent transition-colors"
          >
            aswini.pr.rath@gmail.com <ArrowUpRight size={12} />
          </a>
        </div>

        <div className="flex flex-col md:items-end gap-4">
          <a
            href="https://www.linkedin.com/in/aswini-prabha-rath-6133a5235/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-pill border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-widish text-muted hover:text-accent hover:border-accent transition-colors"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
          <p className="font-mono text-[11px] uppercase tracking-widish text-faint">
            &copy; {year} Aswini Prabha Rath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
