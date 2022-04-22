import React, { useState } from "react";
import Fireicon from "../../../assets/icons/Fireicon.png";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "../../../assets/icons/EditIcon.svg";
import DeleteIcon from "../../../assets/icons/DeleteIcon.svg";
import api from "../../../api";
import { Store, UpdateStore } from "../../../StoreContext";
const FormStepFive = ({
  step,
  setStep,
  setformDataTwo,
  formDataTwo,
  setformDataFive,
}) => {
  const { creator } = Store();
  const [creatorId, setCreatorId] = useState(creator ? creator._id : null);
  const [lodding, setlodding] = useState(false);
  const handleDelete = (file) => {
    const newChapter = formDataTwo?.filter((a) => a !== file);
    setformDataTwo(newChapter);
  };
  const handleSubmit = async () => {
    setlodding(true);
    let newArray = [];
    for (let i = 0; i < formDataTwo.length; i++) {
      let file = await handleSingleVideo(formDataTwo[i]);
      newArray = [...newArray, file._id];
      setformDataFive(newArray);
      if (formDataTwo.length === 1) setStep(6);
      if (i !== formDataTwo.length - 1) setStep(6);
    }
  };
  const handleSingleVideo = async (file) => {
    return new Promise(async (resolve, reject) => {
      file.creator = creatorId;
      let res = await api("post", "/videos", file);
      if (res) {
        resolve(res.data);
      } else {
        reject(null);
      }
    });
  };
  const handleEdit = (file, index) => {};
  return (
    <>
      <div className="formStepOneDiv">
        <p>Step {step}/6</p>
        <h2 className="coursedetail1">Uploaded Episode</h2>
        <div className="hrLine1" />
        {formDataTwo?.map((file, index) => {
          return (
            <div className="step3_container">
              <div className="step3Counting">{index}-</div>
              <div className="step3Img">
                <img src={Fireicon} alt="" />
              </div>
              <div className="step3Input">
                <input
                  id={index}
                  type="text"
                  placeholder="Title"
                  className="step3_inputs"
                  value={file?.name}
                />
                <img
                  className="editIcon"
                  src={EditIcon}
                  alt=""
                  onClick={() => handleEdit(file)}
                />
                <img
                  className="deleteIcon"
                  src={DeleteIcon}
                  alt=""
                  onClick={() => handleDelete(file)}
                />
              </div>
            </div>
          );
        })}
        <div className="coursDetailBtn">
          <button className="drafBtn">Draft</button>
          <button
            className="drafBtn"
            style={{ background: "none", border: "1px solid #662F88" }}
            onClick={() => setStep(2)}
          >
            Previous
          </button>
          <button onClick={handleSubmit} className="continueBtn">
            {lodding ? "lodding" : "Continue"}
          </button>
        </div>
      </div>
    </>
  );
};

export default FormStepFive;
