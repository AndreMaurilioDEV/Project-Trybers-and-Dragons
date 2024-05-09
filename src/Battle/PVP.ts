import Battle from './Battle';
import Character from '../Character';

class PVP extends Battle {
  player1: Character;
  player2: Character;

  constructor(winner: Character, loser: Character) {
    super(player1);
    this.player1 = winner;
    this.player2 = loser;
  }

  fight(): number {
    const result = super.fight();
    if (result === 1) {
      return 1;
    } 
    return -1;
  }
}

const player1 = new Character('Lutador');
const player2 = new Character('Lutador 2');
const pvp = new PVP(player1, player2);

export default PVP;