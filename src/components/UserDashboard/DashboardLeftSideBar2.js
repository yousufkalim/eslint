import zIndex from "@mui/material/styles/zIndex";
import React, { useState } from "react";
import { Store, UpdateStore } from "../../StoreContext";

// import YouTubeIcon from "@mui/icons-material/YouTube";
const DashboardLeftSideBar2 = ({
  items,
  trigerOnClickEmpSideBtn,
  setDefaultCompStatedrop,
  defaultCompStatedrop,
}) => {
  const [flag, setFlag] = useState(false);
  const { contentDashboardButton } = Store();

  const updateStore = UpdateStore();
  const handelOpenCourseDropdown = () => {
    setFlag(!flag);
  };
  const handleSelectCourseType = (i) => {
    setDefaultCompStatedrop(i);
    updateStore({ contentDashboardButton: i });
  };

  return (
    <>
      {items.map((item, i) => {
        const className =
          contentDashboardButton === item.name ? "dashboard" : "";
        return (
          <>
            <div
              key={item.course}
              onClick={trigerOnClickEmpSideBtn}
              className={`sidebar-course-opt ${className}`}
              style={{ position: "relative" }}
            >
              <div className="img-text-container">
                <img src={item.img} />
                {item.name}
                {item?.drop && (
                  <div
                    style={{ color: "white" }}
                    onClick={() => handelOpenCourseDropdown()}
                  >
                    <i
                      // style={{ marginLeft: "auto" }}
                      class=" CourseDownArrow fa-solid fa-angle-down "
                    ></i>
                  </div>
                )}
              </div>
            </div>
            {/* {flag === item?.} */}
            <div>
              {item?.drop && flag && (
                <div>
                  {item.drop.map((i) => (
                    <div
                      className={`DashboardLeftSideBar2-dropdown ${
                        contentDashboardButton == i && "dashboard"
                      }`}
                      onClick={() => handleSelectCourseType(i)}
                    >
                      {i}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              {item?.drop2 && (
                <div>
                  {item.drop2.map((i) => (
                    <div
                      style={{
                        marginLeft: "30px",
                        opacity: "0.5",
                        cursor: "pointer",
                        position: "absolute",
                        marginTop: "-12px",
                        fontSize: "10px",
                      }}
                      // onClick={() => handleClick2(i)}
                    >
                      {i}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {item.name == "My Wallet" ||
            item.name == "Progression Roadmap" ||
            item.name == "Wishlist" ? (
              <>
                <button className="comming-soon">(Coming Soon)</button>
              </>
            ) : (
              ""
            )}
          </>
        );
      })}
    </>
  );
};

export default DashboardLeftSideBar2;
