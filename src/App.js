import { DrawingBranch } from "./Components/DrawingBranch.js";
import { Footer } from "./Layouts/Footer.js";
import StyledSlider from "./Components/StyledSlider.js";
import "rc-slider/assets/index.css";
import "./App.css";
import { Fragment } from "react";

const sliderChange = (v) => {
  console.log("slider changed to ", v);
};

function App() {
  return (
    <Fragment>
      <header className="header" />
      <div className="main">
        <DrawingBranch className="drawing-branch" />
        <div className="sliders-container">
          <StyledSlider
            title="Number of leaves"
            min={1}
            max={15}
            step={1}
            onChange={sliderChange}
            defaultValue={10}
            vertical={true}
          />
          <StyledSlider
            title="Branch thickness"
            min={1}
            max={14}
            step={1}
            onChange={sliderChange}
            defaultValue={7}
            vertical={true}
          />
          <StyledSlider
            title="Fading speed"
            min={1}
            max={30}
            step={1}
            onChange={sliderChange}
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
  create a slider comp: StyledSlider
with tooltip
with label
with a "?" for a more detailed explanation. should appear only if there IS explanantion
fixed width
line should be thicker (a little)
knob should be bigger
BG  = white, pallete should be appealing (how)
pipe through any props directly to the react slider.

Sliders: num of leaves
(add redux for state management? akita? what else is there)
thicker branches
slower fading



*/
