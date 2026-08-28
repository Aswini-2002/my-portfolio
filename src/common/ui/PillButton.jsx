import { motion } from "framer-motion";

/**
 * The reference site's signature pill CTA: fully-rounded, hairline border,
 * near-transparent fill, brightens on hover.
 */
const PillButton = ({
  children,
  href,
  onClick,
  variant = "outline", // "outline" | "solid"
  className = "",
  type = "button",
  target,
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 font-mono text-[11px] md:text-xs uppercase tracking-widish transition-colors duration-300 whitespace-nowrap";
  const styles =
    variant === "solid"
      ? "bg-paper text-ink hover:bg-accent hover:text-ink"
      : "bg-surface text-paper border border-line hover:border-paper/40 hover:bg-paper/10";

  const Comp = href ? motion.a : motion.button;
  const extra = href ? { href, target, rel: target ? "noopener noreferrer" : undefined } : { onClick, type };

  return (
    <Comp
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles} ${className}`}
      {...extra}
    >
      {children}
    </Comp>
  );
};

export default PillButton;
