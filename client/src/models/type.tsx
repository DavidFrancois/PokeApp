export class PokeType {
  private statAvg: IStats = {
    "attack": 0,
    "defense": 0,
    "height": 0,
    "hp": 0,
    "sp_atk": 0,
    "sp_def": 0,
    "speed": 0,
    "weight": 0
  }

  constructor (private name: string) {
    this.name = name;
  }

  public setValue(key: string, value: number): void {
    this.statAvg[key] = value;
  }

  public getValue(key: string): number {
    return this.statAvg[key];
  }

  public sumValue(key: string, value: number): void {
    this.statAvg[key] += value;
  }

  public getName(): string {
    return this.name;
  }

  public getStatMap(): IStats {
    return this.statAvg;
  }
}


export interface IStats {
  hp?: number,
  defense?: number,
  speed?: number,
  attack?: number
  sp_def?: number,
  sp_atk?: number,
  weight?: number,
  height?: number
}

export const StatsKeys = [
  "hp",
  "speed",
  "attack",
  "defense",
  "sp_def",
  "sp_atk",
  "weight",
  "height"
];
