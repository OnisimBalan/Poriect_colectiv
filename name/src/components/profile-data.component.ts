import Vue from "vue";
import Component from "vue-class-component";
import ShowProfiles from "./show-profiles.vue";
import Profile from "@/data/profile";
import { ProfilesServices } from "@/services/profiles-services";
@Component({
  components: {
    ShowProfiles,
  },
})
export default class Profiles extends Vue {
  private showProfiles = false;
  private showData = true;

  private firstName = "";
  private lastName = "";
  private email = "";
  private phoneNumber = "";
  private street = "";
  private zipCode = "";
  private city = "";
  private country = "";

  private profileServices = ProfilesServices();

  private toggleViews() {
    this.showProfiles = !this.showProfiles;
    this.showData = !this.showData;
  }

  private addProfiles() {
    const profile: Profile = new Profile(
      1,
      "",
      " ",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    );

    this.profileServices.postProfile(profile);
  }
}
