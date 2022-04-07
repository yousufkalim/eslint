import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import VideoInput from "../../../utils/VideoInput";
import api from "../../../api";
import RequestSuccessfullyPopup from "../../PopupForms/RequestSuccessfullyPopup";
import UploadingTheCourse from "../../PopupForms/UploadingTheCourse";

const FormStepTwo = ({ step, setStep, formDataTwo, setformDataTwo }) => {
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const [activeUploadButton, setActiveUploadButton] = useState(1);
  const [uploading, setUploading] = useState(false);
  const handleActiveUploadButton = (i) => {
    setActiveUploadButton(i);
  };
  const handleFileChange = (event) => {
    const files = [...event.target.files];
    if (files) {
      setUploading(true);
    }
    setformDataTwo(files);
  };
  const handleFileChange1 = (event) => {
    const files = [...event.target.files];
    if (files) {
      setUploading(true);
    }
    setformDataTwo(files);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <UploadingTheCourse open={opens} setOpen={setOpens} />
      <RequestSuccessfullyPopup open={open} setOpen={setOpen} />
      <div className="formStepOneDiv">
        <p>Step {step}/6</p>
        <div className="uploadBtnDiv">
          <h2
            className={`
             ${activeUploadButton == 1 && "ActiveLine"} 
            uploadCoursebtn`}
            onClick={() => handleActiveUploadButton(1)}
          >
            Upload Course
          </h2>

          <h2
            className={`
             ${activeUploadButton == 2 && "ActiveLine"} 
            RecordButton`}
            onClick={() => handleActiveUploadButton(2)}
          >
            Record Course
          </h2>
          <button className="coming-SoonBYN">Coming soon</button>
        </div>
        <div className={` hrLine1`} />

        {activeUploadButton == 1 ? (
          <>
            {!uploading ? (
              <Grid container spacing={2}>
                <div className="step_container2">
                  <div className="step1">
                    <p className="stapPr">Upload Full Course</p>
                    <VideoInput
                      id="1"
                      text="Select Video"
                      onChange={handleFileChange}
                    />
                  </div>
                  <p className="step_or" onClick={() => setOpens(true)}>
                    or
                  </p>
                  <div className="step2">
                    <p className="stapPr2">Upload chapters</p>
                    <VideoInput
                      id="2"
                      text="Select Chapter"
                      onChange={handleFileChange1}
                    />
                  </div>
                </div>
              </Grid>
            ) : (
              <p className="success">
                Video Upload Successfully Please Continue!
              </p>
            )}
          </>
        ) : (
          <div>
            <h1>Record Course</h1>
          </div>
        )}

        <div className="coursDetailBtn">
          <button className="drafBtn">Draft</button>
          <button
            className="drafBtn"
            style={{ background: "none", border: "1px solid #662F88" }}
          >
            Previous
          </button>
          <button onClick={() => setStep(3)} className="continueBtn">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default FormStepTwo;
