/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { verifyEmail } from "src/App/services/api";

function VerifyEmail() {
  const router = useRouter();
  const [error, setError] = useState("");

  const { verifyId, deviceID } = router.query;
  useEffect(() => {
    if (deviceID) {
      if (deviceID !== "none") {
        localStorage.setItem("deviceNumber", deviceID.toString());
      }
    }
    if (verifyId) {
      verifyEmail(verifyId as string).then((data) => {
        if (data.message) {
          router.replace("/register/emailverify");
          return;
        }
        setError(data.error || "Something went wrong");
      });
    }
  }, [router, verifyId]);

  if (error) {
    return <div>{error}</div>;
  }

  return <div style={{ display: "none" }}>.</div>;
}

export default VerifyEmail;
