import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Eyebrow from "../../../common/ui/Eyebrow";
import PillButton from "../../../common/ui/PillButton";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-32 sm:pb-24"
    >
      {/* Ambient glow blobs standing in for the reference site's WebGL liquid blob */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-[60vh] max-w-[560px] max-h-[560px] rounded-full bg-accent/25 blur-[110px] animate-drift" />
        <div className="absolute left-1/3 top-2/3 h-[40vh] w-[40vh] max-w-[380px] max-h-[380px] rounded-full bg-paper/10 blur-[100px] animate-drift2" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>FullStack / React.js Developer</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 font-sans font-medium uppercase leading-[0.92] tracking-tightest text-balance text-[15vw] sm:text-[11vw] md:text-[8rem] lg:text-[9rem]"
        >
          I build
          <br />
          <span className="text-paper/40">digital</span>
          <br />
          experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-md font-mono text-xs sm:text-sm uppercase tracking-widish text-muted"
        >
          Hi, I&apos;m Aswini Prabha Rath — crafting fast, interactive &amp;
          pixel-perfect interfaces with React.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <PillButton variant="solid" onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}>
            View Work
          </PillButton>
          <PillButton onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Contact Me
          </PillButton>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-28 sm:bottom-8 text-faint"
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
};

export default Home;
