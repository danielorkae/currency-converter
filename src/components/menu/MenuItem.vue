<script>
  export default {
    props: {
      title: String,
      icon: String,
      url: String
    },

    methods: {
      toNavigate(url) {
        this.$router.push(url);
      }
    }
  };
</script>

<template>
  <v-list-tile @click.prevent="toNavigate(url)">
    <v-list-tile-action>
      <v-icon>{{ this.icon }}</v-icon>
    </v-list-tile-action>

    <v-list-tile-content>
      <v-list-tile-title>{{ this.title }}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>
