import { Response } from "../types/types";

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
