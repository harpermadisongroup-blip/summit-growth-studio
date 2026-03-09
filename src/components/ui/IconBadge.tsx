import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IconBadgeProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "accent" | "muted";
  className?: string;
}

const sizeMap = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

const iconSizeMap = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

const variantMap = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  muted: "bg-muted text-muted-foreground",
};

const IconBadge = ({ icon: Icon, size = "md", variant = "primary", className }: IconBadgeProps) => {
  return (
    <div className={cn("rounded-xl flex items-center justify-center flex-shrink-0", sizeMap[size], variantMap[variant], className)}>
      <Icon className={iconSizeMap[size]} />
    </div>
  );
};

export default IconBadge;
