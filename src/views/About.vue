<script>
import app_config from "@/config/app";

export default {
  data() {
    return {
      config: app_config
    }
  }
}
</script>

<template>
  <v-container fill-height>
    <v-layout align-center justify-center column>
      <v-flex xs1>
        <v-avatar size="100" class="ma-4">
          <img
            src="http://www.gravatar.com/avatar/97fc101e3ed8525b6f3280c9e68abaa6?s=100&d=identicon"
          >
        </v-avatar>
      </v-flex>
      <v-flex xs1>
        <h1 class="display-1">Daniel Lopes</h1>
        <p class="subtitle">danielorkae@outlook.com</p>
      </v-flex>
      <v-flex xs12>
        <p
          class="text-xs-center"
        >
        <a href="https://github.com/danielorkae/currency-converter" target="_blank">Currency Converter</a> made under the MIT license, with <a href="https://vuejs.org" target="_blank">VueJS</a> and <a href="https://vuetifyjs.com" target="_blank">Vuetify</a> by <a href="https://github.com/danielorkae" target="_blank">Daniel Lopes</a>, using the <a href="https://www.currencyconverterapi.com/" target="_blank">Currency Converter Api</a>.</p>
      </v-flex>
      <v-flex xs1>
        <p>v{{ this.config.app_version }}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
