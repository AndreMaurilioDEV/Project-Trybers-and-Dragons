import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static instancesNumber = 0;

  constructor(
    name: string,
  ) {
    super(name);
    Warrior.instancesNumber++;
  }

  get energyType(): EnergyType {
    return 'stamina';
  }

  static createdArchetypeInstances() {
    return Warrior.instancesNumber;
  }
}

export default Warrior;