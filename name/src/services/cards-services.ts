import axios, { AxiosResponse } from "axios";
import CardData from "../data/card";

export default class CardsServices {
  getAllCards() {
    return new Promise<AxiosResponse<CardData[]>>((resolve, reject) => {
      axios
        .get<CardData[]>(`/cards`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async postAllCards(cardData: CardData): Promise<AxiosResponse> {
    try {
      const response = await axios.post("/cardAdd", cardData);
      return response;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
  async editCard(
    cardId: number,
    updatedData: CardData
  ): Promise<AxiosResponse> {
    try {
      const response = await axios.put(`/cardEdit/${cardId}`, updatedData);
      return response;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
  async deleteCard(id: number): Promise<AxiosResponse> {
    try {
      const response = await axios.delete(`/cardDelete/${id}`);
      return response;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}
