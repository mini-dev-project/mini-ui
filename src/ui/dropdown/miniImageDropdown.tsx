import { useState, useRef, useEffect } from "react";
import {
  MiniComponetType,
  MiniUiSize,
  MiniUiType,
} from "../../miniComponentConfig";
import { MiniImage } from "../../basic-ui";
import { MiniSelect, MiniOptionType } from "./miniSelect";

// === MiniDropdown Props ===
interface MiniDropdownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    MiniComponetType {
  label?: string;
  image: string;

  options: MiniOptionType[];
  onValueSelect?: (value: string) => void;
}

// === 공통 UI 스타일 (고정) ===
const uiStyle = {
  [MiniUiType.BASIC]: "mini-basic",
  [MiniUiType.OUTLINE]: "mini-outline",
  [MiniUiType.BRAND]: "mini-brand",
  [MiniUiType.NONE]: "",
};

// === 컴포넌트 ===
export const MiniImageDropdown = ({
  options,
  image,
  onValueSelect,
  className = "",

  ui = MiniUiType.BASIC,
  uiMotion,
  uiHover,
  ...props
}: MiniDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);

  // 바깥 클릭 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    setIsOpen(false);
    setSelected(value);
    onValueSelect?.(value);
  };

  return (
    <div ref={ref} className={`relative inline-block ${className}`} {...props}>
      <MiniImage
        className={`${className}`}
        uiSize={MiniUiSize.NONE}
        src={image}
        onClick={() => setIsOpen((p) => !p)}
      />
      <MiniSelect isOpen={isOpen} options={options} onSelect={handleSelect} />
    </div>
  );
};
