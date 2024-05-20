export interface IData {
   userId: number,
   id: number,
   title: string,
   completed: boolean
}

export interface IPostFavouritePlaceOutput {
   success: boolean,
   data?: IFavouritePlaceResp | null,
   errorMessage?: string | null
}

export interface IFavouritePlaceReq {
   placeId: string
   address: string
   lat: number
   lng: number
}

export interface IFavouritePlaceResp {
   id: string
   placeId: string
   address: string
   lat: number
   lng: number
}