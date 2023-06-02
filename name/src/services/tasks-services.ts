import { defineStore } from "pinia";
import axios, { AxiosResponse } from "axios";
import TaskData from "../data/task";

export const TasksServices = defineStore({
  id: "Tasks",
  state: () => ({
    data: null,
  }),
  actions: {
    async getAllTasks() {
      try {
        const response = await axios.get("/tasks");
        const data = response.data;

        this.data = data;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    },
    async postAllTasks(taskData: TaskData): Promise<AxiosResponse> {
      try {
        const response = await axios.post("/taskAdd", taskData);
        return response;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    },
    async editTask(taskId: string, taskData: TaskData): Promise<AxiosResponse> {
      try {
        const response = await axios.put(`/tasksEdit/${taskId}`, taskData);
        return response;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    },

    async startTask(
      taskId: string,
      taskData: TaskData
    ): Promise<AxiosResponse> {
      try {
        const response = await axios.post(`/tasksEdit/${taskId}`, taskData);
        return response;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    },

    async deleteTask(id: number): Promise<AxiosResponse> {
      try {
        const response = await axios.delete(`/taskDelete/${id}`);
        return response;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    },
  },
});
