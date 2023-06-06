import axios, { AxiosResponse } from "axios";
import ProfileData, { IProfileData } from "../data/profile";

const baseApiUrl = "api/";

export default class ProfilesServices {
  public getAllProfiles() {
    return new Promise<AxiosResponse<ProfileData[]>>((resolve, reject) => {
      axios
        .get<ProfileData[]>(`/profiles`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  public postProfile(entity: ProfileData): Promise<IProfileData> {
    return new Promise<IProfileData>((resolve, reject) => {
      axios
        .post("/profileAdd", entity)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async editProfile(
    profileId: number,
    updatedData: ProfileData
  ): Promise<AxiosResponse> {
    try {
      const response = await axios.put(
        `/profileEdit/${profileId}`,
        updatedData
      );
      return response;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async deleteProfile(id: number): Promise<AxiosResponse> {
    try {
      const response = await axios.delete(`/profileDelete/${id}`);
      return response;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}
