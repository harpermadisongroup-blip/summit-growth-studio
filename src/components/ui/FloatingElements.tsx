import { cn } from "@/lib/utils";

interface FloatingElementsProps {
  variant?: "hero" | "section" | "cta";
  className?: string;
}

const FloatingElements = ({ variant = "hero", className }: FloatingElementsProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {variant === "hero" && (
        <>
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/[0.07] blur-[100px] animate-pulse-glow" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-accent/[0.05] blur-[80px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px]" />
        </>
      )}
      {variant === "section" && (
        <>
          <div className="absolute -top-20 right-0 w-[300px] h-[300px] rounded-full bg-primary/[0.04] blur-[80px]" />
          <div className="absolute bottom-0 -left-10 w-[250px] h-[250px] rounded-full bg-accent/[0.03] blur-[60px]" />
        </>
      )}
      {variant === "cta" && (
        <>
          <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/[0.15] blur-[100px] animate-pulse-glow" />
          <div className="absolute -bottom-20 right-1/4 w-[350px] h-[350px] rounded-full bg-accent/[0.1] blur-[80px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        </>
      )}
    </div>
  );
};

export default FloatingElements;
