import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--fg)] transition-all duration-300",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("p-6 sm:p-8", className)} {...props} />;
}

export { Card, CardContent };
