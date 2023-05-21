interface Response {
  code: number;
  data: {
    results: Array<Character>;
  };
}

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

export const get = async (url: string) => {
  try {
    const response: Response = await (await fetch(url)).json();
    if (response.code === 200) {
      return response.data.results;
    }
    throw new Error("알수없는 에러 입니다.");
  } catch (error) {
    alert(error);
  }
};
