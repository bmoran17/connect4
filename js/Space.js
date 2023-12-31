class Space {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.id = `space-${x}-${y}`;
    this.token = null;
    this.diameter = 76;
    this.radius = this.diameter/2;
  }

/** 
 * Draw SVG Space. 
 */
  drawSVGSpace() {
    // create SVG element
    const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    
    // set several attributes for svg element
    svgSpace.setAttributeNS(null, "id", this.id);
    svgSpace.setAttributeNS(null, "cx", (this.x * this.diameter) + this.radius);
    svgSpace.setAttributeNS(null, "cy", (this.y * this.diameter) + this.radius);
    svgSpace.setAttributeNS(null, "r", this.radius - 8);
    svgSpace.setAttributeNS(null, "fill", "black");
    svgSpace.setAttributeNS(null, "stroke", "none");

    // attached svg element to DOM 
    document.getElementById("mask").appendChild(svgSpace); 
  }
}