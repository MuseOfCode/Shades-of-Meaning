# Shades of Meaning

## About the game

Shades of Meaning is a 2D top-down RPG built with vanilla JavaScript, HTML5 Canvas and CSS3. The game features exploration, character-switching and a potential choose-your-own-adventure element, allowing players to control both a human protagonist and their canine companion as they navigate a monochrome village. 

**The game is currently undergoing a major revamp and remains a work in progress. Therefore, I wouldn’t recommend cloning the repository at this stage if you're simply interested in playing Shades of Meaning. However, if you’d like access to the older version while the new one is being developed, feel free to reach out!**

### Current Features
* Canvas-Based Rendering – Uses HTML5 Canvas to render characters, environments and animations.
* Character Switching – Swap between a human and a canine companion, each with unique interactions (in progress).
* Multi-Map Exploration – Navigate between different environments, including the Village, Bedroom and Lobby.
* Custom Input System – Supports WASD/Arrow key movement and event-driven interactions.
* Event-Driven – Handles player actions and state changes.


## Installation  
1. Clone the repository:
    
   ```bash
   git clone https://github.com/yourusername/shades-of-meaning.git
   cd shades-of-meaning
3. Open the index.html file in your browser.

*Everything is now set up for you to begin playing!*


### Controls
- Arrow Keys / WASD – Move the character.
- T Key – Toggle between the human and canine characters.

## Project Structure
```bash
/assets  
  /images  -> Sprites & Map Assets  
/scripts  
  DirectionInput.js  -> Handles player movement inputs  
  WorldState.js  -> Manages the game world and rendering  
  WorldMap.js  -> Defines maps and entities  
  Entity.js  -> Base class for all objects such as playable characters(actors), items, etc
  Actor.js  -> Extends Entity for playable characters  
  Sprite.js  -> Handles sprite rendering  
  initGame.js  -> starts the game  
index.html  -> Main game entry point  
styles.css  -> Game UI styling  
utils.js  -> All helper functions  
