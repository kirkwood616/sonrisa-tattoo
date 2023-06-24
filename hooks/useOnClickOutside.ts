import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export default function useOnClickOutside() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  function onClickStopPropagation(e: React.MouseEvent<HTMLElement>, setIsActive: Dispatch<SetStateAction<boolean>>) {
    e.preventDefault();
    e.stopPropagation();
    setIsActive((prev) => !prev);
  }

  const handleKeyboardClose = (event: KeyboardEvent) => {
    if (isActive && event.key === "Escape") {
      setIsActive((prev) => !prev);
    }
  };

  const handleClickOutside = (event: Event) => {
    if (isActive && ref.current && !ref.current.contains(event.target as Node)) {
      setIsActive((prev) => !prev);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardClose, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleKeyboardClose, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isActive, setIsActive, onClickStopPropagation };
}
