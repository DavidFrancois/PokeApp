// TODO : Set Headers etc
import * as HttpService from './http';

const ownApiUrl = "http://localhost:8080";

export const getTweets= (str: string): Promise<any> => {
  return HttpService.get(ownApiUrl + "/tweets/" + str);
}