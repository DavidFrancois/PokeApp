// TODO : Set default Headers etc

const pokeApiUrl = "https://pokeapi.co/api";

export const get = (uri: string): Promise<any> => {
  return fetch(pokeApiUrl + uri, {
    method: 'GET'
  })
  .then((res) => {
    return res.json();
  }, (err) => {
    // TODO: handle error
    console.log(err);
    return err;
  });
}