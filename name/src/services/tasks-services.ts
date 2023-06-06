import axios, { AxiosResponse } from "axios";
import TaskData from "../data/task";
import ITaskData from "../data/task";

export default class TasksServices {
  getAllTasks() {
    return new Promise<AxiosResponse<ITaskData[]>>((resolve, reject) => {
      axios
        .get<TaskData[]>(`/tasks`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  public createTasks(entity: TaskData): Promise<TaskData> {
    return new Promise<ITaskData>((resolve, reject) => {
      axios
        .post("/taskAdd", entity)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async editTask(taskId: string, taskData: TaskData): Promise<AxiosResponse> {
    try {
      const response = await axios.put(`/tasksEdit/${taskId}`, taskData);
      return response;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async startTask(taskId: string, taskData: TaskData): Promise<AxiosResponse> {
    try {
      const response = await axios.post(`/tasksEdit/${taskId}`, taskData);
      return response;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  private async deleteTask(id: number): Promise<AxiosResponse> {
    try {
      const response = await axios.delete(`/taskDelete/${id}`);
      return response;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}
