/**
 * Defines a character, item, etc. Objects that live on the map.
 */
class Entity {
    constructor(config){
        //co-ordinates 
        this.x = config.x || 0 //sets x, defualts to 0 if undefined
        this.y = config.y || 0 //sets y, defualts to 0 if undefined
        console.log("Creating Entity with x:", this.x, "y:", this.y);
        this.direction = config.direction || "down"; //multiple types of entities will need direction

        // creates new instance of Sprite for the new instance of Entity 
        this.sprite = new Sprite({
            entity: this, // links the sprite to this entity 
            src: config.src || "./assets/images/sprites/characters/human.png"
        });

        console.log("Entity sprite:", this.sprite);

}}