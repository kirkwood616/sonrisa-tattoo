import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useMediaBreakpoint(
  query: string,
  isActive: boolean,
  setIsActive: Dispatch<SetStateAction<boolean>>
) {
  function getMatches(query: string): boolean {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange(): void {
    setMatches(getMatches(query));

    if (isActive && matches) {
      setIsActive((prev) => !prev);
    }
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load
    handleChange();

    // Listen matchMedia
    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  });
}
