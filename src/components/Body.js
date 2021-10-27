// Init
import React, { useState, useEffect } from "react";
import Bodyimg from "../assets/img/body.png";
import BodyBlurimg from "../assets/img/bodyblur.png";
import TopCourses from "./TopCourses";
import LatestCourses from "./LatestCourses";
import TopRatedContent from "./TopRatedContent";
import Request from "./Request";
import RankingList from "./RankingList";
import Blog from "./Blog";

export default function Body() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="Bodycontainer">
        <img src={Bodyimg} className="bodyImage" />
        <img src={BodyBlurimg} className="blurImg" />
        <div className="textonImg">
          <h1 className="textimgH1">
            We help you becoming
            <br /> a pro player
          </h1>
          <p className="textonImgP">For players who want more</p>
          <button className="textonImgbutton">Sign Up For Free</button>
        </div>
        <TopCourses />
        <LatestCourses />
        <TopRatedContent />
        <Request />
        <RankingList />
        <Blog />
      </div>
    </>
  );
}
