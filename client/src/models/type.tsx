export class PokeType {
  private statAvg: Stats = {
    "hp": 0,
    "speed": 0,
    "attack": 0,
    "defense": 0,
    "sp_def": 0,
    "sp_atk": 0,
    "weight": 0,
    "height": 0
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

  public getStatMap(): Stats {
    return this.statAvg;
  }
}


export interface Stats {
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
