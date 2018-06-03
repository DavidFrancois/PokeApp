// TODO : Set default Headers etc

export const get = (url: string): Promise<JSON | void> => {
  return fetch(url, {
    method: "GET",
  }).then((res) => {
    return res.json();
  }, (err) => {
    // TODO: handle error
    return err;
  });
}