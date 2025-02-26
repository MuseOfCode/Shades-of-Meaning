class WorldMap {
    constructor(config){
        this.worldState = config.worldState //refrencing worldState obj

        //base layer of map
        this.baseImg = new Image()
        this.baseImg.src = config.baseSrc

        //top layer of map
        this.topImg = new Image()
        this.topImg.src = config.topSrc
    }

    drawBaseImg(ctx){
        ctx.drawImage(this.baseImg, 0, 0)
    }

    drawTopImg(ctx){
        ctx.drawImage(this.topImg, 0, 0)
    }
}

//object container all the maps, can be used across all files 
window.WorldMaps = {
    Bedroom: {
        baseSrc : "./assets/images/maps/base/bedroom.png",
        topSrc : "./assets/images/maps/top/bedroom.png",
        entities : {
            humanAvatar : new Entity({
                x : 5,
                y : 5,
            }),
            canineAvatar : new Entity({
                x : 5,
                y : 6,
                src : "./assets/images/sprites/characters/canine.png"
            })
        }

    },

    Lobby : {
        baseSrc : "./assets/images/maps/base/lobby.png",
        topSrc : "./assets/images/maps/top/lobby.png",
        entities : {
            humanAvatar : new Entity({
                x: 3,
                y: 5
            }),
            canineAvatar : new Entity({
                x: 4,
                y: 5,
                src : "./assets/images/sprites/characters/canine.png"
            })
        }

    },

    Village : {
        baseSrc : "./assets/images/maps/base/village.png",
        entities : {
            humanAvatar : new Entity({
                x: 7,
                y: 5
            }),
            canineAvatar : new Entity({
                x: 6,
                y: 5,
                src : "./assets/images/sprites/characters/canine.png"
            })
        }

    }
}