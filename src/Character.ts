import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf, Halfling } from './Races';
import getRandomInt from './utils';

const archeInstance = new Mage('Mago');
const raceInstance = new Halfling('Elfo', 8);

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private maxLifePoints = 0;
  private _lifePoints = 0;
  private _strength = 0;
  private _defense = 0;
  private _dexterity = 0;
  private _energy: Energy;
  private name = '';

  constructor(name: string) {
    this.name = name;
    this._dexterity = 8;
    this._race = new Elf('Elfo', this.dexterity);
    this._archetype = archeInstance;
    this.maxLifePoints = raceInstance.maxLifePoints / 2;
    this._lifePoints = this.maxLifePoints;
    this._strength = 5;
    this._defense = 6;
    this._energy = {
      type_: archeInstance.energyType,
      amount: 5,
    };
  }

  get race(): Race {
    return this.race;
  }
    
  get archetype(): Archetype {
    return this.archetype;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._defense;
  }

  get dexterity() {
    return this._dexterity;
  }

  get energy() {
    return {
      ...this._energy,
      amount: 10,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = this._defense - attackPoints;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
    this._lifePoints = this._lifePoints <= 0 ? -1 : this._lifePoints;
    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    this._lifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy = {
      type_: this._energy.type_,
      amount: 10,
    };

    if (this._lifePoints > raceInstance.maxLifePoints) {
      this.maxLifePoints = raceInstance.maxLifePoints;
    }
  }
}

export default Character;