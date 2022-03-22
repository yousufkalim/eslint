import React, { useState } from "react";
import GameVideo from "../../assets/GameVideo.mp4";
// import VideoPlayIcon from "../../assets/icons/VideoPlayIcon.png";

const CompleteCourse = ({ Videos, singlCourse }) => {
  const [playVideo, setPlayVideo] = useState(Videos);
  const [videos, setVideos] = useState(
    singlCourse?.videos ? singlCourse.videos : 0
  );
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
            <video
              className="completeCourse-Video"
              src={
                playVideo?.src_url
                  ? playVideo.src_url
                  : "https://pass-to-trip.s3.eu-west-3.amazonaws.com/1647410128211"
              }
              controls
              autoplay
            ></video>
          </div>
          <div className="completeCourse-colm2">
            <h3 className="completeCourseH3">Course Content</h3>
            <div className="completeCourseScroll">
              {videos?.map((clip, index) => {
                return (
                  <LiDAta
                    clip={clip}
                    key={index}
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

const LiDAta = ({ clip, videoCount, setPlayVideo }) => {
  // const secondToTime = (second) => {
  //   // Hours, minutes and seconds
  //   var hrs = ~~(second / 3600);
  //   var mins = ~~((second % 3600) / 60);
  //   var secs = ~~second % 60;

  const handleClick = (item) => {
    setVideo1(item.videoLink);
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
        <p className="playVideoP">
          {/* `${index}/${videoCount}` |{" "} */}
          {/* {clip?.duration ? secondToTime(clip.duration) : "1:00 min"} */}
        </p>
      </div>
      <i className="PlayVideo-DownArrow fas fa-angle-down"></i>
    </li>
  );
};
