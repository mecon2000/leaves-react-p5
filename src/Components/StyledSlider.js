import Slider from "rc-slider";
import Tooltip from "rc-tooltip";
import "rc-slider/assets/index.css";
import { useState } from "react";
import "./StyledSlider.css";

function StyledSlider(props) {
  let { title, explanation, onChange, ...otherProps } = props;
  let [sliderValue, setSliderValue] = useState(otherProps.defaultValue);

  const handleChange = (v) => {
    setSliderValue(v);
    onChange(v);
  };

  return (
    <div className="slider-wrapper">
      {explanation ? (
        <Tooltip
          placement="bottomLeft"
          trigger={["hover"]}
          transitionName="rc-tooltip-zoom"
          overlay={<span>{explanation}</span>}
        >
          <div className="title">{title}</div>
        </Tooltip>
      ) : (
        <div className="title">{title}</div>
      )}
      <Slider
        onChange={handleChange}
        {...otherProps}
        className="slider"
        vertical={true}
      />
      {sliderValue}
    </div>
  );
}

export default StyledSlider;
