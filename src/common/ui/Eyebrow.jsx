const Eyebrow = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center gap-2 font-mono text-[11px] md:text-xs uppercase tracking-widish text-muted ${className}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
    {children}
  </span>
);

export default Eyebrow;
