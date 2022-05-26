import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DashboardLeftSideBar2 from "./DashboardLeftSideBar2";
import DashboardRightSideBar2 from "./DashboardRightSideBar2";
import settings from "../../assets/img/settings.png";
import dollar from "../../assets/img/dollar.png";
import performance from "../../assets/img/performance.png";
import youtube from "../../assets/img/youtube.png";
import ProgressionIcon from "../../assets/img/ProgressionIcon.svg";
import { Store, UpdateStore } from "../../StoreContext";
import { useHistory, useLocation } from "react-router-dom";

import api from "../../api";
const Dashboard2 = () => {
  const updateStore = UpdateStore();
  const [activeButton, setActiveButton] = useState("Course");
  const location = useLocation();
  const [defaultCompState, setDefaultCompState] = useState("Course");
  const [defaultCompStatedrop, setDefaultCompStatedrop] = useState("");
  const { user } = Store();
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    if (user) {
      let res = await api("get", `/users/${user?._id}`);
      if (res) {
        updateStore({ user: res.data });
      }
    }
  };

  const items = [
    {
      name: "Courses",
      img: youtube,
      drop: ["Started Courses", "Enrolled Courses"],
    },
    {
      name: "Wishlist",
      img: performance,
    },
    { name: "My Wallet", img: dollar },
    {
      name: "Progression Roadmap",
      img: ProgressionIcon,
    },
    { name: "Setting", img: settings },
  ];

  const onSideBtnClick = (e) => {
    const course = e?.target?.textContent;
    if (!course) {
      setDefaultCompState("Course");
    } else {
      setDefaultCompState(course);
    }
    setActiveButton(course);
  };
  return (
    <>
      <Box
        className="dashboard-container"
        sx={{ flexGrow: 1, display: "flex" }}
      >
        {/* dashboard SideBar */}
        <Box className="dashboard-sidebar">
          <Grid>
            <DashboardLeftSideBar2
              items={items}
              activeButton={activeButton}
              trigerOnClickEmpSideBtn={onSideBtnClick}
              setDefaultCompStatedrop={setDefaultCompState}
            />
          </Grid>
        </Box>
        {/* dashboardBody */}
        <DashboardRightSideBar2
          defaultCompState={defaultCompState}
          setDefaultCompState={setDefaultCompState}
          defaultCompStatedrop={defaultCompStatedrop}
        />
      </Box>
    </>
  );
};

export default Dashboard2;
