import api from "@/api/currency";

export default {
  async loadCurrencies({ commit }) {
    commit("SET_LOADING_CURRENCIES", true);

    try {
      let currencies = await api.listAllCurrencies();
      commit("SET_CURRENCIES", currencies);
    } catch (error) {
      commit("SET_ERROR", error.message);
    }

    commit("SET_LOADING_CURRENCIES", false);
  },

  async loadConversionCoefficient({ commit, state }) {
    try {
      let conversionCoefficient = await api.getConversionCoefficient(state.source.key, state.target.key);

      commit("SET_CONVERSION_COEFFICIENT", Object.values(conversionCoefficient)[0]);
    } catch (error) {
      commit("SET_ERROR", error.message);
    }
  },

  setSource({ commit }, { key, value }) {
    commit("SET_SOURCE", { key, value });
  },

  setTarget({ commit }, { key }) {
    commit("SET_TARGET", { key });
  }
}
