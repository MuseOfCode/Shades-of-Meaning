/**
 * Represents the images of entities, handles image rendering.
 */
class Sprite {
    constructor(config) {
        this.image = new Image(); // creates new instance of image 
        this.image.src = config.src; // sets the source of the image 
        this.isLoaded = false;

        // waits for the image to load (image.src), then sets isLoaded = true 
        this.image.onload = () => {
            this.isLoaded = true;
        };

        this.image.onerror = (err) => {
            console.error("Error loading sprite image:", err);
        };

        // Animation setup
        this.animation = config.animation || {
            idleDown: [[0, 0]]
        };
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        // Reference to the entity object this instance of sprite belongs to
        this.entity = config.entity; 
    }

    /**
     * Method belonging to the instance of sprite 
     * @param {*} ctx 
     * @returns 
     */
    draw(ctx) {
        if (!this.isLoaded) return;  // Prevent drawing if image isn't loaded

        const [x, y] = [this.entity.x, this.entity.y] // coverts grid coordinates to the pixel values

        //Actually draws the sprite on the canvas
        ctx.drawImage(
            this.image,
            0, 0,
            16, 16,
            x, y,
            16, 16
        );
    }
}
