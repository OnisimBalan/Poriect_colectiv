import Vue from "vue";
import Component from "vue-class-component";
import MainTable from "./main-table.component";
import { Prop } from "vue-property-decorator";

@Component({
  components: {
    MainTable,
  },
})
export default class Entry extends Vue {
  @Prop()
  private toggleTaskVision!: () => false;

  private startTask() {} //send task id to back

  private stopTask() {} //send task id to back
}
