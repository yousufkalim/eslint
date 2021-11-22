import React from "react";
import Grid from "@material-ui/core/Grid";
import TeachPlan from "../../assets/TeachPlan.png";
const HowToTeach = () => {
  return (
    <>
      <div className="getStartedContainer2">
        <p className="getStartedHeading2">How To Teach</p>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={7}>
            <div className="Getstaredgrid12">
              <div className="leftdiv22">
                <img src={TeachPlan} className="Getstarted22" />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={5}>
            <div className="Getstaredgrid22">
              <div className="StepMain2">
                <div className="Stepper12">
                  <div className="Steppertitle12">
                    1<div className="Stepperline2"></div>
                  </div>
                  <p className="Stepperdisc2">Plan Your Course</p>
                </div>
                <div>
                  <p className="Steppera">
                    Many desktop publishing packages <br /> edditors now use
                    lorem ipsum <br /> and a search for
                  </p>
                </div>
                <div className="Stepper12">
                  <div className="Steppertitle12">
                    2<div className="Stepperline2"></div>
                  </div>
                  <p className="Stepperdisc2">Record Your Course</p>
                </div>
                <div>
                  <p className="Steppera">
                    Many desktop publishing packages <br /> edditors now use
                    lorem ipsum <br /> and a search for
                  </p>
                </div>
                <div className="Stepper12">
                  <div className="Steppertitle12">3</div>
                  <p className="Stepperdisc2">Launch Your Course</p>
                </div>
                <div>
                  <p className="Steppera">
                    Many desktop publishing packages <br /> edditors now use
                    lorem ipsum <br /> and a search for
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="howTeachBtn">
        <button className="textonbutton" style={{ margin: "auto" }}>
          Create a Course
        </button>
      </div>
    </>
  );
};
export default HowToTeach;
