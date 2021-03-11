<template>
  <v-container class="full-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="9" md="8" lg="7">
        <v-card
          class="mt-5"
          v-for="testimonial in testimonials"
          :key="testimonial.id"
        >
          <v-card-text>
            <div class="blockquote">"{{ testimonial.text }}"</div>
            <div class="d-flex align-center">
              <v-avatar
                tile
                class="align-content-center"
                v-if="testimonial.avatar"
              >
                <img :src="`/images/${testimonial.avatar}`" />
              </v-avatar>
              <v-avatar tile v-if="!testimonial.avatar">
                <v-icon large>fas fa-user</v-icon>
              </v-avatar>
              <div class="flex-1 ml-5">
                <div class="font-weight-bold">{{ testimonial.author }}</div>
                <div>
                  <em>{{ testimonial.authorTitle }}</em>
                </div>
                <div>
                  <em>{{ testimonial.date }}</em>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Testimonials from "../../data/testimonials.json";

export default {
  name: "Testimonials",
  data: () => ({
    testimonials: Testimonials
  })
};
</script>
<style scoped>
.blockquote {
  padding: 16px 16px 16px 24px;
  font-size: 18px;
  font-weight: 300;
}
</style>
