import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import api from "../../api";
import Course1 from "../../assets/img/course1.png";
import { toast } from "react-toastify";
import { Store, UpdateStore } from "../../StoreContext";
import RegisterSuccessfully from "../PopupForms/RegisterSuccessfully";
// import { Select } from "antd";
// import "antd/dist/antd.css";
// const Option = Select.Option;

let gamelist = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" }
];
function Setting({ openProfile, setOpenProfile }) {
  const [values, setValues] = useState([]);
  const { user, learner } = Store();
  const updateStore = UpdateStore();
  const [openCongratulation, setCongratulation] = useState(false);
  const [favouritGame, setFavouritGame] = useState(
    user?.prefrence_games?.favourite_games
      ? user.prefrence_games.favourite_games
      : []
  );
  const [gameType, setGameType] = useState(user?.gameType ? user.gameType : []);
  const [plateForm, setPlateForm] = useState(
    user?.plateForm ? user.plateForm : []
  );
  const [gameMood, setGameMood] = useState(
    user?.gameMood ? user.gameMood : "Single"
  );
  const [learningRethem, setLearningRethem] = useState(
    user?.setLearningRethem ? user.setLearningRethem : ""
  );

  const [currentLevel, setCurrentLevel] = useState(
    user?.prefrence_games?.current_level
      ? user.prefrence_games.current_level
      : "initial"
  );
  const [target_level, setTargetLevel] = useState(
    user?.prefrence_games?.target_level
      ? user.prefrence_games.target_level
      : "initial"
  );
  useEffect(() => {
    setCurrentSate();
  }, [user]);
  const setCurrentSate = () => {
    setFavouritGame(
      user?.prefrence_games?.favourite_games
        ? user.prefrence_games.favourite_games
        : []
    );
    setGameType(user?.gameType ? user.gameType : []);
    setPlateForm(user?.plateForm ? user.plateForm : []);
    setGameMood(user?.gameMood ? user.gameMood : "Single");
    setLearningRethem(user?.setLearningRethem ? user.setLearningRethem : "");
    setCurrentLevel(
      user?.prefrence_games?.current_level
        ? user.prefrence_games.current_level
        : "initial"
    );
    setTargetLevel(
      user?.prefrence_games?.target_level
        ? user.prefrence_games.target_level
        : "initial"
    );
  };

  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setFavouritGame([...favouritGame, event.target.value]);
      event.target.value = "";
    }
  };
  const addTagsByapi = (event) => {
    if (event !== "") {
      setFavouritGame([...favouritGame, event]);
      event = "";
    }
  };
  const onChangeRadioBtn = (e) => {
    const value = e.target.value;
    setGameMood(e.target.value);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const removeTags = (index) => {
    setFavouritGame([
      ...favouritGame.filter((tag) => favouritGame.indexOf(tag) !== index)
    ]);
  };
  const ChangeLearningRhythm = (e) => {
    setLearningRethem(e.target.value);
  };

  const changeCurrentLevelHandler = (e) => {
    setCurrentLevel(e.target.value);
  };
  const changeTargetLevelHandler = (e) => {
    setTargetLevel(e.target.value);
  };

  const selectplateForm = (e) => {
    if (e.target.className === "activetypebtn") {
      setPlateForm((prev) => {
        return prev.filter((a) => a !== e.target.value);
      });
    } else {
      if (!plateForm) {
        setPlateForm(e.target.value);
      } else {
        const data = [...plateForm, e.target.value];
        setPlateForm(data);
      }
    }
  };
  const selectGameType = (e) => {
    if (e.target.className === "activetypebtn") {
      setGameType((prev) => {
        return prev.filter((a) => a !== e.target.value);
      });
    } else {
      if (!gameType) {
        setGameType(e.target.value);
      } else {
        const data = [...gameType, e.target.value];
        setGameType(data);
      }
    }
  };

  const submitProfile = async (e) => {
    const prefrence_games = {
      favourite_games: favouritGame,
      learningRethem: learningRethem,
      current_level: currentLevel,
      target_level: target_level
    };
    const formdata = {
      prefrence_games,
      gameType,
      plateForm,
      gameMood
    };
    if (
      prefrence_games === "" ||
      gameType === "" ||
      plateForm === "" ||
      gameMood === "" ||
      target_level === "" ||
      currentLevel === "" ||
      favouritGame === ""
    ) {
      return toast.error("Give your complete details!");
    } else {
      if (user?.role === "User" || learner) {
        let res = await api(
          "put",
          `/users/addProfileInfo/${user._id}`,
          formdata
        );
        if (res) {
          updateStore({ user: res.data });
          setCongratulation(true);
        }
      } else {
        let res = await api("post", `/creators/${user?._id}`, formdata);

        if (res) {
          updateStore({
            user: res?.data?.newUsers,
            creator: res?.data?.creator
          });
          setCongratulation(true);
        }
      }
    }
  };

  let gametypebtn = [
    "Action",
    "Adventure",
    "Metaverse",
    "Massively Multiplayer Games",
    "Car Racing",
    "FPS",
    "RTS",
    "RPG",
    "Turn by Turn Strategy",
    "Simulation",
    "Sports",
    "Trading card",
    "Puzzle",
    "Versus Fighting",
    "Trading card and Board games"
  ];
  const gamePlateform = [
    "PC",
    "Mobile Games",
    "PS1/2/3/4/5",
    "Xbox/360/One/X",
    "Retro Consoles",
    "Portable Consoles",
    "Tablet"
  ];
  const handleSelectedGames = (e) => {
    console.log("selected", e);
  };
  const onSearch = (e) => {
    console.log("onsearch", e);
  };

  return (
    <>
      <RegisterSuccessfully
        open={openCongratulation}
        setOpen={setCongratulation}
        text="Your Profile Edit Successfully !"
      />
      <div className="dashboardSetting">
        <div className="userProfile_conteiner2">
          <div className="tags-input">
            <div>
              <p className="tags-input-FGames">Favorite Games</p>
            </div>

            <div className="tags-input-ul tags-input2 favGameDiv">
              {/* <Select
                // className="form-control-alternative text-default"
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Select candidate's skill"
                defaultValue={[gamelist[0].value]}
                onChange={handleSelectedGames}
                onSearch={onSearch}
              >
                {gamelist.map((skill) => (
                  <Option key={skill.value}>{skill.label}</Option>
                ))}
              </Select> */}
              <ul className="tags-input-ul2">
                {favouritGame.map((tag, index) => (
                  <li key={index} className="userProfileLi">
                    <i
                      className="material-icons"
                      onClick={() => removeTags(index)}
                    >
                      <span className="userProfileLiSpan">{tag}</span>
                    </i>
                  </li>
                ))}

                <input
                  className="userProfile_inputTags"
                  type="text"
                  onKeyUp={(event) => addTags(event)}
                  placeholder="Add here..."
                />
              </ul>
            </div>
          </div>
          <div className="userButtonGroup">
            <p className="userButton-heading">Game Type</p>
            <div className="allButtons">
              <>
                {/* {gametypebtn.map((tag) => {
                return gameType?.includes(tag.name) ? (
                  <button
                    className="activetypebtn"
                    onClick={() => {
                      selectGameType(tag.name);
                    }}
                  >
                    {tag.name}
                  </button>
                ) : (
                  <button
                    className="userTagsAllButton"
                    onClick={() => {
                      selectGameType(tag.name);
                    }}
                  >
                    {tag.name}
                  </button>
                );
              })} */}
                {gametypebtn.map((tag) => {
                  return (
                    <button
                      className={
                        gameType?.includes(tag)
                          ? "activetypebtn"
                          : "userTagsAllButton"
                      }
                      value={tag}
                      onClick={selectGameType}
                    >
                      {tag}
                    </button>
                  );
                })}
              </>
            </div>
          </div>
          <div className="userButtonGroup">
            <p className="userButton-heading">Gaming Plateforms</p>
            <div className="allButtons2">
              {/* {gametypebtn2.map((tag, i) => {
              return plateForm?.includes(tag.name) ? (
                <button
                  key={i}
                  className="activetypebtn"
                  onClick={() => {
                    selectplateForm(tag.name);
                  }}
                >
                  {tag.name}
                </button>
              ) : (
                <button
                  key={i}
                  className="userTagsAllButton"
                  onClick={() => {
                    selectplateForm(tag.name);
                  }}
                >
                  {tag.name}
                </button>
              );
            })} */}
              {gamePlateform.map((tag, i) => {
                return (
                  <button
                    key={i}
                    className={
                      plateForm?.includes(tag)
                        ? "activetypebtn"
                        : "userTagsAllButton"
                    }
                    value={tag}
                    onClick={selectplateForm}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="userProfileGamingMode">
            <FormControl>
              <p className="gamingModeP">Favorite Gaming Mode</p>
              <div className="gamingModeSelect">
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={gameMood}
                  name="radio-buttons-group"
                  style={{ display: "inline" }}
                >
                  &nbsp; &nbsp;
                  <FormControlLabel
                    value="Single"
                    control={<Radio />}
                    label="Single Player Mode"
                    onClick={onChangeRadioBtn}
                  />
                  <FormControlLabel
                    value="MultiPlayer"
                    control={<Radio />}
                    label="MultiPlayer Mode"
                    onClick={onChangeRadioBtn}
                  />
                </RadioGroup>
              </div>
            </FormControl>
          </div>
          {console.log("userrrr", user, learner)}
          {user?.role === "User" ||
            (learner && (
              <>
                {" "}
                <div>
                  <label className="setting-label" for="Learning">
                    Learning Rhythm
                  </label>
                </div>
                <div className="userProfileSelectInput">
                  <select
                    id="Select"
                    name="Select"
                    onChange={ChangeLearningRhythm}
                    className="selectInput-userProfile selectInput2"
                  >
                    <option
                      value="10h To 20h Per Week"
                      className="selectInput-option"
                    >
                      {learningRethem === "10h To 20h Per Week"
                        ? learningRethem
                        : "10h To 20h Per Week"}
                    </option>
                    <option value="20h To 30h Per Week">
                      {learningRethem === "20h To 30h Per Week"
                        ? learningRethem
                        : "20h To 30h Per Week"}
                    </option>
                    <option value="30h To 40h Per Week">
                      {learningRethem === "30h To 40h Per Week"
                        ? learningRethem
                        : "30h To 40h Per Week"}
                    </option>
                    <option value="40h To 50h Per Week">
                      {learningRethem === "40h To 50h Per Week"
                        ? learningRethem
                        : "40h To 50h Per Week"}
                    </option>
                    <option value="50h To 60h Per Week">
                      {learningRethem === "50h To 60h Per Week"
                        ? learningRethem
                        : "50h To 60h Per Week"}
                    </option>
                    <option value="60h To 70h Per Week">
                      {learningRethem === "60h To 70h Per Week"
                        ? learningRethem
                        : "60h To 70h Per Week"}
                    </option>
                  </select>
                </div>
                <div className="userProfileSelectInput">
                  <label className="setting-label" for="Learning">
                    Current Gameplay Level
                  </label>
                  <br />
                  <select
                    id="Select"
                    name="Select"
                    onChange={changeCurrentLevelHandler}
                    className="selectInput-userProfile selectInput2"
                    defaultValue={currentLevel}
                  >
                    <option value="Casual" className="selectInput-option">
                      Casual (5h - 7h Of Play Per Week)
                    </option>
                    <option value="Confirmed">
                      Confirmed (8 Hours - 15 Hours Of Play Per Week)
                    </option>
                    <option value="Hardcore">
                      Hardcore (16 Hours - 28 Hours Of Play Per Week)
                    </option>
                    <option value="Esporter">
                      Esporter (More than 30 Hours Of Play Per Week)
                    </option>
                  </select>
                </div>
                <div className="userProfileSelectInput">
                  <label className="setting-label" for="Learning">
                    Target Gameplay Level
                  </label>
                  <br />

                  <select
                    id="Select"
                    name="Select"
                    onChange={changeTargetLevelHandler}
                    className="selectInput-userProfile selectInput2"
                    defaultValue={target_level}
                  >
                    <option value="Casual" className="selectInput-option">
                      Casual (5h - 7h Of Play Per Week)
                    </option>
                    <option value="Confirmed">
                      Confirmed (8 Hours - 15 Hours Of Play Per Week)
                    </option>
                    <option value="Hardcore">
                      Hardcore (16 Hours - 28 Hours Of Play Per Week)
                    </option>
                    <option value="Esporter">
                      Esporter (More than 30 Hours Of Play Per Week)
                    </option>
                  </select>
                </div>
              </>
            ))}

          <button
            className="userProfileButton userProfileButton2"
            onClick={submitProfile}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default Setting;
