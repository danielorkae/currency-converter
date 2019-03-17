import axios from "axios";
import api_config from "../config/api";

var client = axios.create({
  baseURL: api_config.api_url
});

async function listAllCurrencies() {
  try {
    let response = await client.get(`/currencies?apiKeys=${api_config.api_key}`);
    return response.data.results;
  } catch (error) {
    throw new Error("Can't load the currencies");
  }
}

async function convertCurrency(source, target) {

  try {
    let response = await client.get(`/convert?apiKey=${api_config.api_key}&q=${source}_${target}&compact=ultra`);
    return response.data;
  }
  catch (error) {
    throw new Error("Can't convert this currency");
  }
}

export default { listAllCurrencies, convertCurrency };
