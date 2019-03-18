<script>
  import api from "@/api/currency";
  import { mapActions, mapState, mapGetters } from "vuex";
  import { VAlert } from "vuetify";
  import { VMoney } from "v-money";
  import TargetView from "@/components/currency/TargetView";

  export default {
    components: {
      TargetView,
      VAlert
    },

    directives: {
      money: VMoney
    },

    computed: {
      ...mapState({
        error: state => state.error,
        source: state => state.source,
        target: state => state.target,
        currencies: state => state.currencies
      }),

      ...mapGetters([
        "sourceCurrencyName",
        "sourceCurrencySymbol",
        "targetCurrencyName",
        "targetCurrencySymbol",
        "targetValue"
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

      sourceValue: {
        get() {
          return this.source.value;
        },

        set(value) {
          this.setSource({ value });
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

    async mounted() {
      await this.loadCurrencies();
      await this.loadConversionCoefficient();
    },

    methods: mapActions([
      "setSource",
      "setTarget",
      "loadCurrencies",
      "loadConversionCoefficient"
    ])
  };
</script>

<template>
  <v-container fluid fill-height>
    <v-layout v-if="!!error" align-start>
      <v-flex xs12>
        <v-alert :value="!!error" type="error" outline>{{ this.error }}</v-alert>
      </v-flex>
    </v-layout>
    <v-layout v-else wrap align-content-space-between>
      <v-flex xs12>
        <target-view :currency-symbol="targetCurrencySymbol" :value="targetValue"/>
      </v-flex>

      <v-flex xs12>
        <v-layout>
          <v-text-field
            :label="sourceCurrencyName"
            :prefix="sourceCurrencySymbol"
            v-money="{ precision: 2, thousands: '' }"
            v-model="sourceValue"
          />
        </v-layout>

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
      </v-flex>
    </v-layout>
  </v-container>
</template>
