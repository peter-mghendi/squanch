import axios from "axios";

const apiUrl = "http://www.omdbapi.com/?i=&season=1&episode=1&apiKey=";
const apiKey = "2cd8459d";
const i = "tt2861424";

export class OmdbService {
  static getEpisodeInfo(episodeString) {
    const x = this.#parseEpisode(episodeString);
    return axios.get(apiUrl, { apiKey, i, season: x.s, episode: x.e });
  }

  static #parseEpisode(episodeString) {
    const parts = episodeString.match(/\d+/g);
    return { s: parts[0], e: parts[1] };
  }
}
