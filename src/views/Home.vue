<script>
  import api from "@/api/currency";

  export default {
    data() {
      return {
        loadingCurrencies: false,
        currencies: [],
        source: "BRL",
        target: "USD",

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
      }
    }
  };
</script>

<template>
  <v-container fluid grid-list-xl>
    <v-layout align-center>
      <v-flex xs12 sm6 d-flex>
        <v-select
          :items="idsCurrencies"
          label="Source"
          v-model="source"
          :loading="loadingCurrencies"
          :hint="sourceCurrencyName"
          persistent-hint
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
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

