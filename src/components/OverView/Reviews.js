import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import avatar from "../../assets/img/avatar.png";
import { ReactComponent as Star1 } from "../../assets/icons/star2.svg";
import ReviewStarList from "./ReviewStarList";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#17192D",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: (theme.palette.mode =
      "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(50.06deg, #662F88 50.05%, #20BF55 131.69%);"),
  },
}));

const Reviews = (props) => {
  const { singlCourse, rating } = props;
  const [OneStar, setOneStar] = useState(0);
  const [twoStar, setTwoStar] = useState(0);
  const [threeStar, setThreeStar] = useState(0);
  const [fourStar, setFourStar] = useState(0);
  const [fiveStar, setFiveStar] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    calculateStarRating();
  }, []);
  const calculateStarRating = async () => {
    var total = 0;
    var one = 0;
    var two = 0;
    var three = 0;
    var four = 0;
    var five = 0;
    await rating?.map((Rate) => {
      let r = Rate.rating;
      total = total + r;
      setTotalCount(total);
      switch (r) {
        case 1:
          one += r;
          break;
        case 2:
          two += r;
          break;
        case 3:
          three += r;
          break;
        case 4:
          four += r;
          break;
        case 5:
          five += r;
          break;
        default:
        // code block
      }
      setOneStar(one);
      setTwoStar(two);
      setThreeStar(three);
      setFourStar(four);
      setFiveStar(five);
    });
  };
  const Percentage = (OneStar, totalCount) => {
    let percentage = ((OneStar / totalCount) * 100).toFixed(0);
    return percentage;
  };
  return (
    <div>
      <div className="overView_description">
        <div className="overView-descripiton-centerDiv">
          <div className="reviews">
            {/* 1Div */}
            <div className="studentFeedBack">
              <p className="student-feedback-h3">Student feedback</p>
              <div className="courseRating">
                <h1 className="courseRatingH1">
                  {singlCourse?.rating ? singlCourse.rating : "4.8"}
                </h1>
                <div className="courseRating-images">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star1
                      className="starID"
                      style={{
                        width: "15px",
                        height: "15px",
                        top: "3px",
                      }}
                    />
                  ))}
                </div>
                <p className="courseRatingP">Course Rating</p>
              </div>
            </div>
            <div className="reviews-lines">
              <Box sx={{ flexGrow: 1 }}>
                <br />
                <BorderLinearProgress
                  variant="determinate"
                  value={
                    (OneStar / totalCount) * 100 > 0
                      ? (OneStar / totalCount) * 100
                      : 0
                  }
                />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <br />
                <BorderLinearProgress
                  variant="determinate"
                  value={
                    (twoStar / totalCount) * 100 > 0
                      ? (twoStar / totalCount) * 100
                      : 0
                  }
                />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <br />
                <BorderLinearProgress
                  variant="determinate"
                  value={
                    (threeStar / totalCount) * 100 > 0
                      ? (threeStar / totalCount) * 100
                      : 0
                  }
                />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <br />
                <BorderLinearProgress
                  variant="determinate"
                  value={
                    (fourStar / totalCount) * 100 > 0
                      ? (fourStar / totalCount) * 100
                      : 0
                  }
                />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <br />
                <BorderLinearProgress
                  variant="determinate"
                  value={
                    (fiveStar / totalCount) * 100 > 0
                      ? (fiveStar / totalCount) * 100
                      : 0
                  }
                />
              </Box>
            </div>
            <div className="reviews-all-star-image">
              <div className="reviewsStarIcon">
                {/* calculate persentage and fix it upto 2 figure after decimal */}
                {/* {(OneStar / totalCount) * 100 + "%"} */}
                <ReviewStarList text={`${Percentage(OneStar, totalCount)}%`} />
                <ReviewStarList text={`${Percentage(twoStar, totalCount)}%`} />
                <ReviewStarList
                  text={`${Percentage(threeStar, totalCount)}%`}
                />
                <ReviewStarList text={`${Percentage(fourStar, totalCount)}%`} />
                <ReviewStarList text={`${Percentage(fiveStar, totalCount)}%`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
