import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
//import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
//import { faIconName } from '@fortawesome/free-solid-svg-icons';

//library.add(faIconName);

Vue.config.productionTip = false;
Vue.use(Vuetify);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
