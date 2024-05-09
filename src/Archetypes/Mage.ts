import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static instancesNumber = 0;

  constructor(
    name: string,
  ) {
    super(name);
    Mage.instancesNumber++;
  }

  get energyType(): EnergyType {
    return 'mana';
  }

  static createdArchetypeInstances() {
    return Mage.instancesNumber;
  }
}

export default Mage;