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
            title="this is title"
            className="slider"
            min={1}
            max={10}
            step={1}
            onChange={sliderChange}
            defaultValue={5}
            vertical={true}
          />
          <StyledSlider
            title="slider 2 with a very long name "
            className="slider"
            min={1}
            max={3}
            step={1}
            onChange={sliderChange}
            defaultValue={2}
            vertical={true}
          />
          <StyledSlider
            title="slider 22"
            className="slider"
            min={1}
            max={3}
            step={1}
            onChange={sliderChange}
            defaultValue={2}
            vertical={true}
          />
          <StyledSlider
            title="slider 3"
            className="slider"
            min={1}
            max={3}
            step={1}
            onChange={sliderChange}
            defaultValue={2}
            vertical={true}
          />
          <StyledSlider
            title="slider 4"
            className="slider"
            min={1}
            max={3}
            step={1}
            onChange={sliderChange}
            defaultValue={2}
            vertical={true}
          />
          <StyledSlider
            title="slider 5"
            className="slider"
            min={1}
            max={3}
            step={1}
            onChange={sliderChange}
            defaultValue={2}
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
