export class PokeType {
  private statAvg: Map<string, number> = new Map<string, number>();

  constructor (private name: string) {
    this.name = name;
    for (const s of Stats)
      this.statAvg.set(s, 0);
  }

  public setValue(key: string, value: number) {
    this.statAvg.set(key, value);
  }

  public getValue(key: string): number {
    const value = this.statAvg.get(key);
    let val: number = 0;
    if (value) val = value
    return val;
  }

  public sumValue(key: string, value: number) {
    this.statAvg.set(key, this.getValue(key) + value);
  }

  public getName() {
    return this.name;
  }

  public getStatMap() {
    return this.statAvg;
  }
}

export const Stats: string[] = [
  "hp",
  "speed",
  "attack",
  "sp_def",
  "sp_atk",
  "weight",
  "height"
]
