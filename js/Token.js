class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
  }

  /** 
 * @return HTML token element associated w/ Token object
 */
  get htmlToken() {
    return this.drawHTMLToken;
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
}