import { useEffect } from 'react';

export const useDocumentBodyClick = (func, perpemennaz) => {
  perpemennaz = perpemennaz || true;
  useEffect(() => {
    if (perpemennaz) {
      document.body.addEventListener('click', (e) => {
        func(e);
      });
    }
  });
};
