// TODO : Set default Headers etc

const pokeApiUrl = "https://pokeapi.co/api/v2/";

export const get = (uri: string): Promise<any> => {
  return fetch(pokeApiUrl + uri, {
    method: "GET",
  }).then((res) => {
    return res.json();
  }, (err) => {
    // TODO: handle error
    return err;
  });
}