import { Variants } from "framer-motion";

export interface MiniComponetType {
  ui?: MiniUiType;
  uiMotion?: Variants[] | undefined;
  uiHover?: Variants[] | undefined;
  uiSize?: MiniUiSize;
}

export enum MiniUiType {
  BASIC = "basic",
  OUTLINE = "outline",
  BRAND = "brand",
  NONE = "none",
}

export enum MiniUiSize {
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
  NONE = "none",
}

export const mergeVariants = (
  ...data: (Variants[] | undefined)[]
): Variants => {
  const flat = data
    .filter((arr): arr is Variants[] => arr !== undefined)
    .flat();

  return flat.reduce((acc, cur) => {
    for (const key in cur) {
      acc[key] = { ...(acc[key] || {}), ...(cur[key] || {}) };
    }
    return acc;
  }, {} as Variants);
};
