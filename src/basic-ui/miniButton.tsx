import { motion as fk, HTMLMotionProps } from "framer-motion";
import {
  mergeVariants,
  MiniComponetType,
  MiniUiSize,
  MiniUiType,
  Variants,
} from "../miniComponentConfig";
import { defaultViewport } from "../animation/miniViewPort";

export interface MiniButtonProps
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

export const MiniButton = ({
  children,
  className = "",

  ui = MiniUiType.NONE,
  uiSize = MiniUiSize.MEDIUM,
  uiMotion,
  uiHover,
  viewport = defaultViewport,
  ...props
}: MiniButtonProps) => {
  const animation: Variants = mergeVariants(uiMotion, uiHover);

  return (
    <fk.button
      variants={animation}
      initial={animation ? "hidden" : undefined}
      whileHover={animation ? "whileHover" : undefined}
      whileInView={animation ? "visible" : undefined}
      viewport={viewport}
      className={`${uiSizeStyle[uiSize]} ${uiStyle[ui]} ${className}`}
      {...props}
    >
      {children}
    </fk.button>
  );
}
