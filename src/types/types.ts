export interface Character {
  id: number;
  name: string;
  thumbnail: {
    extension: "jpg";
    path: string;
  };
  series: {
    available: number;
    items: Array<Itmes>;
  };
  stories: {
    available: number;
    items: Array<Itmes>;
  };
  urls: Array<Url>;
}
export type Itmes = { name: string; resourceURI: string };
export type Url = { type: string; url: string };

export interface Response {
  code: number;
  data: {
    results: Array<Character>;
  };
}
