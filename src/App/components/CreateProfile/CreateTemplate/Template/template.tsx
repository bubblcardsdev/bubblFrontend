/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { userProfile } from "src/App/services/userProfile/userProfileService";

import Aurora from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/choose_primary_template/aurora/06.png";
import TemplateIcon from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/choose_primary_template/choose_primary_template.svg";
import Crystal from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/choose_primary_template/crystal-temp.png";
import hydra from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/choose_primary_template/hydra/hydra.svg";
import Moonbeam from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/choose_primary_template/moonbeam/08.png";
import Orion from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/choose_primary_template/orion/orion.svg";
import pegasus from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/choose_primary_template/pegasus/pegasus.svg";
import Stardust from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/choose_primary_template/stardust/05.png";
import Sunflare from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/choose_primary_template/sunflare/07.png";
import Twilight from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/choose_primary_template/twilight/04.png";
import styles from "./template.module.css";

type Props = {
  idValue: any;
  getTemplateId: any;
};

const Template: React.FC<Props> = ({ idValue, getTemplateId }) => {
  const Id = idValue?.id;
  const IdVal = idValue !== null ? idValue?.id : null;

  const [userSubscriptionType, setUserSubscriptionType] = useState();
  const [activeTemplateId, setActiveTemplateId] = useState(1);

  useEffect(() => {
    getUserProfileDetails();
  }, [idValue]);

  const setActiveTemplateIdVal = (id: any) => {
    setActiveTemplateId(id.target.id);
    getTemplateId(id);
  };

  const getUserProfileDetails = async () => {
    const response = await userProfile();
    setUserSubscriptionType(
      response?.data?.userProfile?.BubblPlanManagements[0]?.planId
    );
  };

  if (
    idValue?.DeviceLink?.TemplateId !== undefined &&
    idValue?.DeviceLink?.TemplateId !== activeTemplateId
  ) {
    setActiveTemplateId(idValue?.DeviceLink?.TemplateId);
  }

  return (
    <div>
      <div className={`${styles["template-heading-div"]}`}>
        <div className={`${styles["image-template-icon-paymentHeading"]}`}>
          <div className={`${styles["image-template-icon"]}`}>
            <Image src={TemplateIcon} width="30px" height="30px" alt="bubbl" />
          </div>
          <div className={`${styles["primary-template-heading"]}`}>
            Choose your Primary Template
          </div>
        </div>
      </div>
      <div className={`${styles["select-template-heading"]}`}>
        <div> Select Primary Template</div>
      </div>

      <div>
        <div className={`${styles["template-head-div"]}`}>
          <div
            className={
              activeTemplateId === 1
                ? `${styles["template-imgfirst-div-active"]}`
                : `${styles["template-imgfirst-div"]}`
            }
          >
            <Image
              src={Orion}
              id="1"
              alt="bubbl"
              className={`${styles["template-img-div"]}`}
              onClick={(id) => setActiveTemplateIdVal(id)}
            />
          </div>
          <div
            className={
              activeTemplateId === 2
                ? `${styles["template-imgfirst-div-active"]}`
                : `${styles["template-imgfirst-div"]}`
            }
          >
            <Image
              id="2"
              src={pegasus}
              alt="bubbl"
              className={`${styles["template-img-div"]}`}
              onClick={(id) => setActiveTemplateIdVal(id)}
            />
          </div>
          <div
            className={
              activeTemplateId === 3
                ? `${styles["template-imgfirst-div-active"]}`
                : `${styles["template-imgfirst-div"]}`
            }
          >
            <Image
              id="3"
              src={hydra}
              alt="bubbl"
              className={`${styles["template-img-div"]}`}
              onClick={(id) => setActiveTemplateIdVal(id)}
            />
          </div>
          {userSubscriptionType !== 1 && (
            <div
              className={
                activeTemplateId === 4
                  ? `${styles["template-imgfirst-div-active"]}`
                  : `${styles["template-imgfirst-div"]}`
              }
            >
              <Image
                id="4"
                src={Twilight}
                alt="bubbl"
                className={`${styles["template-img-div"]}`}
                onClick={(id) => setActiveTemplateIdVal(id)}
              />
            </div>
          )}
          {userSubscriptionType !== 1 && (
            <div
              className={
                activeTemplateId === 5
                  ? `${styles["template-imgfirst-div-active"]}`
                  : `${styles["template-imgfirst-div"]}`
              }
            >
              <Image
                id="5"
                src={Stardust}
                alt="bubbl"
                className={`${styles["template-img-div"]}`}
                onClick={(id) => setActiveTemplateIdVal(id)}
              />
            </div>
          )}
          {userSubscriptionType !== 1 && (
            <div
              className={
                activeTemplateId === 6
                  ? `${styles["template-imgfirst-div-active"]}`
                  : `${styles["template-imgfirst-div"]}`
              }
            >
              <Image
                id="6"
                src={Aurora}
                alt="bubbl"
                className={`${styles["template-img-div"]}`}
                onClick={(id) => setActiveTemplateIdVal(id)}
              />
            </div>
          )}
          {userSubscriptionType !== 1 && (
            <div
              className={
                activeTemplateId === 7
                  ? `${styles["template-imgfirst-div-active"]}`
                  : `${styles["template-imgfirst-div"]}`
              }
            >
              <Image
                id="7"
                src={Sunflare}
                alt="bubbl"
                className={`${styles["template-img-div"]}`}
                onClick={(id) => setActiveTemplateIdVal(id)}
              />
            </div>
          )}
          {userSubscriptionType !== 1 && (
            <div
              className={
                activeTemplateId === 8
                  ? `${styles["template-imgfirst-div-active"]}`
                  : `${styles["template-imgfirst-div"]}`
              }
            >
              <Image
                id="8"
                src={Moonbeam}
                alt="bubbl"
                className={`${styles["template-img-div"]}`}
                onClick={(id) => setActiveTemplateIdVal(id)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Template;
