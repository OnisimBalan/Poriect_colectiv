import ITaskData, { Task } from "@/data/task";
import TasksServices from "@/services/tasks-services";
import Vue from "vue";
import Component from "vue-class-component";
import Card from "../data/card";
import Profile from "@/data/profile";
@Component
export default class MainTable extends Vue {
  private taskName = "";
  private shop = "";
  private category = "";
  private prodcutName = "";
  private size = "";
  private color = "";
  private status = "";
  private cards: Card[] = [];
  private profiles: Profile[] = [];

  private tasksServices = new TasksServices();

  private createTask() {
    let task: Task = new Task(
      this.taskName,
      this.shop,
      this.category,
      this.prodcutName,
      this.size,
      this.color,
      this.status
    );

    if (!task) {
      return;
    }

    this.tasksServices
      .createTask(task)
      .then((result) => {
        task = result;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
