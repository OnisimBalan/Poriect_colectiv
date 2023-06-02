import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#009fe3",
        secondary: "#93d5f6",
        corporate: "#005495",
      },
    },
  },
});
