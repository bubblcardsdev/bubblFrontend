/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRouter } from "next/router";

import styles from "./404.module.css";

export default function PageNotFount() {
  const router = useRouter();
  return (
    <div>
      <div className={styles.mainContainer}>
        <video
          autoPlay
          muted
          loop
          preload="auto"
          playsInline
          controls={false}
          style={{ width: "105%" }}
        >
          <source src="/static/images/video/404_v2.mp4" type="video/mp4" />
        </video>
        <div
          className={styles.ButtonContainer}
          onClick={() => router.replace("/")}
        >
          <p>Back To Home</p>
        </div>
      </div>

      <div className={styles.mainContainerResp}>
        <video
          autoPlay
          muted
          loop
          preload="auto"
          playsInline
          controls={false}
          style={{ width: "100%" }}
        >
          <source src="/static/images/video/m_404_v2.mp4" type="video/mp4" />
        </video>
        <div
          className={styles.ButtonContainer}
          onClick={() => router.replace("/")}
        >
          <p>Back To Home</p>
        </div>
      </div>
    </div>
  );
}
