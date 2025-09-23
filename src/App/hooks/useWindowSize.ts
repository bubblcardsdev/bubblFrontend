import { useState, useEffect } from "react";

interface windowSize {
  width: number;
  height: number;
}

const useWindowSize = () => {
  const initial: windowSize = {
    width: 0,
    height: 0,
  };
  const [windowSize, setWindowSize] = useState(initial);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
};

export default useWindowSize;
