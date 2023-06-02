export default interface ProfileData {
  Id: number;
  Name: string;
  number: number;
}

class Card implements ProfileData {
  Id: number;
  Name: string;
  number: number;

  constructor(Id: number, Name: string, number: number) {
    this.Id = Id;
    this.Name = Name;
    this.number = number;
  }
}
