"use client";

import { motion as fk, HTMLMotionProps, Variants } from "framer-motion";
import {
  mergeVariants,
  MiniComponetType,
  MiniUiSize,
  MiniUiType,
} from "../miniComponentConfig";
import { defaultViewport } from "../animation/miniViewPort";

export interface MiniBoxProps extends HTMLMotionProps<"div">, MiniComponetType {
  children?: React.ReactNode;
}

const uiStyle = {
  [MiniUiType.BASIC]: "mini-basic",
  [MiniUiType.OUTLINE]: "mini-outline",
  [MiniUiType.BRAND]: "mini-brand",
  [MiniUiType.NONE]: "",
};

const uiSizeStyle = {
  [MiniUiSize.SMALL]: "",
  [MiniUiSize.MEDIUM]: "",
  [MiniUiSize.LARGE]: "",
  [MiniUiSize.NONE]: "",
};

export default function MiniBox({
  children,
  className = "",
  ui = MiniUiType.NONE,
  uiSize = MiniUiSize.NONE,

  uiHover,
  uiMotion,
  viewport = defaultViewport,
  ...props
}: MiniBoxProps) {
  const animation: Variants = mergeVariants(uiMotion, uiHover);
  const baseStyle = `${uiSizeStyle[uiSize]} ${uiStyle[ui]}`;

  return (
    <fk.div
      variants={animation}
      initial={animation ? "hidden" : undefined}
      whileHover={animation ? "whileHover" : undefined}
      whileInView={animation ? "visible" : undefined}
      viewport={viewport}
      className={`${baseStyle} ${className}`}
      {...props}
    >
      {children}
    </fk.div>
  );
}
