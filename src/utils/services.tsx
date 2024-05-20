import axios from "axios";
import { IFavouritePlaceReq, IFavouritePlaceResp, IPostFavouritePlaceOutput } from "./interfaces";

export const postFavouritePlace = async (req: IFavouritePlaceReq): Promise<IPostFavouritePlaceOutput> => {
   try {
       const response = await axios.post(`https://localhost:8080/map/favourite`, req);
       const data = response.data
       if (data)
           return { data:data as IFavouritePlaceResp, success: true };
       else
           return { errorMessage: 'There was an error', success: false };
   } catch (error) {
       console.log(error);
       return { errorMessage: 'There was an error', success: false };
   }
};