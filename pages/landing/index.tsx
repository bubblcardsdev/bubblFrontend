/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable prefer-const */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from "react";
import Footer from "src/App/components/ui/Footer/footer";
import Landing from "src/App/components/ui/Header/Landing";
import { listingData } from "src/App/services/createProfileApi";

import LandingOneMain from "../landing1";

const landingPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [allProfiles, setAllProfiles] = useState<any[]>([]);

  const GetAllProfileFunction = async () => {
    const response = await listingData();
    setAllProfiles(response?.profiles);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    GetAllProfileFunction();
  }, []);
  return (
    <>
      {allProfiles?.length === 0 || allProfiles === undefined ? (
        <Landing />
      ) : (
        <LandingOneMain />
      )}
      <Footer />
    </>
  );
};
export default landingPage;
