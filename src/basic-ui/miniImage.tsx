import { ViewportOptions } from "framer-motion";
import { MiniComponetType } from "../miniComponentConfig";
import { defaultViewport } from "../animation/miniViewPort";
import MiniBox from "./miniBox";
import React from "react";

export interface MiniImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    MiniComponetType {
  viewport?: ViewportOptions;
}

export default function MiniImage({
  className = "",
  uiMotion,
  uiHover,
  uiSize,
  ui,
  viewport = defaultViewport,
  ...props
}: MiniImageProps) {
  return (
    <MiniBox
      uiMotion={uiMotion}
      uiHover={uiHover}
      viewport={viewport}
      className={`overflow-hidden ${className}`}
    >
      <img className={`w-full h-full object-cover`} {...props} />
    </MiniBox>
  );
}
