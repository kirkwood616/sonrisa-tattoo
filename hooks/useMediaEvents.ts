import { Dispatch, SetStateAction } from "react";
import useLockScroll from "./useLockScroll";
import useMediaBreakpoint from "./useMediaBreakpoint";
import useOnClickOutside from "./useOnClickOutside";

export default function useMediaEvents(
  isActive: boolean,
  setIsActive: Dispatch<SetStateAction<boolean>>,
  breakpoint: string,
  useLock: boolean
) {
  const { ref, onClickStopPropagation } = useOnClickOutside(isActive, setIsActive);
  useMediaBreakpoint(breakpoint, isActive, setIsActive);
  useLockScroll(useLock, isActive);

  return { ref, onClickStopPropagation };
}
