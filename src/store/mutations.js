export default {
  SET_ERROR: (state, message) => {
    state.error = message;
  },

  SET_LOADING_CURRENCIES: (state, loading) => {
    state.currencies.loading = loading;
  },

  SET_CURRENCIES: (state, { results }) => {
    state.currencies.data = results;
    state.currencies.keys = Object.keys(results);
  },

  SET_CONVERSION_COEFFICIENT: (state, conversionCoefficient) => {
    state.conversionCoefficient = conversionCoefficient;
  },

  SET_SOURCE: (state, { key, value }) => {
    key != null && (state.source.key = key);
    value != null && (state.source.value = value);
  },

  SET_TARGET: (state, { key }) => {
    key != null && (state.target.key = key);
  }
}
