import { cn } from "@/lib/utils";

interface ChartGridProps {
  className?: string;
  children?: React.ReactNode;
}

export function ChartGrid({ className, children }: ChartGridProps) {
  return (
    <div 
      className={cn(
        "relative",
        className
      )}
      style={{
        backgroundSize: "20px 20px",
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `
      }}
    >
      {children}
    </div>
  );
}
