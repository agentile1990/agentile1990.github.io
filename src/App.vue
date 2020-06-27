<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense color="primary" dark height="100vh">
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>fas fa-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/resume">
          <v-list-item-action>
            <v-icon>fas fa-file-alt</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Resume</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-toolbar-title>Andrew Gentile</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container class="full-height" flud>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app color="secondary" dark>Social Icons</v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false
  })
};
</script>
