import {useEffect, useRef} from "react";

const useDebounceFn = <T, K>(value: T, delay: number, callback: () => K, skipFirstRender = false) => {
  // state
  const isFirstRender = useRef(skipFirstRender);

  // effect
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = true;
    } else {
      const timeout = setTimeout(() => {
        callback();
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [value, delay, callback]);

  return null;
}

export default useDebounceFn;