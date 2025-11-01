import { motion as fk, HTMLMotionProps } from "framer-motion";
import {
  mergeVariants,
  MiniComponetType,
  MiniUiSize,
  MiniUiType,
  Variants,
} from "../miniComponentConfig";
import { defaultViewport } from "../animation/miniViewPort";

interface InputProps extends HTMLMotionProps<"textarea">, MiniComponetType {
  label?: string;
}

const uiStyle = {
  [MiniUiType.BASIC]: "mini-basic shadow-inner",
  [MiniUiType.OUTLINE]: "mini-outline",
  [MiniUiType.BRAND]: "mini-brand",
  [MiniUiType.NONE]: "",
};

const uiSizeStyle = {
  [MiniUiSize.SMALL]: "",
  [MiniUiSize.MEDIUM]: "px-4 py-2",
  [MiniUiSize.LARGE]: "",
  [MiniUiSize.NONE]: "",
};

export const MiniTextarea = ({
  label,
  className,

  ui = MiniUiType.NONE,
  uiSize = MiniUiSize.NONE,
  uiHover: hover,
  uiMotion: motion,
  viewport = defaultViewport,
  ...props
}: InputProps) => {
  const animation: Variants = mergeVariants(motion, hover);
  const baseStyle = "";

  return (
    <div>
      {label && (
        <label htmlFor={props.id} className="mini-text mb-1 block">
          {label}
        </label>
      )}
      <fk.textarea
        variants={animation}
        initial={animation ? "hidden" : undefined}
        whileHover={animation ? "whileHover" : undefined}
        whileInView={animation ? "visible" : undefined}
        viewport={viewport}
        className={`${baseStyle} ${uiStyle[ui]} ${uiSizeStyle[uiSize]} ${className}`}
        {...props}
      />
    </div>
  );
};
