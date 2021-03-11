import Vue from "vue";
import Vuetify from "vuetify/lib";

/**
 * Font Awesome Config
 */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faBriefcase,
  faCode,
  faFileAlt,
  faFilePdf,
  faFileWord,
  faGlobe,
  faGraduationCap,
  faHome,
  faLink,
  faMobile,
  faMusic,
  faPlus,
  faQuoteLeft,
  faShareAlt,
  faTools,
  faUser,
  faVolumeUp
} from "@fortawesome/free-solid-svg-icons";

library.add(faBriefcase);
library.add(faCode);
library.add(faFileAlt);
library.add(faFilePdf);
library.add(faFileWord);
library.add(faGlobe);
library.add(faGraduationCap);
library.add(faHome);
library.add(faLink);
library.add(faMobile);
library.add(faMusic);
library.add(faPlus);
library.add(faQuoteLeft);
library.add(faShareAlt);
library.add(faTools);
library.add(faUser);
library.add(faVolumeUp);

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
