class DirectionInput {
    constructor(actor) {
        this.heldDirections = []
        this.arrowMap = {
            "ArrowUp": "up",
            "ArrowDown" : "down",
            "ArrowRight" : "right",
            "ArrowLeft" : "left",


            "KeyW" : "up",
            "KeyS" : "down",
            "KeyA" : "right",
            "KeyD" : "right",

        }
    }


    get direction(){
        return this.heldDirections[0];
    }


    move() {
        document.addEventListener("keydown", e => {
            // console.log(e.code)
            const dir = this.arrowMap[e.code]
            if(dir && this.heldDirections.indexOf(dir) === -1){
                this.heldDirections.unshift(dir)
                console.log(this.heldDirections)
            }

            
        })
        document.addEventListener("keyup", e => {
            const dir = this.arrowMap[e.code]
            const index = this.heldDirections.indexOf(dir)
            // index > -1 ? this.heldDirections.splice(index,1)
            if(index > -1) {
                this.heldDirections.splice(index, 1)
                // this.heldDirections.unshift(dir)
                console.log(this.heldDirections)
            }

        })
    }

    }
