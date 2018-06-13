import * as HttpService from './http';
// import { getPokemon } from './pokemon';

// pokeStore.type.foreach(t) => {
//   let type: Type = { name: t };
//   getType(t).then(() => {
//     t.pokemons.forEach(poke => {
//       getPokemon(poke).then(() => {

//         poke.stats.foreach() => if (type.statAvg.set(s, );
//       })
//     })
//   })
// }

export const getType = (str: string): Promise<any> => {
  return HttpService.get("type/" + str);
}

// export const computeAverage = (pokemon: any) => {
//   // let types: Type[] = [];
//   pokemon.types.forEach((t: any) => {
//     let currType: Type = { name: t.type.name, statAvg: new Map<string, number>() };
//     getType(t.type.name).then(type => {
//       type.pokemon.forEach((p: any) => {
//         getPokemon(p.pokemon.name).then(poke => {
//           poke.stats.forEach((st: any) => {
//             currType.statAvg.set(st.stat.name, (currType.statAvg.has(st.stat.name)) ?
//               currType.statAvg.get(st.stat.name) + st.base_stat :
//               st.base_stat);
//           });
//         });
//       });
//     });
//   });
// }

export interface Type {
  name: string,
  statAvg: Map<string, number>;
}
