// miniMotion.ts
// 모든 motion variants 모음 (함수화 + 기본값 제공)

import { Variants } from "framer-motion";

/** 기본 fade (서서히 나타남) */
export const fadeIn = (duration: number = 0.7): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration, ease: "easeOut" },
  },
});

/** 위로 등장 (자연스럽게 올라옴) */
export const fadeInUp = (
  distance: number = 20,
  duration: number = 0.7
): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: "easeOut" },
  },
});

/** 아래로 등장 (내려오듯 등장) */
export const fadeInDown = (
  distance: number = -20,
  duration: number = 0.7
): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: "easeOut" },
  },
});

/** 왼쪽에서 등장 */
export const fadeInLeft = (
  distance: number = -20,
  duration: number = 0.7
): Variants => ({
  hidden: { opacity: 0, x: distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration, ease: "easeOut" },
  },
});

/** 오른쪽에서 등장 */
export const fadeInRight = (
  distance: number = 20,
  duration: number = 0.7
): Variants => ({
  hidden: { opacity: 0, x: distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration, ease: "easeOut" },
  },
});

/** 줌인 (확대되며 등장) */
export const zoomIn = (
  scaleStart: number = 0.8,
  duration: number = 0.7
): Variants => ({
  hidden: { opacity: 0, scale: scaleStart },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration, ease: "easeOut" },
  },
});

/** 줌아웃 (축소되며 사라짐) */
export const zoomOut = (
  scaleEnd: number = 0.8,
  duration: number = 0.7
): Variants => ({
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 0,
    scale: scaleEnd,
    transition: { duration, ease: "easeIn" },
  },
});

/** 회전 등장 */
export const rotateIn = (
  degree: number = -10,
  duration: number = 0.7
): Variants => ({
  hidden: { opacity: 0, rotate: degree },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration, ease: "easeOut" },
  },
});

/** 스케일 팝 (살짝 튀어오름) */
export const popIn = (
  scaleStart: number = 0.95,
  duration: number = 0.25
): Variants => ({
  hidden: { opacity: 0, scale: scaleStart },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration, ease: "easeOut" },
  },
});

/** 살짝 흔들림 (attention 효과) */
export const shake = (
  distance: number = 5,
  duration: number = 0.7
): Variants => ({
  hidden: { x: 0 },
  visible: {
    x: [0, -distance, distance, -distance, distance, 0],
    transition: { duration, ease: "easeInOut" },
  },
});

/** 위로 연속적 튀어오름 (버튼 hover용) */
export const bounce = (
  height: number = 8,
  duration: number = 0.7
): Variants => ({
  hidden: { y: 0 },
  visible: {
    y: [0, -height, 0],
    transition: { duration, repeat: Infinity, repeatDelay: 1 },
  },
});

/** 순차 등장 컨테이너 (자식 요소 순차 fade) */
export const staggerContainer = (
  staggerChildren: number = 0.15,
  delayChildren: number = 0.1
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/** 모두 모아서 export (편의용) */
export default {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  zoomIn,
  zoomOut,
  rotateIn,
  popIn,
  shake,
  bounce,
  staggerContainer,
};
