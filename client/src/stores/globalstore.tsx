class GlobalStore {
  private current: string;


  public getState(): string {
    return this.current;
  }

  public setState(str: string): void {
    if (posEnum.indexOf(str) >= 0) {
      this.current = str;
    }
  }
}

const posEnum = ["home", "search", "detail"];
const globalStore = new GlobalStore();
export default globalStore;