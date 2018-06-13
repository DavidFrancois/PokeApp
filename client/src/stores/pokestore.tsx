
class PokeStore {
  private pokemons: string[];
  private listeners: any[] = [];


  constructor (initialState: string[]) {
    this.pokemons = initialState;
  }

  public addListener(l: any) {
    this.listeners.push(l);

    // For components not yet mounted, hazardous, should be secured;
    l(this.pokemons);
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