<template>
  <v-container class="full-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="9" md="8" lg="7">
        <v-card class="mt-5" v-for="course in courses" :key="course.name">
          <v-card-title>
            <div style="flex: 1">{{ course.name }}</div>
            <v-chip class="ml-2" small color="secondary">
              {{ course.subject }}
            </v-chip>
          </v-card-title>
          <v-card-subtitle>
            {{ course.institution }} - <em>{{ course.date }}</em>
          </v-card-subtitle>
          <v-card-text>{{ course.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Courses from "../../data/courses.json";

export default {
  name: "Courses",
  data: () => ({
    courses: Courses
  }),
  methods: {}
};
</script>
