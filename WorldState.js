/**
 * Represents the world state of the game, managing the canvas and rendering context.
 */
class WorldState {
  /**
   * Creates a new WorldState instance
   * @param {object} config - The configuration object, sets up properties of new instance
   * @param {HTMLElement} config.element - The container element that holds the game canvas
   */
  constructor(config) {
    this.element = config.element; // Container element for the game
    this.canvas = this.element.querySelector(".gameCanvas"); // Find the <canvas>
    this.worldCtx = this.canvas.getContext("2d"); // Get the 2D rendering context

    this.currentMap = null;
  }

  //switches the controlls by first ensuring both actors exist on map
  togglePlayer() {
    if (!this.currentMap) return;
    const { humanAvatar, canineAvatar } = this.currentMap.entities;
    if (humanAvatar && canineAvatar) {
      this.activePlayer.isPlayerControlled = false; //disables on current and enables on the other
      this.activePlayer =
        this.activePlayer === humanAvatar ? canineAvatar : humanAvatar;
      this.activePlayer.isPlayerControlled = true;
    }
  }

  /**
   * Starts and runs the game loop, drawing the base image, entities and top image.
   * Continuously animates the game.
   */
  runGameLoop() {
    console.log(utils.gridify(2));
    const step = () => {
      if (this.currentMap) {
        this.worldCtx.clearRect(0, 0, this.canvas.width, this.canvas.height); //clears canvas before next frame
        this.currentMap.drawBaseImg(this.worldCtx); // Draw base layer

        Object.values(this.currentMap.entities).forEach((obj) => {
          obj.update(
            {
              arrow: this.directionInput.direction,
            },
            this.activePlayer
          ); // Pass active player reference
          obj.sprite.draw(this.worldCtx);
        });

        // this.currentMap.drawTopImg(this.worldCtx)
      }

      requestAnimationFrame(() => {
        step(); // Continue game loop
      });
    };

    step(); // Start game loop
  }

  initCanvas() {
    this.currentMap = new WorldMap(window.WorldMaps.Village);
    this.currentMap.entities = window.WorldMaps.Village.entities;
    this.directionInput = new DirectionInput();

    // this allows player to toggle between actors
    this.activePlayer = this.currentMap.entities.humanAvatar;
    this.activePlayer.isPlayerControlled = true;

    document.addEventListener("keydown", (e) => {
      if (e.code === "KeyT") {
        this.togglePlayer();
      }
    });

    this.directionInput.move();
    this.directionInput.direction;
    this.runGameLoop();
  }
}
