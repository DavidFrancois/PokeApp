export class ApiRessource {
  constructor(private url: string, private name: string) {
    this.url = url;
    this.name = name;
  }

  public getUrl() {
    return this.url;
  }

  public getName() {
    return this.name;
  }
}