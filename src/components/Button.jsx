export default function Button({ href, children, variant = "primary", className = "", external = false }) {
  const variantClass = variant === "secondary" ? "btn-secondary" : "btn-primary";

  return (
    <a
      href={href}
      className={`${variantClass} ${className}`.trim()}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
