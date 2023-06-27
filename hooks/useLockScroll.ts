import { useEffect } from "react";

export default function useLockScroll(isActive: boolean) {
  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];

    if (isActive) {
      html.classList.add("lock_scroll");
    } else {
      html.classList.remove("lock_scroll");
    }

    return () => {
      html.classList.remove("lock_scroll");
    };
  }, [isActive]);
}
