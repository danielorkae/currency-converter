export default {
  sourceCurrencyName: state => {
    if (state.currencies.data[state.source.key])
      return state.currencies.data[state.source.key].currencyName;

    return "";
  },

  sourceCurrencySymbol: state => {
    if (state.currencies.data[state.source.key] && state.currencies.data[state.source.key].currencySymbol)
      return state.currencies.data[state.source.key].currencySymbol;

    return "";
  },

  targetCurrencyName: state => {
    if (state.currencies.data[state.target.key])
      return state.currencies.data[state.target.key].currencyName;

    return "";
  },

  targetCurrencySymbol: state => {
    if (state.currencies.data[state.target.key] && state.currencies.data[state.target.key].currencySymbol)
      return state.currencies.data[state.target.key].currencySymbol;

    return "";
  },

  targetValue: state => {
    return parseFloat(state.source.value * state.conversionCoefficient)
      .toFixed(2);
  }
}
