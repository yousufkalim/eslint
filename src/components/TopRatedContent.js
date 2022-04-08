// Init
import React from "react";
import Game1 from "../assets/img/game1.png";
import Game2 from "../assets/img/game2.png";
import Game3 from "../assets/img/game3.png";
import Game4 from "../assets/img/game4.png";
import Game5 from "../assets/img/game5.png";
import Carousel from "react-multi-carousel";
import LatestCourseGameIcon from "../assets/icons/LatestCourseGameIcon.svg";
import LatestCourseLavelIcon from "../assets/icons/LatestCourseLavelIcon.svg";
import LatestCourseTimingIcon from "../assets/icons/LatestCourseTimingIcon.svg";
import LatestCourseProPlayerIcon from "../assets/icons/LatestCourseProPlayerIcon.svg";
import LatestCourseStudentsIcon from "../assets/icons/LatestCourseStudentsIcon.svg";
import LatestCourseRatingIcon from "../assets/icons/LatestCourseRatingIcon.svg";
import "react-multi-carousel/lib/styles.css";

export default function TopRatedContent() {
  var items = [
    {
      title: "fighting game player of Tekken",
      img: Game1,
      name: "Arslan Ash",
      level: "Pro",
      students: "500000+ Students",
      rating: "rating",
      price: "19.99",
      test: "1",
    },
    {
      title: "Undefeated PUBG player",
      img: Game2,
      name: "Jennifer",
      level: "Pro",
      students: "500000+ Students",
      rating: "rating",
      price: "19.99",
      test: "2",
    },
    {
      title: "Mincraft Expert",
      img: Game3,
      name: "Pewdiepie",
      level: "Pro",
      students: "500000+ Students",
      rating: "rating",
      price: "19.99",
      test: "3",
    },
    {
      title: "Pro player of CS:GO",
      img: Game4,
      name: "Dupreeh",
      level: "Pro",
      students: "500000+ Students",
      rating: "rating",
      price: "19.99",
      test: "4",
    },
    {
      title: "GTA 5 Expert",
      img: Game5,
      name: "Emma Johns",
      level: "Pro",
      students: "500000+ Students",
      rating: "rating",
      price: "19.99",
      test: "5",
    },
    {
      title: "6Minicraft Full Course",
      img: Game3,
      name: "6James Wiik",
      level: "Pro",
      students: "500000+ Students",
      rating: "rating",
      price: "19.99",
      test: "6",
    },
    {
      title: "7Minicraft Full Course",
      img: Game2,
      name: "7James Wiik",
      level: "Pro",
      students: "500000+ Students",
      rating: "rating",
      price: "19.99",
      test: "7",
    },
    {
      title: "8Minicraft Full Course",
      img: Game1,
      name: "8James Wiik",
      level: "Pro",
      students: "500000+ Students",
      rating: "rating",
      price: "19.99",
      test: "8",
    },
    {
      title: "9Minicraft Full Course",
      img: Game4,
      name: "9James Wiik",
      level: "Pro",
      students: "500000+ Students",
      rating: "rating",
      price: "19.99",
      test: "3",
    },
    {
      title: "10Minicraft Full Course",
      img: Game5,
      name: "10James",
      level: "Pro",
      students: "500000+ Students",
      rating: "rating",
      price: "19.99",
      test: "3",
    },
    {
      title: "11Minicraft Full Course",
      img: Game3,
      name: "11James",
      level: "Pro",
      students: "500000+ Students",
      rating: "rating",
      price: "19.99",
      test: "3",
    },
    {
      title: "12Minicraft Full Course",
      img: Game2,
      name: "12James",
      level: "Pro",
      students: "500000+ Students",
      rating: "rating",
      price: "19.99",
      test: "3",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="topRatedContentcontainer">
      <div className="topRatedContentHeadingDiv">
        <p className="topRatedheading">Top Rated Content Creators</p>
        <p className="topRatedheading">View All</p>
      </div>
      <div className="TopRatedcarousalOuterDiv">
        <Carousel
          responsive={responsive}
          infinite={true}
          className="latestcourseCarousel"
        >
          {items.map((item, i) => (
            <div className="topRatedcardGrid">
              <img src={item.img} className="topRatedcourseimg" alt="img" />
              <h4 className="latestCourse-h4">
                <img
                  src={LatestCourseGameIcon}
                  alt=""
                  className="LatestCourse-IMG"
                />
                &nbsp;
                {item.name}
              </h4>
              {/* <p className="latestcoursep1">{item.title}</p>
              <p className="latestcoursep1">
                {" "}
                Level :<span style={{ color: "red" }}>{item.level}</span>
              </p>
              <p className="topRatedContentcourseh6">{item.students}</p> */}
              {/* /* -------------------------------- new card --------------------------------  */}
              <div className="latestCourseMain-Div">
                {/* /* ------------------------------- copy colmn -------------------------------  */}
                <div className="latestCouse-colmn">
                  <div className="latestCourse-colmn-centerDiv">
                    <img
                      src={LatestCourseProPlayerIcon}
                      alt=""
                      className="LatestCourse-IMG"
                    />
                    <p className="latestCourse-p">Pro Player of...</p>
                  </div>
                  <div className="latestCourse-colmn-centerDiv">
                    <img
                      src={LatestCourseStudentsIcon}
                      alt=""
                      className="LatestCourse-IMG"
                    />
                    <p className="latestCourse-p">500000+ Students</p>
                  </div>
                </div>

                {/* ------------------------------- copy colmn -------------------------------  */}
                <div className="latestCouse-colmn">
                  <div className="latestCourse-colmn-centerDiv">
                    <img
                      src={LatestCourseLavelIcon}
                      alt=""
                      className="LatestCourse-IMG"
                    />
                    <p className="latestCourse-p">All Levels</p>
                  </div>
                  <div className="latestCourse-colmn-centerDiv">
                    <img
                      src={LatestCourseRatingIcon}
                      alt=""
                      className="LatestCourse-IMG"
                    />
                    <p className="latestCourse-p">5.0 Rating</p>
                  </div>
                </div>
                {/* ------------------------------- copy colmn -------------------------------  */}
              </div>
              {/* /* -------------------------------- new card --------------------------------  */}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
