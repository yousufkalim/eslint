import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MyProfileData from "./MyProfileData";
import MyPrifileSetting from "./MyPrifileSetting";
import { Store, UpdateStore } from "../../StoreContext";
import { useHistory } from "react-router-dom";
import api from "../../api/index";
import SettingPersonalInformation from "../SettingCreatorProfile/SettingPersonalInformation";

const MyProfile = (props) => {
  const { user } = props;

  const updateStore = UpdateStore();
  const history = useHistory();

  const [profileBtn, setProfileBtn] = useState(1);
  const [a, seta] = useState(false);
  let btnTags = [
    { name: "Action" },
    { name: "Adventure" },
    { name: "Multiplayer game" },
    { name: "Car Racing" },
    { name: "FPS" },
    { name: "Simulation" },
    { name: "Sports" },
    { name: "Puzzle" },
    { name: "RPG" },
    { name: "RTS" },
  ];
  let gametypebtn = [
    { name: "Action" },
    { name: "Adventure" },
    { name: "Multiplayer game" },
    { name: "Car Racing" },
    { name: "FPS" },
    { name: "Simulation" },
    { name: "Sports" },
    { name: "Puzzle" },
    { name: "RPG" },
    { name: "RTS" },
    { name: "Car Racing" },
  ];
  let gametypebtn2 = [
    { name: "Retro Consoles" },
    { name: "PS1/2/3/4/5" },
    { name: "Xbox/360/One/X" },
    { name: "Mobile Games" },
    { name: "Portable Consoles" },
    { name: "PC" },
  ];

  const handeClick = (i) => {
    setProfileBtn(i);
  };
  const handleLogout = async () => {
    let res = await api("post", "/users/logout/all");
    if (res) {
      updateStore({ user: null, creator: null });
      localStorage.removeItem("token");
      history.push("/home");
    }
  };

  return (
    <>
      <div className="myProfile">
        <div className="myProfile-CenterDiv">
          <div
            className={
              user?.role == "User"
                ? "myPofileContents myProfileName"
                : "myProfileC"
            }
          >
            <NavLink
              exact
              activeClassName="active_profile"
              to="#"
              className={profileBtn == 1 ? "myProfileNames" : null}
              onClick={() => handeClick(2)}
            >
              {user?.role == "Creator" ? "" : "My Profile"}
            </NavLink>
          </div>

          {user?.role == "User" ? (
            <MyPrifileSetting />
          ) : (
            <SettingPersonalInformation />
          )}
          <button
            className="formbtn2"
            type="submit"
            onClick={handleLogout}
            style={{
              background: "linear-gradient(326deg, #662F88 8%, #20BF55 132%)",
              color: "white",
              fontWeight: "600",
              borderRadius: " 4px",
              cursor: "pointer",
              border: "none",
              width: " 133.93px",
              height: "44px",
              fontSize: "14px",
              display: "bl8ck",
              marginLeft: "4px",
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
