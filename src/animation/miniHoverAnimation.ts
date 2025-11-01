// miniHoverMotion.ts
// hover 시 scale, rotate, brightness 등 시각적 강조 효과 세트

import { Variants } from "framer-motion";

/** 살짝 커지는 효과 */
export const hoverScale = (
  scale: number = 1.05,
  duration: number = 0.15
): Variants => ({
  whileHover: {
    scale,
    transition: { duration, ease: "easeOut" },
  },
});

/** 눌림 느낌 (scale down) */
export const hoverPress = (
  scale: number = 0.95,
  duration: number = 0.15
): Variants => ({
  whileHover: {
    scale,
    transition: { duration, ease: "easeInOut" },
  },
});

/** 살짝 회전 (hover) */
export const hoverRotate = (
  degree: number = 3,
  duration: number = 0.3
): Variants => ({
  whileHover: {
    rotate: degree,
    transition: { duration, ease: "easeOut" },
  },
});

/** 밝기 강조 (hover) */
export const hoverBright = (
  brightness: number = 1.2,
  duration: number = 0.3
): Variants => ({
  whileHover: {
    filter: `brightness(${brightness})`,
    transition: { duration, ease: "easeOut" },
  },
});

/** 살짝 위로 이동 (hover) */
export const hoverLift = (
  y: number = -4,
  duration: number = 0.2
): Variants => ({
  whileHover: {
    y,
    transition: { duration, ease: "easeOut" },
  },
});

/** 컬러 강조 (hover 시 brand 색상처럼 보이게) */
export const hoverColorPop = (
  opacity: number = 0.9,
  scale: number = 1.03,
  duration: number = 0.25
): Variants => ({
  whileHover: {
    opacity,
    scale,
    transition: { duration, ease: "easeOut" },
  },
});

/** 모두 모아서 export (편의용) */
export default {
  hoverScale,
  hoverPress,
  hoverRotate,
  hoverBright,
  hoverLift,
  hoverColorPop,
};
