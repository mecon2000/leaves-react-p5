//import React from "react";
import Sketch from "react-p5";
import { Leaf } from "./Leaf.js";

//consts:
let leaves = [];
const canvasSize = 700;
const maximumLeaves = 10;

//colors consts:
let backgroundColor;
let branchColor;
const minBranchWidth = 1;
const maxBranchWidth = 7;

//globals :
let currentMinimumDistance = 0;

const DrawingBranch = (props) => {
  const calcCanvas = (p5) => {
    const width = Math.min(p5.windowWidth - 25, canvasSize);
    const height = Math.min(p5.windowHeight - 82, canvasSize);
    return [width, height];
  };
  const setup = (p5, canvasParentRef) => {
    window.p5instance = p5; //TODO there must be a better way to get the only p5 instance
    //setting consts which cannot be initialized on global scope (it's a p5.js thing)
    backgroundColor = p5.color("#F5C67B");
    branchColor = p5.color("white");

    const [w, h] = calcCanvas(p5);

    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(w, h).parent(canvasParentRef);
    p5.frameRate(30);
    p5.rectMode(p5.CENTER);
    p5.stroke(branchColor);
    p5.background(backgroundColor);
  };

  const windowResized = (p5) => {
    const [w, h] = calcCanvas(p5);
    p5.resizeCanvas(w, h);
    p5.background(backgroundColor);
  };

  const draw = (p5) => {
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    writeInstructions(p5);

    leaves.forEach((l) => {
      l?.leaf?.draw();
    });
  };

  const writeInstructions = (p5) => {
    p5.push();
    p5.stroke("white");
    p5.strokeWeight(1);
    p5.fill("black");

    p5.textAlign(p5.CENTER);
    p5.textSize(30);
    p5.rectMode(p5.CORNERS);
    p5.text(
      "drag the mouse over the screen",
      10,
      10,
      Math.min(p5.windowWidth - 25, canvasSize) - 10,
      200
    );

    p5.pop();
  };

  const setBranchWidth = (p5) => {
    const weight = p5.lerp(
      maxBranchWidth,
      minBranchWidth,
      leaves.length / maximumLeaves
    );
    p5.strokeWeight(weight);
  };

  const getLineAngle = (p5, v1, v2) => {
    const v3 = p5.createVector(v2.x - v1.x, v2.y - v1.y);
    const angle = v3.heading();
    return angle;
  };
  const mousePressed = (p5) => {
    leaves = [];
    p5.background(backgroundColor);
  };

  const mouseDragged = (p5) => {
    const currLoc = p5.createVector(p5.mouseX, p5.mouseY);
    if (leaves.length !== 0) {
      const prevLeaf = leaves[leaves.length - 1];
      if (
        leaves.length < maximumLeaves &&
        currLoc.dist(prevLeaf.loc) > currentMinimumDistance
      ) {
        setBranchWidth(p5);
        p5.line(prevLeaf.loc.x, prevLeaf.loc.y, currLoc.x, currLoc.y);
        const angle = getLineAngle(p5, prevLeaf.loc, currLoc);
        leaves.push({ loc: currLoc, leaf: new Leaf(currLoc, angle) });
        currentMinimumDistance = p5.random(30, 120);
      }
    } else {
      //first time:
      leaves.push({ loc: currLoc });
      currentMinimumDistance = p5.random(40, 120);
    }
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
      mouseDragged={mouseDragged}
      mousePressed={mousePressed}
      windowResized={windowResized}
    />
  );
};

export { DrawingBranch };
