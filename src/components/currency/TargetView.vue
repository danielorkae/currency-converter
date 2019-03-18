<script>
  export default {
    props: ["currencySymbol", "value"]
  };
</script>


<template>
  <v-layout>
    <span class="headline">{{ this.currencySymbol }}</span>
    <h3 class="display-2">{{ this.value }}</h3>
  </v-layout>
</template>
