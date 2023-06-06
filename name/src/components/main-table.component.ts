import ITaskData, { Task } from "@/data/task";
import { TasksServices } from "@/services/tasks-services";
import Vue from "vue";
import Component from "vue-class-component";

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
  private tasksServices = TasksServices();

  private createTask() {
    const task: Task = new Task("", "", "", "", "", "", 0, "", "");

    this.tasksServices.createTasks(task);
  }
}
