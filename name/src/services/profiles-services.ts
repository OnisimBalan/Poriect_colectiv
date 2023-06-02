import { defineStore } from "pinia";
import axios, { AxiosResponse } from "axios";
import ProfileData from "../data/profile";

export const ProfilesServices = defineStore({
  id: "Profiles",
  state: () => ({
    data: null,
  }),
  actions: {
    async getAllProfiles() {
      try {
        const response = await axios.get("/profiles");
        const data = response.data;

        this.data = data;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    },
    async postAllProfiles(profileData: ProfileData): Promise<AxiosResponse> {
      try {
        const response = await axios.post("/profileAdd", profileData);
        return response;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    },

    async editProfile(
      profileId: number,
      updatedData: ProfileData
    ): Promise<AxiosResponse> {
      try {
        const response = await axios.put(`/cardEdit/${profileId}`, updatedData);
        return response;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    },
    async deleteProfile(id: number): Promise<AxiosResponse> {
      try {
        const response = await axios.delete(`/profileDelete/${id}`);
        return response;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    },
  },
});
