export class UrlUtils {
  static getUrlParam(urlString, param) {
    const url = new URL(urlString);
    const queryString = url.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
  }

  static extractIds(urls) {
    return urls.map(x => x.split("/").slice(-1)[0]);
  }
}
