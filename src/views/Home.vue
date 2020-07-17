<template>
  <div style="height: 100%">
    <v-parallax src="/images/bkg.jpg" dark height="800">
      <v-container class="full-height" fluid style="padding: 0px;">
        <v-row align="center" justify="center">
          <v-col cols="12">
            <div>
              <div class="text-h3 text-uppercase text-center">
                Hello, I'm Andrew
              </div>
              <div style="display: flex; justify-content: center">
                <div
                  class="my-5"
                  style="height: 1px; width: 10rem; border-top: 2px solid #dae1e7"
                ></div>
              </div>
              <div class="text-center text-subtitle-2 text-uppercase">
                A Software Developer and Music Technology Advocate
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col
            v-for="feature in home.features"
            :key="feature.name"
            cols="12"
            md="3"
          >
            <div class="text-center" style="margin-top: 5rem;">
              <v-icon color="white" size="64" class="mb-5">{{
                feature.icon
              }}</v-icon>
              <div class="text-subtitle-1 text-uppercase">
                {{ feature.name }}
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    <v-container class="full-height" fluid>
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>
              <v-icon class="mr-2" large style="color: #00909e"
                >fas fa-music</v-icon
              >
              About Me
            </v-card-title>
            <v-card-text class="text-body-1" v-html="home.about"></v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="/images/andrew.jpg" contain max-height="500"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Home from "../../data/home.json";

export default {
  name: "Home",
  data: () => ({
    home: Home
  })
};
</script>

<style scoped>
.title-box {
  padding: 3rem;
  border: 10px solid #dae1e7;
}
</style>
