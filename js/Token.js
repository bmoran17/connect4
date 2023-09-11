class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
    this.columnLocation = 0;
  }

  /** 
 * @return HTML token element associated w/ Token object
 */
  get htmlToken() {
    return this.drawHTMLToken;
  }

  /** 
 * Gets left offset of html element.
 * @return  {number}   Left offset of token object's htmlToken.
 */
  get offsetLeft() {
    return this.htmlToken.offsetLeft;
  }

  /** 
 * Draws associated SVG spaces for all game spaces.
 */
  drawHTMLToken() {
    const token = document.createElement("div");
    document.getElementById("game-board-underlay").appendChild(token);
    token.setAttribute("id", this.id)
    token.setAttribute("class", "token")
    token.style.backgroundColor = this.owner.color;

  }

  /** 
 * Moves html token one column to left.
 */
  moveLeft() {
    // htmlToken moves left when located in column greater than 1 (there's left columns & its not in the first one)
    if (this.columnLocation > 0) {
      // update left position of token so its 76 pixels less that offset value
      // 76 pixels - entire width of column
      this.htmlToken.style.left = this.offsetLeft - 76;
      // update column location property by subtracting 1 => token move one column left
      this.columnLocation -=1;
    }
  }

  /** 
 * Moves html token one column to right.
 * @param   {number}    columns - number of columns in the game board
 */
  moveRight(columns) {
    // check that its not in the last column
    if (this.columnLocation < columns - 1) {
      // update left position of token so it moves right 76 pixels
      this.htmlToken.style.left = this.offsetLeft + 76;
      // update column location to next right one
      this.columnLocation += 1;
    }
  }

/** 
 * Drops html token into targeted board space.
 * @param   {Object}   target - Targeted space for dropped token.
 * @param   {function} reset  - The reset function to call after the drop animation has completed.
 */
  drop(target, reset) {
    this.dropped = true;

    // animation for htmlToken falling into the target space
    $(this.htmlToken).animate({
      top: (target.y * target.diameter)
  }, 750, 'easeOutBounce', reset);
  }
}