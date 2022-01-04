import React from "react";
import Videoicon from "../../src/assets/icons/Videoicon.png";

const VideoInput = ({ text }) => {
  const inputRef = React.useRef();

  const [source, setSource] = React.useState();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  return (
    <>
      <div className="VideoInput">
        <input
          ref={inputRef}
          className="VideoInput_input"
          type="file"
          onChange={handleFileChange}
          accept=".mov,.mp4"
        />
        {!source && (
          <button onClick={handleChoose} className="uploadBtn">
            <img src={Videoicon} alt="" />
            <p className="videoP">{text}</p>
          </button>
        )}
      </div>
    </>
  );
};

export default VideoInput;