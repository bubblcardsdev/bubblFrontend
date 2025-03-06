import React, {
  PropsWithChildren,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./lottie.module.css";

function LoaderScreen({ children }: PropsWithChildren) {
  const ref = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3100);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  const lotteComp = (
    <div className={styles.loader}>
      <lottie-player
        background="transparent"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        loop
        autoplay
        ref={ref}
        src="/lottie/bubblloadinganimation.json"
      />
    </div>
  );

  if (isLoading) {
    return lotteComp;
  }

  return children as ReactElement;
}

export default LoaderScreen;
