import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin } from "lucide-react";

const links = [
  { title: "Work", id: "work" },
  { title: "About", id: "about" },
  { title: "Skills", id: "skills" },
  { title: "Contact", id: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", ...links.map((l) => l.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top bar */}
      <div
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-ink/70 backdrop-blur-md border-b border-line" : "bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between py-5">
          <button
            onClick={() => goTo("home")}
            className="font-mono text-sm tracking-widish uppercase text-paper hover:text-accent transition-colors"
          >
            Aswini<span className="text-accent">.</span>
          </button>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/aswini-prabha-rath-6133a5235/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-pill border border-line text-paper hover:border-accent hover:text-accent transition-colors"
            >
              <Linkedin size={15} />
            </a>
            <button
              onClick={() => goTo("contact")}
              className="hidden sm:inline-flex items-center rounded-pill border border-line bg-surface px-5 py-2.5 font-mono text-[11px] uppercase tracking-widish text-paper hover:border-paper/40 transition-colors"
            >
              Let&apos;s Talk
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="sm:hidden flex h-10 w-10 items-center justify-center rounded-pill border border-line text-paper"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating pill section nav — desktop */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden sm:block">
        <ul className="flex items-center gap-1 rounded-pill border border-line bg-ink/70 backdrop-blur-md px-2 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => goTo(l.id)}
                className={`relative px-4 py-2 rounded-pill font-mono text-[11px] uppercase tracking-widish transition-colors duration-300 ${
                  active === l.id ? "text-ink" : "text-muted hover:text-paper"
                }`}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-pill bg-paper"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{l.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink flex flex-col sm:hidden"
          >
            <div className="container-x flex items-center justify-between py-5">
              <span className="font-mono text-sm tracking-widish uppercase text-paper">
                Aswini<span className="text-accent">.</span>
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-pill border border-line text-paper"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center gap-2 container-x">
              {links.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => goTo(l.id)}
                  className="font-sans text-4xl tracking-tighter text-paper hover:text-accent transition-colors py-2"
                >
                  {l.title}
                </motion.button>
              ))}
            </div>
            <div className="container-x pb-10">
              <a
                href="https://www.linkedin.com/in/aswini-prabha-rath-6133a5235/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widish text-muted hover:text-accent transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
