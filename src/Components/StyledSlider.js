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
