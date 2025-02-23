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

        this.currentMap = null
    }


/**
 * Starts and runs the game loop, drawing the base image, entities and top image.
 * Continuously animates the game.
 */
    runGameLoop() {
        const step = () => {
            if (this.currentMap) { 
                this.currentMap.drawBaseImg(this.worldCtx) // Draw base layer
    
                Object.values(this.currentMap.entities).forEach((obj) => {
                    obj.sprite.draw(this.worldCtx)}) // Draw each entitys sprite
    
                // this.currentMap.drawTopImg(this.worldCtx) 
            }
            
            requestAnimationFrame(() => {
                step() // Continue game loop
            })
        }
    
        step() // Start game loop
    }
    
    initCanvas() {
        this.currentMap = new WorldMap(window.WorldMaps.Bedroom)
        this.currentMap.entities = window.WorldMaps.Bedroom.entities
        this.runGameLoop()
    }
}