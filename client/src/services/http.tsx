// TODO : Set default Headers etc

export const get = (url: string): Promise<any> => {
  return fetch(url, {
    method: "GET",
  }).then((res) => {
    return res.json();
  }, (err) => {
    // TODO: handle error
    return err;
  });
}