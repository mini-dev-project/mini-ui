"use client";

import { motion as fk, HTMLMotionProps, Variants } from "framer-motion";
import {
  mergeVariants,
  MiniComponetType,
  MiniUiSize,
  MiniUiType,
} from "../miniComponentConfig";
import { defaultViewport } from "../animation/miniViewPort";

export interface ButtonProps
  extends HTMLMotionProps<"button">,
    MiniComponetType {
  children?: React.ReactNode;
}

const uiStyle = {
  [MiniUiType.BASIC]: "mini-basic",
  [MiniUiType.OUTLINE]: "mini-outline",
  [MiniUiType.BRAND]: "mini-brand",
  [MiniUiType.NONE]: "",
};

const uiSizeStyle = {
  [MiniUiSize.SMALL]: "p-3",
  [MiniUiSize.MEDIUM]: "px-5 py-2.5",
  [MiniUiSize.LARGE]: "p-10",
  [MiniUiSize.NONE]: "",
};

export default function MiniButton({
  children,
  className = "",

  ui = MiniUiType.NONE,
  uiSize = MiniUiSize.MEDIUM,
  uiMotion,
  uiHover,
  viewport = defaultViewport,
  ...props
}: ButtonProps) {
  const animation: Variants = mergeVariants(uiMotion, uiHover);
  const baseStyle = `${uiSizeStyle[uiSize]} ${uiStyle[ui]} font-semibold`;

  return (
    <fk.button
      variants={animation}
      initial={animation ? "hidden" : undefined}
      whileHover={animation ? "whileHover" : undefined}
      whileInView={animation ? "visible" : undefined}
      viewport={viewport}
      className={`${baseStyle} ${className}`}
      {...props}
    >
      {children}
    </fk.button>
  );
}
