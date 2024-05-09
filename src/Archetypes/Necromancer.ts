import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static instancesNumber = 0;
  private _type: EnergyType = 'mana';

  constructor(
    name: string,
  ) {
    super(name);
    Necromancer.instancesNumber += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances() {
    return Necromancer.instancesNumber;
  }
}

export default Necromancer;