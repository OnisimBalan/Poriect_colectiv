import Vue from "vue";
import Component from "vue-class-component";
import MainTable from "./main-table.component";
import { Prop } from "vue-property-decorator";
import { defineComponent } from "vue";
import { VDataTable } from "vuetify/lib/components";

@Component({
  components: {
    MainTable,
  },
})
export default class Dashboard extends Vue {
  @Prop()
  private toggleTaskVision!: () => false;
}
