import { DrawingBranch } from "./Components/DrawingBranch.js";
import { Footer } from "./Layouts/Footer.js";
import StyledSlider from "./Components/StyledSlider.js";
import "rc-slider/assets/index.css";
import "./App.css";
import { Fragment, useState } from "react";

function App() {
  const [maximumLeaves, setMaximumLeaves] = useState(10);
  const [maxBranchWidth, setMaxBranchWidth] = useState(7);
  const [frameRate, setFrameRate] = useState(30);

  const leavesCountChanged = (v) => {
    setMaximumLeaves(v);
    console.log("maximumLeaves=", v);
  };

  const branchThicknessChanged = (v) => {
    setMaxBranchWidth(v);
    console.log("maxBranchWidth=", v);
  };

  const fadingSpeedChanged = (v) => {
    setFrameRate(v);
    console.log("frameRate=", v);
  };

  return (
    <Fragment>
      <header className="header" />
      <div className="main">
        <DrawingBranch
          className="drawing-branch"
          maximumLeaves={maximumLeaves}
          maxBranchWidth={maxBranchWidth}
          frameRate={frameRate}
        />
        <div className="sliders-container">
          <StyledSlider
            title="Number of leaves"
            min={1}
            max={15}
            step={1}
            onChange={leavesCountChanged}
            defaultValue={10}
            vertical={true}
          />
          <StyledSlider
            title="Branch thickness"
            min={1}
            max={14}
            step={1}
            onChange={branchThicknessChanged}
            defaultValue={7}
            vertical={true}
          />
          <StyledSlider
            title="Fading speed"
            min={1}
            max={30}
            step={1}
            onChange={fadingSpeedChanged}
            defaultValue={30}
            vertical={true}
          />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;

/*
with tooltip
with label
with a "?" for a more detailed explanation. should appear only if there IS explanantion
line should be thicker (a little)
knob should be bigger
BG  = white, pallete should be appealing (how)
(add redux for state management? akita? what else is there)
*/
