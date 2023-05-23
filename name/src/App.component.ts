import Vue from "vue";
import Component from "vue-class-component";
import Dashboard from "./components/bashboard-app.vue";
import NavPanel from "./components/nav-panel.vue";
import Billing from "./components/billing-data.vue";
import Profile from "./components/profiles-data.vue";
import MainTable from "./components/main-table.vue";

@Component({
  components: {
    Dashboard,
    NavPanel,
    Billing,
    Profile,
    MainTable,
  },
})
export default class App extends Vue {
  private billingVisible = true;
  private profileVisible = false;
  private homeVisible = false;
  private taskVisible = false;
  private dialog = false;

  private toggleBillingVision() {
    if (this.profileVisible) this.profileVisible = false;

    if (this.homeVisible) this.homeVisible = false;

    if (this.taskVisible) this.taskVisible = false;

    this.billingVisible = !this.billingVisible;
  }

  private toggleProfileVision() {
    if (this.billingVisible) this.billingVisible = false;

    if (this.homeVisible) this.homeVisible = false;

    if (this.taskVisible) this.taskVisible = false;

    this.profileVisible = !this.profileVisible;
  }

  private toggleHomeVision() {
    if (this.billingVisible) this.billingVisible = false;

    if (this.profileVisible) this.profileVisible = false;

    if (this.taskVisible) this.taskVisible = false;

    this.homeVisible = !this.homeVisible;
  }

  private toggleTaskVision() {
    if (this.billingVisible) this.billingVisible = false;

    if (this.profileVisible) this.profileVisible = false;

    if (this.homeVisible) this.homeVisible = false;

    this.taskVisible = !this.taskVisible;
  }
}
