import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import landingpartnerarrowlogo from "../../assets/img/landingpartnerarrowlogo.png";
import landingpartnericonone from "../../assets/img/landingpartnericonone.png";
import landingpartnericontwo from "../../assets/img/communityImgtwoo.png";
import landingpartnericonthree from "../../assets/img/landingpartnericonthree.png";
import landingpartnericonfour from "../../assets/img/landingpartnericonfour.png";
import landingpartnericonfive from "../../assets/img/landingpartnericonfive.png";
import landingpartnericonsix from "../../assets/img/landingpartnericonsix.png";
import ButtonBecomeAPartner from "./LandingPartnerButton";
import { useTranslation, Trans } from "react-i18next";

const LandingPartnerWays = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  return (
    <>
      <Box className="box-user">
        <Box
          sx={{
            padding: "20px 0 20px 0",
          }}
        >
          <Typography align="center" variant="h5">
            {t("Many ways to become a partner")}
          </Typography>
          <div className="offerdashline"> </div>
        </Box>
      </Box>
      <Grid className="community" container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className="community-block">
            <img src={landingpartnericonone} />
            <h5 className="community-content-header">{t("Integration")}</h5>
            <span className="community-content-pargraph">
              {t(
                "Integrate our catalog of partner offers available to subscribers"
              )}
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="community-block">
            <img src={landingpartnericontwo} />
            <h5 className="community-content-header">
              {t("Co- Marketing Compaigns")}
            </h5>
            <span className="community-content-pargraph">
              {t(
                "Become an advertiser by placing advertisements in the content"
              )}
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="community-block community-block-border">
            <img src={landingpartnericonthree} />
            <h5 className="community-content-header">{t("Live Events")}</h5>
            <span className="community-content-pargraph">
              {t("Make your future game known to our audience")}
            </span>
          </div>
        </Grid>
        <Grid sx={{ textAlign: "center" }} item xs={12} md={4}>
          <img
            className="landing-partner-arrow"
            src={landingpartnerarrowlogo}
          />
        </Grid>
        <Grid sx={{ textAlign: "center" }} item xs={12} md={4}>
          <img
            className="landing-partner-arrow"
            src={landingpartnerarrowlogo}
          />
        </Grid>
        <Grid sx={{ textAlign: "center" }} item xs={12} md={4}>
          <img
            className="landing-partner-arrow"
            src={landingpartnerarrowlogo}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="community-block">
            <img src={landingpartnericonfour} />
            <h5 className="community-content-header">
              {t("Enjoy Gamers Hearing")}
            </h5>
            <span className="community-content-pargraph">
              {t("Enjoy a gamer’s hearing and communicate with them")}
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="community-block">
            <img src={landingpartnericonfive} />
            <h5 className="community-content-header">
              {t("Acquire New Status")}
            </h5>
            <span className="community-content-pargraph">
              {t("Acquire the status of an active player in the gaming market")}
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="community-block community-block-border">
            <img src={landingpartnericonsix} />
            <h5 className="community-content-header">{t("Test your games")}</h5>
            <span className="community-content-pargraph">
              {t("be able to test your game with a community of experts")}
            </span>
          </div>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", width: 1 }}>
          <ButtonBecomeAPartner />
        </Box>
      </Grid>
    </>
  );
};

export default LandingPartnerWays;
