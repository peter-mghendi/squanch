import axios from "axios";

export class QuotesService {
  static getRandomQuote() {
    return axios.get(
      "https://rick-and-morty-api-phrases.herokuapp.com/phrases/en_us/random"
    );
  }
}
