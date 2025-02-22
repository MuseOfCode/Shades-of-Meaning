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
    }

/**
 * Method to load and draw the game map
 * @param {function}
 */
    initCanvas() {
        const mapImg = new Image(); //Creates a new image element <img> 
        mapImg.onload = () => {
            this.worldCtx.drawImage(mapImg, 0, 0); 
        };
        
        mapImg.onerror = (err) => {
            console.log("idk man", err);
        };

        mapImg.src = "./assets/images/maps/base/bedroom.png"; // Set source here

        // Ensure Entity is defined somewhere
        if (typeof Entity !== "undefined") {
            const humanAvatar = new Entity({
                x: 5,
                y: 5,
            })

            const canineAvatar = new Entity({
                x: 6,
                y: 5,
                src: "./assets/images/sprites/characters/canine.png"
            })

            setTimeout(() => {
                    humanAvatar.sprite.draw(this.worldCtx);
                    canineAvatar.sprite.draw(this.worldCtx);

            }, 200);
        } else {
            console.error("Entity is not defined");
        }
    }
}
