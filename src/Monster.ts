import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= this._lifePoints - attackPoints;
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter) {
    const damage = this.receiveDamage(this._strength);
    const remainingLife = enemy.lifePoints - damage;
    const updatedEnemy = { ...enemy, lifePoints: remainingLife };
    return updatedEnemy;
  }
}

export default Monster;