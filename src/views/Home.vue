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

        conversionCoefficient: 0,

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
      },

      targetCurrencySymbol() {
        if (
          this.currencies[this.target] &&
          this.currencies[this.target].currencySymbol
        )
          return this.currencies[this.target].currencySymbol;
      },

      targetValue() {
        return parseFloat(this.sourceValue * this.conversionCoefficient).toFixed(
          2
        );
      }
    },

    async mounted() {
      await this.loadCurrencies();
      await this.loadConversionCoefficient();
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

      async loadConversionCoefficient() {
        try {
          this.conversionCoefficient = await api.getConversionCoefficient(
            this.source,
            this.target
          );
        } catch (error) {
          this.error = error.message;
        }
      }
    }
  };
</script>

<template>
  <v-container fluid fill-height>
    <v-layout wrap align-content-space-between>
      <v-flex xs12>
        <v-layout>
          <span class="headline">{{ this.targetCurrencySymbol }}</span>
          <h3 class="display-2">{{ this.targetValue }}</h3>
        </v-layout>
      </v-flex>

      <v-flex xs12>
        <v-layout>
          <v-text-field
            :label="sourceCurrencyName"
            :prefix="sourceCurrencySymbol"
            v-money="{precision: 2, thousands: ''}"
            v-model="sourceValue"
          />
        </v-layout>

        <v-layout align-center>
          <v-flex xs12 sm6 d-flex>
            <v-select
              :items="idsCurrencies"
              label="Source"
              v-model="source"
              :loading="loadingCurrencies"
              :hint="sourceCurrencyName"
              persistent-hint
              @change="loadConversionCoefficient"
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
              @change="loadConversionCoefficient"
            />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

