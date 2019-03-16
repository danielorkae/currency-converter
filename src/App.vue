<script>
  import app_config from "@/config/app.js";
  import MenuList from "@/components/menu/MenuList";

  export default {
    components: {
      MenuList
    },

    data: () => ({
      isDrawerOpen: null,

      menu: [
        {
          key: 0,
          title: "Home",
          url: "/",
          icon: "home"
        },
        {
          key: 1,
          title: "About",
          url: "/about",
          icon: "info"
        }
      ]
    }),

    computed: {
      config() {
        return app_config;
      }
    },

    props: {
      source: String
    }
  };
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="isDrawerOpen" fixed app>
      <menu-list :list="menu"></menu-list>
    </v-navigation-drawer>

    <v-toolbar :color="this.config.app_theme" dark fixed app>
      <v-toolbar-side-icon @click.stop="isDrawerOpen = !isDrawerOpen"/>

      <v-toolbar-title>{{ this.config.app_title }}</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>
