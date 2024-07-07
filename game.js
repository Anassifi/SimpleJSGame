//JS game logic

class Character {
    constructor(name, health, attack, equipments, stats) {
        this.name = name
        this.health = health
        this.attack = attack
        this.equipments = equipments
        this.stats = stats
    }

    equipItem(item) {
        console.log(`you have equipped ${item}`)
        this.equipments += item;
    }
}