<template>
  <v-container class="full-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="9" md="8" lg="7">
        <v-card class="mt-5" v-for="course in courses" :key="course.name">
          <v-card-title>
            <div style="flex: 1; word-break: normal">{{ course.name }}</div>
            <v-chip class="ml-2" small color="secondary">
              {{ course.subject }}
            </v-chip>
          </v-card-title>
          <v-card-subtitle>
            {{ course.institution }} - <em>{{ course.date }}</em>
          </v-card-subtitle>
          <v-card-text>
            {{ course.description }}
            <div v-if="course.repos">
              <div
                v-for="repo in course.repos"
                :key="repo.name"
                class="mt-2 mb-2"
              >
                <v-btn
                  color="secondary"
                  x-small
                  width="160"
                  style="justify-content: flex-start"
                  @click="openLink(repo.url)"
                >
                  <v-icon x-small class="mr-2">fab fa-github</v-icon>
                  {{ repo.name }}
                </v-btn>
              </div>
            </div>
            <div v-if="course.certificate">
              <v-dialog v-model="dialog" max-width="750">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    x-small
                    color="secondary"
                    width="160"
                    style="justify-content: flex-start"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon x-small class="mr-2">fas fa-graduation-cap</v-icon>
                    View Certificate
                  </v-btn>
                </template>
                <v-card>
                  <v-card-text>
                    <v-img
                      :src="`/images/certificates/${course.certificate}`"
                      contain
                    ></v-img>
                  </v-card-text>
                  <v-divider />
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-card-text>
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
    courses: Courses,
    dialog: false
  }),
  methods: {
    openLink: function(url) {
      window.open(url, "_blank");
    }
  }
};
</script>
