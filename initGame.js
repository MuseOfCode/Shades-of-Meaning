(function () {

   const worldstate = new WorldState({
    element : document.querySelector(".gameContainer")
   })
   worldstate.initCanvas()

})()

// (function() {...})() is an IIFE—executes immediately.
// new WorldState({ element: document.querySelector(".gameContainer") })
// Creates a WorldState object.
// Passes the .gameContainer element.
// worldstate.initCanvas(); initializes the game.