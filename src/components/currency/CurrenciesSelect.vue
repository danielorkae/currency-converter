<script>
  import { mapActions, mapGetters, mapState } from "vuex";
  export default {
    computed: {
      ...mapState({
        currencies: state => state.currencies,
        source: state => state.source,
        target: state => state.target
      }),

      ...mapGetters([
        "sourceCurrencyName",
        "sourceCurrencySymbol",
        "targetCurrencyName",
        "targetCurrencySymbol"
      ]),

      sourceKey: {
        get() {
          return this.source.key;
        },

        async set(key) {
          this.setSource({ key });

          await this.loadConversionCoefficient({
            source: this.sourceKey,
            target: this.targetKey
          });
        }
      },

      targetKey: {
        get() {
          return this.target.key;
        },

        async set(key) {
          this.setTarget({ key });

          await this.loadConversionCoefficient({
            source: this.sourceKey,
            target: this.targetKey
          });
        }
      }
    },

    methods: {
      ...mapActions(["loadConversionCoefficient", "setSource", "setTarget"])
    }
  };
</script>

<template>
  <v-layout align-center>
    <v-flex xs12 sm6 d-flex>
      <v-select
        :items="currencies.keys"
        label="Source"
        v-model="sourceKey"
        :loading="currencies.loading"
        :hint="sourceCurrencyName"
        persistent-hint
      />
    </v-flex>
    <v-flex align-center>
      <v-icon>swap_horiz</v-icon>
    </v-flex>
    <v-flex xs12 sm6 d-flex>
      <v-select
        :items="currencies.keys"
        label="Target"
        v-model="targetKey"
        :loading="currencies.loading"
        :hint="targetCurrencyName"
        persistent-hint
      />
    </v-flex>
  </v-layout>
</template>
