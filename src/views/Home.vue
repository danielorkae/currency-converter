<script>
  import { mapActions, mapState, mapGetters } from "vuex";
  import { VAlert } from "vuetify";
  import CurrenciesSelect from "@/components/currency/CurrenciesSelect";
  import TargetView from "@/components/currency/TargetView";
  import SourceInputField from "@/components/currency/SourceInputField";

  export default {
    components: {
      CurrenciesSelect,
      SourceInputField,
      TargetView,
      VAlert
    },

    computed: {
      ...mapState({
        error: state => state.error,
        source: state => state.source,
        target: state => state.target
      })
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
      <v-flex>
        <v-alert :value="!!error" type="error" outline>{{ this.error }}</v-alert>
      </v-flex>
    </v-layout>

    <v-layout v-else column>
      <v-flex xs8>
        <target-view/>
      </v-flex>

      <v-flex>
        <source-input-field/>
      </v-flex>

      <v-flex>
        <currencies-select/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
