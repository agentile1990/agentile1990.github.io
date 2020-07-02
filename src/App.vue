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
      <v-container class="full-height" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app color="secondary" dark absolute>
      <v-container class="full-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" class="text-center">
            <v-hover
              v-for="s in socialMedia"
              v-bind:key="s.name"
              v-slot:default="{ hover }"
            >
              <a :href="s.url" target="_blank" style="text-decoration: none">
                <v-icon
                  :class="{ 'on-hover': hover }"
                  style="margin: 0px 10px;"
                >
                  {{ s.icon }}
                </v-icon></a
              >
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import SocialMedia from "../data/socialMedia.json";

export default {
  name: "App",
  data: () => ({
    socialMedia: SocialMedia,
    drawer: false
  })
};
</script>

<style lang="scss" scoped>
.on-hover {
  color: #00909e !important;
}
</style>
