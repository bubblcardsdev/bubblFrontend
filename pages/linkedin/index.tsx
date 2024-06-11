/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  setAccessToken,
  setfirstName,
  setlastName,
} from "src/App/helpers/local-storage";
import { LinkedInLoginApi } from "src/App/services/ssoLogin";

import styles from "./index.module.css";

function LinkedIn() {
  const router = useRouter();
  const LinkedInToken = router.query.code;

  const LinkedInFunction = async () => {
    if (router?.query?.error === "user_cancelled_login") {
      router.push("/login");
    }
    if (LinkedInToken !== undefined) {
      const responseObj = {
        authorizationCode: LinkedInToken,
      };
      const responseVal = await LinkedInLoginApi(responseObj);

      const tokenVal = responseVal?.data?.data?.token?.accessToken;
      setfirstName(responseVal?.data?.data?.firstName);
      setlastName(responseVal?.data?.data?.lastName);
      setAccessToken(responseVal?.data?.data?.token?.accessToken);

      if (tokenVal) {
        router.replace("/bubblProfiles");
      } else {
        router.push("/login");
      }
    }
  };

  useEffect(() => {
    LinkedInFunction();
  }, [router]);

  return (
    <div className={styles.container}>
      <p>Re Direct to LinkedIn Page</p>
    </div>
  );
}
export default LinkedIn;
