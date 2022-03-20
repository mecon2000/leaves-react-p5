import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./StyledSlider.css";

function StyledSlider(props) {
  let { title, ...otherProps } = props;
  return (
    <div className="slider-wrapper">
      <div className="title">{title}</div>
      <Slider {...otherProps} className="slider" vertical={true} />
    </div>
  );
}

export default StyledSlider;
