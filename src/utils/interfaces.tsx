export interface IData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IPostFavouritePlaceOutput {
  success: boolean;
  data?: IFavouritePlaceResp | null;
  errorMessage?: string | null;
}

export interface IFavouritePlaceReq {
  placeId: string;
  address: string;
  latitude: number;
  longitude: number;
}

export interface IFavouritePlaceResp {
  id: string;
  placeId: string;
  address: string;
  latitude: number;
  longitude: number;
}

// redux
export interface IDataState {
  data: IFavouritePlaceResp | null;
  loading: boolean;
  error: string | null;
}
