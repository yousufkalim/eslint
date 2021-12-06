import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Carousel from "react-material-ui-carousel";
import carouselimg from "../../assets/img/carouselimg.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}
const scrollToTop = () => {
  window.scrollTo({
    top: 1,
    behavior: "smooth",
  });
};

const UserLandingPageAdvantages = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Box className="box-user">
        <Box className="userlandingpageheaderspacing">
          <Typography align="center" variant="h5">
            {t("Win your games")}
          </Typography>
          <div className="offerdashline"> </div>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <List>
              {generate(
                <ListItem>
                  <ListItemText
                    className="list-text"
                    primary={
                      <Typography className="listText">
                        {" "}
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                        ipsum lorem ipsum{" "}
                      </Typography>
                    }
                  />
                </ListItem>
              )}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Carousel
              autoPlay={false}
              activeIndicatorIconButtonProps={{ className: "activeIndicator" }}
              animation={"fade"}
            >
              <img className="carousel-img" src={carouselimg} />
              <img className="carousel-img" src={carouselimg} />
              <img className="carousel-img" src={carouselimg} />
              <img className="carousel-img" src={carouselimg} />
            </Carousel>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <button className="btn-advantages" onClick={() => scrollToTop()}>
            {t("Early access to courses")}
          </button>
          <Link
            to="/contentcreator"
            style={{ color: "white", textDecoration: "none" }}
          >
            {" "}
            <button className="btn-advantages">
              {t("Become content creator")}
            </button>
          </Link>
        </Grid>
      </Box>
    </>
  );
};

export default UserLandingPageAdvantages;
