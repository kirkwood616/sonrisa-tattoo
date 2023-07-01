import { Dispatch, SetStateAction, useEffect, useRef } from "react";

export default function useOnClickOutside(isActive: boolean, setIsActive: Dispatch<SetStateAction<boolean>>) {
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
    if (!isActive) {
      return;
    }
    document.addEventListener("keydown", handleKeyboardClose, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleKeyboardClose, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, onClickStopPropagation };
}
