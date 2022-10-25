import { useEffect, useState } from "react";

export const usePersistedState = (key: string, initialState: any) => {
  const [state, setState] = useState(() => {
    if (typeof window !== "undefined") {
      useEffect(() => {
        const storageValue = localStorage.getItem(key);

        if (storageValue) {
          return JSON.parse(storageValue);
        } else {
          return initialState;
        }

        localStorage.setItem(key, JSON.stringify(state));
      }, []);
    }
  });

  return [state, setState];
};
