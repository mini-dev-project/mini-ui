import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MiniUiType } from "../../miniComponentConfig";
import { ButtonProps, MiniButton } from "../../basic-ui";
import { MiniSelect, OptionType } from "./miniSelect";

// === MiniDropdown Props ===
interface MiniDropdownProps extends ButtonProps {
  className?: string;
  options: OptionType[];
  placeholder?: string;
  label?: string;

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
export const MiniDropdown = ({
  label,
  options,
  placeholder = "선택하세요",
  className = "",
  onValueSelect,
  ...props
}: MiniDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);

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
    <div ref={ref} className={`relative`}>
      {label && (
        <label htmlFor={props.id} className="mini-text mb-1 block">
          {label}
        </label>
      )}
      <MiniButton
        {...props}
        onClick={() => setIsOpen((p) => !p)}
        className={`
          flex justify-between items-center cursor-pointer
          ${className}
        `}
      >
        <span className="pr-2">
          {selected
            ? options.find((opt) => opt.value === selected)?.label
            : placeholder}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-gray-400"
        >
          ▼
        </motion.span>
      </MiniButton>

      <MiniSelect isOpen={isOpen} options={options} onSelect={handleSelect} />
    </div>
  );
};
