import React from 'react'
import Createbg from "../../assets/createbg.png";

const CreateHome = () => {
    return (
        <>
            <div className="content_container">
        <img src={Createbg} className="content_Image" />
        <div className="textonImgcontent">
          <h1 className="textH1">
            Teach what you are
            <br /> good at
          </h1>
          <p className="textonP" style={{color:"#e7411b", fontWeight:"900"}}>Its time to make your hobbie an asset</p>
          <button className="textonbutton">Create a Course</button>
        </div>
      </div>
        </>
    )
}

export default CreateHome
