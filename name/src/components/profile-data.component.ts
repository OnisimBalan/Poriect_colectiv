import Vue from "vue";
import Component from "vue-class-component";
import ShowProfiles from "./show-profiles.vue";
import Profile from "@/data/profile";
import ProfilesServices from "@/services/profiles-services";
import { Inject } from "vue-property-decorator";

@Component({
  components: {
    ShowProfiles,
  },
})
export default class Profiles extends Vue {
  private showProfiles = false;
  private showData = true;
  private profilesServices = new ProfilesServices();

  //@Inject("profileServices") private profileServices!: ProfilesServices;

  private shipmentName = "";
  private name = "";
  private surName = "";
  private adress = "";
  private adressExtend = "";
  private city = "";
  private country = "";
  private county = "";
  private zipCode = "";
  private email = "";
  private phoneNumber = "";

  private toggleViews() {
    this.showProfiles = !this.showProfiles;
    this.showData = !this.showData;
  }

  private addProfiles() {
    const profile: Profile = new Profile(
      this.shipmentName,
      this.name,
      this.surName,
      this.adress,
      this.adressExtend,
      this.city,
      this.county,
      this.country,
      this.zipCode,
      this.email,
      this.phoneNumber
    );

    this.profilesServices
      .postProfile(profile)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
