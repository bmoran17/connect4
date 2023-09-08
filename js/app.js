// create new game object
const game = new Game();

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
const btn = document.getElementById('begin-game');
btn.addEventListener('click', () => {
  game.startGame();
  // not display btn anymore
  btn.style.display = 'none';
  document.getElementById('play-area').style.opacity = '1';
});