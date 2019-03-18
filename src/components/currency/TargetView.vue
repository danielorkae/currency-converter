<script>
  import { mapGetters } from "vuex";

  export default {
    computed: mapGetters(["targetCurrencySymbol", "targetValue"])
  };
</script>


<template>
  <v-layout>
    <span class="headline">{{ this.targetCurrencySymbol }}</span>
    <h3 class="display-2">{{ this.targetValue }}</h3>
  </v-layout>
</template>
