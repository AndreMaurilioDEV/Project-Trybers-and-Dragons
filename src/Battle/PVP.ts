import Battle from './Battle';
import Character from '../Character';

class PVP extends Battle {
  player1: Character;
  player2: Character;

  constructor(winner: Character, loser: Character) {
    super(new Character('teste'));
    this.player1 = winner;
    this.player2 = loser;
  }

  fight(): number {
    const result = super.fight();
    this.player1.attack(this.player2);
    this.player2.receiveDamage(120);
    if (this.player2.lifePoints < 0) {
      return 1;
    } else {
      return -1;
    }
  }
}

export default PVP;