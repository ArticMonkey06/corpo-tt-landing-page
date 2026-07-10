import { cn } from "@/lib/utils";

export function LogoIcon({
  className,
  squareClassName = "h-3 w-3",
  gapClassName = "gap-0.5",
}: {
  className?: string;
  squareClassName?: string;
  gapClassName?: string;
}) {
  return (
    <div
      className={cn("flex flex-col", gapClassName, className)}
      aria-hidden="true"
    >
      <div className={cn("flex", gapClassName)}>
        <div className={cn("rounded-sm bg-brand-light", squareClassName)} />
        <div className={cn("rounded-sm bg-brand", squareClassName)} />
      </div>
      <div className={cn("flex", gapClassName)}>
        <div className={cn("rounded-sm bg-brand", squareClassName)} />
        <div className={cn("rounded-sm bg-brand-light", squareClassName)} />
      </div>
    </div>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="text-xl font-bold tracking-tight text-foreground/80">
        CORPO TT Services
      </span>
      <LogoIcon />
      <span className="sr-only">CORPO TT Services</span>
    </div>
  );
}
