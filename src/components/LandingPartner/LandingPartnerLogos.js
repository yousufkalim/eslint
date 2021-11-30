import React from 'react'
import Grid from '@mui/material/Grid';
import Ola from "../../assets/icons/ola.png";
import Walmart from "../../assets/icons/Walmart.png";
import Oye from "../../assets/icons/oye.png";
import Amazon from "../../assets/icons/amazone.png";
import Fedex from "../../assets/icons/Fedex.png";
import Google from "../../assets/icons/Google.png";
const LandingPartnerLogos = () => {
  return (
    <>
      <div className="landing-partner-logo-container">
        <Grid container spacing={6}>
          <Grid md={2} sm={6} xs={6}>
            <img className="landing-creator-logo-spacing landing-partner-fedex-img" src={Fedex} />
          </Grid>
          <Grid md={2} sm={6} xs={6}>
            <img className="landing-creator-logo-spacing" src={Google} />
          </Grid>
          <Grid md={2} sm={6} xs={6}>
            <img className="landing-creator-logo-spacing" src={Ola} />
          </Grid>
          <Grid md={2} sm={6} xs={6}>
            <img className="landing-creator-logo-spacing" src={Walmart} />
          </Grid>
          <Grid md={2} sm={6} xs={6}>
            <img className="landing-creator-logo-spacing" src={Oye} />
          </Grid>
          <Grid md={2} sm={6} xs={6}>
            <img className="landing-creator-logo-spacing" src={Amazon} />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default LandingPartnerLogos
