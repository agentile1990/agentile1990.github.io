import Vue from "vue";
import Vuetify from "vuetify/lib";

/**
 * Font Awesome Config
 */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faFileAlt, faHome } from "@fortawesome/free-solid-svg-icons";

library.add(faFileAlt);
library.add(faHome);

import {
  faGithub,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

library.add(faGithub);
library.add(faInstagram);
library.add(faTwitter);

Vue.component("font-awesome-icon", FontAwesomeIcon);

/**
 * Vuetify Config
 */
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconFont: "faSvg",
    value: {
      home: "fas fa-home",
      fileAlt: "fas fa-file-alt"
    }
  },
  theme: {
    themes: {
      light: {
        primary: "#142850",
        secondary: "#27496d",
        accent: "#00909e",
        background: "#dae1e7"
      }
    }
  }
});
