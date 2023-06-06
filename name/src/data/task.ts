export default interface ITaskData {
  taskName: string;
  shops: string[];
  categorys: string[];
  prodcutNames: string[];
  sizes: number[];
  colors: string[];
  profiles: string[];
  cards: string[];
}

export class Task implements ITaskData {
  taskName: string;
  shops: string[];
  categorys: string[];
  prodcutNames: string[];
  sizes: number[];
  colors: string[];
  profiles: string[];
  cards: string[];

  constructor(
    taskName: string,
    shops: string[],
    categorys: string[],
    prodcutNames: string[],
    sizes: number[],
    colors: string[],
    profiles: string[],
    cards: string[]
  ) {
    this.taskName = taskName;
    this.shops = shops;
    this.categorys = categorys;
    this.prodcutNames = prodcutNames;
    this.sizes = sizes;
    this.colors = colors;
    this.profiles = profiles;
    this.cards = cards;
  }
}
