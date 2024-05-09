import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static instancesNumber = 0;

  constructor(
    name: string,
  ) {
    super(name);
    Ranger.instancesNumber++;
  }

  get energyType(): EnergyType {
    return 'stamina';
  }

  static createdArchetypeInstances() {
    return Ranger.instancesNumber;
  }
}

export default Ranger;