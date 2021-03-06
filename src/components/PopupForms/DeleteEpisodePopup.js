import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import "../../css/form/UploadSuccessfulPopup.css";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteFullCoursePopup from "./DeleteFullCoursePopup";
const DeleteEpisodePopup = ({ open, setOpen, course, setOpenEpisode }) => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleClick = () => {
    setOpen(false);
    setOpenEpisode(true);
  };
  const handleClick2 = () => {
    setShowDeletePopup(true);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <DeleteFullCoursePopup
        open={showDeletePopup}
        setOpen={setShowDeletePopup}
        course={course}
        setOpenEpisode={setOpenEpisode}
      />
      <Dialog open={open} setOpe={setOpen} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <div className="uploadSuccessDiv">
          <div className="uploadSuccess-centerDiv"></div>
          <ClearIcon className="subsclearIcon" onClick={handleClose} />
          <div className="deletePupop-content">
            <p className="deletePupopP">You can delete the entire course or</p>
            <p className="deletePupopP">any of the episode from the course</p>
            <div className="deletePupop-buttons">
              <button className="deletePupopBtn" onClick={handleClick2}>
                Course
              </button>
              <button className="deletePupopBtn" onClick={handleClick}>
                Episode
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DeleteEpisodePopup;
