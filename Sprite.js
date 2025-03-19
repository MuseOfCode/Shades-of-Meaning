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
    this.animations = config.animations || {
      "idle-down": [[0, 0]],
      "idle-right": [[0, 1]],
      "idle-up": [[0, 2]],
      "idle-left": [[0, 3]],
      "walk-down": [
        [1, 0],
        [0, 0],
        [3, 0],
        [2, 0],
      ],
      "walk-right": [
        [1, 1],
        [0, 1],
        [3, 1],
        [2, 1],
      ],
      "walk-up": [
        [1, 2],
        [0, 2],
        [3, 2],
        [2, 2],
      ],
      "walk-left": [
        [1, 3],
        [0, 3],
        [3, 3],
        [2, 3],
      ],
    };
    this.activeAnimationKey = config.currentAnimation || "idle-down";
    this.animationFrameIndex = 0;

    this.animationFrameLimit = config.animationFrameLimit || 8;
    this.animationFrameProgress = this.animationFrameLimit;

    // Link the sprite to the associated game object.
    this.entity = config.entity;
  }

  get frame() {
    return this.animations[this.activeAnimationKey][this.animationFrameIndex];
  }

  setAnimation(animationKey) {
    if (this.activeAnimationKey !== animationKey) {
      this.activeAnimationKey = animationKey;
      this.animationFrameIndex = 0;
      this.animationFrameProgress = this.animationFrameLimit;
    }
  }

  updateAnimationProgress() {
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress -= 1;
      return;
    }
    this.animationFrameProgress = this.animationFrameLimit;
    this.animationFrameIndex += 1;

    if (this.frame === undefined) {
      this.animationFrameIndex = 0;
    }
  }
  /**
   * Method belonging to the instance of sprite
   * @param {*} ctx
   * @returns
   */
  draw(ctx) {
    if (!this.isLoaded) return; // Prevent drawing if image isn't loaded

    const [x, y] = [this.entity.x, this.entity.y];
    const [frameX, frameY] = this.frame;

    // Actually draws the sprite on the canvas
    ctx.drawImage(this.image, frameX * 16, frameY * 16, 16, 16, x, y, 16, 16);
    this.updateAnimationProgress();
  }
}
