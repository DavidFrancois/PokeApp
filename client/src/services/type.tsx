import * as HttpService from './http';

export const getType = (str: string): Promise<any> => {
  return HttpService.get("/v2/type/" + str);
}
