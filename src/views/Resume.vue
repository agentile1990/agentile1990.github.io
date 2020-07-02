<template>
  <div>
    <v-speed-dial fixed right bottom>
      <template v-slot:activator>
        <v-btn fab color="accent">
          <v-icon>fas fa-plus</v-icon>
        </v-btn>
      </template>
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            fab
            color="primary"
            @click="openWord()"
          >
            <v-icon>fas fa-file-word</v-icon>
          </v-btn>
        </template>
        <span>View / Download Word</span>
      </v-tooltip>
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            fab
            color="primary"
            @click="openPdf()"
          >
            <v-icon>fas fa-file-pdf</v-icon>
          </v-btn>
        </template>
        <span>View / Download PDF</span>
      </v-tooltip>
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" fab color="primary" @click="share()">
            <v-icon>fas fa-share-alt</v-icon>
          </v-btn>
        </template>
        <span>Share Link</span>
      </v-tooltip>
    </v-speed-dial>

    <v-snackbar v-model="snackbar">
      <v-icon small class="mr-2">{{ snackbarIcon }}</v-icon
      >{{ snackbarText }}
      <template v-slot:action="{ attrs }">
        <v-btn @click="snackbar = false" v-bind="attrs" text color="accent">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-row align="center" justify="center">
      <v-col cols="12" class="text-center">
        <div class="text-h5">{{ resume.name }}</div>
        <div class="subtitle-1">
          {{ resume.title }}
        </div>
        <div class="subtitle-1">
          {{ `${resume.contact.phone} | ${resume.contact.email}` }}
        </div>
      </v-col>
    </v-row>
    <v-row
      v-for="section in resume.sections"
      :key="section.name"
      align="center"
      justify="center"
    >
      <v-col cols="12" sm="9" md="8" lg="7">
        <v-divider></v-divider>
        <div class="text-h6 mt-4 mb-2">
          <v-icon class="pr-1" style="margin-top: -5px;">{{
            section.icon
          }}</v-icon>
          {{ section.name }}
        </div>

        <div v-if="section.type === 'card'">
          <expansion-card v-for="item in section.items" :key="item.name">
            <template v-slot:title>
              <v-card-title>{{ item.name }}</v-card-title>
            </template>
            <template v-slot:subtitle>
              <v-card-subtitle>
                <div style="display: flex">
                  <div v-if="item.title" style="flex: 1">
                    {{ item.title }}
                  </div>
                  <div v-if="item.title" class="text-right text-caption">
                    <div>{{ item.location }}</div>
                    <div>{{ item.date }}</div>
                  </div>
                  <div v-else>
                    {{ `${item.location} (${item.date})` }}
                  </div>
                </div>
              </v-card-subtitle>
            </template>
            <template v-slot:text>
              <v-card-text class="text-body-1">
                <ul v-if="item.items">
                  <li v-for="i in item.items" :key="i">{{ i }}</li>
                </ul>
                {{ item.description }}
              </v-card-text>
            </template>
            <template v-slot:expand-text>
              <div class="text-body-2">
                <ul>
                  <li v-for="d in item.details" :key="d">{{ d }}</li>
                </ul>
              </div>
            </template>

            <v-card-subtitle>{{
              `${item.location} (${item.date})`
            }}</v-card-subtitle>
          </expansion-card>
        </div>

        <div v-if="section.type === 'table'">
          <v-simple-table class="elevation-2" dense>
            <thead>
              <tr>
                <th>Name</th>
                <th>Framework</th>
                <th>Level</th>
                <th>Experience</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in section.items"
                :key="`${item.name}-${item.framework}`"
              >
                <td>{{ item.name }}</td>
                <td>{{ item.framework }}</td>
                <td>{{ item.level }}</td>
                <td>{{ item.experience }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ExpansionCard from "@/components/ExpansionCard.vue";
import Resume from "../../data/resume.json";

export default {
  components: {
    ExpansionCard
  },
  name: "Resume",
  data: () => ({
    resume: Resume,
    snackbar: false,
    snackbarText: "",
    snackbarIcon: ""
  }),
  methods: {
    openWord: function() {
      window.open(this.resume.links.word, "_blank");
    },

    openPdf: function() {
      window.open(this.resume.links.pdf, "_blank");
    },

    share: function() {
      // Create DOM element to copy from
      const el = document.createElement("textarea");
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";

      // Set text on DOM element
      el.value = this.resume.links.web;

      // Add DOM element to document
      document.body.appendChild(el);

      // COpy text
      el.select();
      document.execCommand("copy");

      // Remove DOM element from document
      document.body.removeChild(el);

      this.snackbarText = "Link copied to clipboard!";
      this.snackbarIcon = "fas fa-link";
      this.snackbar = true;
    }
  }
};
</script>
