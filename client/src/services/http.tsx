// TODO : Set default Headers etc

export const get = (uri: string): Promise<any> => {
  return fetch(uri, {
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
