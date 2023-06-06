import ITaskData, { Task } from "@/data/task";
import TasksServices from "@/services/tasks-services";
import Vue from "vue";
import Component from "vue-class-component";
import { Inject } from "vue-property-decorator";

@Component
export default class MainTable extends Vue {
  private taskName = "";
  private shops = [];
  private categorys = [];
  private prodcutNames = [];
  private sizes = [];
  private colors = [];
  private profiles = [];
  private cards = [];

  @Inject("tasksServices") private tasksServices!: TasksServices;

  private createTask() {
    const task: Task = new Task(
      this.taskName,
      this.shops,
      this.categorys,
      this.prodcutNames,
      this.sizes,
      this.colors,
      this.profiles,
      this.cards
    );

    if (!task) {
      return;
    }

    this.tasksServices.createTasks(task);
  }
}
