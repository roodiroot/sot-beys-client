import { useEffect } from "react";

export const useDocumentBodyClick = (func, perpemennaz) => {
  // perpemennaz = perpemennaz || true;
  useEffect(() => {
    const addClick = (e) => {
      func(e);
    };
    window.addEventListener("click", addClick);
    return () => window.removeEventListener("click", addClick);
  }, []);
};
