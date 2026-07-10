import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

export type RevealVariant =
  | "fade"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-x"
  | "flip-y";

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  duration?: number;
  delay?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
  easing?: number[];
  className?: string;
  as?: "div" | "section" | "article" | "span";
}

const buildVariants = (
  variant: RevealVariant,
  distance: number,
): Variants => {
  const hidden: Record<string, number> = { opacity: 0 };
  const visible: Record<string, number> = { opacity: 1, x: 0, y: 0, scale: 1, rotateX: 0, rotateY: 0 };

  switch (variant) {
    case "slide-up":
      hidden.y = distance;
      break;
    case "slide-down":
      hidden.y = -distance;
      break;
    case "slide-left":
      hidden.x = distance;
      break;
    case "slide-right":
      hidden.x = -distance;
      break;
    case "zoom-in":
      hidden.scale = 0.9;
      break;
    case "zoom-out":
      hidden.scale = 1.1;
      break;
    case "flip-x":
      hidden.rotateX = -90;
      break;
    case "flip-y":
      hidden.rotateY = -90;
      break;
    case "fade":
    default:
      break;
  }

  return { hidden, visible };
};

const Reveal = ({
  children,
  variant = "slide-up",
  duration = 0.7,
  delay = 0,
  distance = 40,
  once = true,
  amount = 0.15,
  easing = [0.22, 1, 0.36, 1],
  className,
  as = "div",
}: RevealProps) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      className={className}
      style={{ willChange: "transform, opacity", transformPerspective: 900 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={buildVariants(variant, distance)}
      transition={{ duration, delay, ease: easing }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
