import axios from "axios";
import api_config from "../config/api";

var client = axios.create({
  baseURL: api_config.api_url
});

async function listAllCurrencies() {
  try {
    let response = await client.get(`/currencies?apiKey=${api_config.api_key}`);
    return response.data.results;
  } catch (error) {
    return { error: "Não foi possível carregar as moedas." };
  }
}

async function convertCurrency(source, target) {

  try {
    let response = await client.get(`/convert?apiKey=${api_config.api_key}&q=${source}_${target}&compact=ultra`);
    return response.data;
  }
  catch (error) {
    return { error: "Não foi possível converter." };
  }
}

export default { listAllCurrencies, convertCurrency };
