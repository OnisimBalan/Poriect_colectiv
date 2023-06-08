export default interface ITaskData {
  taskName: string;
  shop: string;
  category: string;
  prodcutName: string;
  size: string;
  color: string;
  profile: string;
  card: string;
}

export class Task implements ITaskData {
  taskName: string;
  shop: string;
  category: string;
  prodcutName: string;
  size: string;
  color: string;
  profile: string;
  card: string;

  constructor(
    taskName: string,
    shop: string,
    category: string,
    prodcutName: string,
    size: string,
    color: string,
    profile: string,
    card: string
  ) {
    this.taskName = taskName;
    this.shop = shop;
    this.category = category;
    this.prodcutName = prodcutName;
    this.size = size;
    this.color = color;
    this.profile = profile;
    this.card = card;
  }
}
