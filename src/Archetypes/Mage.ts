import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static instancesNumber = 0;
  private _type: EnergyType = 'mana';

  constructor(
    name: string,
  ) {
    super(name);
    Mage.instancesNumber += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances() {
    return Mage.instancesNumber;
  }
}

export default Mage;