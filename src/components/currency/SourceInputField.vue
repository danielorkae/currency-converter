<script>
  import { mapActions, mapGetters, mapState } from "vuex";
  import { VMoney } from "v-money";

  export default {
    directives: {
      money: VMoney
    },

    computed: {
      ...mapState({
        source: state => state.source
      }),

      ...mapGetters(["sourceCurrencyName", "sourceCurrencySymbol"]),

      sourceValue: {
        get() {
          return this.source.value;
        },

        set(value) {
          this.setSource({ value });
        }
      }
    },

    methods: mapActions(["setSource"])
  };
</script>

<template>
  <v-layout>
    <v-text-field
      :label="sourceCurrencyName"
      :prefix="sourceCurrencySymbol"
      v-money="{ precision: 2, thousands: '' }"
      v-model="sourceValue"
      type="tel"
    />
  </v-layout>
</template>
