<script>
  import Item from "./MenuItem";

  export default {
    props: ["list"],

    components: {
      Item
    }
  };
</script>

<template>
  <v-list dense>
    <item
      v-for="item in list"
      :key="item.key"
      :title="item.title"
      :icon="item.icon"
      :url="item.url"
    />
  </v-list>
</template>
