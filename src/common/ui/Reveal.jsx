import { motion } from "framer-motion";

/**
 * Fades + slides content up into view once as it scrolls into the viewport.
 * Wraps the reference site's GSAP scroll-reveals in a lightweight equivalent.
 */
const Reveal = ({ children, delay = 0, y = 28, className = "", as = "div", ...rest }) => {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
