export default interface ITaskData {
  taskName: string;
  shop: string;
  category: string;
  prodcutName: string;
  size: string;
  color: string;
  status: string;
}

export class Task implements ITaskData {
  taskName: string;
  shop: string;
  category: string;
  prodcutName: string;
  size: string;
  color: string;
  status: string;

  constructor(
    taskName: string,
    shop: string,
    category: string,
    prodcutName: string,
    size: string,
    color: string,
    status: string
  ) {
    this.taskName = taskName;
    this.shop = shop;
    this.category = category;
    this.prodcutName = prodcutName;
    this.size = size;
    this.color = color;
    this.status = status;
  }
}
