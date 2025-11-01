import { MiniComponetType, ViewportOptions } from "../miniComponentConfig";
import { defaultViewport } from "../animation/miniViewPort";
import React from "react";
import { MiniBox } from "./miniBox";

export interface MiniImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    MiniComponetType {
  viewport?: ViewportOptions;
}

export const MiniImage = ({
  className = "",
  uiMotion,
  uiHover,
  uiSize,
  ui,
  viewport = defaultViewport,
  ...props
}: MiniImageProps) => {
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
};
