<script>
  import api from "@/api/currency";
  import { VMoney } from "v-money";

  export default {
    directives: {
      money: VMoney
    },

    data() {
      return {
        loadingCurrencies: false,
        currencies: [],

        source: "BRL",
        target: "USD",

        sourceValue: 0,
        targetValue: 0,

        conversionCoefficiente: 0,

        error: null
      };
    },

    computed: {
      idsCurrencies() {
        return Object.keys(this.currencies).map(key => {
          return this.currencies[key].id;
        });
      },

      sourceCurrencyName() {
        if (this.currencies[this.source])
          return this.currencies[this.source].currencyName;
      },

      sourceCurrencySymbol() {
        if (
          this.currencies[this.source] &&
          this.currencies[this.source].currencySymbol
        )
          return this.currencies[this.source].currencySymbol;
      },

      targetCurrencyName() {
        if (this.currencies[this.target])
          return this.currencies[this.target].currencyName;
      }
    },

    async mounted() {
      this.loadCurrencies();
    },

    methods: {
      async loadCurrencies() {
        this.loadingCurrencies = true;

        try {
          this.currencies = await api.listAllCurrencies();
        } catch (error) {
          this.error = error.message;
        }

        this.loadingCurrencies = false;
      },

      async currencySelectHandle() {}
    }
  };
</script>

<template>
  <v-container fluid fill-height align-content-space-between wrap>
    <v-layout wrap align-content-space-between>
      <v-flex>
        <v-layout>
          <v-flex xs12 sm6 d-flex>
            <v-select
              :items="idsCurrencies"
              label="Source"
              v-model="source"
              :loading="loadingCurrencies"
              :hint="sourceCurrencyName"
              persistent-hint
              @change="currencySelectHandle"
            />
          </v-flex>
          <v-flex align-center>
            <v-icon>swap_horiz</v-icon>
          </v-flex>
          <v-flex xs12 sm6 d-flex>
            <v-select
              :items="idsCurrencies"
              label="Target"
              v-model="target"
              :loading="loadingCurrencies"
              :hint="targetCurrencyName"
              persistent-hint
              @change="currencySelectHandle"
            />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout>
          <v-text-field
            :label="sourceCurrencyName"
            :prefix="sourceCurrencySymbol"
            v-money="{precision: 2}"
            v-model="sourceValue"
          />
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

