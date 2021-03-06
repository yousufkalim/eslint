import React, { useState, useEffect, useMemo } from "react";
import ArslanAshIMG from "../../assets/img/ArslanAshIMG.svg";
import Course2 from "../../assets/img/course2.png";
import { ReactComponent as Star1 } from "../../assets/icons/star2.svg";
import { Link } from "react-router-dom";
import CustomizedMenus from "./CustomizedMenus";
import { Store, UpdateStore } from "../../StoreContext";
import Box from "@mui/material/Box";
import { CircularProgress } from "@material-ui/core";

const CreatorResult = ({ input, creator }) => {
  const { searchCreator, searchLoader } = Store();
  const [_myCreators, set_MyRatingCreators] = useState([]);
  useMemo(() => {
    let myCreator = [];
    searchCreator.map((item) => {
      let _num = 0;
      let student = 0;
      item?.creator?.courses?.map((_course) => {
        _num += parseInt(_course.rating);
        student += parseInt(
          _course?.student?.length ? _course?.student?.length : 0
        );
      });
      _num = _num > 0 ? _num / item?.creator?.courses?.length : 0;
      myCreator.push({ ...item, _avgRating: _num ?? 0, _avgStudent: student });
    });
    set_MyRatingCreators(myCreator);
    // searchCreator?.filter((courses) => (count += courses?.student?.length));
    // return ;
  }, [searchCreator]);

  return (
    <>
      <div className="followList" style={{ position: "relative" }}>
        <div className="followCenerDiv">
          {/* div col 1 */}
          <div className="followCol1">
            <div className="followerNames">
              {/* <h3 className="followH3">{input}</h3> */}
              <p className="follow-P">{_myCreators?.length} result Found</p>
            </div>
          </div>
          {/* div col 2 */}
          <div className="followCol2">
            <div className="following-div">
              {searchLoader ? (
                <CircularProgress
                  size={70}
                  thickness={3.5}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    color: "white",
                  }}
                />
              ) : (
                _myCreators?.map((item, i) => (
                  <Link to="#" className="following-link" course={item}>
                    <a className="followingAnker" key={i}>
                      <div className="following-card">
                        <div className="followingImgDiv">
                          <img
                            src={ArslanAshIMG}
                            className="followingIMG"
                            alt="img"
                          />
                        </div>
                        <div className="following-container">
                          <p className="followingh4">{item.username}</p>

                          <p className="following_P">
                            {item?.course_name
                              ? item.course_name
                              : "fighting game player of Tekken"}
                          </p>
                          <p className="followingP2">
                            {item?.creator?.user_id?.username}
                          </p>
                          <p className="followingP3">
                            {item._avgRating ?? 0} &nbsp;
                            {[1, 2, 3, 4, 5].map((item) => (
                              <Star1
                                className="wishCardStar"
                                style={{
                                  key: { item },
                                }}
                              />
                            ))}
                            <br />
                            {/* todo avg  */}
                            {`${item._avgStudent} Students` ?? 0}
                          </p>
                        </div>
                        {/* <div className="followingButtonDiv">
                        <button className="followingBtn">Follow</button>
                      </div> */}
                      </div>
                    </a>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatorResult;
