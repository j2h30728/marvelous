class ApiUrl {
  static baseUrl =
    "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters";
  static list = `${ApiUrl.baseUrl}?limit=50&orderBy=modified&series=24229,1058,2023`;
}
export default Object.freeze(ApiUrl);
