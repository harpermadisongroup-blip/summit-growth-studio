import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
}

const GradientText = ({ children, className, as: Tag = "span" }: GradientTextProps) => {
  return (
    <Tag className={cn("text-gradient", className)}>
      {children}
    </Tag>
  );
};

export default GradientText;
