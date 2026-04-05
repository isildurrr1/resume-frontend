import { cn } from "@/lib/utils";

interface BadgeProps extends React.ComponentProps<"span"> {
  variant?: "primary" | "secondary" | "outline";
}

function Badge({ className, variant = "primary", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "primary" && "bg-primary/15 text-primary",
        variant === "secondary" && "bg-secondary/15 text-secondary",
        variant === "outline" &&
          "border border-[var(--card-border)] text-[var(--muted)]",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
