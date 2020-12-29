<template>
  <v-container class="full-height" fluid>
    <v-row>
      <v-col cols="12" sm="8" md="9" lg="10">
        <div style="display: flex; align-items: center">
          <span class="mr-2 my-2">Filters:</span>
          <v-chip-group v-if="!activeFilters.length" column>
            <v-chip
              v-for="filter in filters"
              :key="filter"
              small
              :color="getChipColor(filter)"
              :text-color="getChipTextColor(filter)"
              @click="addFilter(filter)"
            >
              {{ filter }}
            </v-chip>
          </v-chip-group>
          <v-chip-group v-if="activeFilters.length">
            <v-chip
              v-for="filter in activeFilters"
              :key="filter"
              small
              close
              :color="getChipColor(filter)"
              :text-color="getChipTextColor(filter)"
              @click:close="removeFilter(filter)"
              >{{ filter }}</v-chip
            >
          </v-chip-group>
        </div>
      </v-col>
      <v-col cols="12" sm="4" md="3" lg="2">
        <v-form>
          <v-text-field
            dense
            solo
            clearable
            :error="searchArg && !filteredProjects.length"
            placeholder="Filter..."
            v-model="searchArg"
          ></v-text-field>
        </v-form>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="project in filteredProjects"
        :key="project.name"
        cols="12"
        md="6"
        lg="4"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            :elevation="hover ? 16 : 2"
            class="transition-fast-in-fast-out"
          >
            <v-img
              class="white--text align-end"
              :src="`/images/${project.image}`"
              height="200px"
              contain
              :style="{ 'background-color': project.backgroundColor }"
            ></v-img>
            <v-card-title>
              <div style="flex: 1; word-break: normal">{{ project.name }}</div>
              <v-chip
                class="ml-2"
                v-for="technology in project.technologies"
                :key="technology"
                small
                :color="getChipColor(technology)"
                :text-color="getChipTextColor(technology)"
                @click="addFilter(technology)"
                >{{ technology }}</v-chip
              >
            </v-card-title>
            <v-card-subtitle>{{ project.date }}</v-card-subtitle>
            <v-card-text>{{ project.description }}</v-card-text>
            <v-card-actions>
              <v-btn
                v-if="project.link"
                text
                color="primary"
                @click="openUrl(project.link)"
                >Learn More</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Projects from "../../data/projects.json";
export default {
  name: "Projects",
  data: () => ({
    projects: Projects,
    activeFilters: [],
    searchArg: ""
  }),
  methods: {
    getChipColor: function(value) {
      switch ((value || "").toLowerCase()) {
        case "aws":
          return "#f8991d";
        case "javascript":
          return "#f7df1e";
        case "jquery":
          return "blue";
        case "laravel":
          return "#ff2d20";
        case "node":
          return "green";
        case "typescript":
          return "#007ACC";
        case "vue":
          return "#4FC08D";
        default:
          return "secondary";
      }
    },
    getChipTextColor: function(value) {
      switch ((value || "").toLowerCase()) {
        case "javascript":
          return "black";
        default:
          return "white";
      }
    },
    openUrl: function(url) {
      if (url) {
        window.open(url, "_blank");
      }
    },
    addFilter: function(filter) {
      if (!this.activeFilters.includes(filter)) {
        this.activeFilters.push(filter);
      }
    },
    removeFilter: function(filter) {
      const i = this.activeFilters.indexOf(filter);

      if (i > -1) {
        this.activeFilters.splice(i, 1);
      }
    }
  },
  computed: {
    filters() {
      const filters = [];
      this.filteredProjects.forEach(project => {
        project.technologies.forEach(technology => {
          if (!filters.includes(technology)) {
            filters.push(technology);
          }
        });
      });
      return filters.sort();
    },
    filteredProjects() {
      let projects = this.projects.filter(project => {
        let include = true;

        this.activeFilters.forEach(filter => {
          if (!project.technologies.includes(filter)) {
            include = false;
          }
        });

        return include;
      });

      if (this.searchArg) {
        projects = projects.filter(project => {
          return JSON.stringify(project).includes(this.searchArg);
        });
      }

      return projects;
    }
  }
};
</script>
