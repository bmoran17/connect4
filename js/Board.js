class Board {
  constructor() {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }

/** 
 * Generates 2D array of spaces. 
 * @return  {Array}     An array of space objects
 */
  createSpaces() {
    const spaces = [];

    for(let x = 0; x < this.columns; x++) {
      const column = [];

      // iterate through rows of column
      for(let y = 0; y < this.rows; y++) {
        const space = new Space(x, y);
        column.push(space);
      }
      // push entire column to spaces array
      spaces.push(column);
    }
    return spaces;
  }

/** 
 * Iterates through the 2D array of space objects stored in spaces.
 * Call the drawSVGSpace method on each space
 */
  drawHTMLBoard() {
    for (let column of this.spaces) {
      for(let space of column) {
        space.drawSVGSpace()
      }
    }
  }
}
