// Init
import React, { useState, useEffect } from "react";
import Bodyimg from "../assets/img/Bodyimg.svg";
import BodyBlurimg from "../assets/img/bodyblur.png";
import TopCourses from "./TopCourses";
import LatestCourses from "./LatestCourses";
import TopRatedContent from "./TopRatedContent";
import Request from "./Request";
import RankingList from "./RankingList";
import Blog from "./Blog";
import ContentRequest from "../components/PopupForms/ContentRequest";
import { Store, UpdateStore } from "../StoreContext";
import api from "../api";
export default function Body({ setOpenSignup }) {
  const [loading, setLoading] = useState(false);
  const [openContentRequest, setOpenContentRequest] = useState(false);
  const updateStore = UpdateStore();
  const { courses, user } = Store();

  let getTopCourses = async () => {
    let res = await api("get", "/courses");
    if (res) {
      updateStore({ courses: res?.data });
    }
    setLoading(true);
  };
  useEffect(() => {
    // get top courses
    getTopCourses();
  }, []);
  return (
    <>
      <ContentRequest
        openContentRequest={openContentRequest}
        setOpenContentRequest={setOpenContentRequest}
      />
      {!loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="Bodycontainer">
          <img
            src={Bodyimg}
            alt="img"
            className="bodyImage"
            style={{ position: "relative" }}
          />

          <div className="textonImg">
            <h1 className="textimgH1">
              We help you becoming
              <br /> a pro player
            </h1>
            <p className="textonImgP">For players who want more</p>
            {user ? (
              <button
                className="textonImgbutton"
                // onClick={() => setOpenSignup(true)}
              >
                Explore Courses
              </button>
            ) : (
              <button
                className="textonImgbutton"
                onClick={() => setOpenSignup(true)}
              >
                Sign Up For Free
              </button>
            )}
          </div>
          <TopCourses courses={courses} />
          <LatestCourses courses={courses} user={user} />
          <TopRatedContent />
          <Request
            openContentRequest={openContentRequest}
            setOpenContentRequest={setOpenContentRequest}
            user={user}
          />
          {/* x */}
          {/* <RankingList /> */}
          {/* <Blog /> */}
        </div>
      )}
    </>
  );
}
