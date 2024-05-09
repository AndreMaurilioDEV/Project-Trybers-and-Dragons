import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static instancesNumber = 0;
  private _type: EnergyType = 'stamina';

  constructor(
    name: string,
  ) {
    super(name);
    Ranger.instancesNumber += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances() {
    return Ranger.instancesNumber;
  }
}

export default Ranger;