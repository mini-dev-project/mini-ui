"use client";

import { ReactNode } from "react";
import MiniImage, { MiniImageProps } from "../basic-ui/miniImage";
import { MiniBox, MiniBoxProps } from "../basic-ui/miniBox";
import { MiniUiType } from "../miniComponentConfig";

interface MiniImageInsideCard extends MiniImageProps {
  children?: ReactNode;
  childClassName?: string;
}

const uiStyle = {
  [MiniUiType.BASIC]: "mini-basic",
  [MiniUiType.OUTLINE]: "mini-outline",
  [MiniUiType.BRAND]: "mini-brand",
  [MiniUiType.NONE]: "",
};

export function MiniImageInsideCard({
  children,
  childClassName = "",
  ...props
}: MiniImageInsideCard) {
  const baseStyle = "relative group flex flex-col";

  return (
    <div className={`${baseStyle}`}>
      <MiniImage {...props} />
      <div
        className={`absolute inset-0 flex flex-col opacity-0 group-hover:opacity-100 z-10 pointer-events-none ${childClassName}`}
      >
        {children}
      </div>
    </div>
  );
}

interface MiniImageCard extends MiniBoxProps {
  children?: ReactNode;
  src?: string;
  childClassName?: string;
}

export function MiniImageCard({
  children,
  childClassName = "",
  src,
  ...props
}: MiniImageCard) {
  return (
    <MiniBox {...props}>
      <MiniImage src={src} className={`${childClassName}`} />
      {children}
    </MiniBox>
  );
}
