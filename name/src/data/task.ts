export default interface ITaskData {
  id: string;
  userID: string;
  taskName: string;
  websiteId: string;
  shipmentId: string;
  productId: string;
  size: number;
  color: string;
  status: string;
}

export class Task implements ITaskData {
  id: string;
  userID: string;
  taskName: string;
  websiteId: string;
  shipmentId: string;
  productId: string;
  size: number;
  color: string;
  status: string;

  constructor(
    id: string,
    userID: string,
    taskName: string,
    websiteId: string,
    shipmentId: string,
    productId: string,
    size: number,
    color: string,
    status: string
  ) {
    this.id = id;
    this.userID = userID;
    this.taskName = taskName;
    this.websiteId = websiteId;
    this.shipmentId = shipmentId;
    this.productId = productId;
    this.size = size;
    this.color = color;
    this.status = status;
  }
}
