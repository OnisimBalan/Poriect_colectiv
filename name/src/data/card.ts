export default interface CardData {
  cardId: number;
  cardNumber: number;
  cardName: string;
  cardOwner: string;
  number: number;
  expirationDate: string;
  cvv: string;
  userID: string;
}

class Card implements CardData {
  cardId: number;
  cardNumber: number;
  cardName: string;
  cardOwner: string;
  number: number;
  expirationDate: string;
  cvv: string;
  userID: string;

  constructor(
    cardId: number,
    cardNumber: number,
    cardName: string,
    cardOwner: string,
    number: number,
    expirationDate: string,
    cvv: string;
    userID: string;
  ) {
    this.cardId = cardId;
    this.cardNumber = cardNumber;
    this.cardName = cardName;
    this.cardOwner = cardOwner;
    this.number = number;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
    this.userID = userID;
  }
}
