"use client";

import { motion, AnimatePresence } from "framer-motion";

export interface OptionType {
  value: string;
  label: string;
}

interface MiniDropdownListProps {
  isOpen: boolean;
  options: OptionType[];
  onSelect: (value: string) => void;
  className?: string;
}

export default function MiniSelect({
  isOpen,
  options,
  onSelect,
  className = "",
}: MiniDropdownListProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className={`absolute w-52 mt-2 rounded-xl overflow-hidden z-50
            border border-gray-200 bg-white/80 backdrop-blur-md
            shadow-[0_8px_20px_rgba(0,0,0,0.08)]
            ${className}
          `}
        >
          {options.map((opt) => (
            <motion.li
              key={opt.value}
              whileHover={{
                backgroundColor: "var(--brand)",
                color: "#fff",
              }}
              className="mini-no-transition px-4 py-2 text-sm cursor-pointer
                         text-[var(--text)] bg-transparent
                         transition-colors duration-150"
              onClick={() => onSelect(opt.value)}
            >
              {opt.label}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
