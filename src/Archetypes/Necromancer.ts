import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static instancesNumber = 0;

  constructor(
    name: string,
  ) {
    super(name);
    Necromancer.instancesNumber++;
  }

  get energyType(): EnergyType {
    return 'mana';
  }

  static createdArchetypeInstances() {
    return Necromancer.instancesNumber;
  }
}

export default Necromancer;