import pokeStore from "./pokestore";

// import * as PokeService from '../services/pokemon';
import { PokeType, Stats } from '../models/type';

class PokeTypeStore {
  private listeners: any[] = [];
  private types: PokeType[] = [];
  private avgListeners: any[] = [];

  constructor (initialState: any[]) {
    this.types = initialState;
  }

  // TS Lint forbid use of Function type
  public addListener(l: any) {
    this.listeners.push(l);
    l(this.types);
  }

  public addAvgListener(l: any) {
    this.avgListeners.push(l);
  }

  public addPokeTypes(types: string[]) {
    for (const type of types)
      this.types.push(new PokeType(type));

    for (const listener of this.listeners) {
      listener(types);
    }
  }

  // Ugly Algorithm
  public computeAvg() {
    const pokemons = pokeStore.getPokemons();
    for (const type of this.types) {
      let pokeCount = 0;
      for (const poke of pokemons) {
        for (const t of poke.types) {
          if (t.name ===type.getName()) {
            ++pokeCount;
            for (const s of Stats)
              type.sumValue(s, Number.parseInt(poke[s]));
          }
        }
      }
      for (const s of Stats)
        if (type.getValue(s) > 0) type.setValue(s, Math.round(type.getValue(s) / pokeCount));
    }
    for (const l of this.avgListeners) {
      l("Ok");
    }
  }

  public getState () {
    return this.types;
  }

  public getTypes (names: string[]): PokeType[] {
    return this.types.filter(t => names.indexOf(t.getName()) >= 0);
  }
}

const typeStore = new PokeTypeStore([]);
export default typeStore;