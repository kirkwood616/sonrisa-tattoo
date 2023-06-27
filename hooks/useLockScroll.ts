import { useEffect } from "react";

export default function useLockScroll(isActive: boolean) {
  useEffect(() => {
    if (!isActive) {
      return;
    }

    const html = document.getElementsByTagName("html")[0];
    const header = document.getElementsByTagName("header")[0];

    const windowWidth = window.innerWidth;
    const documentWidth = document.documentElement.clientWidth;
    const scrollBarWidth = windowWidth - documentWidth;

    if (isActive) {
      html.style.paddingRight = `${scrollBarWidth}px`;
      header.style.paddingRight = `${scrollBarWidth}px`;
      html.classList.add("lock_scroll");
    } else {
      html.style.paddingRight = "0px";
      header.style.paddingRight = "0px";
      html.classList.remove("lock_scroll");
    }

    return () => {
      html.style.paddingRight = "0px";
      header.style.paddingRight = "0px";
      html.classList.remove("lock_scroll");
    };
  }, [isActive]);
}
