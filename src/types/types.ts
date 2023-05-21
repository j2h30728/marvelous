export interface Character {
  id: number;
  name: string;
  thumbnail: {
    extension: "jpg";
    path: string;
  };
  series: {
    available: number;
    items: Array<itmes>;
  };
  stories: {
    available: number;
    items: Array<itmes>;
  };
  urls: url[];
}
type itmes = { name: string; resourceURI: string };
type url = { type: string; url: string };

export interface Response {
  code: number;
  data: {
    results: Array<Character>;
  };
}
