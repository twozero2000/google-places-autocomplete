import axios from "axios";
import {
  IFavouritePlaceReq,
  IFavouritePlaceResp,
  IPostFavouritePlaceOutput,
} from "./interfaces";

export const postFavouritePlace = async (
  req: IFavouritePlaceReq
): Promise<IPostFavouritePlaceOutput> => {
  try {
    const response = await axios.post(
      `http://localhost:8080/v1/places/favourite`,
      req
    );
    const data = response.data;
    if (data) return { data: data as IFavouritePlaceResp, success: true };
    else
      return {
        errorMessage: "Technical exception. Please contact service owner.",
        success: false,
      };
  } catch (error) {
    console.log(error);
    return {
      errorMessage: "Technical exception. Please contact service owner.",
      success: false,
    };
  }
};
