const initialStroke = 5;
const maxSteps = 50;
class Leaf {
  constructor(loc, branchAngle) {
    const p5 = window.p5instance;
    this.width = 35;
    this.height = 55;
    this.setToInitial(loc, branchAngle);
    this.color = {
      start: p5.color("PaleGreen"),
      end: p5.color("PaleGoldenrod"),
    };
    this.outlineColor = {
      start: p5.color("Chartreuse"),
      end: p5.color("DarkGreen"),
    };
    this.stemColor = p5.color("White");
    this.name = "master";
  }

  setToInitial(location = window.p5instance.createVector(0, 0), branchAngle) {
    const p5 = window.p5instance;
    this.subLeaves = [];
    this.subLeaves.push(
      new SubLeaf("son1", p5.createVector(38, p5.random(-7, 7)))
    );
    this.subLeaves.push(
      new SubLeaf("son2", p5.createVector(-38, p5.random(-7, 7)))
    );
    this.subLeaves.push(
      new SubLeaf("son3", p5.createVector(p5.random(-7, 7), -50))
    );

    this.currentStep = maxSteps;
    const side = p5.random([60, -60]);
    this.stemAngle = p5.radians(
      p5.degrees(branchAngle) + side + p5.random(-45, +45)
    );
    this.leafAngle = p5.radians(p5.random(80, 110));
    this.stemStart = location;

    let v = window.p5.Vector.fromAngle(this.stemAngle, 50);
    this.stemEnd = window.p5.Vector.add(this.stemStart, v);
  }

  draw() {
    const p5 = window.p5instance;
    if (this.currentStep > 0) {
      this.fadeLeaf();
    } else {
      return;
    }

    p5.strokeWeight(2);
    p5.stroke(this.stemColor);
    p5.line(this.stemStart.x, this.stemStart.y, this.stemEnd.x, this.stemEnd.y);

    p5.push();
    p5.translate(this.stemEnd);
    p5.rotate(this.stemAngle + this.leafAngle);
    p5.rect(0, 0, this.width, this.height, 15, 15, 5, 5);
    this.subLeaves.forEach((l) => l.draw());
    p5.pop();
  }

  fadeLeaf() {
    const p5 = window.p5instance;
    this.currentStep--;
    let s = initialStroke * (this.currentStep / maxSteps);
    p5.strokeWeight(s);

    let leafOutlineColor = p5.lerpColor(
      this.outlineColor.start,
      this.outlineColor.end,
      1 - this.currentStep / maxSteps
    );
    p5.stroke(leafOutlineColor);

    let leafColor = p5.lerpColor(
      this.color.start,
      this.color.end,
      1 - this.currentStep / maxSteps
    );
    p5.fill(leafColor);
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class SubLeaf extends Leaf {
  constructor(name, location) {
    super();
    this.width = 10;
    this.height = 10;
    this.name = name;
    this.setToInitial(location);
  }

  setToInitial(location = window.p5instance.createVector(0, 0)) {
    const p5 = window.p5instance;
    this.location = location;
    this.currentStep = maxSteps;
    this.color = { start: p5.color("IndianRed"), end: p5.color("DarkRed") };
    this.outlineColor = {
      start: p5.color("Chartreuse"),
      end: p5.color("DarkGreen"),
    };
  }

  draw() {
    if (this.currentStep > 0) {
      this.fadeLeaf();
    }

    const p5 = window.p5instance;
    p5.push();
    p5.translate(this.location);
    p5.rect(0, 0, this.width, this.height, 3, 3, 3, 3);
    p5.pop();
  }
}

export { Leaf };
