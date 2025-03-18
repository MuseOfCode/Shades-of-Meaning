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

  update(state, activePlayer) {
    this.updatePosition();

    if (
      this.isPlayerControlled &&
      this.movementRemaining === 0 &&
      state.arrow
    ) {
      this.direction = state.arrow;
      this.movementRemaining = 16;
    } else if (!this.isPlayerControlled) {
      // Follow the active player
      this.follow(activePlayer);
    }
  }

  follow(target) {
    // Only move if the target (active player) has moved
    if (this.movementRemaining === 0 && target.movementRemaining > 0) {
      let dx = target.x - this.x;
      let dy = target.y - this.y;
      let distance = Math.abs(dx) + Math.abs(dy); // Manhattan distance

      // Stop moving if already within 1-2 tiles of the active player
      if (distance <= 3) return;

      let newDirection = null;

      // Move only if more than 2 tiles away
      if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 1) newDirection = "right";
        else if (dx < -1) newDirection = "left";
      } else {
        if (dy > 1) newDirection = "down";
        else if (dy < -1) newDirection = "up";
      }

      // Ensure valid move direction
      if (!newDirection) return;

      // Predict next position
      let nextX =
        this.x +
        (newDirection === "right" ? 1 : newDirection === "left" ? -1 : 0);
      let nextY =
        this.y + (newDirection === "down" ? 1 : newDirection === "up" ? -1 : 0);

      // Prevent stepping directly onto the player's tile
      if (nextX === target.x && nextY === target.y) return;

      this.direction = newDirection;
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
}
