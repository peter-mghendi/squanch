import { UrlUtils } from "../utils/UrlUtils";
import axios from "axios";

// const axios = require("axios");
const apiUrl = "https://rickandmortyapi.com/api";

export class RickAndMortyService {
  static getCharacters(ids = [], page = 1) {
    let url = `${apiUrl}/character`;
    if (Array.isArray(ids) && ids.length > 0) {
      url += `/${ids.join()}`;
    }

    let options = null;
    if (page > 1) options = { params: { page: page } };
    return axios.get(url, options);
  }

  static getLocations(ids = [], page = 1) {
    let url = `${apiUrl}/location`;
    if (Array.isArray(ids) && ids.length > 0) {
      url += `/${ids.join()}`;
    }

    let options = null;
    if (page > 1) options = { params: { page: page } };
    return axios.get(url, options);
  }

  static getEpisodes(ids = [], page = 1) {
    let url = `${apiUrl}/episode`;
    if (Array.isArray(ids) && ids.length > 0) {
      url += `/${ids.join()}`;
    }

    let options = null;
    if (page > 1) options = { params: { page: page } };
    return axios.get(url, options);
  }

  static getCharacter(id) {
    return axios.get(`${apiUrl}/character/${id}`).then(async res => {
      let data = res.data;
      const response = await this.getEpisodes(
        UrlUtils.extractIds(data.episode)
      );
      data.episodes = Array.isArray(response.data)
        ? response.data
        : [response.data];
      return data;
    });
  }

  static getLocation(id) {
    return axios.get(`${apiUrl}/location/${id}`).then(async res => {
      let data = res.data;
      const response = await this.getCharacters(
        UrlUtils.extractIds(data.residents)
      );
      data.residents = Array.isArray(response.data)
        ? response.data
        : [response.data];
      return data;
    });
  }

  static getEpisode(id) {
    return axios.get(`${apiUrl}/episode/${id}`).then(async res => {
      let data = res.data;
      const response = await this.getCharacters(
        UrlUtils.extractIds(data.characters)
      );
      data.characters = Array.isArray(response.data)
        ? response.data
        : [response.data];
      return data;
    });
  }
}
