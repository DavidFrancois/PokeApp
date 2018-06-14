import * as PokeService from '../services/pokemon';
import typeStore from './typestore';

class PokeStore {
  private pokeNames: string[] = [];
  private pokemons: any[] = [];
  private pokeNameslisteners: any[] = [];
  private pokemonsListeners: any[] = [];

  public addPokeNamesListener(l: any) {
    this.pokeNameslisteners.push(l);

    // For components not yet mounted, hazardous, should be secured;
    l(this.pokeNames);
  }

  public addPokemonsListener(l: any) {
    this.pokemonsListeners.push(l);
    l(this.pokemons);
  }

  // Emit only newly added pokeName or ALL pokeName ?
  public addPokeNames(pokeNames: string[]) {
    this.pokeNames = this.pokeNames.concat(pokeNames);
    for (const listener of this.pokeNameslisteners) {
      listener(pokeNames);
    }
  }

  // Should check if Request is throttled and then wait before asking again
  public async addPokemons() {
    for (const p of this.pokeNames) {
      this.pokemons.push(await PokeService.getPokemon(p));
    };
  }

  public async addPokemonsV1(queryParam: string = "?limit=100") {
    const result = await PokeService.getPokemonV1(queryParam);
    this.pokemons = this.pokemons.concat(result.objects);

    for (const listener of this.pokemonsListeners) {
      listener(result.objects);
    }

    if (result.meta.next) {
      const next = result.meta.next.split('/');
      this.addPokemonsV1(next[next.length -1]);
    } else {
      typeStore.computeAvg();
    }
  }

  public getPokeNames () {
    return this.pokeNames;
  }

  public getPokemons () {
    return this.pokemons;
  }

  public getPokemon (str: string) {
    return this.pokemons.find((p) => p.name.toLowerCase() === str.toLowerCase());
  }
}

const pokeStore = new PokeStore();
export default pokeStore;