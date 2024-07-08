//JS game logic

class Character {
  constructor(charName, health, attack) {
    this.charName = charName;
    this.health = health;
    this.attack = attack;
  }

  attackEnemy(enemy) {
    console.log(
      `${this.name} attacks ${enemy.name} for ${this.attack} damage!`
    );
    enemy.health -= this.attack;
    console.log(`${enemy.name} has ${enemy.health} health left.`);
  }
}

class Item {
  constructor(name, effect) {
    this.name = name;
    this.effect = effect; // Could be health restoration, attack boost, etc.
  }
}

class Player extends Character {
  constructor(equipments, stats) {
    super(charName, health, attack);
    this.equipments = [];
    this.stats = [];
  }

  equipItem(item) {
    console.log(`you have equipped ${item.name}`);
    this.equipments += item;
    console.log(`Your new stats are ${this.stats}`);
  }
}


//Adding prompts to start the game
//let playerName = prompt('Enter your username');
//let health = 100;
//let attack = 1;

let timer = new Date();
console.log(timer.getTime());
//Game loop
// (function (player){
//   while (player) {
//     let player = new Character();
//     if (player.health > 0) {
//       console.log(player);
//     }
//     player.health - 10;
//   }
// })()