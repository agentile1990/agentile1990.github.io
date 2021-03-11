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

        <v-list-item link to="/projects">
          <v-list-item-action>
            <v-icon>fas fa-code</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/courses">
          <v-list-item-action>
            <v-icon>fas fa-graduation-cap</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Courses</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/testimonials">
          <v-list-item-action>
            <v-icon>fas fa-quote-left</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Testimonials</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer app color="secondary" dark absolute>
      <v-container class="full-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" class="text-center">
            <div
              style="display: flex; justify-content: center; align-content: center"
            >
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
              <a
                class="ml-2"
                style="display: flex; align-items: center"
                href="https://travis-ci.com/github/agentile1990/agentile1990.github.io"
                target="_blank"
              >
                <v-img
                  max-width="80"
                  contain
                  src="https://travis-ci.com/agentile1990/agentile1990.github.io.svg?branch=source"
                ></v-img>
              </a>
            </div>
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
    drawer: false,
    currentPage: ""
  }),
  computed: {
    title() {
      if (!this.currentPage || this.currentPage === "Home") {
        return "Andrew Gentile";
      }

      return `Andrew Gentile - ${this.currentPage}`;
    }
  },
  watch: {
    $route: function() {
      this.currentPage = this.$router.currentRoute.name;
    }
  }
};
</script>

<style lang="scss" scoped>
.on-hover {
  color: #00909e !important;
}
</style>
