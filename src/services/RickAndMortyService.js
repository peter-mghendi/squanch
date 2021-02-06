const axios = require = ("axios");
const apiUrl = "https://rickandmortyapi.com/api";

export class RickAndMortyService {
    static getCharacters(ids = []) {
        let url = `${apiUrl}/character`;
        if (Array.isArray(ids) && ids.length > 0) {
            url += `/${ids.join()}`;
        }

        return axios.get(url);
    }

    static getLocations(ids = []) {
        let url = `${apiUrl}/location`;
        if (Array.isArray(ids) && ids.length > 0) {
            url += `/${ids.join()}`;
        }

        return axios.get(url);
    }

    static getEpisodes(ids = []) {
        let url = `${apiUrl}/episode`;
        if (Array.isArray(ids) && ids.length > 0) {
            url += `/${ids.join()}`;
        }

        return axios.get(url);
    }

    static getCharacter(id) {
        if (!Number.isInteger(id)) {
            throw new Error("wrong parameter type");
        }

        return axios.get(`${apiUrl}/character/${id}`)
            .then(response => {
                let data = response.data;
                this.getEpisodes(this.#extractIds(data.episode))
                    .then(response =>
                        data.episodes = Array.isArray(response.data)
                            ? response.data : [response.data]);
            });
    }

    static getLocation(id) {
        if (!Number.isInteger(id)) {
            throw new Error("wrong parameter type");
        }

        return axios.get(`${apiUrl}/location/${id}`)
            .then(response => {
                let data = response.data;
                this.getCharacters(this.#extractIds(data.residents))
                    .then(response =>
                        data.residents = Array.isArray(response.data) ?
                            response.data : [response.data]);
            });
    }

    static getEpisode(id) {
        if (!Number.isInteger(id)) {
            throw new Error("wrong parameter type");
        }

        return axios.get(`${apiUrl}/episode/${id}`)
            .then(response => {
                let data = response.data;
                this.getCharacters(this.#extractIds(data.characters))
                    .then(response =>
                        data.characters = Array.isArray(response.data)
                            ? response.data : [response.data]);
            });
    }

    static #extractIds(urls) {
        return urls.map(x => x.split("/").slice(-1)[0]);
    }
}