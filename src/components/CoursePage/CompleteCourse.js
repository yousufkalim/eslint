import React, { useState, useEffect } from "react";
// import GameVideo from "../../assets/GameVideo.mp4";
import "./CoursePage.css";
// import "../../";
// import VideoPlayIcon from "../../assets/icons/VideoPlayIcon.png";

import ReactPlayer from "react-player";

const CompleteCourse = ({ singlCourse }) => {
  const [videos, setVideos] = useState(
    singlCourse?.videos ? singlCourse.videos : 0
  );
  // const [id, setId] = useSate();
  const [playVideo, setPlayVideo] = useState(singlCourse?.videos[0]);
  const [videoCount, setVideoCount] = useState(
    singlCourse?.videos ? singlCourse.videos.length : 0
  );

  return (
    <>
      <div className="completeCourse">
        <div className="completeCourse-center-div">
          <div className="completeCourse-colm1">
            <h2 className="completeCourseH2">
              {playVideo?.title ? playVideo.title : "CS Go"} Ep 1 Complete
              Course
            </h2>
            {/* <ReactPlayer src={playVideo?.src_url} /> */}
            <ReactPlayer
              url={playVideo?.src_url}
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload"
                  }
                }
              }}
              controls
              autoplay
              className="completeCourse-Video"
              width="100%"
              // height="100%"
            />
            {/* <video
              className="completeCourse-Video"
              src={playVideo?.src_url}
              controls
              autoplay
            ></video> */}
          </div>
          <div className="completeCourse-colm2">
            <h3 className="completeCourseH3">Course Content </h3>
            <div className="completeCourseScroll">
              {videos?.map((clip, index) => {
                return (
                  <LiDAta
                    clip={clip}
                    value={index + 1}
                    videoCount={videoCount}
                    setPlayVideo={setPlayVideo}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="Pre-next-btn">
          <button className="preBTN">Previous</button>
          <button className="nextBTN">Next</button>
          {/* <hr className="pre_next_line" /> */}
        </div>
      </div>
    </>
  );
};

export default CompleteCourse;

const LiDAta = ({ clip, videoCount, setPlayVideo, value }) => {
  const secondToTime = (second) => {
    // Hours, minutes and seconds
    var hrs = ~~(second / 3600);
    var mins = ~~((second % 3600) / 60);
    var secs = ~~second % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  };

  return (
    <li className="completeCourse-videoList" onClick={() => setPlayVideo(clip)}>
      {/* onClick={() => setPlayVideo(clip)} */}
      <video
        // poster={VideoPlayIcon}
        className="completeCourse-playVideo"
        src={
          clip?.src_url
            ? clip.src_url
            : "https://pass-to-trip.s3.eu-west-3.amazonaws.com/1647410128211"
        }
      ></video>
      <div className="playVideoHeading">
        <h3 className="playVideoH3">
          {clip?.title ? clip.title : "CS Go"} Ep 1 Complete Course
        </h3>
        <span className="playVideonumber">{value + "/" + videoCount} </span>
        <span>{"|"}</span>
        <span className="playVideomint" style={{ margin: "10px" }}>
          {clip?.duration ? secondToTime(clip.duration) + " min" : "1:00 min"}
        </span>
      </div>
    </li>
  );
};
