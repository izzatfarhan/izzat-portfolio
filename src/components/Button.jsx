export default function Button({ href, children, variant = "primary", className = "" }) {
  const variantClass = variant === "secondary" ? "btn-secondary" : "btn-primary";

  return (
    <a href={href} className={`${variantClass} ${className}`.trim()}>
      {children}
    </a>
  );
}
