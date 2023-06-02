import { defineStore } from "pinia";
import axios, { AxiosResponse } from "axios";
import CardData from "../data/card";

export const CardsServices = defineStore({
  id: "Cards",
  state: () => ({
    data: null,
  }),
  actions: {
    async getAllCards() {
      try {
        const response = await axios.get("/cards");
        const data = response.data;

        this.data = data;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    },
    async postAllCards(cardData: CardData): Promise<AxiosResponse> {
      try {
        const response = await axios.post("/cardAdd", cardData);
        return response;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    },
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
    },
    async deleteCard(id: number): Promise<AxiosResponse> {
      try {
        const response = await axios.delete(`/cardDelete/${id}`);
        return response;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    },
  },
});
