class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

/** 
 * Returns active player.
 * @return  {Object} the active player
 */
  get activePlayer() {
    return this.players.find(player => player.active);
  }

/** 
 * Creates two player objects
 * @return  {Array}    An array of two Player objects.
 */
  createPlayers(){
    const players = [
      new Player("Player 1", 1, "#e15258", true),
      new Player("Player 2", 2, "#e59a13")
    ];

   return players;
  }

/** 
 * Begins game, initializes it
 */
  startGame() {
    // gameboard drawn in browser
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken()
    this.ready = true;
  }

  /**
 * Branches code, depending on what key player presses
 * @param  string the keydown pressed - 
 */
  handleKeydown(keydown) {
    // current active token to play with
    let token = this.activePlayer.activeToken;

    // check game is ready
    if (this.ready) {
      if (keydown === "ArrowLeft") {
        token.moveLeft()
      } else if (keydown === "ArrowRight") {
        token.moveRight(this.board.columns)
      } else if (keydown === "ArrowDown") {
        // token is dropped
      }
    }
  }

/**
 * 
 */
  playToken() {
    let spaces = this.board.spaces;
    let activeToken = this.activePlayer.activeToken;
    let targetColumn = spaces[activeToken.columnLocation];
    let targetSpace =  null;

    for (let space of targetColumn) {
      if (space.token === null) {
        targetSpace = space;
      }
    }

    if (targetSpace !== null) {
      game.ready = false;
      activeToken.drop(targetSpace);
    }
  }
}