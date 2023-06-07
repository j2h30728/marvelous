export const apiClient = async <Response>(
  url: string,
  option?: RequestInit
): Promise<Response> => {
  try {
    const response = await fetch(url, option);
    if (!response.ok) {
      throw new Error("알수없는 에러 입니다.");
    }
    return response.json();
  } catch (error) {
    alert(error);
    throw error;
  }
};
