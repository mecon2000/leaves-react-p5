import { DrawingBranch } from "./Components/DrawingBranch.js";
import { Footer } from "./Layouts/Footer.js";
import Slider from "rc-slider";
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
          <Slider
            className="slider"
            min={1}
            max={10}
            step={1}
            onChange={sliderChange}
            defaultValue={5}
            vertical={true}
          />
          <Slider className="slider" vertical={true}/>
          <Slider className="slider" vertical={true}/>
          <Slider className="slider" vertical={true}/>
          <Slider className="slider" vertical={true}/>
          <Slider className="slider" vertical={true}/>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
