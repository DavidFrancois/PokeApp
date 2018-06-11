
class PokeStore {
  private pokemons: string[];
  private listeners: any[] = [];

  constructor (initialState: string[]) {
    this.pokemons = initialState;
  }

  // TS Lint forbid use of Function type
  public addListener(l: any) {
    this.listeners.push(l);
  }

  // Emit only newly added pokemons or ALL pokemons ?
  public addPokemons(pokemons: string[]) {
    this.pokemons = this.pokemons.concat(pokemons);
    for (const listener of this.listeners) {
      listener(pokemons);
    }
  }

  public getState () {
    return this.pokemons;
  }
}

const pokeStore = new PokeStore([]);
export default pokeStore;