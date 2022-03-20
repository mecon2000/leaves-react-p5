import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import "./StyledSlider.css";

function StyledSlider(props) {
  let { title, onChange, ...otherProps } = props;
  let [sliderValue,setSliderValue] = useState(otherProps.defaultValue);
  
  const handleChange = (v) => {
    setSliderValue(v);
    onChange(v);
  }


  return (
    <div className="slider-wrapper">
      <div className="title">{title}</div>
      <Slider onChange={handleChange} {...otherProps} className="slider" vertical={true} />
      { sliderValue }
    </div>
  );
}

export default StyledSlider;
