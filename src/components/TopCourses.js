// Init
import React from "react";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";
import TopCourseImg from "../assets/img/topcourseimg.png";
import { ReactComponent as Star1 } from "../assets/icons/star2.svg";
import avatar from "../assets/img/avatar.png";
import StarIcon from "@material-ui/icons/Star";

export default function TopCourses() {
  var items = [
    {
      name: "PUBG gameplay full course",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Taken gameplay full course2",
      description: "Hello World!",
    },
    {
      name: "Speed3",
      description: "Hello World!",
    },
  ];
  return (
    <div className="topCoursescontainer">
      <p className="topcourseheading">Top Courses</p>
      <Carousel
        autoPlay={false}
        animation={"fade"}
        activeIndicatorIconButtonProps={{ className: "activeIndicator" }}
        className="topcoursecarousal"
      >
        {items.map((item, i) => (
          <TopCoursesComponent key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function TopCoursesComponent({ item }) {
  return (
    <Grid
      container
      spacing={2}
      className="topCourseGrid"
      style={{ width: "auto" }}
    >
      <Grid item xs={12} sm={5} className="">
        <img src={TopCourseImg} className="topcourseimg" alt="img" />
      </Grid>
      <Grid item xs={12} sm={7} className="topcourseTextGrid">
        <Grid container spacing={2}>
          <Grid item xs={8} md={8}>
            <h3 className="h3heading">{item?.name}</h3>
            <p className="topcourseText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              semper mi feugiat quis tellus arcu. Rutrum non vitae id urna nunc,
              egestas. Tempus aliquam, at fusce facilisi gravida lacus faucibus
              felis, aliquet. Condimentum aenean nulla morbi euismod non vel
              arcu sapien magna.
            </p>
          </Grid>
          <Grid item xs={4} md={4}>
            <h3 style={{ textAlign: "right" }}>$19.99</h3>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="topcourseuserGrid">
          <Grid item xs={6} md={6}>
            <div className="userprofilediv">
              <img src={avatar} className="avatar" alt="img" />
              <div className="div2">
                <p className="p1">Emma Johns</p>
                <p className="p2">PUBG player</p>
                <p className="p2">
                  5.0 &nbsp;
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star1
                      className="starID"
                      style={{
                        width: "15px",
                        height: "15px",
                        // color: "red",
                        top: "3px",
                      }}
                    />
                  ))}
                  &nbsp; (382,420)
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} md={6} className="topcourseuserRightGrid">
            <div style={{ textAlign: "right" }}>
              <span className="marginRight">Advanced Level</span>
              <span className="marginRight">|</span>
              <span className="marginRight">50 min</span>
              <span className="marginRight">|</span>
              <span className="marginRight">244 Student</span>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
