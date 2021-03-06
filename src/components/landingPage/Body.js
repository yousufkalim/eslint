// Init
import React, { useState } from "react";
import SubscriptionPopup from "../PopupForms/SubscriptionPopup";
import AboutLandingPageImg from "../../assets/img/AboutLandingPageImg.svg";
import StandbyBg from "../../assets/img/StandbyBg.svg";
import { useTranslation, Trans } from "react-i18next";
import LandingPopup from "../PopupForms/LandingPopup";

export default function Body() {
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0 && window.scrollY < 1) {
        var element = document.getElementsByClassName("landingPage_heading");
        if (element && element.length > 0) {
          for (let index = 0; index < element.length; index++) {
            element[index].classList.add("myStyles");
          }
        }
      }
    });
  }, [window.scrollY]);

  return (
    <>
      <LandingPopup open={opens} setOpen={setOpens} />
      {open && <SubscriptionPopup open={open} setOpen={setOpen} />}
      <div className="landingpagecontainer">
        <div className="landingpageimgcontainer">
          <img src={AboutLandingPageImg} className="landingpageLeftimg" />
          <img src={StandbyBg} className="landingpageLeftimg2" />
        </div>
        <div
          className={`${
            language == "fr"
              ? "frlandingpagetextonImg "
              : "landingpagetextonImg"
          }`}
        >
          <div className="landingPage_heading ">
            <h1 className="landingpagetextimgH1 myStyles ">
              {t("Bienvenue dans le eLearning 3.0")}
              <br className="landingBr" /> {t("dÉdiÉ au gaming")}
            </h1>
            <p className="myStylep ">
              {t("Inscrivez-vous aujourd'hui pour")}
              &nbsp;
              {t("bénéficier d'avantages uniques")}
            </p>
          </div>
          {/* <div className="landingbuttondiv">
            <button
              className="landingpagetextonImgbutton"
              onClick={() => setOpen(true)}
            >
              {t("Early access to courses")}
              {t("Inscrivez-vous")}
            </button>

            <Link
              to="#"
              onClick={() => setOpen(true)}
              style={{ color: "white", textDecoration: "none" }}
            >
              <button className="landingpagetextonImgbutton">
                {t("Devenez un createur de contenu")}
              </button>
            </Link>
          </div> */}
        </div>
        <p className="myStylep2 ">
          {t("Inscrivez-vous aujourd'hui pour")}
          &nbsp;
          {t("bénéficier d'avantages uniques")}
        </p>
      </div>
    </>
  );
}
