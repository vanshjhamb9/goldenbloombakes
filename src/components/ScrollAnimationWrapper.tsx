import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  animation?: "fade-in" | "slide-up" | "scale-in" | "slide-in-left" | "slide-in-right";
  delay?: number;
  className?: string;
}

const animationClasses = {
  "fade-in": "animate-fade-in",
  "slide-up": "animate-slide-up",
  "scale-in": "animate-scale-in",
  "slide-in-left": "animate-slide-in-left",
  "slide-in-right": "animate-slide-in-right",
};

export const ScrollAnimationWrapper = ({
  children,
  animation = "fade-in",
  delay = 0,
  className,
}: ScrollAnimationWrapperProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={cn(
        !isVisible && "opacity-0",
        isVisible && animationClasses[animation],
        className
      )}
      style={isVisible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};
