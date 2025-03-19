class Actor extends Entity {
  constructor(config) {
    super(config); //config for instance of entity
    this.movementRemaining = 0;
    this.isPlayerControlled = config.isPlayerControlled || false;

    this.directionUpdate = {
      up: ["y", -1],
      down: ["y", 1],
      left: ["x", -1],
      right: ["x", 1],
    };
  }

  update(state) {
    this.updatePosition();
    this.updateSprite(state);

    if (
      this.isPlayerControlled &&
      this.movementRemaining === 0 &&
      state.arrow
    ) {
      this.direction = state.arrow;
      this.movementRemaining = 16;
    }
  }

  updatePosition() {
    if (this.movementRemaining > 0) {
      const [axis, delta] = this.directionUpdate[this.direction];
      this[axis] += delta;
      this.movementRemaining -= 1;
    }
  }

  updateSprite(state) {
    if (
      this.isPlayerControlled &&
      this.movementRemaining === 0 && // updated from movingProgressRemaining
      !state.arrow
    ) {
      this.sprite.setAnimation("idle-" + this.direction);
      return;
    }

    if (this.movementRemaining > 0) {
      this.sprite.setAnimation("walk-" + this.direction);
    }
  }
}
