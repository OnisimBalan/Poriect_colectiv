import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
//import { provide } from "@vue/composition-api";
//import VueCompositionAPI from "@vue/composition-api";
//import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//import { library } from "@fortawesome/fontawesome-svg-core";
import ProfilesServices from "./services/profiles-services";
import TasksServices from "./services/tasks-services";
//import { faIconName } from '@fortawesome/free-solid-svg-icons';
//library.add(faIconName);
//provide("profilesServices", ProfilesServices);
//provide("tasksServices", TasksServices);
//Vue.use(VueCompositionAPI);

Vue.config.productionTip = false;
Vue.use(Vuetify);
new Vue({
  render: (h) => h(App),
  provide: {
    profilesServices: () => new ProfilesServices(),
    tasksServices: () => new TasksServices(),
  },
}).$mount("#app");
