import axios from "axios";
import api_config from "../config/api";

var client = axios.create({
  baseURL: api_config.api_url
});

async function listAllCurrencies() {
  try {
    let response = await client.get(`/currencies?apiKey=${api_config.api_key}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.error : "We did not have a satisfactory response from server.");
  }
}

async function getConversionCoefficient(source, target) {
  try {
    let response = await client.get(
      `/convert?apiKey=${api_config.api_key}&q=${source}_${target}&compact=ultra`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.error : "We did not have a satisfactory response from server.");
  }
}

export default { listAllCurrencies, getConversionCoefficient };
