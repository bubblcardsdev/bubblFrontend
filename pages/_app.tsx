// Phase 2 Onboarding
/* eslint-disable no-unreachable */
/* eslint-disable @next/next/no-sync-scripts */
// eslint-disable-next-line import/no-unresolved
import "bootstrap/dist/css/bootstrap.min.css";
import "react-phone-input-2/lib/style.css";
import "@/styles/global.css";
import "@/styles/createprofile_carousel.css";
import "@/styles/post_login_navbar.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import { ParallaxProvider } from "react-scroll-parallax";

import { wrapper } from "../store/store";
import PromoPopup from "src/App/components/promoPopup/promoPopup";
import { useRouter } from "next/router";

<script src="/node_modules/@lottiefiles/lottie-player/dist/lottie-player.js" />;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [popUpState, setPopUpState] = useState(false);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
      TagManager.initialize({
        gtmId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, // Replace with your actual GTM ID
      });
    }
    const popupShowPaths = ["/", "/shopPage"];
    if (popupShowPaths.includes(router.pathname)) {
      const popupdelayTime = router?.pathname == "/" ? 6000 : 3000;
      const timeoutId = setTimeout(() => {
        setPopUpState(true);
      }, popupdelayTime);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, []);
  return (
    <ParallaxProvider>
      {popUpState && (
        <PromoPopup visible={popUpState} onHide={() => setPopUpState(false)} />
      )}
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default wrapper.withRedux(MyApp);
